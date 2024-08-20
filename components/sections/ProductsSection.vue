<template>
  <section class="my-12 p-5" v-if="hasProducts">
    <div class="flex items-center justify-between">
      <h2 class="mr-4 text-h2">Products</h2>
      <p class="cursor-pointer text-p1-bold" @click="seeAllProducts">See All</p>
    </div>
    <ul
      class="mt-12 grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <li v-for="product in products" :key="product.id">
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
    products: {
      type: Array,
      required: true,
    },
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
      seeAllProducts,
    };
  },
};
</script>

<style></style>
