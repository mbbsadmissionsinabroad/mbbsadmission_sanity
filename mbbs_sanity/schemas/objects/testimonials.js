export default {
	name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
	fields: [
		{
			name: 'studentName',
			title: 'Student Name',
			type: 'string'
		},
		{
      name: 'studentImage',
      title: 'Student Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
		{
			name: 'collegeName',
			title: 'College Name',
			type: 'string'
		},
		{
			name: 'country',
			title: 'Country',
			type: 'string'
		},
		{
			name: 'studentTestimonial',
			title: 'Student Testimonial',
			type: 'string'
		},
	]
}