
<template>
  <FormKit
    type="form"
    :actions="false"
    @submit="onSubmit"
    validation-visibility="dirty"
    :config="{ classes: { outer: 'flex flex-col space-y-6 p-4' } }"
  >
    
    <h2 class="text-2xl font-bold text-center text-gray-900">
      {{ isSignup ? 'Create Account' : 'Login' }}
    </h2>

    
    <FormKit
      v-if="isSignup"
      type="text"
      name="name"
      label="Full Name"
      placeholder="Enter your full name"
      validation="required|length:2"
      validation-visibility="dirty"
      :validation-messages="{
        required: 'Full name is required',
        length: 'Name must be at least 2 characters'
      }"
      outer-class="flex flex-col"
      label-class="block text-sm font-medium text-gray-700"
      input-class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      message-class="mt-1 text-sm text-red-600"
    />

    
    <FormKit
      type="email"
      name="email"
      label="Email Address"
      placeholder="e.g. johndoe@example.com"
      validation="required|email"
      validation-visibility="dirty"
      :validation-messages="{
        required: 'Email is required',
        email: 'Please enter a valid email address'
      }"
      outer-class="flex flex-col"
      label-class="block text-sm font-medium text-gray-700"
      input-class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      message-class="mt-1 text-sm text-red-600"
    />

    
    <FormKit
      type="password"
      name="password"
      label="Password"
      placeholder="Enter your password"
      validation="required|length:6"
      validation-visibility="dirty"
      :validation-messages="{
        required: 'Password is required',
        length: 'Password must be at least 6 characters'
      }"
      outer-class="flex flex-col"
      label-class="block text-sm font-medium text-gray-700"
      input-class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      message-class="mt-1 text-sm text-red-600"
    />

    
    <button
      type="submit"
      :disabled="$formkit.submitting"
      class="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      <span v-if="$formkit.submitting" class="flex items-center justify-center">
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Please wait...
      </span>
      <span v-else>
        {{ isSignup ? 'Create Account' : 'Login' }}
      </span>
    </button>
  </FormKit>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'login' }
})

const isSignup = computed(() => props.mode === 'signup')

const emit = defineEmits(['submit'])

const onSubmit = (values) => {
  emit('submit', values)
}
</script>
