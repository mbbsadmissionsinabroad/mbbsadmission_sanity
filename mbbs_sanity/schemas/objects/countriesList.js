export default {
  name: "countriesList",
  type: "object",
  title: "Countries List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
		{
      name: "btnText",
      type: "string",
      title: "Button Text"
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
			media: "image"
    }
  }
};