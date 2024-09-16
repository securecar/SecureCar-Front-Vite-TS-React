import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'; // Importação do módulo path


export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/SecureCar-Front-Vite-TS-React/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
