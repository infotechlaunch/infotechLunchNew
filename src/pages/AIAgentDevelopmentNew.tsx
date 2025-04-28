// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import AiAgentHeroImg from "../assets/Images/aiDevelopment/aiagent-hero-img.jpg";
import Services from "../components/Services/ServicesAIAgent";
import ConnectExperts from "../pages/ConnectExperts";



const AIAgentDevelopmentNew = () => {
    return (
        <>
            <AOSProvider>
                <></>
            </AOSProvider>
            <HeaderNew />
            <div className="lg:bg-center relative bg-gradient-blue-red">
        <div
          className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="w-full 2xl:py-20 xl:py-16 py-10" data-aos="fade-right">
                    <div className="text-white max-w-xl  w-full relative z-[2]">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            AI Agent Development
                        </h1>
                        <p className="text-lg md:text-xl text-white mb-5">
                            We specialize in building intelligent AI agents that automate tasks, improve decision-making,
                            and deliver real-time responses. Whether it’s virtual assistants, customer support, or workflow bots—
                            our agents work around the clock to streamline your business processes.
                        </p>
                        <ConnectExperts />

                    </div>
                </div>
            <div className="w-full lg:flex justify-end items-end hidden overflow-hidden rounded-bordered" style={{ borderRadius: "12px" }}>
            <div data-aos="fade-left">
                <img src={AiAgentHeroImg} alt="" className="features-img" style={{
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

export default AIAgentDevelopmentNew;
