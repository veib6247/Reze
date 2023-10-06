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

  // console.info(createdMerchantAccounts.value)
</script>

<template>
  <div class="backdrop-blur-sm bg-stone-50/5 w-80 h-96 flex flex-col gap-0 border border-stone-300/60">
    <h1 class="font-raleway bg-stone-300 p-2 truncate">
      <span class="text-gray-800">
        {{ merchantName.toUpperCase() }}
      </span>
    </h1>

    <div class="p-2 flex flex-col gap-2 overflow-auto">
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

        <span class="block text-stone-300/70 text-xs">Created Merchant Accounts</span>

        <div class="flex flex-col gap-0.5 py-1">
          <span class="bg-stone-300/40 text-stone-300/80 text-xs px-2 py-1 rounded-sm w-fit"
            v-for="createdMerchantAccount in createdMerchantAccounts">
            {{ createdMerchantAccount.name }}
          </span>
        </div>
      </div>

      <div class="flex gap-2" v-else-if="createdMerchantAccountsPending">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-stone-300/70 animate-spin">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </span>
        <span class="block text-stone-300/70 text-xs">Fetching Merchant Accounts...</span>
      </div>

      <div v-else-if="createdMerchantAccountsError">
        <span class="block text-red-300/80 text-xs">Error in Fetching Merchant Accounts</span>
      </div>

    </div>
  </div>
</template>