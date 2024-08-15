import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login as apiLogin } from '~/services/authService/authService';
import {
  setToken,
  clearToken,
  getToken,
} from '~/services/tokenService/tokenService';

export const useAuth = () => {
  const router = useRouter();
  const isAuthenticated = ref<boolean>(false);

  // Initialize isAuthenticated based on client-side localStorage
  if (typeof window !== 'undefined') {
    isAuthenticated.value = !!getToken();
  }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const token = await apiLogin({ email, password });
      setToken(token);
      isAuthenticated.value = true;
      await router.push('/dashboard/seller');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = (): void => {
    clearToken();
    isAuthenticated.value = false;
    router.push('/dashboard/login');
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
