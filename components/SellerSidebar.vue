<template>
  <aside class="w-64 bg-white shadow-md">
    <div class="border-b p-8">
      <NuxtLink to="/">
        <Logo
          class="h-7 transition-all duration-300 hover:drop-shadow-lg lg:h-10"
        />
      </NuxtLink>
    </div>
    <nav class="mt-6">
      <ul>
        <li
          class="flex items-center p-4 text-gray-700 hover:bg-gray-200"
          @click="goToProducts"
        >
          <MenuItem class="mr-3" />
          Product List
        </li>
        <li
          class="flex items-center p-4 text-gray-700 hover:bg-gray-200"
          @click="goToAddProduct"
        >
          <MenuItem class="mr-3" />
          Add item
        </li>
      </ul>
    </nav>
    <div
      @click="handleLogout"
      class="mt-auto flex items-center border-t p-4 text-gray-700 hover:cursor-pointer hover:bg-gray-200"
    >
      <Logout class="mr-3" />Log Out
    </div>
  </aside>
</template>

<script setup lang="ts">
import MenuItem from '~/components/SVG/MenuItem.vue';
import Logout from '~/components/SVG/Logout.vue';
import { logout } from '~/services/authService/authService';
import { clearToken } from '~/services/tokenService/tokenService';
import Logo from '~/components/SVG/Logo.vue';

const router = useRouter();
const route = useRoute();

const goToProducts = () => {
  const basePath = route.path.split('/').slice(0, -1).join('/');
  router.push(`${basePath}/products`);
};

const goToAddProduct = () => {
  const basePath = route.path.split('/').slice(0, -1).join('/');
  router.push(`${basePath}/add-product`);
};

const handleLogout = async () => {
  try {
    await logout();
    clearToken();
    await router.push('/dashboard/login');
  } catch (error: any) {
    console.error('Logout failed:', error.message);
  }
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
