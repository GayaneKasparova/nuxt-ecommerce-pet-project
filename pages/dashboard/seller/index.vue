<template>
  <div
    class="dashboard-container flex min-h-screen items-center justify-center bg-gray-100"
  >
    <div>
      <button @click="handleLogout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { clearToken } from '~/services/tokenService/tokenService';
import { logout } from '~/services/authService/authService';
import authGuard from '~/middleware/guards/authGuard';

definePageMeta({
  layout: false,
  middleware: authGuard,
});

const router = useRouter();

const handleLogout = async () => {
  try {
    const { data } = await logout();
    router.push('/dashboard/login');
    clearToken();
    alert(data.message);
  } catch (error: any) {
    alert(error.message);
  }
};
</script>

<style scoped></style>
