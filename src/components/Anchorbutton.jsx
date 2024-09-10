import React from 'react'
import { Link } from 'react-router-dom'
const Anchorbutton = (props) => {
  return (
    <div>
         <p className='hover:text-red-400 font-semibold cursor-pointer'><Link to={props.link}>{props.head}</Link></p>
    </div>
  )
}

export default Anchorbutton