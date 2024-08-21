<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="flex-1 p-8">
      <div class="min-h-screen bg-gray-100 p-8">
        <div>
          <h1 class="mb-6 text-2xl font-bold">Add Item</h1>
          <form @submit.prevent="addItem">
            <!-- Product Name -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Name</label>
              <input
                v-model="productName"
                type="text"
                placeholder="Product name"
                class="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            <!-- Product Description -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Description</label>
              <textarea
                v-model="productDescription"
                placeholder="Product description"
                class="mt-1 w-full rounded-md border border-gray-300 p-2"
              ></textarea>
            </div>

            <!-- Product Photo -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Photo</label>
              <div class="mt-1 flex w-full items-center justify-center">
                <label
                  for="file-upload"
                  class="flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-200 px-4 py-6"
                >
                  <svg
                    class="h-8 w-8 text-gray-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-2 4h4v-2h-4v2zm5-4v7H7v-7H5v7a2 2 0 002 2h10a2 2 0 002-2v-7h-2z"
                    />
                  </svg>
                  <span class="mt-2 text-sm text-gray-600">Add Photo</span>
                  <input
                    id="file-upload"
                    type="file"
                    class="hidden"
                    @change="onFileChange"
                  />
                </label>
              </div>
            </div>

            <!-- Price and Discount -->
            <div class="mb-4 flex space-x-4">
              <div class="w-1/2">
                <label class="block text-gray-700">Price</label>
                <input
                  v-model="price"
                  type="text"
                  placeholder="Ex: $120"
                  class="mt-1 w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div class="flex w-1/2 items-center">
                <input
                  v-model="isDiscounted"
                  type="checkbox"
                  class="mr-2"
                  id="discount-checkbox"
                />
                <label for="discount-checkbox" class="mr-4 text-gray-700"
                  >Add Discount</label
                >
                <input
                  v-model="discount"
                  type="text"
                  placeholder="Ex: 20%"
                  class="w-full rounded-md border border-gray-300 p-2"
                  :disabled="!isDiscounted"
                />
              </div>
            </div>

            <!-- Color Options -->
            <div class="mb-4">
              <label class="mb-2 block text-gray-700">Color</label>
              <div class="flex flex-wrap space-x-4">
                <div
                  v-for="color in colors"
                  :key="color"
                  class="flex items-center"
                >
                  <input
                    type="checkbox"
                    :value="color"
                    v-model="selectedColors"
                    class="mr-2"
                  />
                  <label class="text-gray-700">{{ color }}</label>
                </div>
              </div>
            </div>

            <!-- Category Options -->
            <div class="mb-4">
              <label class="mb-2 block text-gray-700">Category</label>
              <div class="flex flex-wrap space-x-4">
                <div
                  v-for="category in categories"
                  :key="category"
                  class="flex items-center"
                >
                  <input
                    type="checkbox"
                    :value="category"
                    v-model="selectedCategories"
                    class="mr-2"
                  />
                  <label class="text-gray-700">{{ category }}</label>
                </div>
              </div>
            </div>

            <!-- Stock -->
            <div class="mb-6">
              <label class="block text-gray-700">Stock</label>
              <input
                v-model="stock"
                type="number"
                placeholder="Ex: 10"
                class="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            <!-- Add Item Button -->
            <div>
              <button
                type="submit"
                class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
///////////////////////////
import { ref } from 'vue';
import authGuard from '~/middleware/guards/authGuard';

const productName = ref('');
const productDescription = ref('');
const price = ref('');
const discount = ref('');
const isDiscounted = ref(false);
const selectedColors = ref([]);
const selectedCategories = ref([]);
const stock = ref('');
const colors = ['Red', 'Blue', 'White', 'Black', 'Brown', 'Green'];
const categories = ['Sofa', 'Table', 'Chair', 'Carpet', 'Cupboard'];

definePageMeta({
  layout: 'dashboard',
  middleware: authGuard,
});

const addItem = () => {
  // Handle form submission logic
  const newItem = {
    name: productName.value,
    description: productDescription.value,
    price: price.value,
    discount: isDiscounted.value ? discount.value : null,
    colors: selectedColors.value,
    categories: selectedCategories.value,
    stock: stock.value,
    // Handle photo upload if needed
  };

  console.log('Item Added:', newItem);
};

const onFileChange = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Photo Selected:', file);
    // Handle the file upload logic here
  }
};
</script>

<style scoped></style>
