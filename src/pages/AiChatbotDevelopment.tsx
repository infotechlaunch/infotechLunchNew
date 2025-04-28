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
            <div className="lg:bg-center relative bg-gradient-blue-red">
                <div
                    className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                    <div className="w-full 2xl:py-20 xl:py-16 py-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            AI Chatbot Development
                        </h1>
                        <p className="text-lg md:text-xl text-white">
                            We build intelligent chatbots that engage users, answer questions, and provide seamless customer support 24/7. Powered by natural language processing and machine learning, our bots understand context, respond naturally, and improve with every interaction.
                        </p>
                        <ConnectExperts />

                    </div>
                    <div className="w-full lg:flex justify-end items-end hidden overflow-hidden rounded-bordered" style={{ borderRadius: "12px" }}>
                        <img src={aiChatbotHeroImg} alt="" className="features-img" style={{
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
