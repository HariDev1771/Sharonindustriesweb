import React from 'react'
import { useParams } from 'react-router'
import Data from './data.json'

const Product_detail_page = ({product}) => {
  const {productname}=useParams();
  const Product=Data.find(item=> item.name==productname)
  return (
    <div>
           <h1 className='text-white text-3xl font-semibold text-center'>{Product.name}</h1>
          <div className='w-[100%] p-8 flex gap-5 flex-wrap'>
            {
              Product.images.map(pics=>{
                return(
                  
                  <img className=' w-[20rem]  h-[15rem]' src={pics}/>
                )
              })
            }
          </div>
    </div>
  )
}

export default Product_detail_page