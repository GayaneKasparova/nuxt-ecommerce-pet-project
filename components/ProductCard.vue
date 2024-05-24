<template>
  <div class="relative">
    <NuxtLink :to="navigateUrl">
      <NuxtImg
        class="max-h-72 w-96 rounded-xl"
        :src="imageUrl"
        :alt="title"
        @error="handleImageError"
        lazy
      />
      <div class="max-w-92 mt-4">
        <span class="text-p1-bold">{{ title }}</span>
      </div>
    </NuxtLink>
    <div class="mt-2">
      <div class="flex items-center p-1">
        <span v-for="rating in ratings" :key="rating">
          <RatingSvg />
        </span>
        <span class="ml-2 text-p3-reg text-gray-400">{{ ratings }}.0</span>
        <span class="px-1 text-p3-reg text-gray-400">
          ({{ soldCount }} Sell)</span
        >
      </div>
      <div class="p-1">
        <span class="text-p1-bold font-black">${{ price }} Price</span>
        <span class="p-2 text-xl font-thin text-gray-400 line-through">{{
          salePrice
        }}</span>
        <span
          class="w-69 h-30 mx-1 rounded bg-red-600 p-1 text-sm font-thin text-white"
          >{{ priceOff }}</span
        >
      </div>
    </div>
    <div>
      <FavoriteSvg
        @click="handleFavoriteClick"
        class="absolute right-6 top-6"
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
    navigateUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: defaultImage,
    },
    price: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: String,
      default: '$200',
    },
    soldCount: {
      type: Number,
      default: 25,
    },
    priceOff: {
      type: String,
      default: '15% Off',
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
