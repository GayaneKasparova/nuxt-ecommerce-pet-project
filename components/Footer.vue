<template>
  <footer class="bg-black py-8 text-white">
    <div class="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-6">
      <!-- Logo and Description -->
      <div class="md:col-span-2">
        <div class="mb-4 flex items-center space-x-2">
          <NuxtLink to="/">
            <Logo
              fill-color="#FFFFFF"
              class="h-7 transition-all duration-300 hover:drop-shadow-lg lg:h-10"
            />
          </NuxtLink>
        </div>
        <p class="text-sm">
          We are the best furniture platform. We are already working on
          thousands of future home projects. Trust us, you will surely be
          satisfied.
        </p>
      </div>

      <!-- Community Links -->
      <div class="text-center md:text-left">
        <h3 class="mb-4 font-bold">Community</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Job board</a></li>
          <li><a href="#" class="hover:underline">Career Advice</a></li>
          <li><a href="#" class="hover:underline">Pricing</a></li>
          <li><a href="#" class="hover:underline">Assessments</a></li>
          <li><a href="#" class="hover:underline">Powered</a></li>
        </ul>
      </div>

      <!-- About Us Links -->
      <div class="text-center md:text-left">
        <h3 class="mb-4 font-bold">About Us</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Career</a></li>
          <li><a href="#" class="hover:underline">Internship</a></li>
          <li><a href="#" class="hover:underline">Press</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Help & Support Links -->
      <div class="text-center md:text-left">
        <h3 class="mb-4 font-bold">Help & Support</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Job Search</a></li>
          <li><a href="#" class="hover:underline">Hello</a></li>
          <li><a href="#" class="hover:underline">Hiring</a></li>
          <li><a href="#" class="hover:underline">Talent Guide</a></li>
          <li><a href="#" class="hover:underline">Online Test</a></li>
        </ul>
      </div>

      <!-- Contact Us -->
      <div class="text-center md:text-left">
        <h3 class="mb-4 font-bold">Contact Us</h3>
        <p class="mb-2">
          <a href="mailto:hello@shopbag.com" class="hover:underline"
            >Hello@shopbag.com</a
          >
        </p>
        <p class="mb-4">081437650889</p>
        <div class="flex justify-center md:justify-normal">
          <a href="#" aria-label="Facebook" class="hover:underline">
            <Facebook class="m-2" />
          </a>
          <a href="#" aria-label="Twitter" class="hover:underline">
            <Twitter class="m-2" />
          </a>
          <a href="#" aria-label="Instagram" class="hover:underline">
            <Instagram class="m-2" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Links -->
    <div
      class="container mx-auto mt-8 grid border-t border-gray-700 px-4 pt-4 text-center text-sm md:grid-cols-2"
    >
      <p class="mb-4 text-left">2023 © Shopbag - All rights reserved</p>
      <div class="space-x-4 text-right">
        <a href="#" class="hover:underline">Term of Service</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Partners & Affiliates</a>
        <a href="#" class="hover:underline">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific script needed for this footer component
import Logo from '~/components/SVG/Logo.vue';
import Facebook from '~/components/SVG/Facebook.vue';
import Twitter from '~/components/SVG/Twitter.vue';
import Instagram from '~/components/SVG/Instagram.vue';
</script>

<style scoped>
footer {
  background-color: #000000;
}
</style>
