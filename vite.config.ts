import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    target: 'esnext',
  },
  plugins: [react(), svgr(), viteCompression()],
  base: `/${process.env.BASE_PATH || ''}`,
  resolve: {
    alias: {
      src: path.resolve('src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
