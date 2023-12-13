import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['domestic', 'international'],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (rule) => rule.required()
        })
      ],
      validation: (rule) => rule.required()
    })
  ]
});
