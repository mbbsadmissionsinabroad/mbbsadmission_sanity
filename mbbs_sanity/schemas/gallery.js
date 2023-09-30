export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'galleryImg',
      title: 'Image',
      type: 'image',
      of: [{ type: 'image' }],
      options: {
        hotspot: true
      }
    },
    {
      name: 'meta',
      type: 'string',
      title: 'Meta Tag'
    }
  ],
  preview: {
    select: {
      media: 'galleryImg'
    }
  }
}
