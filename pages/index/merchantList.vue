<script setup lang="ts">
  const divisionInfo = useDivisionInfo()
</script>

<template>
  <div class="w-screen flex flex-col gap-0">
    <div class="px-4 py-2 sticky top-0 bg-stone-300 z-30 shadow flex gap-2">
      <h1 class="text-lg text-gray-800 font-raleway">
        {{ divisionInfo.detail.name }}
      </h1>

      <span class="bg-stone-800/20 text-gray-800 text-xs px-2 py-1 rounded-sm my-auto flex gap-1">
        {{ divisionInfo.detail.state }}
        <IconsLocked v-if="divisionInfo.detail.state == 'DISABLED'" />
        <IconsLink v-else-if="divisionInfo.detail.state == 'CONNECTOR_TEST'" />
      </span>
    </div>

    <NuxtPage />
  </div>
</template>
