import React from 'react'
import FeaturedNewsCarousel from './Features_Components/FeaturedNewsCarousel'

function FeaturedNews() {
	return (
		<>
			<div className='xl:m-auto xl:w-[70%]'>
				<h1 className='text-center mt-6 text-2xl sm:text-3xl lg:mt-14 lg:mb-8  xl:text-4xl font-bold'>Featured News</h1>
				<FeaturedNewsCarousel />
			</div>
		</>
	)
}

export default FeaturedNews





