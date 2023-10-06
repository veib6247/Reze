<script setup lang="ts">
  useHead({
    title: 'Reze | Alt. UI to BIP',
    link: [
      { rel: 'icon', type: 'image/png', href: '/reze.png' }
    ]
  })
</script>

<template>
  <!-- <section class="h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex"> -->
  <section class="h-screen bg-svg flex">
    <DivisionList />
    <NuxtPage />
  </section>
</template>
