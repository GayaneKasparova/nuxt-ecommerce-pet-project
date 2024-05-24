<template>
  <section class="my-12 p-5" v-if="hasBestSellerProducts">
    <div class="flex items-center justify-between">
      <h2 class="mr-4 text-h1">Best Seller</h2>
      <p class="cursor-pointer text-p1-bold" @click="seeBestSeller">See All</p>
    </div>

    <ul
      class="mt-12 grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="product in bestSellerProducts" :key="product.id">
        <ProductCard
          class="max-w-96"
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
    ProductCard,
  },
  props: {
    bestSellerProducts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const hasBestSellerProducts = computed(() => {
      return props.bestSellerProducts && props.bestSellerProducts.length > 0;
    });

    const seeBestSeller = () => {
      alert('See best sellers');
    };

    return {
      hasBestSellerProducts,
      seeBestSeller,
    };
  },
};
</script>

<style scoped></style>
