<template>
  <section class="my-12 p-5" v-if="hasBestSellerProducts">
    <div class="flex items-center justify-between">
      <h2 class="mr-4 text-h2">Best Seller</h2>
      <p class="cursor-pointer text-p1-bold" @click="seeBestSeller">See All</p>
    </div>

    <ul
      class="mt-12 grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="product in bestSellerProducts" :key="product._id">
        <ProductCard
          class="max-w-96"
          :key="product._id"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :category="product.category"
          :image="product.imageUrls[0]"
          :color="product.color[0]"
          :manufacturer="product.manufacturer"
          :salePrice="product.salePrice"
          :sale="product.sale"
          :soldCount="product.soldCount"
          :stock="product.stock"
          :ratings="product.ratings"
          :navigate-url="`/products/${product._id}`"
          :price-off="product.salePrice"
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
