import Slider from '../components/HomePage/Slider'
import HomePage from '../components/HomePage'
import Head from 'next/head'

function index (props) {
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
