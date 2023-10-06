<script setup lang="ts">
  /**
   * display only divisions that are LIVE in state
   */
  const { pending, data: divisionList } = await useLazyFetch('/api/getDivision')
  divisionList.value = divisionList.value.filter((division: { state: string }) => division.state == 'LIVE')

  // console.info(divisionList.value)
</script>

<template>
  <div class="backdrop-blur-sm bg-stone-50/5 w-64 flex flex-col border-r border-stone-400/60">
    <div class="px-4 py-2 sticky top-0 bg-stone-300 shadow">
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