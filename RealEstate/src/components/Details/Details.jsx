import React from "react";
import Navbar from "../Navbar/Navbar";
import detail_img from "../../assets/detail_img.png";
function Details() {
  return (
    <div>
      <div className="  flex flex-col gap-16 pb-52 container mx-auto px-6 overflow-x:hidden  ">
        <Navbar />
        <div className="flex flex-col gap-10">
          <div className="">
            <h1 className="text-xl text-center md:text-2xl lg:text-4xl">
              Premium penthouse in central Barcelona with panoramic views
            </h1>
          </div>
          <div className="flex flex-col  md:flex-row gap-7">
            <div>
              <div>
                <div>
                  <img src={detail_img} alt="" />
                </div>
              </div>
              <div className="bg-secondary w-full h-16 flex justify-between p-5 items-center">
                <div>
                  <p className="text-xs">Mortgage since:</p>
                  <h4 className="font-medium text-xs">807.57 €/ month</h4>
                </div>
                <div className=" bg-blue w-1/2 cursor-pointer rounded-sm outline-0  hover:bg-hover focus:bg-hover  focus:ring-0 px-1 py-3 flex items-center justify-evenly text-white">
                  <p className="text-xs">Get a mortgage</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary  w-full md:w-1/3 p-3 flex flex-col gap-4">
              <h1 className="text-2xl">Contact us</h1>
              <div>
                <label htmlFor="">Full name</label>
                <div className="  w-full rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-72 outline-0"
                    placeholder="Search for location"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">Phone number</label>
                <div className="  w-full rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white">
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="w-72 outline-0"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <div className="  w-full rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-72 outline-0"
                    placeholder="Your Email"
                  />
                </div>

              </div>
              <div>
                <label htmlFor="">Your message</label>
                <div className="  w-full rounded-sm outline-0  hover:border-hover focus:border-hover  focus:ring-0 px-1 py-3 flex items-center justify-between bg-white">
                 
                   
                  <textarea placeholder="Your message"  name="" id="" cols="30" rows="10" className="outline-0" ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
