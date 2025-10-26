<template>
  <ContainerCard>
    <AuthForm mode="signup" @submit="handleSignup" />
    <p class="text-gray-600 font-medium p-5 text-center">
      Already have an account?
      <router-link
        to="/login"
        class="text-indigo-600 font-medium hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
      >
        Login
      </router-link>
    </p>
  </ContainerCard>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import ContainerCard from '@/components/ContainerCard.vue'
import AuthForm from '@/components/AuthForm.vue'
import {generateId, generateToken } from '@/utils/helpers.js'

const router = useRouter()

const handleSignup = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === values.email);

    if (existingUser) {
      toast.error("Email already exists. Try logging in.");
      return;
    }

    const newUser = {
      id: generateId(),
      name: values.name,
      email: values.email,
      password: values.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Create session
    const session = { token: generateToken(), userId: newUser.id };
    localStorage.setItem("ticketapp_session", JSON.stringify(session));

    toast.success("Account created successfully! Redirecting...");
    setTimeout(() => router.push("/dashboard"), 2000);
}
</script>