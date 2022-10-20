export default {
  name: "nav",
  type: "document",
  title: "Navigation",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "navItems",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navItem" }]
    }
  ],
  preview: {
    select: {
      title: "title",
    }
  }
};