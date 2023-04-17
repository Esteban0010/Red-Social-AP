import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  scripts: [
    {
      type: 'module',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js',
    },{
      type: 'module',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js',
    },{
      type: 'module',
      src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'
    }
  ],
  stylesheets: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css',
    },
  ],
});
