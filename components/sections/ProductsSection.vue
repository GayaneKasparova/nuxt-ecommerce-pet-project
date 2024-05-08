<template>
  <section class="my-12" v-if="hasProducts">
    <div class="flex items-center justify-between">
      <h2 class="mr-4 text-4xl">Products</h2>
      <p class="text-xl cursor-pointer" @click="seeAllProducts">See All</p>
    </div>
    <ul class="grid mt-12 lg:grid-cols-4 gap-4">
      <li v-for="product in products" :key="product.id">
        <ProductCard
            class="max-w-72"
            :navigate-url="`/products/${product.id}`"
            :image-url="product.images[0]"
            :title="product.title"
            :price="product.price"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue';
import ProductCard from '@/components/ProductCard';

export default {
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const hasProducts = computed(() => {
      return props.products && props.products.length > 0;
    });

    const seeAllProducts = () => {
      alert('See all products');
    };

    return {
      hasProducts,
      seeAllProducts
    };
  }
};
</script>

<style>

</style>
