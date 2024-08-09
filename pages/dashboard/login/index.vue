<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
      <h2 class="text-center text-2xl font-bold text-gray-800">
        Seller Dashboard
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-1">
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            class="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div class="space-y-1">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: false,
});

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  // Handle the login logic here
  if (username.value && password.value) {
    // Mock login success
    alert(`Welcome, ${username.value}!`);
    // Navigate to the dashboard or any other page
    router.push('/dashboard');
  } else {
    alert('Please enter your username and password.');
  }
};
</script>
