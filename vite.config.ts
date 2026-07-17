import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
import { preact } from '@preact/preset-vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
});
