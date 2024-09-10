import React from 'react'
import Anchor from './Anchor'

const Navbar = () => {
  return (
    <div className='flex justify-around py-5'>
        <h1 className='text-white text-2xl font-semibold'>SHARON INDUSTRIES</h1>
        <Anchor/>
    </div>
  )
}

export default Navbar