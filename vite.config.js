import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Unocss({})
  ],
  optimizeDeps: { exclude: ["svelte-navigator"] },
})