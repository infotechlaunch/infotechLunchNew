import React from "react";
import experi from "../../assets/Images/icon/hero-experience-icon.svg";
import delive from "../../assets/Images/icon/heroproject-delivered-icon.svg";
import happy from "../../assets/Images/icon/happy-client-hero-icon.svg";
// import bannerVideo from "../../assets/videos/Home_page_video2.mp4";
import bannerVideo1 from "../../assets/videos/home-hero-banner-1.gif";

import ConnectExperts from "../../pages/ConnectExperts";


const Banner: React.FC = () => {


  return (
  
    <div className="relative w-full h-screen overflow-hidden bg-gradient-blue-red ">
      {/* ✅ Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bannerVideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      

      {/* ✅ Content */}
      <div className="bg-gradient-blue-red w-full h-full flex items-center">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-20 md:py-20 py-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="w-1/2 relative z-[2]">
            <div className="space-y-4">
              <h3
                data-aos="fade-right"
                className="text-white xl:text-4xl sm:text-2xl text-2xl font-bold xl:leading-[3rem] sm:leading-[2rem]"
              >
                <span className="xl:text-4xl md:text-2xl text-2xl font-medium pb-3">
                Turning 
                </span>
                <br />
                <b className="font-bold text-white">
                Tech Challenges into Scalable AI-Powered Solutions
                </b>
              </h3>

              <p
                data-aos="fade-right"
                className="w-full text-sm 2xl:text-lg lg:text-base font-normal text-white"
              >
                From AI Agents to Social Marketing, Talent, and eCommerce 
— We Turn Technology Into Revenue Up to $83K/Month.

              </p>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6">
              <div
                data-aos="fade-up"
                className="bg-white py-4 px-4 rounded-[14px] flex lg:justify-center items-center gap-2"
              >
                <img src={experi} width={61} height={60} alt="Experience" />
                <p className="font-semibold text-black text-base">
                  6+ Year's Experience
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="bg-white py-4 px-4 rounded-[14px] flex lg:justify-center items-center gap-2"
              >
                <img src={delive} width={61} height={60} alt="Delivered" />
                <p className="font-semibold text-black text-base">
                  250+ Project Delivered
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="bg-white py-4 px-6 rounded-[14px] space-y-2"
              >
                <img src={happy} width={61} height={60} alt="Happy Clients" />
                <p className="font-semibold text-black text-base">
                  100+ Total Happy Clients
                </p>
              </div>
            </div>

            <ConnectExperts />

          </div>

           <div className="w-1/2 "  style={{ zIndex: "0" }}>
                                  <div  data-aos="fade-left" >
          
                                  <img src={bannerVideo1}  alt="Tech Challenge" style={{borderRadius:"20px"}} />
                                  </div>
                              </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
