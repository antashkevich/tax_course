import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

const resolveBase = (path) => resolve(__dirname, './src', path);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': resolveBase('./components'),
      '@pages': resolveBase('./pages'),
      '@images': resolveBase('./images'),
      '@icons': resolveBase('./icons'),
    },
  },
  plugins: [react()],
})
