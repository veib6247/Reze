<script setup lang="ts">
  import { Merchant } from '~/types'

  const { data: divisionList, pending: divisionListPending } = await useLazyFetch('/api/getDivision')
  const selectedDivision = ref()
  const merchantData = ref()
  const merchantDataPending = ref()

  watch(selectedDivision, async (newDivision, oldDivisionId) => {
    navigateTo('/')

    merchantDataPending.value = true
    const { data: merchantList, pending } = await useFetch(`/api/getMerchant?divisionId=${newDivision.id}`)

    merchantData.value = merchantList.value
    merchantDataPending.value = pending.value
  })


  const merchantInfo = useMerchantInfo()
  const updateSelectedMerchant = (selectedMerchant: Merchant) => {
    merchantInfo.detail = selectedMerchant
  }
</script>

<template>
  <div class="w-72 shrink-0 backdrop-blur-sm bg-stone-50/5 flex flex-col border-r border-stone-400/60">

    <div class="h-16 px-4 py-2 sticky top-0 bg-stone-300 flex flex-col shrink-0">

      <h1 class="text-xs text-gray-800/80 font-raleway">Division</h1>

      <div class="text-xs text-gray-800 font-raleway animate-pulse" v-if="divisionListPending">
        Fetching divisions list...
      </div>

      <select class="bg-transparent p-0 text-sm font-raleway w-full border-none focus:ring-0" v-model="selectedDivision">
        <option :value="division"
          :class="{ 'text-red-500': division.state == 'DISABLED', 'text-blue-500': division.state == 'CONNECTOR_TEST' }"
          v-for="division in divisionList">
          {{ division.name }}
        </option>
      </select>

    </div>

    <div class="p-2 flex flex-col gap-1" v-if="merchantDataPending">
      <span class="w-full h-4 bg-stone-300/40  p-1 rounded-full animate-pulse">
      </span>
      <span class="w-full h-4 bg-stone-300/40  p-1 rounded-full animate-pulse">
      </span>
      <span class="w-full h-4 bg-stone-300/40  p-1 rounded-full animate-pulse">
      </span>
    </div>

    <div class="pb-6 flex flex-col gap-0 overflow-y-auto" v-if="merchantData && !merchantDataPending">

      <NuxtLink class="px-4 py-1 text-sm text-gray-300 font-raleway hover:bg-stone-500 hover:text-slate-100"
        exact-active-class="bg-stone-400 text-slate-900 hover:bg-stone-300" :to="`/merchant/${merchant.id}`"
        v-for="merchant in merchantData" @click="updateSelectedMerchant(merchant)">
        <span class="truncate">
          {{ merchant.name }}
        </span>
      </NuxtLink>

    </div>

  </div>
</template>