import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:9014/',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:9014/',
        changeOrigin: true
      }
    }
  }
})
