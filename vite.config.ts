// @ts-check
import nixix from "nixix/vite-plugin";
import path from "path";
import { defineConfig } from "vite";
import viteJsconfigPaths from "vite-jsconfig-paths";

function resolve(string) {
  return path.resolve(__dirname, string);
}

export default defineConfig({
  plugins: [viteJsconfigPaths(), nixix({
    hmr: true
  })],
  resolve: {
    alias: {
      "@": resolve('./')
    },
  },
});