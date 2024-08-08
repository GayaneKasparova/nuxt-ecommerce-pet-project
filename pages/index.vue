<script setup>
import { computed, toRaw } from 'vue';
import Banner from '~/components/Banner.vue';
import productService from '~/services/api/productService.ts';
import BestSellerSection from '~/components/sections/BestSellerSection.vue';
import ProductsSection from '~/components/sections/ProductsSection.vue';

// SEO Metadata
useSeoMeta({
  title: 'Home',
});

const { data, error } = await useAsyncData('products', async () => {
  return await productService.getProducts();
});

// Error handling
if (error.value) {
  console.error('Error fetching products:', error.value);
}

const mainProducts = computed(() => {
  return data.value ? data.value.slice(0, 8) : [];
});

const bestSellerData = computed(() => {
  return data.value ? data.value.slice(0, 3) : [];
});
</script>

<template>
  <Banner />
  <BestSellerSection :bestSellerProducts="bestSellerData" />
  <ProductsSection :products="mainProducts" />
</template>
