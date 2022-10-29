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
    },
    {
			title: 'Home Page Content',
			name: 'homePageContent',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
						{title: 'H6', value: 'h6'},
						{title: 'Quote', value: 'blockquote'},
					],
					lists: [{title: 'Bullet', value: 'bullet'},{title: 'Numbered', value: 'number'}],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'},
							{title: 'code', value: 'code'},
						],
						annotations: [
							{
								title: 'URL',
								name: 'link',
								type: 'object',
								fields: [
									{
										title: 'URL',
										name: 'href',
										type: 'url',
									},
								],
							},
						],
					},
				},
				{
					type: 'image',
					options: {hotspot: true},
				},
				{
					type: 'code'
				},
			],
		},
  ],
  preview: {
    select: {
      title: "title",
    }
  }
};