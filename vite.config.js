import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/tgsauzportfolio-react/', // Cambia "nombre-repositorio" por tu nombre de repositorio en GitHub
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos construidos
    assetsDir: '', // Carpeta de activos (si está en la raíz)
    // Más configuraciones según tus necesidades
  },
});