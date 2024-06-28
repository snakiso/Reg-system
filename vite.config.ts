import * as path from "path";

import legacy from "@vitejs/plugin-legacy";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  // define: {
  //   global: "window",
  // },
  plugins: [
    react(),
    //   //reactRefresh(),
    //   // legacy({
    //   //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    //   //   targets: ["Chrome >= 50", "Safari >= 5"],
    //   // }),
  ],
  // resolve: {
  //   alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  // },
});
