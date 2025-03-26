import React from "react";
import experi from "../../assets/Images/icon/hero-experience-icon.svg";
import delive from "../../assets/Images/icon/heroproject-delivered-icon.svg";
import happy from "../../assets/Images/icon/happy-client-hero-icon.svg";
import { Link } from "react-router-dom";



const Banner: React.FC = () => {


  return (
    <div className="relative bannerhome">
      <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url(../../assets/Images/banner.webp)] ">

        <div
          className="flex flex-col-reverse  md:flex-row md:items-center md:space-x-20 md:py-20 py-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="xl:w-[58%] lg:w-[65%] w-full relative z-[2]">
            <div className="space-y-4  ">
           
              <h1 data-aos="fade-right"
                className="text-white xl:text-5xl sm:text-3xl text-3xl font-bold xl:leading-[4rem] sm:leading-[3rem] ">
                <span className="xl:text-4xl md:text-2xl text-2xl  overflow-auto font-medium"> Transforming
                </span><br />
                <b className="font-bold text-white">Tech Challenges into Solutions</b></h1>
               
              <p data-aos="fade-right" className="w-full mx-auto  text-sm  2xl:text-lg lg:text-base font-normal text-white">
              Empowering businesses by turning complex tech challenges into seamless, scalable solutions with innovative design and development.</p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6">
              <div data-aos="fade-up"
                className="bg-[#FFFFFF] py-4 px-4 rounded-[14px] flex lg:justify-center items-center gap-2">
                <img alt=" InfoTech Launch LIMITED Logo" loading="lazy" width="61" height="60"

                  src={experi} />
                <p className="font-semibold text-[#000] text-base">6+ Year&#x27;s Experience</p>
              </div>
              <div data-aos="fade-up"
                className="bg-[#FFFFFF] py-4 px-4 rounded-[14px] flex lg:justify-center items-center gap-2">
                <img alt=" InfoTech Launch LIMITED Logo" loading="lazy" width="61" height="60"

                  src={delive} />
                <p className="font-semibold text-[#000] text-base">250+ Project Delivered</p>
              </div>
              <div data-aos="fade-up" className="bg-[#fff] py-4 px-6 rounded-[14px] space-y-2 "><img
                alt=" InfoTech Launch LIMITED Logo" loading="lazy" width="61" height="60"

                src={happy} />
                <p className="font-semibold text-[#000] text-base">100+ Total Happy Client</p>
              </div>
            </div>
            <div className="mt-2">
              <Link to="/contact-us" data-aos="fade-up"> 
                <button className="btn btn-fix lazyloaded">Talk to an expert!
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.231"
                    height="11.738" viewBox="0 0 24.231 11.738">
                    <path id="Path_1487529" data-name="Path 1487529"
                      d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                      transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
