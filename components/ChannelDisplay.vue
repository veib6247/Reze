<script setup lang="ts">
  import { ChannelInfo } from '~/types'

  defineProps<{
    channelInfo: ChannelInfo
  }>()

  const showChannelBody = ref(false)
  const accessTokenInputType = ref('password')

  const toggleAccessTokenInputType = (event: Event) => {
    event.preventDefault()
    accessTokenInputType.value = accessTokenInputType.value == 'password' ? 'text' : 'password'
  }
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

      <span class="w-fit bg-stone-300/40 text-stone-300/80 text-xs px-1 rounded-sm flex gap-1">
        {{ channelInfo.state }}
      </span>

    </div>

    <!-- card body -->
    <div class="p-2 flex flex-col gap-4 overflow-y-auto" v-if="showChannelBody">
      <ChannelDisplayItem title="Channel Name" :itemData="channelInfo.name" />
      <ChannelDisplayItem title="Description" :itemData="channelInfo.description" />
      <ChannelDisplayItem title="Entity ID" :itemData="channelInfo.channel" />

      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 font-raleway text-xs">Access Token</span>
        <form class="w-full flex gap-2">

          <input :type="accessTokenInputType" autocomplete="off"
            class="px-0 py-1 text-sm font-mono text-stone-300 bg-transparent border-none focus:ring-0"
            :size="channelInfo.accessToken.length" v-model="channelInfo.accessToken" readonly />

          <button class="active:scale-95" @click="toggleAccessTokenInputType">
            <IconsEye v-if="accessTokenInputType == 'password'" />
            <IconsEyeSlashed v-else />
          </button>

        </form>
      </div>

      <ChannelDisplayItem title="Customer ID" :itemData="channelInfo.customerId" />
      <ChannelDisplayItem title="Login (Deprecated)" :itemData="channelInfo.login" />
      <ChannelDisplayItem title="Password (Deprecated)" :itemData="channelInfo.pwd" />
      <ChannelDisplayItem title="Secret (Deprecated)" :itemData="channelInfo.secret" />
      <ChannelDisplayItem title="Sender (Deprecated)" :itemData="channelInfo.sender" />

    </div>
  </div>
</template>