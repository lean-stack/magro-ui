import { fileURLToPath, URL } from "node:url";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default {
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./app/", import.meta.url)),
    },
  },
} satisfies UserConfig;
