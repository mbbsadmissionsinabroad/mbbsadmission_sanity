import Slider from '../components/HomePage/Slider'
import HomePage from '../components/HomePage'
import Head from 'next/head'

function index (props) {
  let schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "example.com/articleURL"
    },
    "headline": "Article title",
    // "image": [
    //   spContent.metaData.twitterCard
    //  ],
    "datePublished": "21-10-2001",
    "dateModified": "21-02-2023",
    "author": [{
        "@type": "Person",
        "name": "Json Bourne",
        "url": "example.com/jbourne"
      }],
    "publisher": {
        "@type": "Organization",
        "name": "abc",
        "logo": {
          "@type": "ImageObject",
          "url": "example.com/image"
        }
      },
    "description": "some description"
  
  };
  const { sliderData, testimonials, homePageContents } = props
  return (
    <div>
      <Head>
        <title>
          MBBS Admission in Abroad - Overseas MBBS Consultants in India
        </title>
        <meta
          name='description'
          content='MBBS Admission in Abroad, New-Lyf an Overseas Consultants in India. Study MBBS in Russia, Ukraine & Philippines at Low Cost from MCI Approved Universities.'
        />
        <meta name='keywords' content='MBBS Admission in Abroad' />
        <link rel='canonical' href='https://www.mbbsadmissionsinabroad.com/' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script 
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <Slider sliderData={sliderData} />
      <HomePage
        testimonials={testimonials}
        homePageContents={homePageContents}
      />
    </div>
  )
}

export default index
