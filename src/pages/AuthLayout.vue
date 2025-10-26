<template>
  <div class="min-h-screen bg-gray-50">
    
    <DashboardHeader />

    
    <router-view />
  </div>
</template>

<script setup>
import DashboardHeader from '@/components/DashboardHeader.vue'
</script>