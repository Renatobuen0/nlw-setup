import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://renatobuen0.github.io/nlw-setup/",
	plugins: [react()],
})
