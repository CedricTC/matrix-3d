import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Ortam değişkenini kontrol et
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Sadece üretim ortamında 'base' ayarını kullan
  base: isProduction ? "/matrix-3d-new/" : '/', // Yerelde kök dizini kullan
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})