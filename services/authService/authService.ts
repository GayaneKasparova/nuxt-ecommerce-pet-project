import { useNuxtApp } from 'nuxt/app';
import type { LoginResponse, UserCredentials } from '~/types/Auth';

export const login = async (credentials: UserCredentials): Promise<string> => {
  const { $axios } = useNuxtApp(); // Use the injected axios instance
  try {
    const response = await $axios.post<LoginResponse>(
      '/authJWT/login',
      credentials
    );
    return response.data.token;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const logout = async (): Promise<any> => {
  const { $axios } = useNuxtApp();
  try {
    return await $axios.post('/authJWT/logout');
    // Optionally handle server-side token invalidation
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Logout failed');
  }
};
