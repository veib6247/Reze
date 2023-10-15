<template>
  <div class="backdrop-blur-sm bg-stone-50/5 w-80 h-fit flex flex-col gap-0 border border-stone-300/60">

    <!-- card title -->
    <div class="bg-stone-300 h-10 p-2 font-raleway flex gap-1">
      <span class="text-gray-800 truncate">
        MERCHANT NAME HERE
      </span>
    </div>

    <!-- card body -->
    <div class="h-96 p-2 flex flex-col gap-4 overflow-auto">
      <div class="text-stone-300 text-sm">
        <span class="block text-stone-300/70 text-xs">Mechant Entity ID</span>
        <span class="font-mono">
          MERCHANT NAME HERE
        </span>
      </div>

      <div class="text-stone-300 font-raleway text-sm flex flex-col gap-0">
        <span class="block text-stone-300/70 text-xs">State</span>

        <span class="w-fit bg-stone-300/40 text-stone-300/80 text-xs px-2 py-1 rounded-sm flex gap-1">
          MERCHANT NAME HERE
        </span>
      </div>

      <div class="text-stone-300 font-raleway text-sm">
        <span class="block text-stone-300/70 text-xs">Full Merchant Name</span>
        MERCHANT NAME HERE
      </div>

      <div class="text-stone-300 font-raleway text-sm">
        <span class="block text-stone-300/70 text-xs">Description</span>
        <p class="text-stone-300 font-raleway text-sm">
          MERCHANT NAME HERE
        </p>
      </div>
    </div>
  </div>
  <!-- <h1>
    {{ $route.params.merchantId }}
  </h1> -->
</template>