import React, { useRef } from 'react'

function MobileNavDetail({ right, btn_HideRightMenu, Brands, boldText, semiBold, para, BtnName, title, color, border_color }) {
	const scrollableDivRef = useRef(null)

	return (
		<>
			<div className={`fixed z-[19] top-[59px] w-full ${right} transition-all bg-white border-b-4 ${border_color}
			`}>
				<div>
					<button className={`flex h-[50px] ${color} w-full justify-center items-center text-white`} onClick={() => { btn_HideRightMenu(); scrollableDivRef.current.scrollTop = 0; }}>
						<p className="text-3xl font-light  ml-5">&lt;</p>
						<p className='flex-1 mr-9 font-semibold text-base'>{title}</p>
					</button>
				</div>
				<div className='Details w-[96%] px-4 m-auto pt-3 h-[500px] overflow-y-auto' ref={scrollableDivRef}>
					<div className='FirstPart mb-6'>
						<p className='text-3xl' style={{ fontWeight: '900' }}><strong>{boldText}</strong></p>
						<p className='pb-5 pt-2 text-lg font-semibold'>{semiBold}</p>
						<div>
							{
								para.map((ele, idx) => (
									<div key={idx}>
										<p className='text-sm leading-6'>{ele}</p>
										<br />
									</div>
								))
							}
						</div>
						<div className='w-[93%] m-auto'>
							<button className={`${color} w-full h-11 my-5 text-base font-semibold text-white cursor-pointer`}>{BtnName}</button>
						</div>
					</div>
					<div className='SecondPart mb-4'>
						<div className="text-sm">
							{
								Brands.map((ele, val) => {
									const key = Object.keys(ele)[0]
									return (
										<div key={val} className='my-5'>
											<div className='border-b-[1px] border-[#333333] my-3'>
												<p className='font-semibold'>{key}</p>
											</div>
											<div>
												{
													ele[key].map((ele, idx) =>
													(
														<p key={idx} className={`leading-7 cursor-pointer ${ele === '+ View More' ? 'hover:underline' : ''} text-grey`}>{ele}</p>
													)
													)
												}
											</div>
										</div>
									)
								}
								)
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MobileNavDetail
