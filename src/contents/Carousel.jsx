import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import images from './../images/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import './styles/Carousel.css'

const Carousel = () => {

	const [emblaRef] = useEmblaCarousel({ align: 'center', containScroll: false, loop: true }, [Autoplay()])

	return (
		<div className="embla overflow-hidden sm:w-[566px] m-auto relative top-14 lg:w-[95%] lg:top-7" ref={emblaRef} >
			<div className="embla__container flex sm:m-auto lg:m-0">

				{images.map((images, key) => (<div key={key} className="embla__slide max-w-[75vw] sm:max-w-[490px] lg:max-w-[94%]" style={{ flex: '0 0  100%' }}>
					<img className='lg:hidden m-auto' src={images.mobile} alt="" />
					<img className='hidden lg:flex m-auto' src={images.laptop} alt="" />

				</div>))}
			</div>
		</div>
	)
}

export default Carousel


