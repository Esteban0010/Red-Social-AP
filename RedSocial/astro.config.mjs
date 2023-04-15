import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
  scripts: [
    {
      type: 'module',
      src: '/_snowpack/pkg/jquery/dist/jquery.min.js',
    },
  ],
});


