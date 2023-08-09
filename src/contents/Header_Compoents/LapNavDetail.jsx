import React from 'react'

function LapNavDetail({ menu }) {

	const w = 100 / menu.length

	return (
		<>
			<div className="flex flex-wrap">
				{menu.map((item, index) => {
					const keys = Object.keys(item);
					return (
						<div className="" style={{ flex: `${w}%` }} key={index}>
							{keys.map((key, keyIndex) => (
								<div key={keyIndex} className="mb-5 mx-2">
									<p className="font-semibold border-b-[1px] border-b-black text-sm pb-1 cursor-pointer">{key}</p>
									<ul className="space-y-1 text-[#333333]">
										{Array.isArray(item[key]) &&
											item[key].map((ele, idx) => {
												if (ele) {
													return <li key={idx} className={`cursor-pointer my-2 ${ele === '+ View More' || ele === 'View all news' ? 'hover:underline font-medium' : ''}`}>{ele}</li>;
												}
												return null;
											})}
									</ul>
								</div>
							))}
						</div>
					);
				})}
			</div>
		</>
	)
}

export default LapNavDetail
