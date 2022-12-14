import Navbar from "./Navbar";
import Footer from "./Footer";
import { Whatsapp } from "mdi-material-ui";

export default function Layout({children, data}) {
	let footerData = data !== undefined ? data.result.find((item) => item.title === 'Footer') : []
	let headerData = data !== undefined ? data.result.filter((item) => item.title !== 'Footer' && item.title !== 'Home Page Slider' && item.title !== 'Testimonials' && item.title !== 'Contents') : []
	return (
		<>
			<Navbar headerData={headerData} />
			<main className="mainDiv">{children}</main>
			<Footer footerData={footerData} />
			<div className="whatsappBtn" style={{ position: "fixed", zIndex: 9, bottom: '3em', left: '20px' }}>
				<a href="https://api.whatsapp.com/send?phone=918050575767" target="_blank">
					<img src="/assests/whatsapp.png" />
				</a>
			</div>
		</>
	);
}
