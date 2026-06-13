import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/oral-exam-prep/',
  build: { outDir: 'dist' }
})
