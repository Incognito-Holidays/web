import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'holiday',
  title: 'Holidays',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true }
        })
      ],
      validation: (rule) => rule.required().max(5)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'days_nights',
      title: 'Days-Nights',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'iternary',
      title: 'Iternary',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'incl_excl',
      title: 'Inclusion-Exclusion',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'terms_conditions',
      title: 'Terms-Conditions',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'price',
          fields: [
            { type: 'string', name: 'types' },
            { type: 'number', name: 'price' }
          ]
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'hotel',
      title: 'Hotel',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'hotel',
          fields: [
            { type: 'string', name: 'hotel_name' },
            { type: 'number', name: 'rating' }
          ]
        })
      ],
      validation: (rule) => rule.required()
    })
  ]
});
