export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value: string, context: any) => context.defaultIsUnique(value, context),
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'DateOfPost',
      type: 'date',
      title: 'Date of Post',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
