import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Dropping or copying files into public/images on Windows can lock them mid-copy
      // (EBUSY) and crash the dev server. Images are served as-is, so there is nothing to watch.
      ignored: ['**/public/images/**', '**/source-images/**'],
    },
  },
})
