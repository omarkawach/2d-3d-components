import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2d-3d-components/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
          tag.startsWith('arcgis-') || tag.startsWith('calcite-'),
        },
      },
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
