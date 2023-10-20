<script setup lang="ts">
  import { DivisionInfo, MerchantData, Merchant } from '~/types'

  const { data: divisionList, pending: divisionListPending } =
    await useLazyFetch('/api/getDivision')
  const selectedDivision = ref<DivisionInfo>(divisionList.value[0])
  const merchantData = ref<MerchantData>()
  const merchantDataPending = ref()

  // fetch merchant list on the initial selected division
  const { data, pending } = await useLazyFetch(
    `/api/getMerchant?divisionId=${selectedDivision.value.id}`,
  )

  merchantData.value = await data.value
  merchantDataPending.value = pending.value

  /**
   * fetch merchant data when selectedDivision change
   */
  watch(selectedDivision, async (newDivision) => {
    navigateTo('/')

    merchantDataPending.value = true
    const { data, pending } = await useFetch(
      `/api/getMerchant?divisionId=${newDivision.id}`,
    )

    merchantData.value = data.value
    merchantDataPending.value = pending.value
  })

  /**
   * push selected merchant data to store
   */
  const merchantInfo = useMerchantInfo()

  const updateSelectedMerchant = (selectedMerchant: Merchant) => {
    merchantInfo.detail = selectedMerchant
  }
</script>

<template>
  <div
    class="flex w-72 shrink-0 flex-col border-r border-stone-400/60 bg-stone-50/5 backdrop-blur-sm">
    <div
      class="sticky top-0 flex h-14 shrink-0 flex-col bg-stone-300 px-4 py-2">
      <label for="division_list" class="font-raleway text-xs text-gray-800/80">
        Division
        <span class="text-gray-800/40"> - {{ selectedDivision.state }}</span>
      </label>

      <div
        class="animate-pulse font-raleway text-xs text-gray-800"
        v-if="divisionListPending">
        Fetching divisions list...
      </div>

      <select
        id="division_list"
        class="w-full border-none bg-transparent p-0 font-raleway text-sm focus:ring-0"
        v-model="selectedDivision">
        <option
          :value="division"
          :class="{
            'text-red-500': division.state == 'DISABLED',
            'text-blue-500': division.state == 'CONNECTOR_TEST',
          }"
          v-for="division in divisionList">
          {{ division.name }}
        </option>
      </select>
    </div>

    <div class="flex flex-col gap-1 p-2" v-if="merchantDataPending">
      <span class="h-4 w-full animate-pulse bg-stone-300/40 p-1"> </span>
      <span class="h-4 w-full animate-pulse bg-stone-300/40 p-1"> </span>
      <span class="h-4 w-full animate-pulse bg-stone-300/40 p-1"> </span>
    </div>

    <div
      class="flex flex-col gap-0 overflow-y-auto py-4"
      v-if="merchantData && !merchantDataPending">
      <span
        class="px-4 font-raleway text-xs text-gray-100/40"
        v-if="merchantData.length">
        Merchants
      </span>

      <NuxtLink
        class="flex gap-2 px-4 py-1 font-raleway text-sm text-gray-300 hover:bg-stone-300/30 hover:text-slate-100"
        exact-active-class="bg-stone-300/30 text-slate-100 hover:bg-stone-300"
        :to="`/merchant/${merchant.id}`"
        v-for="merchant in merchantData"
        @click="updateSelectedMerchant(merchant)">
        <span class="truncate">
          {{ merchant.name }}
        </span>
        <span class="flex w-fit gap-1 p-1 text-xs text-stone-300/40">
          {{ merchant.state }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
