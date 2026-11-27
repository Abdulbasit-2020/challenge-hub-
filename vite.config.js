import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Required because this project is hosted in a GitHub Pages subdirectory.
  base: "/challenge-hub-/",
});
