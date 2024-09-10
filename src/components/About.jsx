import React from "react";

const About = () => {
  return (
    <div className=" bg-abtbg h-[600px] text-black flex justify-around ">
      <div className="w-1/2 flex justify-center items-center">
        <img
          className="rounded-lg w-[468px]"
          src="https://sharonindustry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_us_image.b3112cb9.jpg&w=640&q=75 "
        />
      </div>
      <div className="w-1/2 flex flex-col items-center p-20 gap-5 ">
        <p className="text-3xl font-semibold text-white underline">ABOUT US</p>
        <p className="text-abttext text-xl text-justify">
          Welcome to our Sharon Industries! We are a team of professionals
          dedicated to providing top-quality products for the construction
          industry. Our product line includes a wide range of designs, including
          pillars, water cuttings, wall designs, ventilations, parapet designs,
          and fencing.
          <br /> Our products are made with the highest quality materials and
          techniques, ensuring that they are both beautiful and functional. We
          are committed to delivering exceptional customer service and stand
          behind our products with a satisfaction guarantee.
          <br /> Whether you're a contractor looking to add value to your
          projects or a homeowner looking to make a statement with your
          property, we have the products and expertise to help you achieve your
          goals. Thank you for considering our company for your concrete design
          needs. We look forward to working with you and helping bring your
          vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
