<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div class="flex flex-col lg:relative lg:flex-row lg:justify-end">
    <div class="left-0 z-20 lg:absolute lg:h-[calc(100%-4rem)] lg:w-1/2">
      <NuxtImg
        src="/images/banner-image.jpg"
        class="relative z-20 size-full max-h-48 object-cover sm:max-h-72 lg:max-h-full"
      />
      <NuxtImg
        v-if="viewport.isGreaterThan('tablet')"
        src="/images/bubbles.svg"
        class="bottom absolute right-0 z-10 size-56 -translate-y-1/2 translate-x-1/2"
      />
    </div>

    <div
      class="bg-turquoise-40 p-5 pb-6 lg:flex lg:w-2/3 lg:justify-end lg:pb-48 lg:pr-24 lg:pt-32"
    >
      <div class="lg:w-2/3">
        <h1 class="text-h1">Crafting Better Experience For Your Family</h1>
        <p class="my-6 text-p1-reg text-grey-60">
          We are the best furniture platform. We are already working on
          thousands of future home projects. Trust us, you will surely be
          satisfied
        </p>
        <div class="flex flex-col gap-4 lg:flex-row">
          <BaseButton to="/products" variant="primary">Go Shopping</BaseButton>
          <BaseButton to="/about" variant="outline"
            >Design Inspiration</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
