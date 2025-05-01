// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import aiChatbotHeroImg from "../assets/Images/aiDevelopment/aichatdevelopment-hero-img.jpg";
import Services from "../components/Services/ServicesAIChatbot";

import ConnectExperts from "../pages/ConnectExperts";

const AdaptiveAiDevelopment = () => {
    return (
        <>
            {/* <AOSProvider /> */}

            <AOSProvider>
                <></>
            </AOSProvider>
            <HeaderNew />
            <section className="hero-container bg-gradient-blue-red">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="sticky top-40 z-40">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white" data-aos="fade-right">
                        Top AI Chatbot Development Company
                        </h1>
                        <h3 className="text-2xl  text-white mb-3 font-semibold">for Intelligent Customer Engagement</h3>
                        <p className="text-lg md:text-xl text-white" data-aos="fade-right">
                        Streamline operations and boost customer satisfaction with InfoTech Launch’s intelligent AI chatbot solutions.    </p>
                        <ConnectExperts />

                    </div>
                    </div>
                    <div className="hero-image overflow-hidden" data-aos="fade-left" style={{ zIndex: "0" }}>
                        <div>
                        <img src={aiChatbotHeroImg} alt="" className="feature-img" style={{
                            height: "350px",
                            width: "auto",
                            objectFit: "cover",

                        }} />
                        </div> 
                    </div>
                </div>
            </section>

            <Services />

            <Footer />
        </>
    );
};

export default AdaptiveAiDevelopment;
