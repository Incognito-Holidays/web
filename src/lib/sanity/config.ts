import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  title: 'Incognito Holidays Admin Dashboard',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  basePath: '/admin',

  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string
    })
  ],

  schema: {
    types: schemaTypes
  }
});
