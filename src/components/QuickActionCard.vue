<template>
  <router-link
    :to="href"
    class="flex items-start gap-3 p-4 rounded-xl transition hover:shadow-sm"
    :class="bg"
  >
    <img :src="icon" alt="" class="w-6 h-6" />
    <div>
      <p class="font-medium text-gray-900">{{ title }}</p>
      <p class="text-sm text-gray-500">{{ desc }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String,
  bg: String,
  href: String
})
</script>