<template>
  <header class="bg-white border-b border-gray-200 px-4 py-3">
    <div class="flex items-center justify-between">
      
      <div class="flex items-center gap-3">
        <img :src="TicketIcon" alt="Logo" class="w-8 h-8" />
        <h1 class="hidden md:block text-xl font-bold text-gray-900">Ticket Manager Pro</h1>
      </div>

      
      <div class="flex items-center gap-4">
        <router-link
          to="/dashboard"
          class="transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
          :class="route.path === '/dashboard' ? 'text-indigo-700 font-medium hover:text-indigo-600' : 'text-indigo-400 font-medium hover:text-indigo-500'"
          aria-label="dashboard"
        >
          Dashboard
        </router-link>
        <router-link
          to="/tickets"
          class="transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
          :class="route.path === '/tickets' ? 'text-indigo-700 font-medium hover:text-indigo-600' : 'text-indigo-400 font-medium hover:text-indigo-500'"
          aria-label="tickets"
        >
          Tickets
        </router-link>

        <!-- User Name -->
        <div class="flex items-center gap-2">
          <span class="text-md text-gray-700 hidden sm:block">
            <b>{{ currentUser?.name }}</b>
          </span>
        </div>

        
        <button
          @click="handleLogout"
          class="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition cursor-pointer"
        >
          <img :src="logoutIcon" alt="Logout" class="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
import { getCurrentUser, userLogout } from '@/utils/helpers.js'
import TicketIcon from '@/assets/icons/TicketLogo.svg'
import logoutIcon from '@/assets/icons/logout.svg'

const router = useRouter()
const route = useRoute()
const currentUser = getCurrentUser()

const handleLogout = () => {
  userLogout()
  toast.info("You've been logged out.")
  setTimeout(() => router.push('/'), 1500)
}
</script>