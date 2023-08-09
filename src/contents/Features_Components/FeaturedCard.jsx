import React from 'react'
import arrow_thin__right from './../../images/arrow_thin__right.svg'


function Card({ image, heading, para, redirect }) {


	return (
		<>
			<div className='shadow-xl rounded-2xl cursor-pointer xl:w-[100%] xl:p-0'>
				<div>
					<img className='w-[100%] rounded-t-2xl object-cover' src={image} alt="" />
				</div>
				<div className='p-2 pb-5 min-h-[20rem] vsm:min-h-[15rem] lsm:min-h-[15rem]  sm:max-h-[3rem] xl:min-h-[25rem] sm:py-5 sm:px-8 xl:py-10 xl:p-3 xl:pt-4'>
					<div className='lsm:min-h-[10rem] lg:min-h-[1rem] lg:mb-1 xl:h-[18rem] ' >
						<p className='font-semibold m-2 ml-0 text-xs sm:text-base lg:text-lg lsm:text-sm'>{heading}</p>
						<p className='text-xs leading-6 mb-8 xl:text-sm lg:mb-5 sm:text-base lg:text-lg xl:leading-7 lsm:text-sm'>{para}</p>
					</div>
					<div className='flex hover:opacity-60'>
						<p className='font-semibold text-sm sm:text-base'>{redirect}</p>
						<img className='h-6 mb-4 ml-3' src={arrow_thin__right} alt="" />
					</div>

				</div>
			</div>
		</>
	)
}

export default Card
