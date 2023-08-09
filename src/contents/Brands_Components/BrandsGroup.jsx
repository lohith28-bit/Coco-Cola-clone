import React from 'react'
import BrandImages from './../../images/BrandImages'

function BrandsGroup() {
	return (
		<div className='grid grid-cols-4 gap-7 lg:grid-cols-3'>
			{
				BrandImages.map((ele, idx) => {
					if (idx % 2 === 0) {
						if (BrandImages.length - 1 === idx) {
							return (<div key={idx} className=' col-span-4 m-auto lg:col-span-1'><div key={idx} className='shadow-lg rounded-2xl col-span-4 p-5 cursor-pointer'>
								<img className='max-h-[27vw]' src={ele} alt='brand'></img>
							</div></div>)
						} else {
							return (
								<div key={idx} className=' col-span-2 m-auto lg:col-span-1'><div key={idx} className='shadow-lg rounded-2xl p-5 cursor-pointer'>
									<img className='max-h-[27vw]' src={ele} alt='brand'></img>
								</div>
								</div>
							);
						}
					} else {
						return (
							<div key={idx} className=' col-span-2 m-auto lg:col-span-1'><div key={idx} className='shadow-lg rounded-2xl p-5 cursor-pointer'>
								<img className='max-h-[27vw]' src={ele} alt='brand'></img>
							</div>
							</div>
						);
					}
				})
			}
		</div>
	)
}

export default BrandsGroup
