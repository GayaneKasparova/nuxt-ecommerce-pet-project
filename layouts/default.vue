<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div class="h-screen flex flex-col justify-between">
    <Header/>
    <main class="min-h-[100%] max-w-[1440px] m-auto">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>
