<template>
  <article class="bg-white p-6 rounded-2xl shadow-sm hover:shadow transition-shadow">
    <div class="flex items-center justify-between mb-3">
      <span :class="`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`">
        {{ ticket.status }}
      </span>
      <span :class="`text-xs font-medium ${priorityColors[ticket.priority]}`">
        {{ ticket.priority }}
      </span>
    </div>
    <h3 class="font-semibold text-gray-900 mb-1">{{ ticket.title }}</h3>
    <p class="text-sm text-gray-600 mb-4">{{ ticket.description }}</p>
    <div class="flex gap-2">
      <button
        @click="emit('edit', ticket)"
        class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm hover:bg-indigo-100 flex items-center gap-1"
      >
        Edit
      </button>
      <button
        @click="emit('delete', ticket)"
        class="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 flex items-center gap-1"
      >
        Delete
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  ticket: Object
})

const emit = defineEmits(['edit', 'delete'])

const statusColors = {
  Open: 'bg-green-100 text-green-700',
  'In Progress': 'bg-yellow-100 text-yellow-700',
  Closed: 'bg-gray-100 text-gray-700',
}

const priorityColors = {
  'High Priority': 'text-red-600',
  'Medium Priority': 'text-yellow-600',
  'Low Priority': 'text-green-600',
}
</script>