import React, { useEffect } from "react";
import { urlFor } from "../lib/client";
import TextSerializer from "../components/TextSerializer";
import Faq from "../components/Faq";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import Head from "next/head";
import { Typography, Grid, Box, Button } from "@mui/material";
import TOC from "../components/Shared/TOC";
import CollegeModal from "../components/Shared/CollegeModal";
import Testimonials from "../components/HomePage/Testimonials";
import { useRouter } from "next/router";
import Image from "next/image";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

function servicePage(props) {
  const { data, faq, youtubeEmbedRes, collegeList, testimonials } = props;
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      const isFormFilled = localStorage.getItem("isFormFilled");
      if (isFormFilled === undefined || isFormFilled === null) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }, 5000);

    return () => {
      clearTimeout(popupTimeout);
    };
  }, []);
  const router = useRouter();
  const [showPopup, setShowPopup] = React.useState(false);

  const handleDownloadCTA = async () => {
    const query = encodeURIComponent(
      `*[_type == 'pages'] {"uploadFile": uploadFile.asset->url }`
    );
    const url = apiHost + query;
    const res = await fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        return res.result;
      });
    const getUrl = res.find((item) => item.uploadFile !== null);
    router.push(getUrl.uploadFile);
  };
  return (
    <>
      <CollegeModal
        isHomePage={true}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
      <Box sx={{ padding: "0px 0px 15px 0px" }}>
        <Head>
          <title>{data.metaTitle}</title>
          <meta name="description" content={data.metaDescription} />
          <meta name="keywords" content={data.metaKeywords} />
          <link rel="canonical" href={data.canonical} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Grid container>
          <Grid item xs={12} className="globalTitleBg">
            <Typography variant="h1">{data.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            {"bannerImage" in data && (
              <Image
                src={urlFor(data.bannerImage).url()}
                className="banner"
                alt={data.title}
                width={1500} // Set to the actual width of your image
                height={600} // Set to the actual height of your image
                loading="lazy" // Explicitly set lazy loading
              />
            )}
          </Grid>
        </Grid>
        <div className="page-container">
          <div className="blockContainer">
            <div className="tocContainer">{data && <TOC />}</div>
            <Box display="flex" alignItems="center" sx={{ gap: 3 }}>
              {data.isBlog !== true && "bannerImage" in data && (
                <CollegeModal
                  collegeList={collegeList}
                  title={data.title}
                  btnText="Enquire Now"
                />
              )}
              {"uploadFile" in data && (
                <Button
                  onClick={handleDownloadCTA}
                  variant="contained"
                  sx={{ padding: "15px 40px", color: "#fff", mt: "-12px" }}
                >
                  Download Brouchure
                </Button>
              )}
            </Box>
            <TextSerializer
              data={data.pageContent}
              className="serializerTitle"
            />
          </div>

          {faq.length > 0 && <Faq data={faq} title={data.title} />}
          {youtubeEmbedRes.length > 0 && (
            <>
              <h6 className="serializerTitle">{data.title} Videos</h6>
              <ResponsiveYoutube data={youtubeEmbedRes} />
            </>
          )}
          <Testimonials testimonials={testimonials} />
        </div>
      </Box>
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const query = encodeURIComponent(
    `*[ _type == "pages" && slug.current == "${params.servicePage}" ]`
  );
  const url = apiHost + query;
  const result = await fetch(url).then((res) => res.json());
  const data = result.result[0];

  if (!data) {
    return {
      notFound: true,
    };
  }

  const faqId = data?.frequentlyAskedQuestion?.length
    ? data.frequentlyAskedQuestion.map((id) => `'${id._ref}'`).join()
    : "";
  const faqQuery = encodeURIComponent(`*[_type == "faq" && _id in [${faqId}]]`);
  const faqUrl = apiHost + faqQuery;
  const faqResult = await fetch(faqUrl).then((res) => res.json());
  const faq = faqResult.result;

  const youtubeId = data?.youtubeEmbedUrl?.length
    ? data.youtubeEmbedUrl.map((id) => `'${id._ref}'`).join()
    : "";
  const youtubeEmbedQuery = encodeURIComponent(
    `*[_type == "youtubeEmbed" && _id in [${youtubeId}]]`
  );
  const youtubeEmbedUrl = apiHost + youtubeEmbedQuery;
  const youtubeEmbedResult = await fetch(youtubeEmbedUrl).then((res) =>
    res.json()
  );
  const youtubeEmbedRes = youtubeEmbedResult.result;

  return {
    props: {
      data,
      faq,
      youtubeEmbedRes,
    },
  };
}

export default servicePage;
