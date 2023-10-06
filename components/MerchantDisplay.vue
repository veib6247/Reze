<script setup lang="ts">
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

  const { pending: channelsPending, data: channelsList } = await useLazyFetch(`/api/getChannel?merchantId=${props.merchantId}`)

  // console.info(createdMerchantAccounts.value)
</script>

<template>
  <div class="backdrop-blur-sm bg-stone-50/5 w-80 h-fit flex flex-col gap-0 border border-stone-300/60">
    <div class="bg-stone-300 h-10 p-2 font-raleway truncate">
      <span class="text-gray-800">
        {{ merchantName.toUpperCase() }}
      </span>
    </div>

    <div class="h-96 p-2 flex flex-col gap-4 overflow-y-auto">
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

      <div class="text-stone-300 font-raleway text-sm"
        v-if="!createdMerchantAccountsPending && createdMerchantAccounts.length > 0">
        <span class="block text-stone-300/70 text-xs">Merchant Accounts</span>

        <div class="flex flex-col gap-0.5 py-1">
          <span class="text-stone-300 font-raleway text-sm" v-for="createdMerchantAccount in createdMerchantAccounts">
            {{ createdMerchantAccount.name }}
          </span>
        </div>
      </div>

      <div class="flex gap-2" v-else-if="createdMerchantAccountsPending">
        <span>
          <IconsLoadingSmol />
        </span>
        <span class="block text-stone-300/70 text-xs">Fetching Merchant Accounts...</span>
      </div>

      <div v-else-if="createdMerchantAccountsError">
        <span class="block text-red-300/80 text-xs">Error in Fetching Merchant Accounts</span>
      </div>


      <!-- Channels list here -->
      <div class="text-stone-300 font-raleway text-sm" v-if="!channelsPending">
        <span class="block text-stone-300/70 text-xs">Channels</span>

        <div class="flex flex-col gap-0.5 py-1">
          <span class="text-stone-300 font-raleway text-sm" v-for="channel in channelsList">
            {{ channel.name }}
          </span>
        </div>
      </div>

      <div class="flex gap-2" v-else-if="channelsPending">
        <span>
          <IconsLoadingSmol />
        </span>
        <span class="block text-stone-300/70 text-xs">Fetching Channels List...</span>
      </div>

    </div>
  </div>
</template>