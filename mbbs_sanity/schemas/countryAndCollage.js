export default {
  name: "collegeAndCountry",
  type: "document",
  title: "College And Country Name",
  fields: [
		{
      name: "title",
      type: "string",
      title: "Country Name"
    },
    {
      name: "collegeList",
      type: "array",
      title: "College List",
      of: [{ type: "collegeList" }]
    }
  ],
};