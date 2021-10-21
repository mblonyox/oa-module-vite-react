import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
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
