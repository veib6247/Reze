<script setup lang="ts">
  const route = useRoute()
  const { pending, data: merchantData } = await useLazyFetch(`/api/getMerchant?divisionId=${route.params.divisionId}`)

  // console.info(merchantData.value)
</script>

<template>
  <div class="w-screen flex flex-col gap-0">
    <div class="px-4 py-2 sticky top-0 bg-stone-300">
      <h1 class="text-lg text-gray-800 font-raleway">{{ $route.query.divisionName }}</h1>
    </div>

    <div class="p-6 text-stone-300 font-raleway flex gap-2" v-if="pending">
      <span>
        <IconsLoading />
      </span>
      <span>
        Loading
      </span>
    </div>

    <div class="p-6 flex flex-wrap gap-2 overflow-auto" v-else>
      <MerchantDisplay v-for="merchant in merchantData" :merchantName="merchant.name" :merchantId="merchant.id"
        :merchantState="merchant.state" :merchantDescription="merchant.description" />
    </div>
  </div>
</template>