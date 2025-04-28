// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import aiAdaptiveHeroImg from "../assets/Images/aiDevelopment/aiadaptive-hero-img.jpg";
import Services from "../components/Services/ServicesAIAdaptive";
import ConnectExperts from "../pages/ConnectExperts";



const AdaptiveAiDevelopment = () => {
    return (
        <>
            <AOSProvider>
                <></>
            </AOSProvider>
            <HeaderNew />
            <div className="lg:bg-center relative bg-gradient-blue-red">
            <div
          className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="w-full 2xl:py-20 xl:py-16 py-10">
                    <div className="text-white max-w-xl  w-full relative z-[2]">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Adaptive AI Development
                        </h1>
                        <p className="text-lg md:text-xl text-white mb-3">
                            Our Adaptive AI solutions are designed to evolve with your business needs. By continuously learning from data and user behavior,
                            these systems offer smarter predictions, personalized experiences, and proactive decision-making to stay ahead in a dynamic world.                        </p>
                           
                            <ConnectExperts />
                    </div>
                </div>
                <div className="w-full lg:flex justify-end items-end hidden overflow-hidden rounded-bordered" style={{ borderRadius: "12px" }}>
            <img src={aiAdaptiveHeroImg} alt="" className="features-img" style={{
              height: "350px",
              width: "auto",
              objectFit: "cover",

            }} />
            </div>
            </div>
            </div>

            <Services />

            <Footer />
        </>
    );
};

export default AdaptiveAiDevelopment;
