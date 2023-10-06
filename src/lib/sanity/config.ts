import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { projectId, dataset, apiVersion } from './api';
import { schemaTypes } from './schemas';

export default defineConfig({
  title: 'Incognito Holidays Admin Dashboard',
  projectId,
  dataset,
  apiVersion,
  basePath: '/admin',
  schema: { types: schemaTypes },
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })]
});
