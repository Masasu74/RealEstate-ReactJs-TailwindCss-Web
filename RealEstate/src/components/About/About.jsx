import React from "react";
import about from "../../assets/about.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import { IoSearch } from "react-icons/io5";
import quote from "../../assets/quote.png";
import Footer from "../Footer/Footer.jsx"
function About() {
  return (
    <div>
      <div className="mx-auto flex flex-col gap-5 py-10 container items-center justify-center  px-6 overflow-x:hidden md:flex-row">
        <div>
          <img src={about} alt="" className="md:basis-2/4" />{" "}
        </div>
        <div className="flex flex-col gap-4 md:basis-2/4 ">
          <h1 className="text-primary text-4xl lg:text-5xl xl:text-6xl">
            About Us
          </h1>
          <p className="text-xs lg:text-base xl:text-xl">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice. <br /> <br />
            We have a connection to all banks on the Slovak market, so we can
            solve everything under one roof. By constantly innovating our
            business activities, we move forward and we are able to offer truly
            above-standard services that set us apart from the competition.
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-5 md:gap-10 py-10 container items-center justify-center  px-6 overflow-x:hidden">
        <div className="flex flex-col gap-4  ">
          <h1 className="text-primary text-4xl lg:text-5xl xl:text-6xl">
            Our Team
          </h1>
          <p className="text-xs lg:text-base xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            rutrum donec ultricies cras id ac.
          </p>
        </div>
        <div className="  flex flex-wrap gap-20 justify-center items-center  ">
          <div className=" w-76 md:w-80  bg-white h-64 md:h-72 p-5 shadow-lg flex flex-col justify-center items-center gap-5 ">
            <div className="w-1/2">
              <img src={person1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-primary">Davis Carder</h1>
              <p>Super duper position</p>
            </div>
          </div>

          <div className=" w-76 md:w-80  bg-white h-64 md:h-72 p-5 shadow-lg flex flex-col justify-center items-center gap-5 ">
            <div className="w-1/2">
              <img src={person1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-primary">Davis Carder</h1>
              <p>Super duper position</p>
            </div>
          </div>
          <div className=" w-76 md:w-80  bg-white h-64 md:h-72 p-5 shadow-lg flex flex-col justify-center items-center gap-5 ">
            <div className="w-1/2">
              <img src={person1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-primary">Davis Carder</h1>
              <p>Super duper position</p>
            </div>
          </div>
          <div className=" w-76 md:w-80  bg-white h-64 md:h-72 p-5 shadow-lg flex flex-col justify-center items-center gap-5 ">
            <div className="w-1/2">
              <img src={person1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-primary">Davis Carder</h1>
              <p>Super duper position</p>
            </div>
          </div>
          <div className=" w-76 md:w-80  bg-white h-64 md:h-72 p-5 shadow-lg flex flex-col justify-center items-center gap-5 ">
            <div className="w-1/2">
              <img src={person1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-primary">Davis Carder</h1>
              <p>Super duper position</p>
            </div>
          </div>
          <div className=" w-76 md:w-80  bg-white h-64 md:h-72 p-5 shadow-lg flex flex-col justify-center items-center gap-5 ">
            <div className="w-1/2">
              <img src={person1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-primary">Davis Carder</h1>
              <p>Super duper position</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-5 md:gap-10 py-10 container   px-6 overflow-x:hidden">
        <div className="flex flex-col gap-4 md:w-1/2 ">
          <h1 className="text-4xl text-primary lg:text-5xl xl:text-6xl">
            References
          </h1>
          <p className="text-xs lg:text-base xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            rutrum donec ultricies cras id ac.
          </p>
        </div>
        <div className="flex gap-10 flex-row flex-wrap md:flex-nowrap">
          <div className="bg-secondary w-full  md:w-1/2 p-4 flex flex-col gap-4">
            <div className="flex flex-row ">
              <div>
                <img src={quote} alt="" width="300px" />
              </div>
              <p className="text-xs pt-2 lg:text-base xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique in pellentesque ultrices et massa neque, convallis
                lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc
                placerat ultricies pretium.
              </p>
            </div>
            <div>
              <h1 className=" text-xl lg:text-2xl xl:text-3xl">
                Emerson Aminoff
              </h1>
              <p className="text-xs lg:text-base xl:text-xl">
                3 bedroom apartmentt in Madrid
              </p>
            </div>
          </div>
          <div className="bg-secondary w-full  md:w-1/2 p-4 flex flex-col gap-4">
            <div className="flex flex-row ">
              <div>
                <img src={quote} alt="" width="300px" />
              </div>
              <p className="text-xs pt-2 lg:text-base xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique in pellentesque ultrices et massa neque, convallis
                lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc
                placerat ultricies pretium.
              </p>
            </div>
            <div>
              <h1 className=" text-xl lg:text-2xl xl:text-3xl">
                Emerson Aminoff
              </h1>
              <p className="text-xs lg:text-base xl:text-xl">
                3 bedroom apartmentt in Madrid
              </p>
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
  );
}

export default About;
