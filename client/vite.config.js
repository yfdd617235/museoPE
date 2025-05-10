import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/museoPE/'  Esto es importante para que las rutas se resuelvan correctamente en GitHub Pages
  base: '',

});
