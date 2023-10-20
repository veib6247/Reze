import { Title } from '#build/components';
<script setup lang="ts">
  interface Props {
    title: string
    itemData: string | undefined
  }

  defineProps<Props>()
</script>

<template>
  <div class="text-sm text-stone-300">
    <span class="block font-raleway text-xs text-stone-300/70">
      {{ title }}
    </span>
    <span class="font-mono" v-if="itemData">
      {{ itemData }}
    </span>
    <span v-else> - </span>
  </div>
</template>
