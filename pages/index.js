import Slider from '../components/HomePage/Slider'
import HomePage from '../components/HomePage'

function index(props) {
	const { sliderData, testimonials, homePageContents } = props;
	return (
		<div>
			<Slider sliderData={sliderData} />
			<HomePage testimonials={testimonials} homePageContents={homePageContents} />
		</div>
	)
}

export default index