<template>
  <div :class="`w-full max-w-md mx-auto mt-20 p-8 bg-white shadow-lg rounded-2xl ${$props.class}`">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  class: { type: String, default: '' }
})
</script>