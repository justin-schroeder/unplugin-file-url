import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginFileUrl from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginFileUrl(),
  ],
})
