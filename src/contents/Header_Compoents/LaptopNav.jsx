import React, { useState } from 'react'
import coca_cola_logo from './../../images/coca_cola_logo.svg'
import globe from './../../images/globe.svg'
import login from './../../images/login.svg'
import search from './../../images/search.svg'
import LaptopMenu from './LaptopMenu'
import { v4 as uuidv4 } from 'uuid';
import LapNavComponent from './LapNavComponent'


function LaptopNav({ menu }) {
	const DefaultTop = ['-275px', '-404px', '-331px', '-404px', '-300px', '-339px'];
	const [top, setTop] = useState([...DefaultTop])
	const [changebg, setChangeBg] = useState([...DefaultTop])

	function handleTop(i, topVal, check) {
		if (check) {
			const temp = ['', '', '', '', '', '']
			const temp1 = temp.map((ele, idx) => idx === i ? `${bgBtnColor[i]} text-white` : ele)
			setChangeBg(temp1)
		} else if (!check) {
			setChangeBg('')
		}
		setTop(DefaultTop.map((ele, idx) => idx === i ? topVal : ele))
	}


	return (
		<>
			<div
				className="lg:flex fixed w-full z-10 h-[60px] hidden lg:h-[76px] bg-white border-b-[0.3px] border-b-[#333333] p-0 text-[#333333]"
			>
				<div
					className="laptop lg:flex justify-between items-center pl-2 pr-2 lg:m-auto text-sm  cursor-pointer" >
					<img
						className="w-[200px] p-4 xl:p-5 xl:min-w-[15rem]"
						src={coca_cola_logo}
						alt="the-coca-cola-company-logo"
					/>
					{menu.map((val, i) => <LaptopMenu key={uuidv4()} menu={val} hoverBgColor={menuColor[i]} element={i} handleTop={handleTop} topValEnter={menuTopVal[val].topValEnter} topValLeave={menuTopVal[val].topValLeave} top={top} changebg={changebg[i]} />)}
					<div className="p-5 xl:p-6 flex lg:space-x-3 xl:space-x-5">
						<img className="w-5" src={search} alt="search" />
						<img className="w-7" src={globe} alt="globe" />
						<img className="w-5" src={login} alt="login" />
					</div>
				</div>
			</div>
			{
				data.map((ele, idx) => {
					const key = Object.keys(ele)[0]
					const item = data[idx][key]
					return (
						<LapNavComponent key={idx} element={idx} topValEnter='76px' topValLeave={item.topValLeave} handleTop={handleTop} top={top[idx]} borderColor={item.borderColor} bgBtnColor={item.bgBtnColor} menu={item.Details} boldText={item.boldText} semiBold={item.semiBold} para={item.para} BtnName={item.BtnName} />
					)
				})
			}
		</>
	)
}

export default LaptopNav


