import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import { TanStackStart } from '@tanstack/start/vite'
import type { PluginOption } from 'vite'

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }) as PluginOption,
    TanStackStart(),
  ],
})
