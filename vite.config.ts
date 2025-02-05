import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: 'lib/main.ts',
      name: 'react-retro-digit',
      fileName: 'react-retro-digit',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})
