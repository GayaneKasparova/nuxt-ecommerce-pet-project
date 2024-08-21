import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login as apiLogin } from '~/services/authService/authService';
import {
  setToken,
  clearToken,
  getToken,
} from '~/services/tokenService/tokenService';
import { decodeToken, isTokenExpired } from '~/utils/jwt'; // Assuming these utilities exist

export const useAuth = () => {
  const router = useRouter();
  const isAuthenticated = ref<boolean>(false);

  // Initialize isAuthenticated based on client-side localStorage
  if (typeof window !== 'undefined') {
    const token = getToken();
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && !isTokenExpired(decodedToken)) {
        isAuthenticated.value = true;
      } else {
        clearToken(); // Clear token if it's expired
      }
    }
  }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const token = await apiLogin({ email, password });
      const decodedToken = decodeToken(token);

      if (decodedToken && !isTokenExpired(decodedToken)) {
        setToken(token);
        isAuthenticated.value = true;
      } else {
        throw new Error('Received an invalid or expired token.');
      }
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
