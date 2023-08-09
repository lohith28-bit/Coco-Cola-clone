import React from 'react'
import arrow_thin__right from './../images/arrow_thin__right.svg'

function Card({ image, heading, para, redirect }) {


	return (
		<>
			<div className='m-auto w-[90vw] shadow-xl rounded-2xl cursor-pointer my-5 xl:m-4 lg:mx-3 '>
				<div>
					<img className='rounded-t-2xl' src={image} alt="" />
				</div>
				<div className='py-5 px-8 xl:py-10'>
					<div className='lg:mb-1 xl:h-[230px] 2xl:h-[180px] lg:h-[15rem]'>
						<p className='font-semibold m-2 ml-0 text-sm lg:text-xl'>{heading}</p>
						<p className='text-sm leading-6 mb-8 xl:text-base lg:mb-5 lg:leading-7'>{para}</p>
					</div>
					<div className='flex hover:opacity-60'>
						<p className='font-semibold text-base'>{redirect}</p>
						<img className='h-6 ml-3' src={arrow_thin__right} alt="" />
					</div>

				</div>
			</div>
		</>
	)
}

export default Card
