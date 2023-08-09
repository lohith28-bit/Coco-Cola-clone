import React from 'react'
import footer_coca_cola_logo from './../images/footer_coca_cola_logo.svg'
import locatio_logo from './../images/location_logo.jpg'
import FooterDetails from './Footer_Components/FooterDetails'

function Footer() {
	let date = new Date()
	const year = date.getFullYear()
	return (
		<>
			<div className='bg-black text-white'>
				<div className='w-[92%] m-auto'>
					<div className='flex py-11 pb-6 items-center justify-center flex-col sm:flex-row sm:justify-between'>
						<div className='py-8  sm:w-[50%]'>
							<img className='w-[14rem] lg:w-[19rem]' src={footer_coca_cola_logo} alt="Coca Cola" />
						</div>
						<button className='flex border-[3px] border-white rounded-3xl justify-center items-center py-1 w-[90%] lsm:w-[80%] sm:w-[300px] hover:opacity-70'>
							<img className='h-[30px] lg:h-[40px] px-2' src={locatio_logo} alt="" />
							<p className='text-sm sm:text-base'>United States | English</p>
						</button>
					</div>
					<div className='m-auto'>
						<hr className='w- m-auto pb-10' />
					</div>
					<FooterDetails />
					<div className='m-auto mt-7'>
						<hr className='m-auto' />
					</div>
					<div className='flex lg:justify-end'>
						<p className='text-xs pt-8 pb-[6vw] sm:text-sm lg:text-base'>&copy; {year} The Coca‑Cola Company. All rights reserved.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
