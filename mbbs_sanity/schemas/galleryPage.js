export default {
  name: "galleryPage",
  type: "document",
  title: "Gallery Page",
  fields: [
		{
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "galleryImage",
      type: "array",
      title: "Gallery Image",
      of: [{ type: "gallery" }]
    }
  ],
};