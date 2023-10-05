<script setup lang="ts">
  defineProps({
    divisionId: {
      type: String,
      required: true
    },

    divisionName: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <NuxtLink class="px-4 py-1 text-sm text-gray-300 font-raleway hover:bg-stone-400 hover:text-slate-900"
    exact-active-class="bg-stone-300 text-slate-900" :to="`/merchantList/${divisionId}?divisionName=${divisionName}`">
    <slot />
  </NuxtLink>
</template>