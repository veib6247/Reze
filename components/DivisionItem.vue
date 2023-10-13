<script setup lang="ts">
  const props = defineProps({
    divisionId: {
      type: String,
      required: true
    },

    divisionName: {
      type: String,
      required: true
    }
  })

  const divisionInfo = useDivisionInfo()

  const updateSelectedDivisionInfo = () => {
    divisionInfo.name = props.divisionName
  }
</script>

<template>
  <NuxtLink class="px-4 py-1 text-sm text-gray-300 font-raleway hover:bg-stone-300 hover:text-slate-900"
    exact-active-class="bg-stone-300 text-slate-900 hover:bg-stone-300" :to="`/merchantList/${divisionId}`"
    @click="updateSelectedDivisionInfo">
    <slot />
  </NuxtLink>
</template>