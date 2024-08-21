import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { clearToken, getToken } from '~/services/tokenService/tokenService';
import { decodeToken, isTokenExpired } from '~/utils/jwt';
import type { CustomJwtPayload } from '~/utils/jwt';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Ensure this code runs only on the client-side
  if (process.client) {
    const token = getToken();

    if (token) {
      const decodedToken: CustomJwtPayload | null = decodeToken(token);

      // Check if token is expired or invalid
      if (decodedToken && !isTokenExpired(decodedToken)) {
        if (decodedToken.userId) {
          // If the user is authenticated, redirect to the desired page
          if (to.path === '/dashboard/login') {
            return navigateTo(
              `/dashboard/seller/${decodedToken.userId}/add-product`
            );
          }
        } else {
          // Token is invalid but present
          clearToken();
          return navigateTo('/dashboard/login');
        }
      } else {
        // Token is expired or invalid
        clearToken();
        return navigateTo('/dashboard/login');
      }
    } else {
      // No token present
      if (!['/dashboard/login', '/dashboard/register'].includes(to.path)) {
        return navigateTo('/dashboard/login');
      }
    }
  }
});
