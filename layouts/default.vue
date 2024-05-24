<script setup lang="ts"></script>

<template>
  <div class="flex h-screen flex-col justify-between">
    <Header />
    <main class="m-auto min-h-full border">
      <slot />
    </main>
    <Footer />
  </div>
</template>
