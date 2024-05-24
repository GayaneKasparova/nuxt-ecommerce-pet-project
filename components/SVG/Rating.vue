<template>
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00008 13.3916L14.1501 16.5L12.7834 10.6416L17.3334 6.69996L11.3417 6.19163L9.00008 0.666626L6.65841 6.19163L0.666748 6.69996L5.21675 10.6416L3.85008 16.5L9.00008 13.3916Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'RatingSvg',
  props: {
    fillColor: {
      type: String,
      default: '#FDA746',
    },
  },
};
</script>
