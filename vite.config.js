import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-todo-list-tailwind-pwa',
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
      includeAssets: ['favicon.ico', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png'],
      manifest: {
        name: 'My Todo App',
        short_name: 'My Todo App',
        description: 'With this can help you',
        start_url: "/vue-todo-list-tailwind-pwa/?source=pwa",
        scope: "/vue-todo-list-tailwind-pwa/",
        display: "standalone",
        orientation: "portrait",
        theme_color: '#1e3a8a',
        background_color: '#1e3a8a',
        categories: [
          "Application",
          "education",
          "utilities"
        ],
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            "src": "screen-1.png",
            "sizes": "400x865",
            "type": "image/png"
          },
          {
            "src": "screen-2.png",
            "sizes": "400x865",
            "type": "image/png"
          },
        ]
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
