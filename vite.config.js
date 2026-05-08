// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite" // 追加

export default defineConfig({
  plugins: [react(), tailwindcss()], // tailwindcss() を追加
})