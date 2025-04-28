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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-right">
                            AI Chatbot Development
                        </h1>
                        <p className="text-lg md:text-xl text-white" data-aos="fade-right">
                            We build intelligent chatbots that engage users, answer questions, and provide seamless customer support 24/7. Powered by natural language processing and machine learning, our bots understand context, respond naturally, and improve with every interaction.
                        </p>
                        <ConnectExperts />

                    </div>
                    </div>
                    <div className="hero-image" data-aos="fade-left" style={{ zIndex: "0" }}>
                        <div data-aos="fade-left">
                        <img src={aiChatbotHeroImg} alt="" className="features-img" style={{
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
