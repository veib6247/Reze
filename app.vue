<script setup lang="ts">
  useHead({
    title: 'Reze | Alternative UI to PAY.ON BIP',

    link: [
      { rel: 'icon', type: 'image/png', href: '/reze.png' }
    ],

    meta: [
      {
        name: 'description',
        content: 'An alternative UI to ACI Worldwides PAY.ON payment gateway'
      },
      {
        name: 'keywords',
        content: 'ACI Worldwide,PAY.ON,Payment Gateways,UI,Division,Merchant,Channel'
      },
      {
        name: 'author',
        content: 'Bryan Olandres'
      }
    ],

    htmlAttrs: {
      lang: 'en'
    }
  })
</script>

<template>
  <!-- <section class="h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex"> -->
  <section class="h-screen bg-svg flex">
    <DivisionList />

    <NuxtPage />
  </section>
</template>
