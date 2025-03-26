import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Ensures @/ maps to src/
    },
  },
  test: {
    environment: "jsdom", // ✅ Ensures Vitest runs in a browser-like environment
    setupFiles: "./vitest.setup.ts", // ✅ Setup file for additional configurations
  },
});
