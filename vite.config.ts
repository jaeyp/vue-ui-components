import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  /* vitest configuration */
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts,vue}"],
    coverage: {
      reporter: ["text"],
    },
    setupFiles: ["./src/mocks/setup.js"],
  },
});
