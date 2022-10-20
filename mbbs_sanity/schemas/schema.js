import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import servicePages from './servicePages';
import faq from './faq';
import youtubeUrl from './youtubeUrl';
import testimonials from './objects/testimonials';
import reviews from './reviews';
import nav from './nav';
import homePageSlider from './homePageSlider';
import homePage from './homePage';
import gallery from './gallery';
import galleryPage from './galleryPage';
import contactPage from './contactPage';
import mobileNumber from './objects/mobileNumber';
import countryAndCollage from './countryAndCollage';
import collageList from './objects/collageList';

// Object Types 
import navItem from './objects/navItem';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
		servicePages,
		faq,
		youtubeUrl,
		testimonials,
		nav,
		navItem,
		homePageSlider,
		homePage,
		reviews,
		gallery,
		galleryPage,
		contactPage,
		mobileNumber,
		countryAndCollage,
		collageList
  ]),
})
