import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    clearScreen: false,
    server: {
        port: 6969,
        strictPort: true,
        watch: {
            ignored: ["**/src-tauri/**"],
        },
    },
})
