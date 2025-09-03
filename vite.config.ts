import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { Plugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      preload: 'js-lazy',
      preloadFonts: true,
      inlineFonts: true,
    },
    dirStyle: 'flat',
  },
});
