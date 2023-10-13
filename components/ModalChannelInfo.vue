<script setup lang="ts">
  const channelModal = useChannelModalStore()
  const accessTokenInputType = ref('password')

  const toggleAccessTokenInputType = (event: Event) => {
    event.preventDefault()
    accessTokenInputType.value = accessTokenInputType.value == 'password' ? 'text' : 'password'
  }
</script>

<template>
  <div>
    <!-- Overlay element -->
    <div class="fixed z-40 w-screen h-screen inset-0 backdrop-blur-sm bg-stone-50/5"></div>

    <!-- The dialog -->
    <div
      class="fixed w-1/2 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/90 border border-stone-300/60 drop-shadow-lg">

      <!-- title -->
      <div class="bg-stone-300 h-10 p-2 font-raleway truncate">
        <span class="text-gray-800 uppercase">
          {{ channelModal.channelInfo.name }}
        </span>
      </div>

      <!-- body -->
      <div class="h-96 p-2 flex flex-col gap-3 overflow-auto">
        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Name</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.name }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Access Token</span>
          <form class="w-full flex gap-2">

            <input :type="accessTokenInputType" autocomplete="off"
              class="px-0 py-1 text-sm font-mono text-gray-300 bg-transparent border-none focus:ring-0"
              :size="channelModal.channelInfo.accessToken.length" v-model="channelModal.channelInfo.accessToken"
              readonly />

            <button class="active:scale-95" @click="toggleAccessTokenInputType">
              <IconsEye v-if="accessTokenInputType == 'password'" />
              <IconsEyeSlashed v-else />
            </button>

          </form>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Entity ID</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.channel }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">State</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.state }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Type</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.type }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Customer ID</span>
          <span class="font-mono text-gray-300" v-if="channelModal.channelInfo.customerId">
            {{ channelModal.channelInfo.customerId }}
          </span>
          <span class="font-mono text-gray-300" v-else>
            -
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Description</span>
          <span class="font-mono text-gray-300" v-if="channelModal.channelInfo.description">
            {{ channelModal.channelInfo.description }}
          </span>
          <span class="font-mono text-gray-300" v-else>
            -
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Login (deprecated)</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.login }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">PWD (deprecated)</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.pwd }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Secret (deprecated)</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.secret }}
          </span>
        </div>

        <div class="text-stone-300 font-raleway text-sm">
          <span class="block text-gray-200/50 text-xs">Sender (deprecated)</span>
          <span class="font-mono text-gray-300">
            {{ channelModal.channelInfo.sender }}
          </span>
        </div>
      </div>

      <!-- action -->
      <div class="flex p-2 justify-end">
        <button class="px-4 py-1 bg-stone-300 text-gray-800 font-raleway hover:bg-stone-400"
          @click="channelModal.showModal = false">
          Close
        </button>
      </div>
    </div>
  </div>
</template>