<script setup lang="ts">
  const route = useRoute()
  const { pending: merchantDataPending, data: merchantData } = await useLazyFetch(`/api/getMerchant?divisionId=${route.params.divisionId}`)

  // console.info(merchantData.value)
</script>

<template>
  <div class="flex flex-col gap-0 overflow-auto">
    <div class="p-6 text-stone-300 font-raleway flex gap-2" v-if="merchantDataPending">
      <span>
        <IconsLoading />
      </span>
      <span>
        Loading...
      </span>
    </div>

    <div class="p-6 flex flex-wrap gap-2 " v-else>
      <TransitionGroup name="list">
        <MerchantDisplay v-for="merchant in merchantData" :key="merchant.id" :merchantName="merchant.name"
          :merchantId="merchant.id" :merchantState="merchant.state" :merchantDescription="merchant.description" />
      </TransitionGroup>
    </div>
  </div>
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