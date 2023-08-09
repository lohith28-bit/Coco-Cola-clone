import React from 'react'
import Card from './Card'
import sustainability1 from './../images/sustainability1.webp'
import sustainability2 from './../images/sustainability2.webp'


function OurSustainable() {

	return (
		<>
			<div className='mt-9 m-auto lg:w-[90%] xl:w-[77%]'>
				<h1 className='text-center font-extrabold text-2xl m-6 lg:text-4xl'>Our Sustainability Goals and Progress</h1>
				<div className='flex flex-col justify-around items-center lg:flex-row'>
					{data.map((ele, idx) => <Card key={idx} image={ele.img} heading={ele.heading} para={data[idx].para} redirect={ele.redirect} />)}
				</div>
			</div>
		</>
	)
}

export default OurSustainable


const data = [
	{
		img: sustainability1,
		heading: '2022 BUSINESS & SUSTAINABILITY REPORT',
		para: 'We build loved brands that bring joy to our consumers’ lives with beverage choices for all occasions, tastes and lifestyles. Our growth strategy is grounded in our core values and commitment to social and environmental responsibility.',
		redirect: 'See our Progress'
	},
	{
		img: sustainability2,
		heading: 'SUSTAINABILITY RESOURCE CENTER',
		para: 'At The Coca‑Cola Company, our sustainability goals and initiatives are anchored by our purpose — to refresh the world and make a difference — and are core to our growth strategy. Get an overview of our efforts to create a more sustainable business and better shared future.',
		redirect: 'Explore the Resource Center'
	},

]
