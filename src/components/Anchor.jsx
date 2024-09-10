import React from 'react'
import Anchorbutton from './Anchorbutton'


const Anchor = () => {
  return (
    <div className='flex items-center gap-10 text-white'>
        <Anchorbutton head="Home" link="/herosection"/>
        <Anchorbutton head="About" link="/About"/>
        <Anchorbutton head="Contact" link="/Contact"/>
    </div>
  )
}

export default Anchor