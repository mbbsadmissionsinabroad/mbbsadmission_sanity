import {urlFor} from "../lib/client";
import TextSerializer from "../components/TextSerializer";
import Faq from "../components/Faq";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import Head from "next/head";
import { Typography, Grid, Box } from '@mui/material';
import TOC from "../components/Shared/TOC";
import CollegeModal from '../components/Shared/CollegeModal';
import Testimonials from "../components/HomePage/Testimonials";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

function servicePage(props) {
	const {data, faq, youtubeEmbedRes, collegeList, testimonials} = props;
	return (
		<Box sx={{ padding: '0px 0px 15px 0px' }}>
			<Head>
				<title>{data.metaTitle}</title>
				<meta name="description" content={data.metaDescription} />
				<meta name="keywords" content={data.metaKeywords} />
				<link rel="canonical" href={data.canonical} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Grid container>
				<Grid item xs={12} className="globalTitleBg">
					<Typography variant="h1">{data.title}</Typography>
				</Grid>
				<Grid item xs={12}>
					{
						"bannerImage" in data && <img src={urlFor(data.bannerImage)} className="banner" alt={data.title} />
					}
				</Grid>
			</Grid>
			<div className="page-container">
				<div className="blockContainer">
					<div className="tocContainer">
						{data && <TOC />}
					</div>
					{data.isBlog !== true && "bannerImage" in data && <CollegeModal collegeList={collegeList} title={data.title} btnText="Click Here To Apply" />}
					<TextSerializer data={data.pageContent} className="serializerTitle"  />
				</div>

				{faq.length > 0 && <Faq data={faq} title={data.title} />}
				{youtubeEmbedRes.length > 0 && (
					<>
						<h6 className='serializerTitle'>{data.title} Videos</h6>
						<ResponsiveYoutube data={youtubeEmbedRes} />
					</>
				)}
				<Testimonials testimonials={testimonials} />
			</div>
		</Box>
	);
}

export async function getServerSideProps({params, res}) {
	
	res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

	const query = encodeURIComponent(`*[ _type == "pages" && slug.current == "${params.servicePage}" ]`);
	const url = apiHost + query;
	const result = await fetch(url).then((res) => res.json());
	const data = result.result[0];

	const faqId =
		data.hasOwnProperty("frequentlyAskedQuestion") &&
		data.frequentlyAskedQuestion.map((id) => "'" + id._ref + "'").join();
	const faqQuery = encodeURIComponent(`*[_type == "faq" && _id in [${faqId}]]`);
	const faqUrl = apiHost + faqQuery;
	const faqResult = await fetch(faqUrl).then((res) => res.json());
	const faq = faqResult.result;

	const youtubeId =
		data.hasOwnProperty("youtubeEmbedUrl") && data.youtubeEmbedUrl.map((id) => "'" + id._ref + "'").join();
	const youtubeEmbedQuery = encodeURIComponent(`*[_type == "youtubeEmbed" && _id in [${youtubeId}]]`);
	const youtubeEmbedUrl = apiHost + youtubeEmbedQuery;
	const youtubeEmbedResult = await fetch(youtubeEmbedUrl).then((res) => res.json());
	const youtubeEmbedRes = youtubeEmbedResult.result;

	if (!data) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				data,
				faq,
				youtubeEmbedRes,
			},
		};
	}
}

export default servicePage;
