import {urlFor} from "../lib/client";
import TextSerializer from "../components/TextSerializer";
import Faq from "../components/Faq";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import Head from "next/head";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

function servicePage(props) {
	const {data, faq, youtubeEmbedRes} = props;
	return (
		<div>
			<Head>
				<title>{data.metaTitle}</title>
				<meta name="description" content={data.metaDescription} />
				<meta name="keywords" content={data.metaKeywords} />
				<link rel="canonical" href={data.canonical} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div className="page-container">
				{data.hasOwnProperty("countryImage") && (
					<div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "30px 0px"}}>
						<img src={urlFor(data.countryImage)} alt={data.title} style={{width: "200px", marginRight: "20px"}} />
						<h1>{data.title}</h1>
					</div>
				)}
				<img src={urlFor(data.bannerImage)} className="banner" alt={data.title} />
				<div className="blockContainer">
					<TextSerializer data={data.pageContent} />
				</div>

				{faq.length > 0 && (
					<>
						<h4>{data.title} FAQ</h4>
						<Faq data={faq} />
					</>
				)}
				{youtubeEmbedRes.length > 0 && (
					<>
						<h4>{data.title} Videos</h4>
						<ResponsiveYoutube data={youtubeEmbedRes} />
					</>
				)}
			</div>
		</div>
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
