<script setup lang="ts">
  const merchantInfo = useMerchantInfo()
</script>

<template>
  <div class="flex h-screen w-full flex-col gap-0">
    <div
      class="sticky top-0 z-40 flex h-14 shrink-0 gap-4 bg-stone-300 px-4 py-2">
      <div class="flex w-full flex-col gap-0">
        <h1 class="font-raleway text-xs text-gray-800/80">Merchant Name</h1>
        <span class="font-mono text-sm text-gray-800">
          {{ merchantInfo.detail.name }}
        </span>
      </div>

      <div class="flex w-full flex-col gap-0">
        <h1 class="font-raleway text-xs text-gray-800/80">Enity ID</h1>
        <span class="font-mono text-sm text-gray-800">
          {{ merchantInfo.detail.id }}
        </span>
      </div>

      <div class="flex w-full flex-col gap-0">
        <h1 class="font-raleway text-xs text-gray-800/80">State</h1>
        <span class="font-mono text-sm text-gray-800">
          {{ merchantInfo.detail.state }}
        </span>
      </div>

      <div class="flex w-full flex-col gap-0">
        <h1 class="font-raleway text-xs text-gray-800/80">Description</h1>
        <span class="font-mono text-sm text-gray-800">
          {{ merchantInfo.detail.description }}
        </span>
      </div>
    </div>

    <div class="overflow-auto px-4">
      <NuxtPage />
    </div>
  </div>
</template>
