import React from "react";
import { useNavigate } from "react-router";
import Product_detail_page from "./Product_detail_page";
import Data from "./data.json"




const Product_Section = () => {
    const navigate=useNavigate()
    const showmore=(product)=>{
      
    navigate(`productsection/product_detail_page/${product}`);
    }
   
  return (
    <div className="flex flex-col items-center gap-5  p-10 mt-20">
        <h1 className="text-white text-center text-3xl font-semibold">Our Products</h1>
        <div
        id="row1"
        className="flex gap-5 justify-between w-[100%] h-[35rem] px-8 flex-wrap"
      >
       
        {Data.map( item =>{
          return(
            <div
            className="border-2 border-gray-800 rounded-md w-[20rem] flex flex-col gap-5  justify-center items-center transform transition-transform duration-500 hover:scale-75"
            id="product "
          >
            <h1 className="text-white text-2xl font-bold  ">{item.name}</h1>
            <button className="bg-red-500 text-white rounded-sm w-20 "onClick={() =>showmore(item.name)} >View More</button>
          </div>
          )
        })}
      </div>
      
    </div>
  );
};

export default Product_Section;
