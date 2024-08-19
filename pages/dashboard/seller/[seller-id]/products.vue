<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="flex-1 p-8">
      <div class="min-h-screen bg-gray-100 p-8">
        <div class="min-h-screen bg-gray-100 p-6">
          <div class="mb-6 flex items-center justify-between">
            <h1 class="text-2xl font-bold">Product List</h1>
            <button
              class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Add Item
            </button>
          </div>

          <div class="mb-6 rounded-md bg-white p-4 shadow-md">
            <div class="mb-4 flex items-center justify-between">
              <input
                type="text"
                placeholder="Search here"
                class="w-1/3 rounded-md border px-4 py-2"
              />
              <div class="flex space-x-4">
                <select class="rounded-md border px-4 py-2">
                  <option>Category</option>
                  <!-- Add categories here -->
                </select>
                <select class="rounded-md border px-4 py-2">
                  <option>Sort By</option>
                  <!-- Add sort options here -->
                </select>
              </div>
            </div>

            <div
              v-for="product in products"
              :key="product.id"
              class="flex items-center justify-between border-b py-4"
            >
              <div class="flex items-center">
                <img
                  :src="product.image"
                  alt="Product image"
                  class="mr-4 h-12 w-12 rounded-md"
                />
                <div>
                  <h2 class="font-bold">{{ product.name }}</h2>
                  <p class="text-sm text-gray-500">
                    <span
                      v-if="product.originalPrice"
                      class="mr-2 line-through"
                    >
                      {{ product.originalPrice }}
                    </span>
                    {{ product.price }}
                  </p>
                </div>
              </div>

              <div class="flex space-x-2">
                <button class="text-blue-500 hover:text-blue-700">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M5 21h14a1 1 0 001-1v-2H4v2a1 1 0 001 1zM4 6h16V4H4v2zM19 8H5v10h14V8zM7 10h2v6H7v-6zm4 0h2v6h-2v-6z"
                    ></path>
                  </svg>
                </button>
                <button class="text-red-500 hover:text-red-700">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 3v1H4v2h16V4h-5V3H9zm1 4v12h4V7h-4zm-5 0v12h2V7H5zm10 0v12h2V7h-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      <router-view></router-view>-->
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import authGuard from '~/middleware/guards/authGuard.ts';

definePageMeta({
  layout: 'dashboard',
  middleware: authGuard,
});

const products = ref([
  {
    id: 1,
    name: 'Fullset Black Chair & Sofa',
    price: '$99',
    originalPrice: '$120',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'White Chair',
    price: '$99',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    name: 'Green Sleeper Sofa',
    price: '$99',
    image: 'https://via.placeholder.com/50',
  },
  // Add more products as needed
]);
</script>

<style>
/* Add any custom styles here */
</style>
