import React from 'react';

function MobileMenu({ nav, idx, btn_ShowRightMenu }) {
	return (
		<div className="flex h-14 items-center border-b border-black hover:opacity-60 text-base" onClick={() => btn_ShowRightMenu(idx)}>
			<span className="ml-5">{nav}</span>
			<div className="flex-1 flex justify-end">
				{nav !== 'Investor' && <span className="text-3xl text-[#333333] mr-5">&#62;</span>}
			</div>
		</div>
	);
}

export default MobileMenu;
