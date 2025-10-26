<template>
  <div class="min-h-screen bg-gray-50">

    <main class="p-4 sm:p-6 space-y-6">
      
      <section>
        <h2 class="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p class="text-sm text-gray-500">Overview of your ticket management system</p>
      </section>

      
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Tickets" :value="stats.total" dot-color="bg-indigo-600" />
        <StatCard title="Open" :value="stats.open" dot-color="bg-green-500" />
        <StatCard title="In Progress" :value="stats.inProgress" dot-color="bg-yellow-500" />
        <StatCard title="Closed" :value="stats.closed" dot-color="bg-gray-400" />
      </section>

      
      <section class="bg-white p-6 rounded-2xl shadow-sm">
        <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <QuickActionCard
            :icon="icon"
            title="View All Tickets"
            desc="Manage and organize your tickets"
            bg="bg-indigo-50"
            href="/tickets"
          />
          <QuickActionCard
            :icon="icon"
            title="Create New Ticket"
            desc="Start tracking a new issue"
            bg="bg-green-50"
            href="/tickets"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import StatCard from '@/components/StatCard.vue'
import QuickActionCard from '@/components/QuickActionCard.vue'
import { getTickets } from '@/utils/helpers.js'
import icon from '@/assets/icons/ticket.svg'

const tickets = ref([])

onMounted(() => {
  tickets.value = getTickets()
})

const stats = computed(() => ({
  total: tickets.value.length,
  open: tickets.value.filter(t => t.status === 'Open').length,
  inProgress: tickets.value.filter(t => t.status === 'In Progress').length,
  closed: tickets.value.filter(t => t.status === 'Closed').length,
}))
</script>