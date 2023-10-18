import { Title } from '#build/components';
<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },

    itemData: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="text-sm text-stone-300">
    <span class="block font-raleway text-xs text-stone-300/70">{{
      title
    }}</span>
    <span class="font-mono" v-if="itemData">
      {{ itemData }}
    </span>
    <span v-else> - </span>
  </div>
</template>
