import React from 'react'
import SocialMedia from '../../images/SocialMedia'

function FooterDetails() {
	return (
		<>
			<div>

				<div className='flex flex-col mx-1'>
					<div className='grid grid-cols-2 gap-5 lg:grid-cols-5'>
						<div className=''>
							<h6 className='text-[x-small] font-extralight text-gray-300 mb-5 lg:text-xs'>ABOUT US</h6>
							<div>
								{
									data.first_col.map((ele, idx) =>
										<p key={idx} className='text-sm pb-4 cursor-pointer lg:text-lg'>{ele}</p>
									)
								}
							</div>
						</div>
						<div className=''>
							<h6 className='text-[x-small] font-extralight text-gray-300 mb-4 lg:text-xs'>NEED HELP?</h6>
							<div>
								{
									data.second_col.map((ele, idx) =>
										<p key={idx} className='text-sm pb-4 cursor-pointer lg:text-lg'>{ele}</p>
									)
								}
							</div>
						</div>
						<div className='my-4'>
							<div>
								{
									data.second_row.map((ele, idx) =>
										<p key={idx} className='text-sm pb-5 cursor-pointer lg:text-lg'>{ele}</p>
									)
								}
							</div>
						</div>
						<div className='col-start-1 col-span-2 lg:col-start-5 lg:col-span-2'>
							<div className='flex space-x-3 lg:space-x-1 xl:space-x-5'>
								{
									SocialMedia.map((ele, idx) => (
										<img key={idx} className={` cursor-pointer ${idx === 0 ? 'border-[2.3px] rounded-[31px] py-[4px] px-[2px] h-[32px] lg:h-[39.4px] lg:border-[2.6px] lg:py-[8px] lg:px-[6px] mt-[1px] lg:mt-[0px]' : 'h-[33px] lg:h-[40px]'}`} src={ele} alt={`${ele}`} />
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}

export default FooterDetails

const data = {
	first_col: ['Media Center', 'Coca‑Cola Foundation', 'Investors', 'Policies', 'Careers'],
	second_col: ['FAQ', 'Contact Us', 'International'],
	second_row: ['California Notice at Collection', 'Do Not Sell My Personal Information', 'Terms of Use', 'Privacy Policy', 'Cookies Settings']
}
