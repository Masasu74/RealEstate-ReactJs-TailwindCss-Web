import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Header from "../../assets/header.jpg";
import { IoLocation } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Hero() {
  return (
    <div className="max-h-fit  flex flex-col gap-16 pb-52 container mx-auto px-6 overflow-x:hidden lg:max-h-screen ">
      <Navbar />
      <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-5 text-primary lg:relative">
        <div className="md:basis-1/2 ">
          <img src={Header} alt="" />
        </div>
        <div className="flex flex-col gap-3 md: md:basis-1/2 md:justify-center lg:gap-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:-mt-20">
            Modern living for everyone
          </h1>
          <p className="text-xs lg:text-xl font-light xl:text-2xl">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
          <div className=" bg-secondary  flex-col   flex items-center justify-between p-5 h-auto gap-3 md:flex-row md:absolute md:h-20 md:hidden lg:flex lg:top-80 lg:w-4/6 lg:absolute xl:top-96 lg:my-1">
            <select
              name=""
              id=""
              className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 lg:w-48 xl:w-56"
            >
              <option value="">~Property type~</option>
              <option value="">House</option>
              <option value="">Apartment</option>
            </select>
            <div className=" border-2 border-blue w-full rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white lg:w-72 xl:w-80">
              <div className="basis-1/6 ">
                <IoLocation />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="w-72 h-18 outline-0 basis-5/6"
                placeholder="Search for location"
              />
            </div>
            <div className=" bg-blue w-32 cursor-pointer rounded-sm outline-0  hover:bg-hover focus:bg-hover  focus:ring-0 px-1 py-3 flex items-center justify-evenly text-white xl:w-36">
              <div>
                <IoSearch />
              </div>
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-secondary  flex-col    items-center justify-between p-5 h-auto gap-3 md:flex-row  md:h-20 hidden md:flex lg:hidden">
        <select
          name=""
          id=""
          className=" border-2 border-blue w-full rounded-sm outline-0 drop-shadow-md duration-300 hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3"
        >
          <option value="">~Property type~</option>
          <option value="">House</option>
          <option value="">Apartment</option>
        </select>
        <div className=" border-2 border-blue w-full rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white">
          <div>
            <IoLocation />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="w-72 h-18 outline-0"
            placeholder="Search for location"
          />
        </div>
        <div className=" bg-blue w-32 cursor-pointer rounded-sm outline-0  hover:bg-hover focus:bg-hover  focus:ring-0 px-1 py-3 flex items-center justify-evenly text-white">
          <div>
            <IoSearch />
          </div>
          <p>Search</p>
        </div>
      </div>
     
    </div>
  );
}

export default Hero;
