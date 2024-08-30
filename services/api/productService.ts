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

  async getProductsBySellerId(id: string): Promise<Product[]> {
    const { $axios } = useNuxtApp();
    const response = await $axios.get<Product[]>(`/products/seller/${id}`);
    return response.data;
  },

  async addProduct(data: any): Promise<Product> {
    const { $axios } = useNuxtApp();
    const response = await $axios.post<Product>(`/products`, data,
      {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async deleteProduct(productId: String): Promise<Product> {
    const { $axios } = useNuxtApp();
    const response = await $axios.delete<Product>(`/products/${productId}`);
    return response.data;
  },
  
};
