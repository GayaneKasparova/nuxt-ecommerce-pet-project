<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div class="h-screen flex flex-col justify-between">
    <Header/>
    <main class="h-full">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>
