<template>
  <div class="w-screen flex flex-col gap-0">
    <div class="px-4 py-2 sticky top-0 bg-stone-300">
      <h1 class="text-lg text-gray-800 font-raleway">{{ $route.query.divisionName }}</h1>
    </div>

    <NuxtPage />
  </div>
</template>