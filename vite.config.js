import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: "/programmer-bubble/",
  define: {
    'import.meta.env': JSON.stringify(process.env),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
