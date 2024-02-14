import React from "react";
import apartment from "../../assets/apartment.jpg";
import { Link } from "react-router-dom";
function TopOffers() {
  return (
    <div className=" bg-secondary ">
      <div className="mx-auto flex flex-col gap-16 py-10 container  px-6 overflow-x:hidden  ">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl text-primary">Top Offers</h1>
          <div className="flex items-center justify-between ">
            <p className="text-xs font-light text-primary basis-2/3 md:text-xl lg:text-2xl">
              Fulfill your career dreams, enjoy all the achievements of the city
              center and luxury housing to the fullest.
            </p>
            <button className="border-2 border-blue rounded-sm outline-0  hover:bg-hover hover:border-0 focus:border-hover hover:text-white  focus:ring-0  flex items-center justify-between bg-white text-blue font-bold duration-75 px-2 py-2 text-xs md:text-base lg:text-xl">
              Show all offers
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="bg-white h-96 w-96  flex flex-col ">
            <div className="">
              <img src={apartment} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 gap-1">
              <h2 className="text-xl font-bold">
              <Link to="/details"> Large 4-room apartment with a beautiful terrace </Link>
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
  );
}

export default TopOffers;
