import {useState} from "react";
import {ChevronRightCircleOutline, ChevronLeftCircleOutline} from "mdi-material-ui";
import {CircularProgress} from "@mui/material";
import {urlFor} from "../../../lib/client";
import Link from "next/link";

function index(props) {
	const {sliderData} = props;
	const data = typeof sliderData === "object" && sliderData.slider;

	const [current, setCurrent] = useState(0);
	const length = data.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(data) || data.length <= 0) {
		return null;
	}

	if (typeof data !== "object") return <CircularProgress />;
	else
		return (
			<section className="slider">
				<ChevronLeftCircleOutline className="left-arrow" onClick={prevSlide} />
				<ChevronRightCircleOutline className="right-arrow" onClick={nextSlide} />
				{data.map((obj, index) => {
					return (
						<div className={index === current ? "slide active" : "slide"} key={index}>
							<Link href={obj.buttonUrl} passHref>
								<a>{index === current && <img src={urlFor(obj.sliderImage)} alt={obj.title} className="image" />}</a>
							</Link>
						</div>
					);
				})}
			</section>
		);
}

export default index;
