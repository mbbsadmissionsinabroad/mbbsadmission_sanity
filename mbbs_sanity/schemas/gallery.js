export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: 'galleryImg',
      title: 'Image',
      type: 'image',
			of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
			media: "galleryImg"
    }
  }
};