
import { Title } from '#build/components';
<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true
    },

    itemData: {
      type: String,
      required: true
    },
  })
</script>

<template>
  <div class="text-stone-300 text-sm">
    <span class="block text-stone-300/70 font-raleway text-xs">{{ title }}</span>
    <span class="font-mono" v-if="itemData">
      {{ itemData }}
    </span>
    <span v-else>
      -
    </span>
  </div>
</template>