import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'My Todo App',
        short_name: 'TodoApp',
        description: 'With this can help you',
        // start_url: "/vue-example-pwa/?source=pwa",
        // scope: "/vue-example-pwa/",
        display: "standalone",
        orientation: "portrait",
        // theme_color: '#121212',
        categories: [
          "Application",
        ],
        icons: [
          {
            src: 'vue-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'vue-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
      }
     }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
