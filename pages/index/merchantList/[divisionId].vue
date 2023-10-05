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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 animate-spin">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </span>
      <span>
        Loading...
      </span>
    </div>

    <div class="p-6 flex flex-wrap gap-2 overflow-auto" v-else>
      <MerchantDisplay v-for="merchant in merchantData" :merchantName="merchant.name" :merchantId="merchant.id"
        :merchantState="merchant.state" :merchantDescription="merchant.description" />
    </div>
  </div>
</template>