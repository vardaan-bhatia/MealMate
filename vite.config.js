import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv"; // Import dotenv for loading .env files

dotenv.config(); // Load .env variables

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
});
