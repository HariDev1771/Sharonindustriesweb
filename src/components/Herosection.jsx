import React from 'react'

const Herosection = () => {
  return (
    <div className='flex  '>
        <div className='flex flex-col justify-between py-8 px-20 w-1/2 items-center gap-6'>
            <p className='text-red-600 text-8xl font-extrabold w-1/2'>DESIGN YOUR DREAM HOME</p>
            <p className='text-white'>Strong Foundationa,solid Designs:</p>
            <p className='text-white'>Trust us to bring your concrete visions to life</p>
            <button className='bg-red-700 text-white rounded-md w-32 h-8'>Know More</button>
        </div>
        <div className='flex  w-1/2'>
            <img src="https://sharonindustry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.3ce56fc6.png&w=640&q=75"/>
        </div>
    </div>
  )
}

export default Herosection