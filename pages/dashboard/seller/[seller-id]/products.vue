<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="flex-1 p-8">
      <div class="min-h-screen bg-gray-100 p-6">
        <!-- Header Section -->
        <div class="mb-6 flex items-center justify-between">
          <h1 class="text-2xl font-bold">Product List</h1>
        </div>

        <!-- Search and Filter Section -->
        <div class="mb-6 rounded-md bg-white p-4 shadow-md">
          <div class="mb-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search here"
              class="w-1/3 rounded-md border px-4 py-2"
            />
            <div class="flex space-x-4">
              <select class="px-4 py-2">
                <option>Category</option>
                <!-- Add categories here -->
              </select>
              <select class="px-4 py-2">
                <option>Sort By</option>
                <!-- Add sort options here -->
              </select>
              <button
                @click="addProduct"
                class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>

        <!-- Product Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto bg-white shadow-md">
            <thead>
            <tr class="bg-gray-100 text-left">
              <th class="px-6 py-3 text-sm font-bold text-gray-600">
                Product
              </th>
              <th class="px-6 py-3 text-sm font-bold text-gray-600">Price</th>
              <th class="px-6 py-3 text-sm font-bold text-gray-600">Stock</th>
              <th class="px-6 py-3 text-sm font-bold text-gray-600">Sold</th>
              <th class="px-6 py-3 text-sm font-bold text-gray-600">
                Actions
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- Handle Empty List -->
            <tr v-if="currentSellerProducts.length === 0">
              <td colspan="5" class="text-center py-4 text-gray-500">
                No Products Available
              </td>
            </tr>

            <!-- Product Rows -->
            <tr
              v-for="product in currentSellerProducts"
              :key="product._id"
              class="border-b hover:bg-gray-50"
            >
              <!-- Product Info -->
              <td class="flex items-center px-6 py-4">
                <img
                  :src="product.imageUrls?.[0] || '/default-image.jpg'"
                  alt="Product image"
                  class="mr-4 h-12 w-12 rounded-md"
                />
                <h2 class="font-bold">{{ product.name }}</h2>
              </td>

              <!-- Price Info -->
              <td class="px-6 py-4 text-sm text-gray-500">
                  <span v-if="product.sale" class="mr-2 line-through">
                    {{ product.salePrice }}
                  </span>
                {{ product.price }}
              </td>

              <!-- Stock Info -->
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ product.stock || 'In Stock' }}
              </td>

              <!-- Sold Info -->
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ product.soldCount || '0' }}
              </td>

              <!-- Actions -->
              <td class="px-6 py-4">
                <div class="flex space-x-2">
                    <span class="cursor-pointer" @click="editProduct(product)">
                      <Edit />
                    </span>
                  <span
                    class="cursor-pointer"
                    @click="deleteProduct(product)"
                  >
                      <Delete />
                    </span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import authGuard from '~/middleware/guards/authGuard.ts';
import Delete from '~/components/SVG/Delete.vue';
import Edit from '~/components/SVG/Edit.vue';
import productService from '~/services/api/productService.ts';
import Products from '~/pages/dashboard/seller/[seller-id]/products.vue';

definePageMeta({
  layout: 'dashboard',
  middleware: authGuard,
});

// Setup state
const router = useRouter();
const route = useRoute();
const currentSellerProducts = ref([]); // Reactive data for products

// Fetch products for the seller
const fetchProducts = async () => {
  try {
    const data = await productService.getProductsBySellerId(route.params.sellerid.toString());
    if (data && data.length > 0) {
      currentSellerProducts.value = data; // Update the product list
      console.log("Fetched Products:", data); // Debugging line
    } else {
      console.warn('No products found');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Fetch products on component mount
onMounted(() => {
  fetchProducts();
});

// Edit Product
const editProduct = (product) => {
  alert(`Editing product: ${product.name}`);
};

// Delete product and update the list
const deleteProduct = async (product) => {
  try {
    await productService.deleteProduct(product._id);
    // Filter out the deleted product from the list without refetching
    currentSellerProducts.value = currentSellerProducts.value.filter(
      (item) => item._id !== product._id
    );
    console.log("Deleted product:", product._id); // Debugging line
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

// Add Product
const addProduct = () => {
  const basePath = route.path.split('/').slice(0, -1).join('/');
  router.push(`${basePath}/add-product`);
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
