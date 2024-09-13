import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que o servidor escute em todas as interfaces de rede
    port: 5173  // Define a porta (opcional, já que o padrão é 5173)
  }
})
