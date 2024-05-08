<template>
  <div class="relative p-4 font-sans">
    <NuxtLink :to="navigateUrl">
      <img class="rounded-xl max-h-72 w-96"
           :src="imageUrl"
           :alt="title"
           @error="handleImageError"
      >
      <div class="mt-4 max-w-72">
        <span class="text-xl font-black">{{ title }}</span>
      </div>
    </NuxtLink>
    <div class="mt-2">
      <div class="flex items-center p-1">
        <span v-for="rating in ratings" :key="rating">
          <RatingSvg/>
        </span>
        <span class="ml-2">{{ ratings }}.0</span>
        <span class="px-1 font-thin text-gray-400"> ({{ soldCount }} Sell)</span>
      </div>
      <div class="p-1">
        <span class="text-xl font-black">{{ price }} Price</span>
        <span class="p-2 text-xl font-thin text-gray-400 line-through">{{ salePrice }}</span>
        <span class="p-1 mx-1 text-sm font-thin text-white bg-red-600 rounded w-69 h-30">{{ priceOff }}</span>
      </div>
    </div>
    <div>
      <FavoriteSvg @click="handleFavoriteClick" class="absolute top-6 right-6"/>
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
    navigateUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    salePrice: {
      type: String,
      default: '$200',
    },
    soldCount: {
      type: Number,
      default: 25
    },
    priceOff: {
      type: String,
      default: '15% Off'
    },
    ratings: {
      type: Number,
      default: 5,
    },
  },
  setup(props, { emit }) {
    const handleFavoriteClick = () => {
      emit('click');
    };

    const handleImageError = (event) => {
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
