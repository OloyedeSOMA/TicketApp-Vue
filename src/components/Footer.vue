
<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      
        
        <router-link to="/" class="flex items-center gap-2">
          <img :src="LogoIcon" alt="Ticket Manager Pro Logo" class="w-6 h-6" />
          <span class="font-semibold text-gray-900">Ticket Manager Pro</span>
        </router-link>

        <p class="text-sm text-gray-500">
          © 2025 Ticket Manager Pro HNG. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoIcon from '@/assets/icons/TicketLogo.svg'
</script>