import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.{ts,tsx,js,jsx}'], 
      exclude: ['node_modules', 'dist'], 
      fix: false,
      cache: true, 
      emitError: true, 
      emitWarning: true 
    })
  ]
});
