import React from 'react'
import Qplane from "../../assets/Qplane.png";
import logoFooter from "../../assets/logoFooter.png";

function Footer() {
  return (
  <div> 
  <div className="bg-secondary  ">
<div className="mx-auto flex flex-col gap-5 md:gap-10 py-10 container   px-6 overflow-x:hidden items-center md:flex-row md:justify-center">
  <div className="">
   <img src={Qplane} className="w-40 md:w-80" alt="" />
  </div>
  <div>
    <h1 className="text-2xl">Subscribe to newsletter</h1>
    <p>Get the latest news and interesting offers and real estate</p>
    <div className="flex justify-between gap-5">
    <input
        type="email"
        name=""
        id=""
        className=" basis-2/3 h-12 drop-shadow-sm shadow-xs outline-0 "
        placeholder="Enter your Email address"
      />
       <div className=" basis-1/3 bg-white border-2 w-32 cursor-pointer rounded-sm outline-0 hover:border-0 hover:text-white hover:bg-hover focus:bg-hover  focus:ring-0 px-1 py-3 flex items-center justify-evenly text-blue border-blue xl:w-36">
    
      <p>Subscribe</p>
    </div>
    </div>
  </div>
</div>
</div>
<footer className="bg-blue w-full h-40 flex items-center justify-center">
<img src={logoFooter} alt="" />
</footer>
  </div>
  )
}

export default Footer