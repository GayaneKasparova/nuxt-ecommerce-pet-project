import { defineNuxtPlugin } from 'nuxt/app';
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const axiosInstance = axios.create({
    baseURL: process.env.EXPRESS_API_BASE_URL || 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add a request interceptor to log the request and attach the token
  axiosInstance.interceptors.request.use(config => {
    // Only attach the token if running on the client
    if (process.client) {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  // Add a response interceptor to handle errors
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      console.error('Error:', error);
      return Promise.reject(error);
    }
  );

  // Attach the axios instance to the Nuxt app
  nuxtApp.provide('axios', axiosInstance);
  nuxtApp.provide('api', axiosInstance); // Optional alias for convenience
});
