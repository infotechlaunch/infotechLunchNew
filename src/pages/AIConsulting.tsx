// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import AiConsultingHeroImg from "../assets/Images/aiDevelopment/aiconsulting-hero-img.jpg";
import Services from "../components/Services/ServicesAIConsulting";
import ConnectExperts from "../pages/ConnectExperts";



const AIConsulting = () => {
  return (
    <>
      <AOSProvider>
        <></>
      </AOSProvider>
      <HeaderNew />
      <div className="lg:bg-center relative bg-gradient-blue-red">
        <div
          className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto pt-10">
          <div className="w-full 2xl:py-20 xl:py-16 py-10">
            <div className="text-white max-w-xl  w-full relative z-[2]" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                AI Consulting Services
              </h1>
              <p  className="text-lg md:text-xl text-white mb-3">
                We help businesses harness the power of Artificial Intelligence to automate workflows,
                gain deeper insights, and unlock new opportunities. Let’s transform your future with
                data-driven intelligence.
              </p>
              <ConnectExperts />
            </div>
          </div>
          <div className="w-full lg:flex justify-end items-end hidden overflow-hidden rounded-bordered" style={{ borderRadius: "12px" }}>
            <div data-aos="fade-left">
            <img src={AiConsultingHeroImg} alt="" className="features-img" style={{
              height: "350px",
              width: "auto",
              objectFit: "cover",

            }} />
            </div>
          </div>
          </div>
        </div>

        <Services />

        <Footer />
      </>
      );
};

      export default AIConsulting;
