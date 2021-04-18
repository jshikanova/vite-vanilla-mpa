import { defineConfig } from 'vite';
import mpa from 'vite-plugin-mpa';

// * @see https://vitejs.dev/config/
export default defineConfig({
  plugins: [mpa({ open: '/' })],
  clearScreen: false,
});
