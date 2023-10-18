<script setup lang="ts">
  const channelModal = useChannelModalStore()

  const props = defineProps({
    merchantName: {
      type: String,
      required: true,
    },

    merchantId: {
      type: String,
      required: true,
    },

    merchantState: {
      type: String,
      required: true,
    },

    merchantDescription: {
      type: String,
      required: false,
    },
  })

  const {
    pending: createdMerchantAccountsPending,
    data: createdMerchantAccounts,
    error: createdMerchantAccountsError,
  } = await useLazyFetch(
    `/api/getCreatedMerchantAccounts?merchantId=${props.merchantId}`,
  )

  const {
    pending: channelsPending,
    data: channelsList,
    error: channelsError,
  } = await useLazyFetch(`/api/getChannel?merchantId=${props.merchantId}`)

  const updateChannelInfo = (channelInfo: any) => {
    channelModal.channelInfo = channelInfo
    channelModal.showModal = true
  }
</script>

<template>
  <div
    class="flex h-fit w-80 flex-col gap-0 border border-stone-300/60 bg-stone-50/5 backdrop-blur-sm">
    <!-- card title -->
    <div class="flex h-10 gap-1 bg-stone-300 p-2 font-raleway">
      <span class="truncate text-gray-800">
        {{ merchantName.toUpperCase() }}
      </span>

      <span
        class="flex w-fit gap-1 rounded-sm bg-stone-800/20 px-2 py-1 text-xs text-gray-800">
        {{ merchantState }}
        <IconsLocked v-if="merchantState == 'DISABLED'" />
        <IconsBlocked v-else-if="merchantState == 'CLOSED'" />
        <IconsLink v-else-if="merchantState == 'CONNECTOR_TEST'" />
      </span>
    </div>

    <!-- card body -->
    <div class="flex h-96 flex-col gap-4 overflow-auto p-2">
      <div class="text-sm text-stone-300">
        <span class="block text-xs text-stone-300/70">Mechant Entity ID</span>
        <span class="font-mono">
          {{ merchantId }}
        </span>
      </div>

      <div class="flex flex-col gap-0 font-raleway text-sm text-stone-300">
        <span class="block text-xs text-stone-300/70">State</span>

        <span
          class="flex w-fit gap-1 rounded-sm bg-stone-300/40 px-2 py-1 text-xs text-stone-300/80">
          {{ merchantState }}
          <IconsLocked v-if="merchantState == 'DISABLED'" />
          <IconsBlocked v-else-if="merchantState == 'CLOSED'" />
          <IconsLink v-else-if="merchantState == 'CONNECTOR_TEST'" />
        </span>
      </div>

      <div class="font-raleway text-sm text-stone-300">
        <span class="block text-xs text-stone-300/70">Full Merchant Name</span>
        {{ merchantName }}
      </div>

      <div
        class="font-raleway text-sm text-stone-300"
        v-if="merchantDescription">
        <span class="block text-xs text-stone-300/70">Description</span>
        <p class="font-raleway text-sm text-stone-300">
          {{ merchantDescription }}
        </p>
      </div>

      <!-- merchant list here -->
      <Transition mode="out-in">
        <div class="flex flex-col gap-1" v-if="createdMerchantAccountsPending">
          <span class="block font-raleway text-xs text-stone-300/70"
            >Merchant Accounts</span
          >
          <div
            class="h-4 w-48 animate-pulse rounded-full bg-stone-300/40 p-1"></div>
        </div>

        <div
          class="font-raleway text-sm text-stone-300"
          v-else-if="
            !createdMerchantAccountsPending && createdMerchantAccounts.length
          ">
          <span class="block text-xs text-stone-300/70">Merchant Accounts</span>
          <div class="flex flex-col gap-1 py-1">
            <div
              class="font-raleway text-sm text-stone-300"
              v-for="createdMerchantAccount in createdMerchantAccounts"
              :key="createdMerchantAccount.id">
              {{ createdMerchantAccount.name }}
              <span class="block text-xs text-stone-300/40">
                {{ createdMerchantAccount.clearingInstitute }}
                <span v-if="createdMerchantAccount.supports3DSecure">
                  | 3D
                </span>
              </span>
            </div>
          </div>
        </div>

        <div
          v-else-if="
            !createdMerchantAccountsPending && !createdMerchantAccounts.length
          ">
          <span class="block font-raleway text-xs text-stone-300/70"
            >Merchant Accounts</span
          >
          <span class="block text-xs text-stone-300/70">-</span>
        </div>

        <div v-else-if="createdMerchantAccountsError">
          <span class="block text-xs text-red-300/80"
            >Error in Fetching Merchant Accounts</span
          >
        </div>
      </Transition>

      <!-- channel list here -->
      <Transition mode="out-in">
        <div class="flex flex-col gap-1" v-if="channelsPending">
          <span class="block font-raleway text-xs text-stone-300/70"
            >Channels</span
          >
          <div
            class="h-4 w-48 animate-pulse rounded-full bg-stone-300/40 p-1"></div>
        </div>

        <div v-else-if="channelsList == undefined">
          <span class="block text-xs text-red-300/80"
            >Error in Fetching Channels List</span
          >
        </div>

        <div
          class="font-raleway text-sm text-stone-300"
          v-else-if="!channelsPending && channelsList.length">
          <span class="block text-xs text-stone-300/70">Channels</span>
          <div class="flex flex-col gap-1 py-1">
            <div
              class="font-raleway text-sm text-stone-300"
              v-for="channel in channelsList"
              :key="channel.channel">
              <button
                class="underline active:scale-95"
                @click="updateChannelInfo(channel)">
                {{ channel.name }}
              </button>
              <span class="block font-mono text-xs text-stone-300/40">{{
                channel.channel
              }}</span>
            </div>
          </div>
        </div>

        <div v-else-if="!channelsPending && !channelsList.length">
          <span class="block font-raleway text-xs text-stone-300/70"
            >Channels</span
          >
          <span class="block text-xs text-stone-300/70">-</span>
        </div>

        <div v-else-if="channelsError">
          <span class="block text-xs text-red-300/80"
            >Error in Fetching Channels List</span
          >
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
