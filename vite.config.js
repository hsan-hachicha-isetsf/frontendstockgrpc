import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        // Add alias if necessary for grpc-web
        'grpc-web': 'grpc-web',
    },
},
optimizeDeps: {
    include: ['grpc-web', 'google-protobuf'],
},
})
