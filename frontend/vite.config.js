
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
     input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'cart.html'),
        form: resolve(__dirname, 'form.html'),
        planesPago: resolve(__dirname, 'planesPago.html')
      }
    }
  }
});