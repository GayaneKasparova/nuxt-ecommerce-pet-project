import { useNuxtApp } from '#app';
import type Product from '~/types/Product';

export default {
  async getProducts(): Promise<Product[]> {
    const { $axios } = useNuxtApp();
    const response = await $axios.get<Product[]>('/products');
    return response.data;
  },
  async getProductById(id: string): Promise<Product> {
    const { $axios } = useNuxtApp();
    const response = await $axios.get<Product>(`/products/${id}`);
    return response.data;
  },
};
