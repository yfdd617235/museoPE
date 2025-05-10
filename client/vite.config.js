import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/', //Dominio personalizado
  // base: 'https://yfdd617235.github.io/invConti/'
  base: '' //Dominio en netlify
});
