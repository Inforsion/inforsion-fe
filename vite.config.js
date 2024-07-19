import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr({
      svgrOptions: {
      },
  }), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'vite-project',
      short_name: 'vite-project',
      description: 'vite-project',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
    "icons": [

      {
        "src": "icons/favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "icons/logo192x192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "icons/logo512x512.png",
        "type": "image/png",
        "sizes": "512x512"
      },
      {
        "src": "icons/logo512x512.png",
        "type": "image/png",
        "sizes": "512x512",
        "purpose": "any maskable"
      }
    ]
  })],
})