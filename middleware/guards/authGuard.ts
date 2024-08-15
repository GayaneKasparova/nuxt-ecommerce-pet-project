import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { getToken } from '~/services/tokenService/tokenService';
import { useAuth } from '~/composable/useAuth';

export default defineNuxtRouteMiddleware((to, from) => {
  // Check if this code is running on the client side
  if (process.client) {
    const token = getToken();
    const { isAuthenticated } = useAuth();

    // If not authenticated, redirect to the login page
    if (!isAuthenticated || !token) {
      return navigateTo('/dashboard/login');
    }
  }
  // Optionally, verify token validity with the server here
});
