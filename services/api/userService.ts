import { useNuxtApp } from '#app';
import type { User } from '~/types/User';

export default {
  async getUsers(): Promise<User[]> {
    const { $axios } = useNuxtApp();
    const response = await $axios.get<User[]>('/users');
    return response.data;
  },
  async getUserById(id: string): Promise<User> {
    const { $axios } = useNuxtApp();
    const response = await $axios.get<User>(`/users/${id}`);
    return response.data;
  },
};
