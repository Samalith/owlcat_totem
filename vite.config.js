import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';

const path = require('path');

//https://vitejs.dev/config/
export default defineConfig({
  base: '/owlcat_totem/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~bootstrap': 'bootstrap',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables";`
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // limit chunk size
    rollupOptions: { // manual rollup
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
})