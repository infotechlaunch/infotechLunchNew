// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import aiAgent from "../assets/Images/adaptive-ai-development1.jpg";
import Services from "../components/Services/Services";



const AdaptiveAiDevelopment = () => {
    return (
        <>
            <AOSProvider>
                <></>
            </AOSProvider>
            <HeaderNew />
            <div className="relative w-full h-screen overflow-hidden bannerhome mt-4">
                <div className="ai-consulting-img w-full h-full">
                    <img
                        src={aiAgent}
                        alt="ai-consulting-img"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center pt-20 justify-start px-10 md:px-20">
                    <div className="text-white max-w-xl xl:w-[58%] lg:w-[65%] w-full relative z-[2]">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Adaptive AI Development
                        </h1>
                        <p className="text-lg md:text-xl text-white">
                            Our Adaptive AI solutions are designed to evolve with your business needs. By continuously learning from data and user behavior,
                            these systems offer smarter predictions, personalized experiences, and proactive decision-making to stay ahead in a dynamic world.                        </p>

                    </div>
                </div>
            </div>

            <Services />

            <Footer />
        </>
    );
};

export default AdaptiveAiDevelopment;
