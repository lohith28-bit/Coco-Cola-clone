import React from 'react'

function ExploreDetail_1({ image, heading, description, redirect, classN }) {
	return (
		<>
			<div className={`xl:flex xl:my-10 xl:w-[69rem] xl:m-auto ${classN}`}>
				<div className='relative m-[5vw] z-[1] xl:w-[50%] xl:bottom-[0] xl:m-0 xl:left-[2rem]'>
					<div className='shadow-2xl rounded-3xl  m-auto p-5 pt-6 pb-9 bg-[#F1F1F1] xl:shadow-xl '>
						<h1 className='text-xl font-semibold pb-4 xl:p-5 xl:pb-3'>{heading}</h1>

						{description.map((ele, idx) => (
							<p key={idx} className='text-sm leading-6 pb-3 xl:h-[18rem] xl:p-5 xl:leading-8 lg:text-base'>{ele}</p>))}


						<div className='flex justify-center items-center pt-7'>
							<button className='border-[2px] border-black rounded-3xl font-semibold w-[75vw] h-[40px] lg:text-base hover:border-[grey] hover:text-[grey]'>{redirect}</button>
						</div>
					</div>
				</div>
				<div className=''>
					<img className='relative bottom-[52px] sm:bottom-[7rem] llsm:bottom-[12rem] z-[0] xl:rounded-xl xl:bottom-[0] xl:right-[2rem] xl:top-[3rem]' src={image} alt="" />
				</div>
			</div>
		</>
	)
}

export default ExploreDetail_1