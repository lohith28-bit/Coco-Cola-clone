import React from 'react'
import ExploreDetail1 from './Explore_Components/ExploreDetail_1'
import exploreImage1 from './../images/exploreImage1.webp'
import exploreImage2 from './../images/exploreImage2.webp'
import ExploreDetail2 from './Explore_Components/ExploreDetail_2'
// llsm: mt - [-21vw] mt - [-14vw]

function Explore() {
	return (
		<>
			<div className='block sm:mt-[0] mt-[-8vw] xl:mb-[5rem]'>
				<div className='xl:hidden'>
					{data.map((ele, idx) => <ExploreDetail1 key={idx} image={ele.image} heading={ele.heading} description={ele.description} redirect={ele.redirect} classN={idx === 1 ? 'lssm:mb-[-4rem] lg:mb-[-8rem] xl:mb-[6rem]' : ''} />)}
				</div>
				<div className='hidden xl:flex xl:flex-col'>
					<div>
						<ExploreDetail1 image={data[0].image} heading={data[0].heading} description={data[0].description} redirect={data[0].redirect} />
					</div>
					<div>
						<ExploreDetail2 image={data[1].image} heading={data[1].heading} description={data[1].description} redirect={data[1].redirect} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Explore

const data = [
	{
		image: exploreImage1,
		heading: 'Coca‑Cola Company Jobs',
		description: ['We seek employees that embrace change, champion diversity and push for progress. Your skills and experience will help us navigate the ever-changing global landscape and guide us into the next chapter and beyond.'],
		redirect: 'Explore Jobs'
	},
	{
		image: exploreImage2,
		heading: 'A Purpose- Driven History',
		description: ['The Coca‑Cola Company’s purpose is to refresh the world and make a difference and we have remained true to that purpose for 137 years.', 'Our strategy is centered around people—our consumers and employees—and driving sustainable solutions that build resilience into our business to respond to current and future challenges, while creating positive change for the planet.'],
		redirect: 'Learn more about us'
	},

]
