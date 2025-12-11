import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative base path so assets work in subdirectories (like GitHub Pages)
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // This ensures we don't try to bundle the 'index.tsx' if it's picked up by default
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  }
});