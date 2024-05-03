<script setup>
import ProductCard from "../../components/ProductCard.vue";
import { useFiltersStore } from "../../store/filters.ts";
import { storeToRefs} from "pinia";

const inputVal = ref('');
const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)

useSeoMeta({
  title: 'Products'
})

const query = gql`
  query getProducts {
   products(categoryId: 3, limit: 3) {
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
console.log(data, 'yy')

</script>

<template>
 
  <div>
    {{ filtersList }}
    <input v-model="inputVal">
    <button @click="addValueToFilterList(inputVal)">+ Add</button>

    <h1 class="my-4 bg-slate-500">Products</h1>
    <ul class="grid mt-12 lg:grid-cols-3" v-if="data?.products?.length">
      <li v-for="product in data?.products">
        <ProductCard
        :navigate-url="`/products/${product?.id}`"
        :image-url="product?.images[0]"
        :title="product.title"
        :price="product.price"
        />
      </li>
    </ul>
  </div>
</template>
