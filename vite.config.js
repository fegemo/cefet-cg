import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'individual-module-separators',
      // The transform hook runs on EVERY file before they are merged
      transform(code, id) {
        // Exclude node_modules if you only want your own source files
        // if (id.includes('node_modules')) return null;

        // Calculate size of this specific file's code
        const sizeInBytes = new TextEncoder().encode(code).length;

        // Use '/*!' (Legal Comment) so the minifier preserves it
        const banner = `\n/*! --- MODULE START: ${id} (${sizeInBytes} bytes) --- */\n`;
        const footer = `\n/*! --- MODULE END: ${id} --- */\n`;

        return {
          code: banner + code +footer, //banner + code + footer,
          map: null // Maintain simple source maps or set to null
        };
      }
    }
  ],
  build: {
    outDir: 'dist/build',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
      },
      mangle: true,
    },
    lib: {
      entry: 'scripts/main.js',
      formats: ['es'],
      fileName: () => 'build.js'
    },
    rollupOptions: {
      output: {
        entryFileNames: 'build.js',
        sourcemapFile: 'build.js.map',
        // Ensure all code goes into single entry file
        inlineDynamicImports: false,
      },
      // Optimize external dependencies
      external: []
    }
  },
  server: {
    middlewareMode: false,
    port: 5173,
    open: false
  }
})
