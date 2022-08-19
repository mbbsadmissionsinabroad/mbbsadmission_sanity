import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import servicePages from './servicePages';
import faq from './faq';
import youtubeUrl from './youtubeUrl';
import testimonials from './testimonials';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
		servicePages,
		faq,
		youtubeUrl,
		testimonials,
  ]),
})
