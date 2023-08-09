
import React from 'react'

function LaptopMenu({ menu, hoverBgColor, element, handleTop, topValEnter, topValLeave, changebg }) {
  return (
    <>
      <div className={`${hoverBgColor} hover:text-white p-5 xl:py-6 xl:px-6 llsm:px-[10px]  h-[76px] leading-7 ${changebg} xl:text-base`} onMouseEnter={() => handleTop(element, topValEnter)} onMouseLeave={() => handleTop(element, topValLeave)}>{menu}</div>

    </>
  )
}

export default LaptopMenu