const data = [
	{
		'Our_Company': {
			'title': 'Our Company',
			boldText: "136+",
			semiBold: 'years of refreshing the world',
			para: ['The Coca‑Cola Company has been refreshing the world and making a difference for over 136 years.Explore our Purpose & Vision, History and more.'],
			BtnName: 'LEARN MORE',
			bgBtnColor: 'bg-[#f40000]',
			topValLeave: '-275px',
			borderColor: 'border-t-[#f40000]',
			Details: [{
				'PURPOSE & COMPANY VISION': null,
				'THE COCA - COLA SYSTEM': null,
				'LEADERSHIP': null,
				'OUR BOARD OF DIRECTORS': null
			}, {
				'COCA - COLA HISTORY': ['Our Origins', 'Our First Bottle', 'Sustainability History']
			},
			],
		},
	},
	{
		'Brands': {
			'title': 'Brands',
			boldText: "200+",
			semiBold: 'brands worldwide',
			para: ["We've established a portfolio of drinks that are best positioned to grow in an ever-changing marketplace", "From trademark Coca‑Cola to Sports, Juice & Dairy Drinks, Alcohol Ready-to-Drink Beverages and more, discover some of our most popular brands in North America and from around the world."],
			BtnName: 'DISCOVER OUR BRANDS',
			bgBtnColor: 'bg-[#ff560e]',
			topValLeave: '-404px',
			borderColor: 'border-t-[#ff560e]',
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
			bgBtnColor: 'bg-[#6ace7f]',
			topValLeave: '-331px',
			borderColor: 'border-t-[#6ace7f]',
			Details: [{
				'WATER STEWARDSHIP': ['2030 Water Strategy Key Goals'],
				'SUSTAINABLE AGRICULTURE': ['Principles for Sustainable Agriculture (PSAs)']
			}, {
				'SUSTAINABLE PACKAGING': ['Collection Strategy', 'Packaging Design', 'Partnership'],
				'CLIMATE': null
			}, {
				'IN OUR PRODUCTS': ['Sugar Reduction'],
				'2022 BUSINESS & SUSTAINABILITY REPORT': null,
				'SUSTAINABILITY & GOVERNANCE RESOURCE CENTER': null
			},
			],
		},
	},
	{
		'Social': {
			'title': 'Social',
			boldText: "OUR PLANET MATTERS",
			semiBold: '',
			para: ["We aim to improve people's lives, from our employees to those who touch our business to the many communities we call home."],
			BtnName: 'SEE OUR IMPACT',
			bgBtnColor: 'bg-[#6ac9ce]',
			topValLeave: '-404px',
			borderColor: 'border-t-[#6ac9ce]',
			Details: [{
				'DIVERSITY, EQUITY AND INCLUSION': ['Leadership Council', 'Employee Groups'],
				'PEOPLE & COMMUNITIES': ['Women Empowerment', 'Project Last Mile']
			}, {
				'HUMAN RIGHTS': ['Human Rights Governance', 'Stories of IMPACT'],
				'COCA‑COLA FOUNDATION': null
			}, {
				'PARTNERSHIPS': null,
				'SUPPLIER DIVERSITY': null,
				'SPORTS & ENTERTAINMENT': null,
				'2022 BUSINESS & SUSTAINABILITY REPORT': null,
				'SUSTAINABILITY & GOVERNANCE RESOURCE CENTER': null,
			}
			],
		},
	},
	{
		'CAREERS': {
			'title': 'CAREERS',
			boldText: "CAREERS",
			semiBold: '',
			para: ["We believe working at The Coca‑Cola Company is an opportunity to build a meaningful career while helping us make a real difference on a global scale."],
			BtnName: 'LEARN MORE',
			bgBtnColor: 'bg-[#d7b85b]',
			topValLeave: '-300px',
			borderColor: 'border-t-[#d7b85b]',
			Details: [{
				'DIVERSITY, EQUITY AND INCLUSION': ['Leadership Council', 'Employee Groups'],
				'PEOPLE & COMMUNITIES': ['Women Empowerment', 'Project Last Mile']
			}, {
				'HUMAN RIGHTS': ['Human Rights Governance', 'Stories of IMPACT'],
				'COCA‑COLA FOUNDATION': null
			}, {
				'PARTNERSHIPS': null,
				'SUPPLIER DIVERSITY': null,
				'SPORTS & ENTERTAINMENT': null,
				'2022 BUSINESS & SUSTAINABILITY REPORT': null,
				'SUSTAINABILITY & GOVERNANCE RESOURCE CENTER': null,
			}
			],
		},
	},
	{
		'Media Center': {
			'title': 'Media Center',
			boldText: "GET THE LATEST",
			semiBold: '',
			para: ["Catch up on the latest Coca‑Cola news from around the globe - from exciting brand innovation to the latest sustainability projects."],
			BtnName: 'VIEW ALL NEWS',
			bgBtnColor: 'bg-[#f79900]',
			topValLeave: '-339px',
			borderColor: 'border-t-[#f79900]',
			Details: [{
				'WHAT OTHERS ARE READING': ['Taste the Transformation: Coca‑Cola and Grammy-Award Winning Artist Rosalía Break Boundaries With Limited-Edition Coke Creation', "Coca‑Cola Brings Together Iconic Andy Warhol Painting with Illustrious Roster of Master Classics and Contemporary Works in New Global 'Masterpiece' Campaign", "A Deeper Look  at Coca‑Cola's Emerging Business in Alcohol"]
			}, {
				'LATEST ARTICLES': ['Coca‑Cola Zero Sugar Invites Fans to #TakeATaste', 'Simply Mixology Raises the Bar of the At-Home Mocktail and Cocktail Experience', "Sprite, Fresca and Seagram's Tap Mark Ronson and Madlib to Create a 'Clear' Connection", 'View all news']
			}]
		},
	},
]

const menuTopVal = {
	'Our Company': {
		'topValEnter': '76px',
		'topValLeave': '-275px',
	},
	'Brands': {
		'topValEnter': '76px',
		'topValLeave': '-404px',
	},
	'Sustainability': {
		'topValEnter': '76px',
		'topValLeave': '-331px',
	},
	'Social': {
		'topValEnter': '76px',
		'topValLeave': '-404px',
	},
	'Careers': {
		'topValEnter': '76px',
		'topValLeave': '-300px',
	},
	'Media Center': {
		'topValEnter': '76px',
		'topValLeave': '-339px',
	},
	'Investor': {
		'topValEnter': '76px',
		'topValLeave': '-255px',
	},

}

const menuColor = ["hover:bg-[#f40000]", "hover:bg-[#ff560e]", "hover:bg-[#6ace7f]", "hover:bg-[#6ac9ce]", "hover:bg-[#d7b85b]", "hover:bg-[#f79900]", "hover:bg-[#b59e74]"]

const bgBtnColor = ["bg-[#f40000]", "bg-[#ff560e]", "bg-[#6ace7f]", "bg-[#6ac9ce]", "bg-[#d7b85b]", "bg-[#f79900]", "bg-[#b59e74]"]