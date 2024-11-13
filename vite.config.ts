// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Make sure the root is correct
  build: {
    rollupOptions: {
      input: '/src/main.tsx', // Update this if you're using TSX
    },
  },
});
