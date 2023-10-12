<script setup lang="ts">
  import { useChannelModalStore } from '~/stores/rezeStore'

  type Merchant = {
    id: string;
    name: string;
    state: string;
    description: string;
  }

  /**
   * lazy load data fetching on load
   */
  const route = useRoute()
  const { pending: merchantDataPending, data: merchantData, error: merchantDataError } = await useLazyFetch(`/api/getMerchant?divisionId=${route.params.divisionId}`)

  /**
   * all modal params
   */
  const channelModal = useChannelModalStore()

  /**
   * all filtering
   */
  const filterQuery = ref('')
  const filteredArray: any = ref([])

  watch(filterQuery, (newVal, oldVal) => {
    if (filterQuery.value !== '') {
      setTimeout(() => {
        filteredArray.value = merchantData.value.filter((merchant: Merchant) => {
          if (merchant.name.includes(newVal))
            return merchant
        })
      }, 1000)
    } else {
      filteredArray.value = []
    }
  })
</script>

<template>
  <div class="flex flex-col gap-0 overflow-auto">
    <!-- search box -->
    <div class="px-6 pt-6">
      <div class="pl-3 backdrop-blur-sm bg-stone-50/5 border border-stone-300/60 flex gap-1">
        <span class="text-stone-300/70 font-raleway my-auto">Search</span>
        <input type="text" class="p-2 w-full bg-transparent text-stone-300 border-none focus:ring-0" spellcheck="false"
          v-model="filterQuery" />
      </div>
      <span class="text-stone-300/70 text-sm font-raleway" v-if="filterQuery && !filteredArray.length"> No Results
        Found</span>
    </div>

    <div class="p-6 text-stone-300 font-raleway flex gap-2" v-if="merchantDataPending">
      <span>
        <IconsLoading />
      </span>
      <span>
        Loading...
      </span>
    </div>

    <div class="p-6 flex flex-wrap gap-2 " v-else>
      <TransitionGroup name="list" v-if="!filteredArray.length">
        <MerchantDisplay v-for="merchant in merchantData" :key="merchant.id" :merchantName="merchant.name"
          :merchantId="merchant.id" :merchantState="merchant.state" :merchantDescription="merchant.description" />
      </TransitionGroup>

      <TransitionGroup name="list" v-else>
        <MerchantDisplay v-for="merchant in filteredArray" :key="merchant.id" :merchantName="merchant.name"
          :merchantId="merchant.id" :merchantState="merchant.state" :merchantDescription="merchant.description" />
      </TransitionGroup>
    </div>

    <div class="p-6 text-red-300 font-raleway flex gap-2" v-if="merchantDataError">
      <span>
        Error Loading Merchant Data
      </span>
    </div>

  </div>

  <!-- modal to display channel info -->
  <ModalChannelInfo v-if="channelModal.showModal" />
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>