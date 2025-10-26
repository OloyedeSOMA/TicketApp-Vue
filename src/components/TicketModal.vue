<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="close"
    >
      <div
        class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
        @click.stop
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900">
            {{ modalTitle }}
          </h2>
          <button
            @click="close"
            class="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <!-- DELETE MODE -->
        <div v-if="mode === 'delete'">
          <p class="text-gray-700 mb-6">
            Are you sure you want to delete this ticket? This action cannot be undone.
          </p>
          <div class="flex gap-3 justify-end">
            <button
              @click="close"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              @click="handleDelete"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>

        <!-- CREATE / EDIT MODE -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
              Title <span class="text-red-500">*</span>
            </label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter ticket title"
            />
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              v-model="form.description"
              rows="3"
              minlength="5"
              maxlength="100"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Describe the issue or request"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="status" class="block text-sm font-medium text-gray-700 mb-1">
                Status <span class="text-red-500">*</span>
              </label>
              <select
                id="status"
                v-model="form.status"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
              </select>
            </div>
            <div>
              <label for="priority" class="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                id="priority"
                v-model="form.priority"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>High Priority</option>
                <option>Medium Priority</option>
                <option>Low Priority</option>
              </select>
            </div>
          </div>

          <div class="flex gap-3 justify-end mt-6">
            <button
              type="button"
              @click="close"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              {{ mode === 'create' ? 'Create Ticket' : 'Update Ticket' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { toast } from 'vue3-toastify'

const props = defineProps({
  isOpen: Boolean,
  mode: String,
  ticket: Object
})

const emit = defineEmits(['save', 'close'])

const form = ref({
  title: '',
  description: '',
  status: 'Open',
  priority: 'Medium Priority'
})

const modalTitle = computed(() => {
  if (props.mode === 'create') return 'Create New Ticket'
  if (props.mode === 'edit') return 'Edit Ticket'
  return 'Delete Ticket'
})


watch(
  () => [props.mode, props.ticket, props.isOpen],
  ([mode, ticket, isOpen]) => {
    if (!isOpen) return
    if (mode === 'edit' && ticket) {
      form.value = { ...ticket }
    } else if (mode === 'create') {
      form.value = {
        title: '',
        description: '',
        status: 'Open',
        priority: 'Medium Priority'
      }
    }
  },
  { immediate: true }
)

const close = () => emit('close')

const handleSubmit = () => {
  emit('save', form.value)
  close()
}

const handleDelete = () => {
  emit('save')
  close()
}
</script>