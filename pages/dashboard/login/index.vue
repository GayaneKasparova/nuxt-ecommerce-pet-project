<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
      <h2 class="text-center text-2xl font-bold text-gray-800">
        Seller Dashboard
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="relative space-y-1">
          <UserSvg class="absolute left-1.5 top-4" />
          <input
            type="text"
            id="email"
            v-model="email"
            placeholder="Email"
            class="w-full rounded-md border border-gray-300 px-3 py-2 pl-8 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div class="relative space-y-1">
          <PasswordSvg class="absolute left-1.5 top-2.5" />
          <VisibilityOff
            @click="togglePasswordVisibility"
            :class="showPassword ? 'text-blue-500' : 'text-gray-500'"
            class="absolute right-2.5 top-2.5 cursor-pointer"
          />
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="Password"
            class="w-full rounded-md border border-gray-300 px-3 py-2 pl-8 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UserSvg from '~/components/SVG/User.vue';
import PasswordSvg from '~/components/SVG/Password.vue';
import VisibilityOff from '~/components/SVG/VisibilityOff.vue';
import { useAuth } from '~/composable/useAuth';
import { getToken } from '~/services/tokenService/tokenService';
import type { CustomJwtPayload } from '~/utils/jwt';
import authGuard from '~/middleware/guards/authGuard';

const email = ref<string>('');
const password = ref<string>('');
const showPassword = ref<boolean>(false);
const router = useRouter();
const { login } = useAuth();

definePageMeta({
  layout: false,
  middleware: authGuard,
});

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
    const token: string | null = getToken();
    if (token) {
      const payloadData: CustomJwtPayload | null = decodeToken(token);
      if (payloadData?.userId) {
        await router.push(
          `/dashboard/seller/${payloadData.userId}/add-product`
        );
      }
    }
  } catch (error: any) {
    alert(error.message || 'Login failed');
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>
