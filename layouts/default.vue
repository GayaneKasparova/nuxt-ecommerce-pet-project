<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <div class="flex h-screen flex-col justify-between px-10 py-5">
    <Header />
    <main class="h-full py-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>
