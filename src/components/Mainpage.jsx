import React from 'react'
import Herosection from './Herosection'
import About from './About'
import Contact from './Contact'
import Product_Section from './Product_Section'

const Mainpage = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <Contact/>
        <Product_Section/>
    </div>
  )
}

export default Mainpage