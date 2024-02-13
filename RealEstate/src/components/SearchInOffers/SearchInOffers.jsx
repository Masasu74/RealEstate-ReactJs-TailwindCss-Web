import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoLocation } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import apartment from "../../assets/apartment.jpg";
import Footer from "../Footer/Footer";
function SearchInOffers() {
  return (
    <div>
  <div className="  flex flex-col gap-16 pb-52 container mx-auto px-6 overflow-x:hidden  ">
      <Navbar />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-primary md:text-4xl">
            Search for an offer
          </h1>
          <p className="text-xs md:text-base font-light">
            Choose from the most advantageous offers
          </p>
        </div>
        <div className="bg-secondary flex justify-center items-center flex-col">
          <div className="flex md:my-6 my-2 md:mx-12 mx-2 gap-4">
            <div className=" border-2 border-blue w-1/2 rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white lg:w-72 xl:w-80">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-18 outline-0  text-xs"
                placeholder="Search for location"
              />
            </div>
            <div className=" bg-blue w-1/2 cursor-pointer rounded-sm outline-0  hover:bg-hover focus:bg-hover  focus:ring-0 px-1 py-3 flex items-center justify-evenly text-white xl:w-36">
              <div>
                <IoSearch />
              </div>
              <p>Search</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col md:my-6 my-2 md:mx-12 mx-2 md:flex-row gap-4">
              <select
                name=""
                id=""
                className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 lg:w-48 xl:w-56"
              >
                <option value="">~Property type~</option>
                <option value="">House</option>
                <option value="">Apartment</option>
              </select>
              <select
                name=""
                id=""
                className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 lg:w-48 xl:w-56"
              >
                <option value="">~Property type~</option>
                <option value="">House</option>
                <option value="">Apartment</option>
              </select>

              <select
                name=""
                id=""
                className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 lg:w-48 xl:w-56"
              >
                <option value="">~Property type~</option>
                <option value="">House</option>
                <option value="">Apartment</option>
              </select>

              <select
                name=""
                id=""
                className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 lg:w-48 xl:w-56"
              >
                <option value="">~Property type~</option>
                <option value="">House</option>
                <option value="">Apartment</option>
              </select>

              <select
                name=""
                id=""
                className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 lg:w-48 xl:w-56"
              >
                <option value="">~Property type~</option>
                <option value="">House</option>
                <option value="">Apartment</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="bg-white h-96 w-96  flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>
          <div className="bg-white h-96 w-96 self-center flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
                Large 4-room apartment with a beautiful terrace
              </h2>
              <div>
                <p className="text-blue font-bold">320 000€</p>
                <p className="font-light">Barcelona IX. </p>
              </div>
              
            </div>
          </div>

        </div>
      </div>
     
    </div>
    <Footer/>
    </div>
  
  );
}

export default SearchInOffers;
