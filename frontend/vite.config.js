
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { register } from 'module';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
     input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'cart.html'),
        planesPago: resolve(__dirname, 'planesPago.html'),
        login: resolve(__dirname, 'login.html'),
        register: resolve(__dirname, 'register.html')
      }
    }
  }
});