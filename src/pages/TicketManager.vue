<!-- src/pages/TicketManager.vue -->
<template>
  <div class="min-h-screen bg-gray-50">

    <main class="p-4 sm:p-6 space-y-6">
      <section>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Tickets</h2>
            <p class="text-gray-600">Manage and track all your support tickets</p>
          </div>
          <button
            @click="openModal('create')"
            class="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            + Create New Ticket
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p
            v-if="tickets.length === 0"
            class="text-gray-500 col-span-2 text-center py-8"
          >
            No tickets yet. Create one!
          </p>

          <TicketCard
            v-for="ticket in tickets"
            :key="ticket.id"
            :ticket="ticket"
            @edit="openModal('edit', ticket)"
            @delete="openModal('delete', ticket)"
          />
        </div>
      </section>

      <TicketModal
        :is-open="modal.isOpen"
        :mode="modal.mode"
        :ticket="modal.ticket"
        @save="handleSave"
        @close="closeModal"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import DashboardHeader from '@/components/DashboardHeader.vue'
import TicketCard from '@/components/TicketCard.vue'
import TicketModal from '@/components/TicketModal.vue'
import { getTickets, addTicket, updateTicket, deleteTicket } from '@/utils/helpers.js'

const tickets = ref([])
const modal = ref({
  isOpen: false,
  mode: 'create',
  ticket: null
})

onMounted(() => {
  tickets.value = getTickets()
})

const openModal = (mode, ticket = null) => {
  modal.value = { isOpen: true, mode, ticket }
}

const closeModal = () => {
  modal.value = { isOpen: false, mode: 'create', ticket: null }
}

const handleSave = (formData) => {
  if (modal.value.mode === 'create') {
    const newTicket = addTicket(formData)
    toast.success('Ticket added successfully')
    tickets.value.push(newTicket)
  } else if (modal.value.mode === 'edit') {
    const updated = updateTicket(modal.value.ticket.id, formData)
    toast.success('Ticket updated successfully')
    tickets.value = tickets.value.map(t => t.id === updated.id ? updated : t)
  } else if (modal.value.mode === 'delete') {
    deleteTicket(modal.value.ticket.id)
    toast.success('Ticket deleted successfully')
    tickets.value = tickets.value.filter(t => t.id !== modal.value.ticket.id)
  }
}
</script>