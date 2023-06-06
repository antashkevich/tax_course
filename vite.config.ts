import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

const resolveBase = (path: string): string => resolve(__dirname, './src', path);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "types": resolveBase('./types/entities'),
      'components': resolveBase('./components'),
      'pages': resolveBase('./pages'),
      'images': resolveBase('./images'),
      'icons': resolveBase('./icons'),
    },
  },
  plugins: [react()],
})
