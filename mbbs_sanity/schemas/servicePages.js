export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
		{
			title: 'Is Blog',
			name: 'isBlog',
			type: 'boolean'
		},
		{
			name: 'blogCategory',
			title: 'Blog Category',
			type: 'string'
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
		{
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
		{
      name: 'countryImage',
      title: 'Country Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    },
		{
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'string',
    },
		{
      name: 'canonical',
      title: 'Canonical URL',
      type: 'string',
    },
		{
			title: 'Page Content',
			name: 'pageContent',
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
		{
			title: 'Frequently asked question',
			name: 'frequentlyAskedQuestion',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{type: 'faq'},
					]
				}
			]
		},
		{
			title: 'Youtube Embed',
			name: 'youtubeEmbedUrl',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{type: 'youtubeEmbed'},
					]
				}
			]
		},
		{
      name: 'uploadFile',
      title: 'Upload File',
      type: 'file',
			fields: [
				{
					name: 'cta',
					type: 'string',
					title: 'CTA Text'
				},
			]
    }
  ],
}
