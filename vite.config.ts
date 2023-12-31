import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env':{},
    'process.version':'""'
  },
  resolve:{
    alias:{
      process:'process/browser',
      stream:'stream-browserify',
      os:'os-browserify/browser'
    }
  }
})
