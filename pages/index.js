import HomePage from "../components/HomePage";
import HomeBanner from "../components/HomeBanner";
import Head from "next/head";

function index(props) {
  let schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "MBBS Admission",
      "@id": "https://www.mbbsadmissionsinabroad.com/",
    },
    headline: "MBBS Admission",
    // "image": [
    //   spContent.metaData.twitterCard
    //  ],
    datePublished: "21-10-2001",
    dateModified: "21-02-2023",
    author: [
      {
        "@type": "Person",
        name: "Vinit",
        url: "example.com/jbourne",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "New Lyf",
      logo: {
        "@type": "ImageObject",
        url: "example.com/image",
      },
    },
    description: "some description",
  };
  const { sliderData, testimonials, homePageContents } = props;
  return (
    <div>
      <Head>
        <title>
          MBBS Admission in Abroad - Overseas MBBS Consultants in India
        </title>
        <meta
          name="description"
          content="MBBS Admission in Abroad, New-Lyf an Overseas Consultants in India. Study MBBS in Russia, Ukraine & Philippines at Low Cost from MCI Approved Universities."
        />
        <meta name="keywords" content="MBBS Admission in Abroad" />
        <link rel="canonical" href="https://www.mbbsadmissionsinabroad.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <HomeBanner sliderData={sliderData} />
      {/* <Slider sliderData={sliderData} /> */}
      <HomePage
        testimonials={testimonials}
        homePageContents={homePageContents}
      />
    </div>
  );
}

export default index;
