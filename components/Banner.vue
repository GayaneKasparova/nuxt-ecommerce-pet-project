<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <div class="flex flex-col lg:relative lg:flex-row lg:justify-end">
    <div class="min-h-[250px] lg:max-h-[650px] w-[100%] lg:absolute lg:w-[50%] lg:h-[calc(100%-70px)] left-0 z-20">
      <NuxtImg src="banner-image.jpg" class="h-[100%] w-[100%] z-20 relative"/>
      <NuxtImg v-if="viewport.isGreaterThan('tablet')" src="bubbles.svg" class="absolute bottom right-0 w-60 h-60 translate-x-[50%] translate-y-[-50%] z-10"/>
    </div>

    <div class="bg-turquoise-40 p-5 pb-6 lg:pt-32 lg:pr-24 lg:pb-48 lg:w-[65%] lg:flex lg:justify-end">
      <div class="lg:w-[65%]">
        <h1 class="text-h1">Crafting Better Experience For Your Family</h1>
        <p class="my-6 text-p1-reg text-grey-60">
          We are the best furniture platform. We are already working on thousands
          of future home projects. Trust us, you will surely be satisfied
        </p>
        <div class="flex flex-col lg:flex-row gap-[16px]">
          <BaseButton to="/products" variant="primary">Go Shopping</BaseButton>
          <BaseButton to="/about" variant="outline">Design Inspiration</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
