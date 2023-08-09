import React from 'react'
import BrandsGroup from './Brands_Components/BrandsGroup'

function OurBrands() {
	return (
		<>
			<div className='w-[90%] m-auto sm:w-[80%] lssm:w-[70%] lg:w-[80%] xl:w-[60%]'>
				<h1 className='text-center font-semibold text-xl mb-4 sm:text-3xl lg:text-4xl sm:mb-10'>Explore Our Brands</h1>
				<BrandsGroup />
				<div className='flex justify-center my-9 lg:my-14'><button className='border-2 border-black rounded-3xl w-[85%]  text-base font-semibold min-h-[38px] sm:w-[75%] llsm:w-[70%] lg:w-[40%] hover:border-[grey] hover:text-[grey]'>View All</button></div>

			</div>
		</>
	)
}

export default OurBrands
