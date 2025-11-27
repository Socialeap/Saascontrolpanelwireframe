import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// ⚠️ IMPORTANT for GitHub Pages: Set the base URL
// Example: https://socialeap.github.io/Saascontrolpanelwireframe/
// The repo name must match EXACTLY
const repoName = 'Saascontrolpanelwireframe';

export default defineConfig({
  base: `/${repoName}/`, // <-- REQUIRED for GitHub Pages

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  build: {
    target: 'esnext',
    outDir: 'dist',      // GitHub Pages expects "dist"
    emptyOutDir: true,
  },

  server: {
    port: 5173,
    open: true,
  },
});
