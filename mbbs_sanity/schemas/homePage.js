export default {
  name: "homePage",
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "slider",
      type: "array",
      title: "Slider",
      of: [{ type: "homePageSlider" }]
    }
  ],
  preview: {
    select: {
      title: "title",
    }
  }
};