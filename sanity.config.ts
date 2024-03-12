import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'netlify-astro-sanity',
  title: 'Netlify Astro Sanity',

  projectId: '7kitucke',
  dataset: 'production',

  plugins: [structureTool()],
  schema: {
    types: [
      {
        type: 'document',
        name: 'post',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
        ],
      },
    ],
  },
});
