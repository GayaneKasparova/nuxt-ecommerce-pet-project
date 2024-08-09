import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL:
      'https://ecommerce-pet-project-backend-f491f8d409a2.herokuapp.com/',
  });

  instance.interceptors.request.use(config => {
    console.log('Making request to ' + config.url);
    return config;
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      console.error('Error:', error);
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: instance,
    },
  };
});
