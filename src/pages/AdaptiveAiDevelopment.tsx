// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import aiAdaptiveHeroImg from "../assets/Images/aiDevelopment/aiadaptive-hero-img.jpg";
import Services from "../components/Services/ServicesAIAdaptive";
import ConnectExperts from "../pages/ConnectExperts";
import TawkChat from "./TawkChat";



const AdaptiveAiDevelopment = () => {
    return (
        <>
            <AOSProvider>
                <></>
            </AOSProvider>
            <HeaderNew />
            <section className="hero-container bg-gradient-blue-red">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="sticky top-40 z-40">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                Adaptive AI Development
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-3">
                                Our Adaptive AI solutions are designed to evolve with your business needs. By continuously learning from data and user behavior,
                                these systems offer smarter predictions, personalized experiences, and proactive decision-making to stay ahead in a dynamic world.                        </p>

                            <ConnectExperts />
                        </div>
                    </div>
                    <div className="hero-image"  style={{ zIndex: "0" }}>
                        <div data-aos="fade-left">

                            <img src={aiAdaptiveHeroImg} alt="" className="features-img" style={{
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
                <TawkChat />
            </>
            );
};

            export default AdaptiveAiDevelopment;
