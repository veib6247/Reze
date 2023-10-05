<script setup lang="ts">
  defineProps({
    merchantName: {
      type: String,
      required: true
    },

    merchantId: {
      type: String,
      required: true
    },

    merchantState: {
      type: String,
      required: true
    },

    merchantDescription: {
      type: String,
      required: false
    }
  })
</script>

<template>
  <div class="backdrop-opacity-5 bg-stone-50/5 w-80 h-96 flex flex-col gap-0 border border-stone-300/60">
    <h1 class="font-raleway bg-stone-300 p-2 truncate">
      <span class="text-gray-800">
        {{ merchantName.toUpperCase() }}
      </span>
    </h1>

    <div class="p-2 flex flex-col gap-2">

      <div class="text-stone-300 font-mono text-sm">
        <span class="block text-stone-300/70 text-xs">ID</span>
        {{ merchantId }}
      </div>

      <div class="text-stone-300 font-raleway text-sm flex flex-col gap-0">
        <span class="block text-stone-300/70 text-xs">State</span>
        <div>
          <span class="bg-stone-300/40 text-stone-300/80 text-xs px-2 py-1 rounded-sm">
            {{ merchantState }}
          </span>
        </div>
      </div>

      <div class="text-stone-300 font-raleway text-sm">
        <span class="block text-stone-300/70 text-xs">Full Merchant Name</span>
        {{ merchantName }}
      </div>

      <div class="text-stone-300 font-raleway text-sm" v-if="merchantDescription">
        <span class="block text-stone-300/70 text-xs">Description</span>
        <p class="text-stone-300 font-raleway text-sm">
          {{ merchantDescription }}
        </p>
      </div>

    </div>
  </div>
</template>