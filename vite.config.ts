import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200
  },
  build: {
    assetsDir: ".",
    rollupOptions: {
      input: "src/single-spa.tsx",
      preserveEntrySignatures: "strict",
      output: {
        format: "systemjs",
        entryFileNames: "index.js",
      },
    },
  },
  plugins: [react()],
});
