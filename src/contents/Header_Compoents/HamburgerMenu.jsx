import { React, useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

function HamburgerMenu({ btn_Toggle }) {
	const [isOpen, setOpen] = useState(false)

	const handleToggle = (isOpen) => {
		setOpen(isOpen);
		btn_Toggle(isOpen);
	};

	return (
		<div className='lg:hidden pt-1'>
			<Hamburger toggled={isOpen} toggle={(toggled) => handleToggle(toggled)} rounded color="#333333" easing="ease-in" size={25} direction="right" />
		</div>
	)
}

export default HamburgerMenu
