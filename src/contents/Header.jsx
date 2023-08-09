import React from 'react'
import MobileNav from './Header_Compoents/MobileNav'
import LaptopNav from './Header_Compoents/LaptopNav'

function Header() {
	const menu = ['Our Company', 'Brands', 'Sustainability', 'Social', 'Careers', 'Media Center', 'Investor']
	return (
		<>
			<MobileNav menu={menu} />
			<LaptopNav menu={menu} />
		</>

	)
}

export default Header
