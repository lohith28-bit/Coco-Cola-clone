import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './../styles/Carousel.css'
import FeaturedImages from './../../images/FeaturedImages'
import FeaturedCard from './FeaturedCard'

const FeaturedNewsCarousel = () => {

	const [emblaRef] = useEmblaCarousel({ align: 'center', containScroll: false, loop: true },)

	return (
		<div className="embla overflow-hidden xl:w-[100%] rounded-md " ref={emblaRef} >
			<div className="embla__container flex xl:w-[40%]">
				{data.map((ele, idx) => <div key={idx} className="w-[40%] mx-2 embla__slide m-3 xl:w-[40%] xl:m-0">
					<FeaturedCard image={ele.image} heading={ele.heading} para={ele.para} redirect={ele.redirect} />
				</div>)}
			</div>
		</div>
	)
}
export default FeaturedNewsCarousel


const data = [
	{
		image: FeaturedImages[0],
		heading: 'Coca‑Cola invites Digital Artists to create Real Magic with AI',
		'para': 'Digital creatives around the world can use a first-of-its-kind AI platform to generate original artwork with iconic creative assets from the Coca‑Cola archives.',
		redirect: 'Explore'
	},
	{
		image: FeaturedImages[1],
		heading: 'Topo Chico Plant provides Free Water to its Monterrey Neighbors',
		'para': 'For more than a century, Topo Chico has offered drinking water to the local community via a free, 24/7 tap outside its Monterrey plant.',
		redirect: 'Explore'
	},
	{
		image: FeaturedImages[2],
		heading: 'Jack & Daniels and Coca‑Cola RTD Launches in US',
		'para': 'Jack Daniel’s & Coca‑Cola RTD – a pre-mixed, canned cocktail that first launched last fall in Mexico – is set to hit stores in the United States.',
		redirect: 'Explore'
	},
	{
		image: FeaturedImages[3],
		heading: 'Dasani and Sprite Boost Sustainability Packaging Credentials',
		'para': 'Two of The Coca‑Cola Company’s biggest brands in North America are taking major steps to support a circular economy for plastic packaging.',
		redirect: 'Explore'
	},
	{
		image: FeaturedImages[4],
		heading: 'Our 2030 Water Strategy Key Goals',
		'para': 'The Coca‑Cola Company announced three goals accelerating its action on water during the UN 2023 Water Conference.',
		redirect: 'Explore our 2030 Water Security Strategy'
	}
]


