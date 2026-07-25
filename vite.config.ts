import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PrepBench — aptitude shortcuts + practice (standalone brand, separate from LabBench)
export default defineConfig({
  server: { host: "::", port: 5191 },
  plugins: [react()],
});
