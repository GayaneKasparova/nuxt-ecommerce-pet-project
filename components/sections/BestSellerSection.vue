<template>
  <section class="my-12" v-if="hasBestSellerProducts">
    <div class="flex items-center justify-between">
      <h2 class="mr-4 text-4xl">Best Seller</h2>
      <p class="text-xl cursor-pointer" @click="seeBestSeller">See All</p>
    </div>

    <ul class="grid mt-12 gap-4 lg:grid-cols-3">
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
    ProductCard
  },
  props: {
    bestSellerProducts: {
      type: Array,
      required: true
    }
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
      seeBestSeller
    };
  }
};
</script>

<style scoped>

</style>
