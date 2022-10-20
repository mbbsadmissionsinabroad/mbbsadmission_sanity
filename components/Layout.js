import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children, data}) {
	let footerData = data !== undefined ? data.result.find((item) => item.title === 'Footer') : []
	let headerData = data !== undefined ? data.result.filter((item) => item.title !== 'Footer' && item.title !== 'Home Page Slider' && item.title !== 'Testimonials') : []
	return (
		<>
			<Navbar headerData={headerData} />
			<main>{children}</main>
			<Footer footerData={footerData} />
		</>
	);
}
