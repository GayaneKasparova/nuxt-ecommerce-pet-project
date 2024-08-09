<template>
  <div class="relative">
    <NuxtLink :to="navigateUrl">
      <NuxtImg
        class="h-72 w-96 rounded-xl"
        :src="image"
        :alt="name"
        @error="handleImageError"
        lazy
      />
      <div class="max-w-92 mt-4">
        <span class="text-p1-bold">{{ name }}</span>
      </div>
    </NuxtLink>
    <div class="mt-2">
      <div class="flex items-center p-1">
        <span v-for="rating in Math.ceil(ratings)" :key="rating">
          <RatingSvg />
        </span>
        <span class="ml-2 text-p3-reg text-gray-400">{{ ratings }}.0</span>
        <span class="px-1 text-p3-reg text-gray-400">
          ({{ soldCount }} Sell)</span
        >
      </div>
      <div class="p-1">
        <span class="text-p1-bold font-black">${{ price }} Price</span>
        <span
          v-if="sale"
          class="p-2 text-xl font-thin text-gray-400 line-through"
          >{{ salePrice }}</span
        >
        <span
          v-if="sale"
          class="w-69 mx-1 h-30 rounded bg-red-600 p-1 text-sm font-thin text-white"
          >{{ (((price - salePrice) / price) * 100).toFixed(2) }}% off</span
        >
      </div>
    </div>
    <div>
      <FavoriteSvg
        @click="handleFavoriteClick"
        class="absolute right-6 top-6 cursor-pointer"
      />
    </div>
  </div>
</template>

<script>
import RatingSvg from '../components/SVG/Rating.vue';
import FavoriteSvg from '../components/SVG/Favorite.vue';
import defaultImage from '../public/card-default-image.jpeg';

export default {
  name: 'Card',
  components: {
    RatingSvg,
    FavoriteSvg,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    salePrice: {
      type: Number,
      required: false,
    },
    priceOff: {
      type: Number,
      default: 15,
    },
    soldCount: {
      type: Number,
      default: 25,
    },
    stock: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      default: 5,
    },
    navigateUrl: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleFavoriteClick = () => {
      emit('click');
    };

    const handleImageError = event => {
      event.target.src = defaultImage;
    };

    return {
      handleFavoriteClick,
      handleImageError,
    };
  },
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
