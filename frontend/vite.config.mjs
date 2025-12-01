import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    // 👇 muy importante para Docker
    allowedHosts: [
      "frontend",            // nombre del servicio en docker-compose
      "host.docker.internal",// por si alguna vez lo usas
      "localhost",
      "127.0.0.1"
    ],
  },
});
