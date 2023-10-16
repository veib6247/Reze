<script setup lang="ts">
  const route = useRoute()
  const { data: channelsList, pending, error } = await useLazyFetch(`/api/getChannel?merchantId=${route.params.merchantId}`)



</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex flex-col gap-1" v-if="pending">
      <span class="w-full h-5 bg-stone-300/40  p-1 animate-pulse">
      </span>
      <span class="w-full h-5 bg-stone-300/40  p-1 animate-pulse">
      </span>
      <span class="w-full h-5 bg-stone-300/40  p-1 animate-pulse">
      </span>
    </div>

    <div v-else-if="error">
      <span class="text-red-300">
        Error loading channels list
      </span>
    </div>

    <div class="flex flex-col gap-1" v-else>
      <span class="text-gray-100/40 text-xs font-raleway" v-if="channelsList && channelsList.length">
        Channels
      </span>
      <ChannelDisplay v-for="channel in channelsList" :id="channel.channel" :channel-info="channel" />
    </div>
  </div>
</template>