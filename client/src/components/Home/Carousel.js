import React from 'react';
import Slider from 'react-slick'

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true
	};

	return (
		<div style={{ position: 'relative' }}>
			<div
			className="carrousel_wrapper"
			style={{ height: `${window.innerHeight}px`, width: `${window.innerWidth}px`, overflow: 'hidden' }}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548814181/Five%20Star/slide_one.png)`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548814182/Five%20Star/slide_two.png)`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548814180/Five%20Star/slide_three.png)`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
			</Slider>
		</div>
		</div>
	);
};

export default Carousel;