<template>
  <svg
    class="favorite"
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="toggleFill"
    :class="{ filled: isFilled }"
  >
    <circle cx="26" cy="26" r="26" fill="white" />
    <g clip-path="url(#clip0_43_4005)">
      <path
        d="M26.0001 38.4667L24.0667 36.7067C17.2001 30.48 12.6667 26.3733 12.6667 21.3333C12.6667 17.2267 15.8934 14 20.0001 14C22.3201 14 24.5467 15.08 26.0001 16.7867C27.4534 15.08 29.6801 14 32.0001 14C36.1067 14 39.3334 17.2267 39.3334 21.3333C39.3334 26.3733 34.8001 30.48 27.9334 36.72L26.0001 38.4667Z"
        :fill="isFilled ? fillColor : '#E4E4E4'"
      />
    </g>
    <defs>
      <clipPath id="clip0_43_4005">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(10 10)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'FavoriteSvg',
  data() {
    return {
      isFilled: false,
      fillColor: 'red',
    };
  },
  methods: {
    toggleFill() {
      this.isFilled = !this.isFilled;
    },
  },
};
</script>

<style scoped>
.favorite.filled {
  cursor: pointer;
  fill: red;
}
</style>
