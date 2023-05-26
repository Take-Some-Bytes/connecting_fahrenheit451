import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { name } from './package.json'

export default defineConfig({
  base: `/${name}`,
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
