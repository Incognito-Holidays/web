import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'hotel-location',
  title: 'Hotels',
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
    }),
    defineField({
      name: 'logos',
      title: 'Hotel Logos',
      type: 'array',
      of: [
        defineArrayMember({
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
    })
  ]
});
