<script setup lang="ts">
  const channelModal = useChannelModalStore()
  const accessTokenInputType = ref('password')

  const toggleAccessTokenInputType = (event: Event) => {
    event.preventDefault()
    accessTokenInputType.value =
      accessTokenInputType.value == 'password' ? 'text' : 'password'
  }
</script>

<template>
  <div>
    <!-- Overlay element -->
    <div
      class="fixed inset-0 z-40 h-screen w-screen bg-stone-50/5 backdrop-blur-sm"></div>

    <!-- The dialog -->
    <div
      class="fixed left-1/2 top-1/2 z-50 w-1/2 -translate-x-1/2 -translate-y-1/2 border border-stone-300/60 bg-slate-800/90 drop-shadow-lg">
      <!-- title -->
      <div class="h-10 truncate bg-stone-300 p-2 font-raleway">
        <span class="uppercase text-gray-800">
          {{ channelModal.channelInfo.name }}
        </span>
      </div>

      <!-- body -->
      <div class="flex h-96 flex-col gap-3 overflow-auto p-2">
        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Name</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.name }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Access Token</span>
          <form class="flex w-full gap-2">
            <input
              :type="accessTokenInputType"
              autocomplete="off"
              class="border-none bg-transparent px-0 py-1 font-mono text-sm text-gray-300 focus:ring-0"
              :size="channelModal.channelInfo.accessToken.length"
              v-model="channelModal.channelInfo.accessToken"
              readonly />

            <button class="active:scale-95" @click="toggleAccessTokenInputType">
              <IconsEye v-if="accessTokenInputType == 'password'" />
              <IconsEyeSlashed v-else />
            </button>
          </form>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Entity ID</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.channel }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">State</span>
          <span
            class="rounded-sm bg-stone-300/40 px-2 py-1 text-xs text-stone-300/80">
            {{ channelModal.channelInfo.state }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Type</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.type }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Customer ID</span>
          <span
            class="font-mono text-gray-300"
            v-if="channelModal.channelInfo.customerId">
            {{ channelModal.channelInfo.customerId }}
          </span>
          <span class="font-mono text-gray-300" v-else> - </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Description</span>
          <span
            class="font-mono text-gray-300"
            v-if="channelModal.channelInfo.description">
            {{ channelModal.channelInfo.description }}
          </span>
          <span class="font-mono text-gray-300" v-else> - </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">Login (deprecated)</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.login }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50">PWD (deprecated)</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.pwd }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50"
            >Secret (deprecated)</span
          >
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.secret }}
          </span>
        </div>

        <div class="font-raleway text-sm text-stone-300">
          <span class="block text-xs text-gray-200/50"
            >Sender (deprecated)</span
          >
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.sender }}
          </span>
        </div>
      </div>

      <!-- action -->
      <div class="flex justify-end p-2">
        <button
          class="bg-stone-300 px-4 py-1 font-raleway text-gray-800 hover:bg-stone-400"
          @click="channelModal.showModal = false">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
