<script setup>
import Banner from '~/components/Banner.vue';
import ProductsSection from '~/components/sections/ProductsSection.vue';
import BestSellerSection from '~/components/sections/BestSellerSection.vue';

useSeoMeta({
  title: 'Home',
});

const query = gql`
  query getProducts {
    products(categoryId: 3) {
      id
      title
      price
      description
      images
      creationAt
      updatedAt
    }
  }
`;

const { data } = await useAsyncQuery(query);
const mainProducts = data?.value?.products.slice(0, 8);
const bestSellerData = data?.value?.products.slice(0, 3);
</script>

<template>
  <Banner />
  <BestSellerSection :bestSellerProducts="bestSellerData" />
  <ProductsSection :products="mainProducts" />
</template>
