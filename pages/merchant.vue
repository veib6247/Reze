<script setup lang="ts">
  const merchantInfo = useMerchantInfo()
</script>

<template>
  <div class="w-full flex flex-col gap-0">
    <div class="h-16 px-4 py-2 sticky top-0 z-40 bg-stone-300 flex gap-4">

      <div class="w-full flex flex-col gap-0">
        <h1 class="text-xs text-gray-800/80 font-raleway">Merchant Name</h1>
        <span class="text-sm text-gray-800 font-mono">{{ merchantInfo.detail.name }}</span>
      </div>

      <div class="w-full flex flex-col gap-0">
        <h1 class="text-xs text-gray-800/80 font-raleway">Enity ID</h1>
        <span class="text-sm text-gray-800 font-mono">{{ merchantInfo.detail.id }}</span>
      </div>

      <div class="w-full flex flex-col gap-0">
        <h1 class="text-xs text-gray-800/80 font-raleway">State</h1>
        <span class="text-sm text-gray-800 font-mono">{{ merchantInfo.detail.state }}</span>
      </div>

      <div class="w-full flex flex-col gap-0">
        <h1 class="text-xs text-gray-800/80 font-raleway">Description</h1>
        <span class="text-sm text-gray-800 font-mono">{{ merchantInfo.detail.description }}</span>
      </div>

    </div>

    <NuxtPage />

  </div>
</template>