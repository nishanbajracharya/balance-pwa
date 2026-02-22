import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

import { BASE_ROUTE } from './src/common/config.ts';

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_ROUTE,
  plugins: [react(), svgr()],
});
