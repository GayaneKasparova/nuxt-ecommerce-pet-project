<script setup>
const route = useRoute();
const productId = route.params.id;

useSeoMeta({
  title: `Product-${productId}`,
});
</script>

<template>
  <h1>Product page</h1>
  <p>Product id - {{ productId && productId }}</p>
</template>
