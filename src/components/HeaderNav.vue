<template>
  <header class="absolute inset-x-0 top-0 z-10">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
      
      
      <router-link
        to="/"
        class="flex items-center gap-3 group"
        aria-label="Home"
      >
        <img
          :src="TicketLogo"
          alt="Ticket Manager Pro Logo"
          class="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
        />
        <span class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          Ticket Manager Pro
        </span>
      </router-link>

      
      <nav aria-label="Main navigation">
        <router-link
          to="/login"
          class="text-indigo-600 font-medium hover:text-indigo-500 transition-colors
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
          active-class="text-indigo-800 font-bold underline"
        >
          Login
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import TicketLogo from '@/assets/icons/TicketLogo.svg'
</script>