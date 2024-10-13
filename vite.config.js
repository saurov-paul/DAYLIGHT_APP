import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import symfonyPlugin from "vite-plugin-symfony";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), symfonyPlugin()],
  build: {
    rollupOptions: {
      input: {
        app: "./frontend/src/main.jsx",
      },
    },
  },
});
