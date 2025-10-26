<template>
  <div class="bg-white p-5 rounded-2xl shadow-sm">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-600">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-900 mt-1">{{ value }}</p>
      </div>
      <div :class="`w-3 h-3 rounded-full ${dotColor}`"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  dotColor: String
})
</script>