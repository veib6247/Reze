<script setup lang="ts">
  const channelModal = useChannelModalStore()
  const accessTokenInputType = ref('password')

  const toggleAccessTokenInputType = () => {
    accessTokenInputType.value = accessTokenInputType.value == 'password' ? 'text' : 'password'
  }
</script>

<template>
  <div>
    <!-- Overlay element -->
    <div class="fixed z-40 w-screen h-screen inset-0 backdrop-blur-sm bg-stone-50/5"></div>

    <!-- The dialog -->
    <div
      class="fixed w-1/2 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-800/80 border border-stone-300/60 drop-shadow-lg">

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
          <div class="flex gap-0">
            <input :type="accessTokenInputType"
              class="w-full px-0 py-1 font-mono text-gray-300 bg-transparent border-none focus:ring-0"
              v-model="channelModal.channelInfo.accessToken" readonly />
            <button class="active:scale-95" @click="toggleAccessTokenInputType">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"
                v-if="accessTokenInputType == 'password'">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" v-else>
                <path
                  d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path
                  d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path
                  d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>

            </button>
          </div>
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
        <button class="px-4 py-2 bg-stone-300 text-gray-800 font-raleway hover:bg-stone-400"
          @click="channelModal.showModal = false">
          Close
        </button>
      </div>
    </div>
  </div>
</template>