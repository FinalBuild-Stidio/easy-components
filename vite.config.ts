import { resolve } from 'path'
import { defineConfig } from 'vite'
import type { LibraryOptions } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

const dependencies = Object.keys(pkg.dependencies || {})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      include: [
        'src/hooks',
        'src/config',
        'src/base',
        'src/pro',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@material-ui/icons': '@material-ui/icons/esm',
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      external: (source) => dependencies.some(dep => source.startsWith(dep)),
      input: {
        main: 'src/index.tsx',
        base: 'src/base/index.tsx',
        pro: 'src/pro/index.tsx',
        hooks: 'src/hooks/index.tsx',
      },
      output: {
        format: 'es',
        entryFileNames: '[name]/index.js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
    target: 'es2015',
  },
})
