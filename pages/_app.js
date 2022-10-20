import { useState, useEffect, useRef } from 'react';
import '../styles/globals.css'
import '../styles/slider.css'
import Layout from '../components/Layout';
import { ThemeProvider } from '@mui/system';
import { createMuiTheme } from '../lib/createMuiTheme';

const apiHost = process.env.NEXT_PUBLIC_API_HOST;
function MyApp({ Component, pageProps }) {
	const [data, setData] = useState();
	const [collegeList, setCollegeList] = useState();
	const fetchDataRef = useRef(false);

	useEffect(() => {
		if (fetchDataRef.current) return;
    fetchDataRef.current = true;
		let query = encodeURIComponent(`*[_type in ["nav", "homePage", "reviews"]]`)
		fetch(apiHost + query)
			.then(res => res.json())
			.then(data => setData(data))
			.catch((err) => console.error(err))
		let collegeListQuery = encodeURIComponent(`*[_type == "collegeAndCountry"]`)
		fetch(apiHost + collegeListQuery)
			.then(res => res.json())
			.then(data => setCollegeList(data.result))
			.catch((err) => console.error(err))
	}, [])

	let sliderData = data !== undefined && data.result.find((item) => item.title === 'Home Page Slider');
	let testimonials = data !== undefined && data.result.find((item) => item.title === 'Testimonials');
  return (
		<ThemeProvider theme={createMuiTheme}>
			<Layout data={data}>
				<Component {...pageProps} sliderData={sliderData} testimonials={testimonials} collegeList={collegeList} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
