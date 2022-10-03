import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
