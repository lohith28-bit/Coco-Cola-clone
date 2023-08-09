import { React, useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import coca_cola_logo from './../../images/coca_cola_logo.svg'
import MobileMenu from './MobileMenu'
import { v4 as uuidv4 } from 'uuid';
import NavImage from './../../images/NavImage'
import MobileNavDetail from './MobileNavDetail';


function MobileNav({ menu }) {
	const [topVal, setTopVal] = useState('-404px')
	const [rightMenu, setRightMenu] = useState(['right-[100%]', 'right-[100%]', 'right-[100%]', 'right-[100%]', 'right-[100%]', 'right-[100%]'])

	const btn_Toggle = (isOpen) => {
		if (isOpen) { setTopVal('60px') }
		else {
			setTopVal('-404px');
			setRightMenu(rightMenu.map(() => 'right-[100%]'))
		}
	}

	const btn_ShowRightMenu = (idx) => {
		setRightMenu(rightMenu.map((ele, i) => i === idx ? 'right-0' : 'right-[100%]'))
	}
	const btn_HideRightMenu = () => {
		setRightMenu(rightMenu.map(() => 'right-[100%]'))
	}


	return (
		<>
			<div
				className="flex fixed w-full z-10 h-[60px] lg:hidden bg-white border-b border-b-black p-0"
			>
				<HamburgerMenu btn_Toggle={btn_Toggle} />
				<div
					className="mobile_logo lg:hidden flex m-auto justify-center items-center"
				>
					<img
						className="mr-8 vvsm:w-[200px] w-[200px]"
						src={coca_cola_logo}
						alt="Coca-Cola"
					/>
				</div>
			</div>
			<div
				className={`mobile-nav fixed w-full z-[9] transition-all lg:hidden bg-white`} style={{ 'top': topVal }}
			>
				<ul className="font-extralight text-[#333333] text-[14px] leading-[24px]">
					<li key={uuidv4()} className='cursor-pointer hover:border-[#33333]'>
						{menu.map((val, idx) => <MobileMenu key={idx} nav={val} idx={idx} btn_ShowRightMenu={btn_ShowRightMenu} />)}
					</li>
					<li key={uuidv4()} className=''>
						<div className="flex h-14 items-center border-b border-black pl-2">
							{
								NavImage.map((ele, idx) => (
									<img key={idx} className={`${idx === 1 ? 'h-[35px]' : 'h-[25px]'} mx-3 cursor-pointer `} src={ele} alt={ele} />
								))
							}
						</div>
					</li>
				</ul>
			</div>
			<div className='lg:hidden'>

				{
					data.map((ele, idx) => {
						const key = Object.keys(ele)[0]
						const item = ele[key]
						return (
							<MobileNavDetail key={idx} right={rightMenu[idx]} btn_HideRightMenu={btn_HideRightMenu} Brands={item.Details} boldText={item.boldText} semiBold={item.semiBold} para={item.para} BtnName={item.BtnName} title={item.title} color={item.color} border_color={item.border_color} />
						)
					})
				}
			</div>
		</>
	)
}

export default MobileNav


const data = [
	{
		'Our_Company': {
			'title': 'Our Company',
			boldText: "136+",
			semiBold: 'years of refreshing the world',
			para: ['The Coca‑Cola Company has been refreshing the world and making a difference for over 136 years.Explore our Purpose & Vision, History and more.'],
			BtnName: 'LEARN MORE',
			color: 'bg-[#f40000]',
			border_color: 'border-b-[#f40000]',
			Details: [{
				'PURPOSE & COMPANY VISION': [],
			}, {
				'THE COCA - COLA SYSTEM': [],
			}, {
				'LEADERSHIP': [],
			}, {
				'COCA - COLA HISTORY': ['Our Origins', 'Our First Bottle', 'Sustainability History'],
			},
			]
		},
	},
	{
		'Brands': {
			'title': 'Brands',
			boldText: "200+",
			semiBold: 'brands worldwide',
			para: ["We've established a portfolio of drinks that are best positioned to grow in an ever-changing marketplace", "From trademark Coca‑Cola to Sports, Juice & Dairy Drinks, Alcohol Ready-to-Drink Beverages and more, discover some of our most popular brands in North America and from around the world."],
			BtnName: 'DISCOVER OUR BRANDS',
			color: 'bg-[#ff560e]',
			border_color: 'border-b-[#ff560e]',
			Details: [{
				'SPARKLING': ['Coca‑Cola', 'Diet Coke', 'Fanta', 'Sprite', '+ View More']
			}, {
				'HYDRATION': ['AHA', 'BODYARMOR', 'Dasani', 'Powerade', 'smartwater', 'Topo Chico', '+ View More']
			}, {
				'COFFEE & TEA': ['Costa Coffee', 'FuzeTea', 'Gold', 'Peak Tea', 'Peace Tea', '+ View More']
			}, {
				'JUICES & DAIRY': ['fairlife', 'innocent', 'Minute Maid', 'Simply', '+ View More']
			}, {
				'ALCOHOL': ['Fresca Mixed', "Jack Daniel's & Coca‑Cola", 'Simply Spiked', 'Topo Chico Hard Seltzer', '+ View More']
			}
			]
		},
	},
	{
		'Sustainability': {
			'title': 'Sustainability',
			boldText: "OUR PLANET MATTERS",
			semiBold: '',
			para: ["Our purpose is to refresh the world and make a difference. See how our company and system employees make this possible every day and learn more about our areas of focus in sustainability."],
			BtnName: 'EXPLORE SUSTAINABILITY',
			color: 'bg-[#6ace7f]',
			border_color: 'border-b-[#6ace7f]',
			Details: [{
				'WATER STEWARDSHIP': ['2030 Water Strategy Key Goals'],
			}, {
				'SUSTAINABLE AGRICULTURE': ['Principles for Sustainable Agriculture (PSAs)'],
			}, {
				'SUSTAINABLE PACKAGING': ['Collection Strategy', 'Packaging Design', 'Partnership'],
			}, {
				'CLIMATE': []
			}, {
				'IN OUR PRODUCTS': ['Sugar Reduction'],
			}, {
				'2022 BUSINESS & SUSTAINABILITY REPORT': [],
			}, {
				'SUSTAINABILITY & GOVERNANCE RESOURCE CENTER': []
			}
			]
		},
	},
	{
		'Social': {
			'title': 'Social',
			boldText: "OUR PLANET MATTERS",
			semiBold: '',
			para: ["We aim to improve people's lives, from our employees to those who touch our business to the many communities we call home."],
			BtnName: 'SEE OUR IMPACT',
			color: 'bg-[#6ac9ce]',
			border_color: 'border-b-[#6ac9ce]',
			Details: [{
				'DIVERSITY, EQUITY AND INCLUSION': ['Leadership Council', 'Employee Groups'],
			}, {
				'PEOPLE & COMMUNITIES': ['Women Empowerment', 'Project Last Mile']
			}, {
				'HUMAN RIGHTS': ['Human Rights Governance', 'Stories of IMPACT'],
			}, {
				'COCA‑COLA FOUNDATION': []
			}, {
				'PARTNERSHIPS': [],
			}, {
				'SPORTS & ENTERTAINMENT': [],
			}, {
				'2022 BUSINESS & SUSTAINABILITY REPORT': []
			}, {
				'SUSTAINABILITY & GOVERNANCE RESOURCE CENTER': []
			}
			]
		},
	},
	{
		'CAREERS': {
			'title': 'CAREERS',
			boldText: "CAREERS",
			semiBold: '',
			para: ["We believe working at The Coca‑Cola Company is an opportunity to build a meaningful career while helping us make a real difference on a global scale."],
			BtnName: 'LEARN MORE',
			color: 'bg-[#d7b85b]',
			border_color: 'border-b-[#d7b85b]',
			Details: [{
				'LIFE AT COCA-COLA': ['Culture', 'Benefits', 'Career Development'],
			}, {
				'WORK WITH US': []
			}, {
				'CAREER AREAS': ['Early Career', 'Experienced Professionals', 'Military', 'Accessible Workplace']
			}, {
				'HIRING PROCESS': ['Application Process', 'Interview', 'Offers']
			}, {
				'JOB SEARCH': ['Coca‑Cola Company Jobs', 'Coca‑Cola System Jobs']
			},
			]
		},
	},
	{
		'Media Center': {
			'title': 'Media Center',
			boldText: "GET THE LATEST",
			semiBold: '',
			para: ["Catch up on the latest Coca‑Cola news from around the globe - from exciting brand innovation to the latest sustainability projects."],
			BtnName: 'VIEW ALL NEWS',
			color: 'bg-[#f79900]',
			border_color: 'border-b-[#f79900]',
			Details: [{
				'WHAT OTHERS ARE READING': ['Taste the Transformation: Coca‑Cola and Grammy-Award Winning Artist Rosalía Break Boundaries With Limited-Edition Coke Creation', "Coca‑Cola Brings Together Iconic Andy Warhol Painting with Illustrious Roster of Master Classics and Contemporary Works in New Global 'Masterpiece' Campaign", "A Deeper Look  at Coca‑Cola's Emerging Business in Alcohol"]
			}, {
				'LATEST ARTICLES': ['Coca‑Cola Zero Sugar Invites Fans to #TakeATaste', 'Simply Mixology Raises the Bar of the At-Home Mocktail and Cocktail Experience', "Sprite, Fresca and Seagram's Tap Mark Ronson and Madlib to Create a 'Clear' Connection", 'View all news']
			},
			]
		},
	},
]


