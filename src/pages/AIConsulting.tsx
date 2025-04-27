// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import AiConsultingImg from "../assets/Images/Software-Mobile-App.jpg";
import Services from "../components/Services/Services";
import ConnectExperts from "../pages/ConnectExperts";



const AIConsulting = () => {
  return (
    <>
      <AOSProvider>
          <></>
      </AOSProvider>
      <HeaderNew />
      <div className="relative w-full h-screen overflow-hidden bg-gradient-blue-red mt-4">
        <div className="ai-consulting-img w-full h-full">
          <img
            src={AiConsultingImg}
            alt="ai-consulting-img"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center pt-20 justify-start px-10 md:px-20">
          <div className="text-white max-w-xl xl:w-[58%] lg:w-[65%] w-full relative z-[2]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              AI Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-white mb-3">
              We help businesses harness the power of Artificial Intelligence to automate workflows,
              gain deeper insights, and unlock new opportunities. Let’s transform your future with
              data-driven intelligence.
            </p>
            <ConnectExperts />
          </div>
        </div>
      </div>

      <Services />

      <Footer />
    </>
  );
};

export default AIConsulting;
