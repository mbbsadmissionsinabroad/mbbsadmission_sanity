export default {
  name: "navItem",
  type: "object",
  title: "NavItem",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
		{
			
      name: "slug",
      type: "string",
      title: "Slug"
		},
		{
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug",
			media: "image"
    }
  }
};