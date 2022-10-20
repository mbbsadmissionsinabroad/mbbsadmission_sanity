export default {
  name: "reviews",
  type: "document",
  title: "Reviews",
  fields: [
		{
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "review",
      type: "array",
      title: "Testimonials",
      of: [{ type: "testimonials" }]
    }
  ],
  preview: {
    select: {
      title: "title",
    }
  }
};