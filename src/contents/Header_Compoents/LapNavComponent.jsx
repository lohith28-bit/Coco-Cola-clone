import React from 'react'
import LapNavDetail from './LapNavDetail'
import { v4 as uuidv4 } from 'uuid';


function LapNavComponent({ top, borderColor, bgBtnColor, topValEnter, topValLeave, handleTop, element, menu, boldText, semiBold, para, BtnName }) {

	return (
		<>
			<div className={`bg-white  fixed z-[9] w-full hidden lg:flex pl-44 p-5 pb-2 border-t-[10px] ${borderColor} border-b-[0.1px] border-b-[#333333] transition-all`} style={{ 'top': top }} onMouseEnter={() => handleTop(element, topValEnter, true)} onMouseLeave={() => handleTop(element, topValLeave, false)}>
				<div className='flex flex-col justify-between mr-4'>
					<div className='w-[20vw]'>
						<p className='text-3xl font-extrabold cursor-pointer'>{boldText}</p>
						<p className='font-medium text-xl pt-2 pb-1'>{semiBold}</p>
						{para.map(ele => (<p key={uuidv4()} className='text-[#333333] text-sm mb-2'>{ele}</p>))}
					</div>
					<button className={`${bgBtnColor} h-14 w-full mt-6 text-white font-semibold`}>{BtnName}</button>
				</div>
				<div className="flex flex-wrap flex-col w-full space-x-4">
					<LapNavDetail menu={menu} />
				</div>
			</div>
		</>
	)
}

export default LapNavComponent
