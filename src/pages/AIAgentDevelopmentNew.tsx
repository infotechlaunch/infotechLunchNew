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
            <section className="hero-container bg-gradient-blue-red">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="sticky top-40 z-40">
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
            <Services />

            <Footer />
        </>
    );
};

export default AIAgentDevelopmentNew;
