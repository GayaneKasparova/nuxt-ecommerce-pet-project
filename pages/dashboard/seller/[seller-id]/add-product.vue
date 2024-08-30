<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="flex-1 p-8">
      <div class="min-h-screen bg-gray-100 p-8">
        <div>
          <h1 class="mb-6 text-2xl font-bold">Add Product</h1>
          <form @submit.prevent="addItem">
            <!-- Product Name -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Name</label>
              <input
                v-model="productName"
                type="text"
                placeholder="Product name"
                class="mt-1 w-1/2 rounded-md border border-gray-300 p-2"
                required
              />
            </div>
            <!-- Product Manufacturer -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Manufacturer</label>
              <input
                v-model="productManufacturer"
                type="text"
                placeholder="Product Manufacturer"
                class="mt-1 w-1/2 rounded-md border border-gray-300 p-2"
              />
            </div>

            <!-- Product Description -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Description</label>
              <textarea
                v-model="productDescription"
                placeholder="Product description"
                class="mt-1 w-1/2 h-30 rounded-md border border-gray-300 p-2"
                required
              ></textarea>
            </div>

            <!-- Product Image url -->
            <div class="mb-4">
              <label class="block text-gray-700">Product Image Url</label>
              <input
                v-model="productImageUrl"
                type="text"
                placeholder="Product Image Url"
                class="mt-1 w-1/2 rounded-md border border-gray-300 p-2"
              />
            </div>

            <!-- Product Photo -->
            <div class="mb-4">
              <div class="flex items-center">
                <!-- Display selected images -->
                <div class="ml-4 flex flex-wrap">
                  <div
                    v-for="(image, index) in selectedImages"
                    :key="index"
                    class="relative w-32 h-32 p-1"
                  >
                    <!-- Display the image preview -->
                    <img
                      :src="getObjectURL(image)"
                      alt="Selected Image"
                      class="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <!-- Remove button (icon) in the corner -->
                    <button
                      type="button"
                      @click="removeImage(index)"
                      class="absolute top-0 right-0 m-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                    >
                      <span class="text-xl">&times;</span>
                    </button>
                  </div>
                </div>
                <!-- Add Photos Button -->
                <label
                  for="file-upload"
                  class="flex flex-col items-center justify-center w-30 h-30 rounded-lg border-2 border-dashed border-gray-300 bg-gray-200 p-4 cursor-pointer"
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
                  <span class="mt-2 text-sm text-gray-600">Add Photos</span>
                  <input
                    id="file-upload"
                    type="file"
                    class="hidden"
                    @change="onFileChange"
                    multiple
                  />
                </label>
              </div>
            </div>



            <!-- Price and Discount -->
            <div class="mb-4 flex items-end space-x-4">
              <div>
                <label class="block text-gray-700">Price</label>
                <input
                  v-model="price"
                  type="number"
                  placeholder="Ex: 120"
                  class="mt-1rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
              <div class="flex items-center">
                <input
                  v-model="isDiscounted"
                  type="checkbox"
                  class="mr-2"
                  id="discount-checkbox"
                />
                <label for="discount-checkbox" class="mr-4 text-gray-700">Sale Price</label>
                <input
                  v-model="salePrice"
                  type="number"
                  placeholder="Ex: 20"
                  class="w-1/2 rounded-md border border-gray-300 p-2"
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
                  <!-- Change type from checkbox to radio -->
                  <input
                    type="radio"
                    :value="category"
                    v-model="selectedCategories"
                    class="mr-2"
                    name="category"
                    required
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
                class="mt-1 w-1/5 rounded-md border border-gray-300 p-2"
                required
              />
            </div>

            <!-- Add Item Button -->
            <div class="flex justify-end">
              <button
                type="submit"
                class="w-1/5 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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
import { ref } from 'vue';
import productService from '~/services/api/productService';
import { useRoute } from 'vue-router';
import authGuard from '~/middleware/guards/authGuard';

const productName = ref('');
const productManufacturer = ref('');
const productDescription = ref('');
const productImageUrl = ref('');
const price = ref('');
const salePrice = ref('');
const isDiscounted = ref(false);
const selectedColors = ref([]);
const selectedCategories = ref('');
const stock = ref('');
const selectedImages = ref<File[]>([]); // Array for selected images
const colors = ['Red', 'Blue', 'White', 'Black', 'Brown', 'Green'];
const categories = ['Sofa', 'Table', 'Chair', 'Carpet', 'Cupboard'];

definePageMeta({
  layout: 'dashboard',
  middleware: authGuard,
});

const route = useRoute();

const addItem = async () => {
  try {
    const formData = new FormData();

    const data = {
      name: productName.value,
      manufacturer: productManufacturer.value,
      description: productDescription.value,
      imageUrls: productImageUrl.value,
      sellerId: route.params.sellerid as string,
      price: price.value,
      salePrice: isDiscounted.value ? salePrice.value : '',
      sale: isDiscounted.value ? 'true' : 'false',
      colors: selectedColors.value,
      category: selectedCategories.value,
      stock: stock.value,
      soldCount: 0,
      ratings: 0,
      imageKeys: [],
    };

    // Append the `data` object as a string to FormData
    formData.append('data', JSON.stringify(data));

    // Append each image individually to FormData
    if (selectedImages.value.length > 0) {
      selectedImages.value.forEach((image) => {
        formData.append(`files`, image); // Append each image with a "files" key
      });
    }

    // Send the formData to the productService
    const response = await productService.addProduct(formData);
    console.log('Product added successfully:', response);
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

// Handle file selection
const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files ? Array.from(input.files) : [];
  selectedImages.value = [...selectedImages.value, ...files]; // Append selected files to the array
};

const getObjectURL = (file: File) => {
  return URL.createObjectURL(file);
};

// Function to handle cleanup
const cleanupObjectURLs = () => {
  selectedImages.value.forEach(image => URL.revokeObjectURL(getObjectURL(image)));
};

// Call cleanup function before the component is unmounted
onBeforeUnmount(() => {
  cleanupObjectURLs();
});

// Remove image from the list
const removeImage = (index: number) => {
  selectedImages.value.splice(index, 1); // Remove the image at the specified index
};
</script>


<style scoped></style>
