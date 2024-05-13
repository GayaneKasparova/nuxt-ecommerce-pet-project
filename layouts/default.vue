<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <div class="flex h-screen flex-col justify-between">
    <Header />
    <main class="m-auto min-h-[100%] max-w-[1440px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
