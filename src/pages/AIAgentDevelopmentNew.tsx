// import React from "react";
import React, { useState } from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import AiAgentHeroImg from "../assets/Images/aiDevelopment/aiagent-hero-img.jpg";
import Services from "../components/Services/ServicesAIAgent";
import ConnectExperts from "../pages/ConnectExperts";
import FAQ from "../components/Faq/FaqAIAgent";
import GetStarted from "../components/GetStarted/GetStartedAIAgent";
import achieveimg1 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/AIResearchersandDevelopers.webp';
import achieveicon1 from '../assets/Images/aiDevelopment/icon1.png';
import achieveimg2 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/SuccessfulAIProjectsDelivered.webp';
import achieveicon2 from '../assets/Images/aiDevelopment/icon2.png';
import achieveimg3 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/YearsofAIIndustryExperience.webp';
import achieveicon3 from '../assets/Images/aiDevelopment/icon3.png';
import achieveimg4 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/IndustriesServedWithAISolution.webp';
import achieveicon4 from '../assets/Images/aiDevelopment/icon4.png';
const achievements = [
    {
        id: 1,
        number: "70+",
        text: "AI Agents Deployed",
        icon: achieveicon1,
        image: achieveimg1,
    },
    {
        id: 2,
        number: "40+",
        text: "enterprise client",
        icon: achieveicon2,
        image: achieveimg2,
    },
    {
        id: 3,
        number: "15+",
        text: "client satisfaction rate ",
        icon: achieveicon3,
        image: achieveimg3,
    },
    {
        id: 4,
        number: "92%",
        text: "reduction in manual task",
        icon: achieveicon4,
        image: achieveimg4,
    },
];
const AIAgentDevelopmentNew: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
                        Searching for a Trusted AI Agent Development Company?
                        </h1>
                        <p className="text-lg md:text-xl text-white mb-5">
                        Infotech Launch builds intelligent AI agents to automate workflows, streamline operations, and enhance customer interactions — accelerating business transformation with next-generation AI solutions. </p>
                        <ConnectExperts />

                    </div>
                </div>
                <div className="hero-image"  style={{ zIndex: "0" }}>
                <div data-aos="fade-left">
                <img src={AiAgentHeroImg} alt="" className="features-img" style={{
              height: "350px",
              width: "auto",
              objectFit: "cover",

            }} />
            </div>
          </div>
          </div>
          </section>
          <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="achievement-wrapper">
                        {achievements.map((item, index) => (
                            <div data-aos="fade-up"
                                key={item.id}
                                className={`achievement-wrapper__item ${index === activeIndex ? "is-active" : ""}`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="achievement-content">
                                    <div className="icn"> <img src={item.icon} alt="Icon" className="img-fluid lazyloaded" />
                                    </div>
                                    <div className="content">
                                        <h2>{item.number}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <div className="achievement-image"> <img alt="AI Experts" src={item.image} /> </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Services />
            <GetStarted />
            <FAQ />
            <Footer />
        </>
    );
};

export default AIAgentDevelopmentNew;
