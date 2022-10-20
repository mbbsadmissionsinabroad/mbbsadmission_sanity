export default {
  name: "contactPage",
  type: "document",
  title: "Contact Page",
  fields: [
		{
      name: "branchName",
      type: "string",
      title: "Branch Name"
    },
    {
			name: "branchLocation",
      type: "string",
      title: "Branch Location"
		},
		{
			name: "branchAddress",
      type: "string",
      title: "Branch Address"
		},
		{
      name: "branchMobNo",
      type: "array",
      title: "Number",
      of: [{ type: "mobileNumber" }]
    }
  ],
};