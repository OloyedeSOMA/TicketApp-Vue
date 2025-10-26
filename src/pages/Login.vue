<template>
  <ContainerCard>
    <AuthForm mode="login" @submit="handleLogin" />
    <p class="text-gray-600 font-medium p-5 text-center">
      Don't have an account?
      <router-link
        to="/signup"
        class="text-indigo-600 font-medium hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
      >
        Sign Up
      </router-link>
    </p>
  </ContainerCard>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import ContainerCard from '@/components/ContainerCard.vue'
import AuthForm from '@/components/AuthForm.vue'
import { generateToken } from '@/utils/helpers.js'

const router = useRouter()

const handleLogin = (values) => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(u => u.email === values.email && u.password === values.password)

  if (!user) {
    toast.error('Invalid email or password!')
    return
  }

  const session = { token: generateToken(), userId: user.id }
  localStorage.setItem('ticketapp_session', JSON.stringify(session))

  toast.success(`Welcome back, ${user.name || 'User'}! Redirecting...`)
  setTimeout(() => router.push('/dashboard'), 2000)
}
</script>