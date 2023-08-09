import React from 'react'

function ExploreDetail_2({ image, heading, description, redirect }) {
	return (
		<>
			<div className='xl:flex xl:my-10 xl:w-[69rem] xl:m-auto' >
				<div className=''>
					<img className='relative bottom-[3.5rem] sm:bottom-[7rem] llsm:bottom-[12rem] z-[0] xl:rounded-xl xl:bottom-[0] left-[2rem] top-[4rem]' src={image} alt="" />
				</div>
				<div className='relative m-[5vw] z-[1] xl:w-[50%] xl:bottom-[0] xl:m-0 right-[2rem]'>
					<div className='shadow-2xl rounded-3xl  m-auto p-5 pt-6 pb-9 bg-[#F1F1F1] xl:shadow-xl '>
						<h1 className='text-xl font-semibold pb-4 xl:p-5 xl:pb-3'>{heading}</h1>
						<div className='text-sm leading-6 pb-3 xl:h-[18rem] xl:p-5 xl:leading-8 lg:text-base'>
							{description.map((ele, idx) =>
								(<div key={idx}><p key={idx}>{ele}</p><br /></div>))}
						</div>
						<div className='flex justify-center items-center pt-7'>
							<button className='border-[2px] border-black rounded-3xl font-semibold w-[75vw] h-[40px] lg:text-base  xl:mt-2 hover:border-[grey] hover:text-[grey]'>{redirect}</button>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default ExploreDetail_2