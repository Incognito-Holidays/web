import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'holiday',
  title: 'Holidays',
  type: 'document',
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
      name: 'destination',
      title: 'Destination',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'location' }]
        })
      ],
      validation: (rule) => rule.min(1).required()
    }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{ type: 'category' }]
    //     })
    //   ],
    //   validation: (rule) => rule.required()
    // }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
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
      name: 'gallery',
      title: 'Gallery images',
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
      ],
      validation: (rule) => rule.required().max(5)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'daysNights',
      title: 'Days & Nights',
      type: 'object',
      fields: [
        defineField({
          name: 'days',
          type: 'number'
        }),
        defineField({
          name: 'nights',
          type: 'number'
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'inclusionExclusion',
      title: 'Inclusion & Exclusion',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'termsConditions',
      title: 'Terms & Conditions',
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
          fields: [
            { name: 'type', type: 'string' },
            { name: 'rate', type: 'number' }
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
          fields: [
            { name: 'hotelName', type: 'string' },
            { name: 'rating', type: 'number' }
          ]
        })
      ]
    })
  ]
});
