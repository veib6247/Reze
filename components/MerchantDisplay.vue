<script setup lang="ts">
  const channelModal = useChannelModalStore()

  const props = defineProps({
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

  const { pending: createdMerchantAccountsPending, data: createdMerchantAccounts, error: createdMerchantAccountsError } = await useLazyFetch(`/api/getCreatedMerchantAccounts?merchantId=${props.merchantId}`)

  const { pending: channelsPending, data: channelsList, error: channelsError } = await useLazyFetch(`/api/getChannel?merchantId=${props.merchantId}`)

  const copyChannelInfo = (channelInfo: Object) => {
    channelModal.showModal = true
    navigator.clipboard.writeText(JSON.stringify(channelInfo, null, 2))
  }
</script>

<template>
  <div class="backdrop-blur-sm bg-stone-50/5 w-80 h-fit flex flex-col gap-0 border border-stone-300/60">

    <!-- card title -->
    <div class="bg-stone-300 h-10 p-2 font-raleway truncate">
      <span class="text-gray-800">
        {{ merchantName.toUpperCase() }}
      </span>
    </div>

    <!-- card body -->
    <div class="h-96 p-2 flex flex-col gap-4 overflow-auto">
      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Mechant Entity ID</span>
        <span class="font-mono">
          {{ merchantId }}
        </span>
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

      <!-- merchant list here -->
      <Transition mode="out-in">
        <div class="flex flex-col gap-1" v-if="createdMerchantAccountsPending">
          <span class="block text-stone-300/70 font-raleway text-xs">Merchant Accounts</span>
          <div class="w-48 h-4 bg-stone-300/40  p-1 rounded-full animate-pulse">
          </div>
        </div>

        <div class="text-stone-300 font-raleway text-sm"
          v-else-if="!createdMerchantAccountsPending && createdMerchantAccounts.length">
          <span class="block text-stone-300/70 text-xs">Merchant Accounts</span>
          <div class="flex flex-col gap-1 py-1">
            <div class="text-stone-300 font-raleway text-sm" v-for="createdMerchantAccount in createdMerchantAccounts"
              :key="createdMerchantAccount.id">
              {{ createdMerchantAccount.name }}
              <span class="block text-xs text-stone-300/40">
                {{ createdMerchantAccount.clearingInstitute }} <span v-if="createdMerchantAccount.supports3DSecure">|
                  3D</span>
              </span>
            </div>
          </div>
        </div>

        <div v-else-if="!createdMerchantAccountsPending && !createdMerchantAccounts.length">
          <span class="block text-stone-300/70 font-raleway text-xs">Merchant Accounts</span>
          <span class="block text-stone-300/70 text-xs">-</span>
        </div>

        <div v-else-if="createdMerchantAccountsError">
          <span class="block text-red-300/80 text-xs">Error in Fetching Merchant Accounts</span>
        </div>
      </Transition>


      <!-- channel list here -->
      <Transition mode="out-in">
        <div class="flex flex-col gap-1" v-if="channelsPending">
          <span class="block text-stone-300/70 font-raleway text-xs">Channels</span>
          <div class="w-48 h-4 bg-stone-300/40  p-1 rounded-full animate-pulse">
          </div>
        </div>

        <div class="text-stone-300 font-raleway text-sm" v-else-if="!channelsPending && channelsList.length">
          <span class="block text-stone-300/70 text-xs">Channels</span>
          <div class="flex flex-col gap-1 py-1">
            <div class="text-stone-300 font-raleway text-sm" v-for="channel in channelsList" :key="channel.channel">
              <button class="underline active:scale-95" @click="copyChannelInfo(channel)">
                {{ channel.name }}
              </button>
              <span class="block font-mono text-xs text-stone-300/40">{{ channel.channel }}</span>
            </div>
          </div>
        </div>

        <div v-else-if="!channelsPending && !channelsList.length">
          <span class="block text-stone-300/70 font-raleway text-xs">Channels</span>
          <span class="block text-stone-300/70 text-xs">-</span>
        </div>

        <div v-else-if="channelsError">
          <span class="block text-red-300/80 text-xs">Error in Fetching Channels List</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>