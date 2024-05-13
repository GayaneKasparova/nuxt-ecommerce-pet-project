<script setup>
import { useFiltersStore } from '../../store/filters.ts';
import { storeToRefs } from 'pinia';

const inputVal = ref('');
const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

useSeoMeta({
  title: 'Products',
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
</script>

<template>
  <h1>Products</h1>

  <div>
    {{ filtersList }}
    <input v-model="inputVal" />
    <button @click="addValueToFilterList(inputVal)">+</button>

    <ul v-if="data?.products?.length">
      <li v-for="product in data?.products">
        <NuxtLink :to="`/products/${product?.id}`">
          <NuxtImg :src="product?.images[0]" />
          <h2>{{ product.title }}</h2>
          <p>${{ product.price }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
