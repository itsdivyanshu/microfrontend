import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SharedApp',
      fileName: (format) => `shared-app.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit', 'redux-persist'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-redux': 'ReactRedux',
          '@reduxjs/toolkit': 'RTK',
          'redux-persist': 'ReduxPersist'
        },
      },
    },
  },
});