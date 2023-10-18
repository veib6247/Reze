<script setup lang="ts">
  const route = useRoute()
  const {
    data: channelsList,
    pending,
    error,
  } = await useLazyFetch(
    `/api/getChannel?merchantId=${route.params.merchantId}`,
  )
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col gap-1 py-4" v-if="pending">
      <span class="h-5 w-full animate-pulse bg-stone-300/40 p-1"> </span>
      <span class="h-5 w-full animate-pulse bg-stone-300/40 p-1"> </span>
      <span class="h-5 w-full animate-pulse bg-stone-300/40 p-1"> </span>
    </div>

    <div v-else-if="error">
      <span class="text-red-300"> Error loading channels list </span>
    </div>

    <div class="flex flex-col gap-1 py-4" v-else>
      <span
        class="font-raleway text-xs text-gray-100/40"
        v-if="channelsList && channelsList.length">
        Channels
      </span>
      <ChannelDisplay
        v-for="channel in channelsList"
        :id="channel.channel"
        :channel-info="channel" />
    </div>
  </div>
</template>
