<template>
  <h1>test</h1>
  <!--  <div class="flex min-h-screen bg-gray-100">-->
  <!--    &lt;!&ndash; Main Content &ndash;&gt;-->
  <!--    <main class="flex-1 p-8">-->
  <!--      <div class="min-h-screen bg-gray-100 p-6">-->
  <!--        &lt;!&ndash; Header Section &ndash;&gt;-->
  <!--        <div class="mb-6 flex items-center justify-between">-->
  <!--          <h1 class="text-2xl font-bold">Product List</h1>-->
  <!--        </div>-->

  <!--        &lt;!&ndash; Search and Filter Section &ndash;&gt;-->
  <!--        <div class="mb-6 rounded-md bg-white p-4 shadow-md">-->
  <!--          <div class="mb-4 flex items-center justify-between">-->
  <!--            <input-->
  <!--              type="text"-->
  <!--              placeholder="Search here"-->
  <!--              class="w-1/3 rounded-md border px-4 py-2"-->
  <!--            />-->
  <!--            <div class="flex space-x-4">-->
  <!--              <select class="px-4 py-2">-->
  <!--                <option>Category</option>-->
  <!--                &lt;!&ndash; Add categories here &ndash;&gt;-->
  <!--              </select>-->
  <!--              <select class="px-4 py-2">-->
  <!--                <option>Sort By</option>-->
  <!--                &lt;!&ndash; Add sort options here &ndash;&gt;-->
  <!--              </select>-->
  <!--              <button-->
  <!--                @click="addProduct"-->
  <!--                class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"-->
  <!--              >-->
  <!--                Add Item-->
  <!--              </button>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->

  <!--        &lt;!&ndash; Product Table &ndash;&gt;-->
  <!--        <div class="overflow-x-auto">-->
  <!--          <table class="min-w-full table-auto bg-white shadow-md">-->
  <!--            <thead>-->
  <!--              <tr class="bg-gray-100 text-left">-->
  <!--                <th class="px-6 py-3 text-sm font-bold text-gray-600">-->
  <!--                  Product-->
  <!--                </th>-->
  <!--                <th class="px-6 py-3 text-sm font-bold text-gray-600">Price</th>-->
  <!--                <th class="px-6 py-3 text-sm font-bold text-gray-600">Stock</th>-->
  <!--                <th class="px-6 py-3 text-sm font-bold text-gray-600">Sold</th>-->
  <!--                <th class="px-6 py-3 text-sm font-bold text-gray-600">-->
  <!--                  Actions-->
  <!--                </th>-->
  <!--              </tr>-->
  <!--            </thead>-->
  <!--            <tbody>-->
  <!--              <tr-->
  <!--                v-for="product in currentSellerProducts"-->
  <!--                :key="product._id"-->
  <!--                class="border-b hover:bg-gray-50"-->
  <!--              >-->
  <!--                &lt;!&ndash; Product Info &ndash;&gt;-->
  <!--                <td class="flex items-center px-6 py-4">-->
  <!--                  <img-->
  <!--                    :src="product.imageUrls[0]"-->
  <!--                    alt="Product image"-->
  <!--                    class="mr-4 h-12 w-12 rounded-md"-->
  <!--                  />-->
  <!--                  <h2 class="font-bold">{{ product.name }}</h2>-->
  <!--                </td>-->

  <!--                &lt;!&ndash; Price Info &ndash;&gt;-->
  <!--                <td class="px-6 py-4 text-sm text-gray-500">-->
  <!--                  <span v-if="product.sale" class="mr-2 line-through">-->
  <!--                    {{ product.salePrice }}-->
  <!--                  </span>-->
  <!--                  {{ product.price }}-->
  <!--                </td>-->

  <!--                &lt;!&ndash; Stock Info &ndash;&gt;-->
  <!--                <td class="px-6 py-4 text-sm text-gray-500">-->
  <!--                  {{ product.stock || 'In Stock' }}-->
  <!--                </td>-->

  <!--                &lt;!&ndash; Sold Info &ndash;&gt;-->
  <!--                <td class="px-6 py-4 text-sm text-gray-500">-->
  <!--                  {{ product.soldCount || '0' }}-->
  <!--                </td>-->

  <!--                &lt;!&ndash; Actions &ndash;&gt;-->
  <!--                <td class="px-6 py-4">-->
  <!--                  <div class="flex space-x-2">-->
  <!--                    <span class="cursor-pointer" @click="editProduct"-->
  <!--                      ><Edit-->
  <!--                    /></span>-->
  <!--                    <span class="cursor-pointer" @click="deleteProduct"-->
  <!--                      ><Delete />-->
  <!--                    </span>-->
  <!--                  </div>-->
  <!--                </td>-->
  <!--              </tr>-->
  <!--            </tbody>-->
  <!--          </table>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </main>-->
  <!--  </div>-->
</template>

<script setup>
import { computed, ref } from 'vue';
import authGuard from '~/middleware/guards/authGuard.ts';
import Delete from '~/components/SVG/Delete.vue';
import Edit from '~/components/SVG/Edit.vue';
import productService from '~/services/api/productService.ts';

definePageMeta({
  layout: 'dashboard',
  middleware: authGuard,
});

// const router = useRouter();
// const route = useRoute();
//
// const { data, error } = await useAsyncData('products', async () => {
//   return await productService.getProductsBySellerId(route.params.sellerid);
// });
//
// // Error handling
// if (error.value) {
//   console.error('Error fetching products:', error.value);
// }
//
// const currentSellerProducts = computed(() => {
//   return data.value ? data.value : [];
// });
//
// const editProduct = () => {
//   alert('edit');
// };
//
// const deleteProduct = () => {
//   alert('delete Product');
// };
//
// const addProduct = () => {
//   const basePath = route.path.split('/').slice(0, -1).join('/');
//   router.push(`${basePath}/add-product`);
// };
</script>

<style>
/* Add any custom styles here */
</style>
