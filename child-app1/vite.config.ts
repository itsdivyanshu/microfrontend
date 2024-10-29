import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'shared-app': path.resolve(__dirname, '../shared-app/src')
    }
  },
  build: {
    commonjsOptions: {
      include: [/shared-app/, /node_modules/]
    }
  }
})
