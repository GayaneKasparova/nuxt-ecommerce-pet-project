<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <div class="flex flex-col justify-between font-openSans">
    <Header />
    <div
      class="top-18 absolute left-0 z-30 flex w-full flex-col bg-white text-p1-semibold lg:relative lg:top-0 lg:flex-row lg:bg-none [&>*>*>li]:flex [&>*>*>li]:w-full [&>*>*>li]:justify-center [&>*>*]:flex [&>*>*]:flex-col"
    >
      <div id="nav" class="px-5 py-6 empty:p-0"></div>
      <div id="nav2" class="px-5 pb-6 empty:p-0"></div>
    </div>
    <main class="min-h-full w-full max-w-screen-2xl self-center">
      <slot />
    </main>
    <Footer />
  </div>
</template>
