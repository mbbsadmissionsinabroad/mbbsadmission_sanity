import React, {useEffect, useState} from "react";
import styles from './carouselController.module.css';
import { ChevronRightCircle, ChevronLeftCircle } from 'mdi-material-ui'

function index(props) {
	const {children} = props;
	const width = typeof window !== 'undefined' && window.innerWidth < 960 ? 1 : 2
	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(children.length);
	const [itemsToShow, setItemsToShow] = useState(width);

	const handleResize = () => {
		if(window.innerWidth < 960) {
			setItemsToShow(1)
		} else {
			setItemsToShow(2)
		}
	}
	useEffect(() => {
    window.addEventListener('resize', handleResize);
    return(() => {
        window.removeEventListener('resize', handleResize);
    })
  }, [width])

	useEffect(() => {
		setLength(children.length);
	}, [children]);

	const next = () => {
		if (currentIndex < length - itemsToShow) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carouselWrapper}>
				{currentIndex > 0 && <ChevronLeftCircle sx={{ color: 'primary.main' }} onClick={prev} className="carousel-left-arrow" />}
				<div className={styles.carouselContentWrapper}>
					<div className={`carousel-content show-${itemsToShow}`} style={{transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`}}>
						{children}
					</div>
				</div>
				{currentIndex < length - itemsToShow && <ChevronRightCircle sx={{ color: 'primary.main' }} onClick={next} className="carousel-right-arrow" />}
			</div>
		</div>
	);
}

export default index;
