export default {
	name: 'homePageSlider',
  title: 'Home Page Slider',
  type: 'object',
	fields: [
		// {
		// 	name: 'title',
		// 	title: 'Title',
		// 	type: 'string'
		// },
		// {
		// 	name: 'subTitle',
		// 	title: 'Sub Title',
		// 	type: 'string'
		// },
		{
      name: 'sliderImage',
      title: 'Slider Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
		// {
		// 	name: 'buttonText',
		// 	title: 'Button Text',
		// 	type: 'string'
		// },
		{
			name: 'buttonUrl',
			title: 'Button URL',
			type: 'string'
		},
	]
}