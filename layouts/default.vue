<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div class="h-screen flex flex-col justify-between py-5 px-10">
    <Header/>
    <main class="h-full py-10">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>
