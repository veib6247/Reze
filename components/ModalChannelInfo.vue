<script setup lang="ts">
  const channelModal = useChannelModalStore()

</script>

<template>
  <div>
    <!-- Overlay element -->
    <div class="fixed z-40 w-screen h-screen inset-0 backdrop-blur-sm bg-stone-50/5"></div>

    <!-- The dialog -->
    <div
      class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-50/40 border border-stone-300/60 drop-shadow-lg">

      <!-- title -->
      <div class="bg-stone-300 h-10 p-2 font-raleway truncate">
        <span class="text-gray-800">
          Hello there!
        </span>
      </div>

      <!-- body -->
      <div class="h-96 p-2 flex flex-col gap-4 overflow-auto">
        <p class="font-raleway text-gray-950">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ea in minus
          culpa debitis ad.
          Necessitatibus quam
          quod explicabo possimus doloribus laboriosam? Sequi exercitationem odio pariatur nihil, ad architecto vero.
        </p>
      </div>

      <!-- action -->
      <div class="flex p-2 justify-end">
        <!-- This button is used to close the dialog -->
        <button class="px-4 py-2 bg-stone-300 text-gray-800 font-raleway hover:bg-stone-400"
          @click="channelModal.showModal = false">
          Close
        </button>
      </div>
    </div>
  </div>
</template>