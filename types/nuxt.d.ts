import { AxiosInstance } from 'axios';

declare module '#app' {
  interface NuxtApp {
    $axios: AxiosInstance;
    $api: AxiosInstance; // If you also provided it as `$api`
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance; // If you also provided it as `$api`
  }
}
