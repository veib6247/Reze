<script setup lang="ts">
  const { pending, data } = await useLazyFetch('/api/getDivision')
  const divisionList = data.value.divisions
</script>

<template>
  <div class="w-64 flex flex-col border-r border-stone-400">
    <div class="px-4 py-2 sticky top-0 bg-stone-300">
      <h1 class="text-lg text-gray-800 font-raleway">DIVISIONS</h1>
    </div>

    <div class="pb-6 flex flex-col gap-0 overflow-y-auto">
      <div class="p-6 text-stone-300 font-raleway flex gap-2" v-if="pending">
        <span>
          <IconsLoading />
        </span>
        <span>
          Loading
        </span>
      </div>

      <DivisionItem v-for="division in divisionList" :key="division.id" :divisionId="division.id"
        :divisionName="division.name" v-else>
        {{ division.name }}
      </DivisionItem>
    </div>

  </div>
</template>