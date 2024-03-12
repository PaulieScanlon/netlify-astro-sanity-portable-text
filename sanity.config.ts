import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './admin/schemaTypes';

export default defineConfig({
  name: 'netlify-astro-sanity',
  title: 'Netlify Astro Sanity',

  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
