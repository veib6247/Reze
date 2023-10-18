<script setup lang="ts">
  import { ChannelInfo } from '~/types'

  defineProps<{
    channelInfo: ChannelInfo
  }>()

  const showChannelBody = ref(false)
  const accessTokenInputType = ref('password')

  const toggleAccessTokenInputType = (event: Event) => {
    event.preventDefault()
    accessTokenInputType.value =
      accessTokenInputType.value == 'password' ? 'text' : 'password'
  }
</script>

<template>
  <div
    class="flex h-fit w-full flex-col gap-0 border border-stone-300/60 bg-stone-50/5 backdrop-blur-sm">
    <!-- card title -->
    <div
      class="flex h-8 cursor-pointer gap-2 p-2 font-raleway hover:bg-stone-300/20"
      :class="{ 'bg-stone-300/30': showChannelBody }"
      @click="showChannelBody = !showChannelBody">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4 text-gray-100">
        <path d="M4 5h12v7H4V5z" />
        <path
          fill-rule="evenodd"
          d="M1 3.5A1.5 1.5 0 012.5 2h15A1.5 1.5 0 0119 3.5v10a1.5 1.5 0 01-1.5 1.5H12v1.5h3.25a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5H8V15H2.5A1.5 1.5 0 011 13.5v-10zm16.5 0h-15v10h15v-10z"
          clip-rule="evenodd" />
      </svg>

      <span class="truncate text-xs text-gray-100">
        {{ channelInfo.name }}
      </span>

      <span class="flex w-fit gap-1 px-1 text-xs text-stone-300/40">
        {{ channelInfo.state }}
      </span>
    </div>

    <!-- card body -->
    <div class="flex flex-col gap-4 overflow-y-auto p-2" v-if="showChannelBody">
      <ChannelDisplayItem title="Channel Name" :itemData="channelInfo.name" />
      <ChannelDisplayItem
        title="Description"
        :itemData="channelInfo.description" />
      <ChannelDisplayItem title="Entity ID" :itemData="channelInfo.channel" />

      <div class="text-sm text-stone-300">
        <span class="block font-raleway text-xs text-stone-300/70"
          >Access Token</span
        >
        <form class="flex w-full gap-2">
          <input
            :type="accessTokenInputType"
            autocomplete="off"
            class="border-none bg-transparent px-0 py-1 font-mono text-sm text-stone-300 focus:ring-0"
            :size="channelInfo.accessToken.length"
            v-model="channelInfo.accessToken"
            readonly />

          <button class="active:scale-95" @click="toggleAccessTokenInputType">
            <IconsEye v-if="accessTokenInputType == 'password'" />
            <IconsEyeSlashed v-else />
          </button>
        </form>
      </div>

      <ChannelDisplayItem
        title="Customer ID"
        :itemData="channelInfo.customerId" />
      <ChannelDisplayItem
        title="Login (Deprecated)"
        :itemData="channelInfo.login" />
      <ChannelDisplayItem
        title="Password (Deprecated)"
        :itemData="channelInfo.pwd" />
      <ChannelDisplayItem
        title="Secret (Deprecated)"
        :itemData="channelInfo.secret" />
      <ChannelDisplayItem
        title="Sender (Deprecated)"
        :itemData="channelInfo.sender" />
    </div>
  </div>
</template>
