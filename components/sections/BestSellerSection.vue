<script>
import ProductCard from '@/components/ProductCard';

export default {
  props: {
    bestSellerProducts: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductCard
  },
  methods: {
    seeBestSeller() {
      alert('see best sellers')
    }
  }
}
</script>

<template>
  <section class="my-12" v-if="bestSellerProducts && bestSellerProducts.length">
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
