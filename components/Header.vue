<script setup lang="ts">
import Logo from '~/components/SVG/Logo.vue';
import { ref } from 'vue';
import SearchIcon from '~/components/SVG/Search.vue';
import Menu from '~/components/SVG/Menu.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const isDesktop = breakpoints.greater('lg');

const handleInput = () => {
  // TODO: Handle input logic
  // Handle input logic here if needed
};

const submitSearch = () => {
  // TODO: Handle search submission logic
  // Handle search submission logic here
};

const menu = useState<boolean>('menu', () => false);

const toggleMenu = () => {
  menu.value = !menu.value;
};
</script>

<template>
  <header
    class="relative z-30 flex min-h-18 w-full items-center border-b border-grey-40 p-5 shadow-header lg:min-h-30 lg:px-[6.5%] 2xl:px-24"
  >
    <nav class="w-full">
      <ul class="flex items-center justify-between">
        <li>
          <NuxtLink to="/">
            <Logo
              class="h-7 transition-all duration-300 hover:drop-shadow-lg lg:h-10"
            />
          </NuxtLink>
        </li>
        <li class="mx-12">
          <Teleport to="#nav" :disabled="isDesktop">
            <ul
              class="flex items-center gap-6 text-p1-semibold lg:relative lg:top-0 lg:flex-row lg:gap-8"
              v-if="menu || isDesktop"
            >
              <li>
                <NuxtLink to="/products">Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about">About</NuxtLink>
              </li>
            </ul>
          </Teleport>
        </li>
        <li class="ml-auto mr-5 lg:w-full">
          <div
            class="mx-0.5 my-1 inline-block h-12 w-12 align-bottom lg:relative lg:w-full"
          >
            <form>
              <label
                class="relative z-20 inline-block h-12 w-full cursor-pointer select-none p-0 pl-8 pr-8 text-center text-sm text-white no-underline lg:absolute lg:right-0 lg:w-10"
                for="headerSearch"
              >
                <SearchIcon
                  class="absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 translate-x-1/2 transform"
                />
              </label>
              <input
                class="lg:h-15 absolute right-12 z-10 h-12 w-0 border-0 bg-white pl-4 pr-12 outline-none transition-all focus:right-14 focus:w-[calc(100%-80px)] focus:rounded-lg focus:border focus:border-grey-100 focus:pr-4 lg:right-0 lg:w-full lg:rounded-lg lg:border lg:border-grey-40 lg:bg-grey-20 lg:focus:right-0 lg:focus:w-full lg:focus:border-grey-100 lg:focus:bg-white"
                id="headerSearch"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </li>
        <li class="cursor-pointer lg:hidden">
          <Menu @click="toggleMenu" />
        </li>
        <Teleport to="#nav2" :disabled="isDesktop">
          <ul class="flex items-center gap-6 lg:gap-0" v-if="menu || isDesktop">
            <li>
              <BaseButton
                to=""
                variant="ghost"
                :minWidth="!isDesktop"
                class="px-9"
                >Sign up</BaseButton
              >
            </li>
            <li>
              <BaseButton to="" variant="primaryLight" :minWidth="!isDesktop"
                >Login</BaseButton
              >
            </li>
          </ul>
        </Teleport>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
