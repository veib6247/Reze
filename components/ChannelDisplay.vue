<script setup lang="ts">
  import { ChannelInfo } from '~/types'

  defineProps<{
    channelInfo: ChannelInfo
  }>()

  const showChannelBody = ref(false)
</script>

<template>
  <div class="backdrop-blur-sm bg-stone-50/5 w-full h-fit flex flex-col gap-0 border border-stone-300/60">

    <!-- card title -->
    <div class="h-8 p-2 font-raleway flex gap-2 cursor-pointer hover:bg-stone-300/20"
      :class="{ 'bg-stone-300/30': showChannelBody }" @click="showChannelBody = !showChannelBody">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-gray-100">
        <path d="M4 5h12v7H4V5z" />
        <path fill-rule="evenodd"
          d="M1 3.5A1.5 1.5 0 012.5 2h15A1.5 1.5 0 0119 3.5v10a1.5 1.5 0 01-1.5 1.5H12v1.5h3.25a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5H8V15H2.5A1.5 1.5 0 011 13.5v-10zm16.5 0h-15v10h15v-10z"
          clip-rule="evenodd" />
      </svg>

      <span class="text-gray-100 text-xs truncate">
        {{ channelInfo.name }}
      </span>

    </div>

    <!-- card body -->
    <div class="p-2 flex flex-col gap-4 overflow-y-auto" v-if="showChannelBody">
      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Channel Name</span>
        <span class="font-mono">
          {{ channelInfo.name }}
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Description</span>
        <span class="font-mono" v-if="channelInfo.description">
          {{ channelInfo.description }}
        </span>
        <span v-else>
          -
        </span>
      </div>

      <div class="text-stone-300 font-raleway text-sm flex flex-col gap-0">
        <span class="block text-stone-300/70 text-xs">State</span>
        <span class="w-fit bg-stone-300/40 text-stone-300/80 text-xs px-2 py-1 rounded-sm flex gap-1">
          {{ channelInfo.state }}
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Entity ID</span>
        <span class="font-mono">
          {{ channelInfo.channel }}
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Access Token</span>
        <span class="font-mono">
          <!-- {{ channelInfo.accessToken }} -->
          **********************************************
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Customer ID</span>
        <span class="font-mono" v-if="channelInfo.customerId">
          {{ channelInfo.customerId }}
        </span>
        <span v-else>
          -
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Login (Deprecated)</span>
        <span class="font-mono" v-if="channelInfo.login">
          {{ channelInfo.login }}
        </span>
        <span v-else>
          -
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Password (Deprecated)</span>
        <span class="font-mono" v-if="channelInfo.pwd">
          {{ channelInfo.pwd }}
        </span>
        <span v-else>
          -
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Secret (Deprecated)</span>
        <span class="font-mono" v-if="channelInfo.secret">
          {{ channelInfo.secret }}
        </span>
        <span v-else>
          -
        </span>
      </div>

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Sender (Deprecated)</span>
        <span class="font-mono" v-if="channelInfo.sender">
          {{ channelInfo.sender }}
        </span>
        <span v-else>
          -
        </span>
      </div>

    </div>
  </div>
</template>