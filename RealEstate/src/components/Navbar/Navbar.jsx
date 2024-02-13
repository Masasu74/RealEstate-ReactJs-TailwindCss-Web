import React,{useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const[menuOpen,setMenuOpen]=useState(false);
  function open(){
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="py-4 flex container w-full justify-between items-center flex-col gap-3 ">
      <div className="flex items-center justify-between w-full ">

      
<div className="flex items-center justify-between xl:basis-2/4 lg:basis-3/4 gap-10 ">
        <div className="flex-none cursor-pointer">
        <Link to="/"> <img src={Logo} alt="" /></Link>
         
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-primary ">
            <li>
              <Link to="">Top offers</Link>
            </li>
            <li>
              <Link to="search">Search in offers</Link>
            </li>
            <li>
              <Link to="">References</Link>
            </li>
            <li className="font-light">
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Our team</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="  flex  flex-initial hidden md:flex xl:basis-2/4 lg:basis-2/4 justify-end">
        <button 
          type="button"
          class="  inline-block rounded bg-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-hover hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Contact us
        </button>
      </div>
      <div className="md:hidden cursor-pointer" onClick={open} >
        <GiHamburgerMenu />
      </div>
      </div>
      {menuOpen && (
                 <ul className=" md:hidden flex gap-5 text-primary flex-col text-center bg-white w-full justify-center ">
                 <li>
                   <Link to="">Top offers</Link>
                 </li>
                 <li>
                   <Link to="">Search in offers</Link>
                 </li>
                 <li>
                   <Link to="">References</Link>
                 </li>
                 <li className="font-light">
                   <Link to="">About us</Link>
                 </li>
                 <li>
                   <Link to="">Our team</Link>
                 </li>
               </ul>
            )}
    </nav>
  );
}

export default Navbar;
