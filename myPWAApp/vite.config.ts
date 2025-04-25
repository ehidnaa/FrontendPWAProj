import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@ionic/angular']
  }
});