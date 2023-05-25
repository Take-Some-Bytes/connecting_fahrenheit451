import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2017',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('scripts')) {
            return 'scripts'
          }

          return 'index'
        }
      }
    }
  }
})
