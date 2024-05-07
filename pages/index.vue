<script setup>
import ProductsSection from '~/components/sections/ProductsSection.vue';
import BestSellerSection from '~/components/sections/BestSellerSection.vue';

useSeoMeta({
  title: 'Home'
})


const query = gql`
  query getProducts {
   products(categoryId:3) {
        id
        title
        price
        description
        images
        creationAt
        updatedAt
    }
  }`
  
const { data } = await useAsyncQuery(query)

</script>

<template>
  <h1>Home page</h1>
  <ProductsSection :products="data?.products"/>
  <BestSellerSection :bestSellerProducts="data?.products"/>
</template>
