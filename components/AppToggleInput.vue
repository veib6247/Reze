<script setup lang="ts">
  interface Props {
    label: string
    data: string
  }

  defineProps<Props>()

  const inputType = ref('password')

  const toggleInputType = (event: Event) => {
    event.preventDefault()

    inputType.value = inputType.value == 'password' ? 'text' : 'password'
  }
</script>

<template>
  <div class="text-sm text-stone-300">
    <span class="block font-raleway text-xs text-stone-300/70">
      {{ label }}
    </span>

    <form class="flex w-full gap-2">
      <input
        :type="inputType"
        autocomplete="off"
        class="border-none bg-transparent px-0 py-1 font-mono text-sm text-stone-300 focus:ring-0"
        :size="data.length"
        :value="data"
        readonly />

      <button class="active:scale-95" @click="toggleInputType">
        <IconsEye v-if="inputType == 'password'" />
        <IconsEyeSlashed v-else />
      </button>
    </form>
  </div>
</template>
