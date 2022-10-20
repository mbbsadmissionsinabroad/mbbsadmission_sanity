import Slider from '../components/HomePage/Slider'
import HomePage from '../components/HomePage'

function index({sliderData, testimonials}) {
	return (
		<div>
			<Slider sliderData={sliderData} />
			<HomePage testimonials={testimonials} />
		</div>
	)
}

export default index