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
      <section className="hero-container bg-gradient-blue-red">
        <div className="hero-content">
          <div className="hero-text">
            <div className="sticky top-40 z-40">
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
          <div className="hero-image" data-aos="fade-left" style={{ zIndex: "0" }}>
          <div data-aos="fade-left">
              <img src={AiConsultingHeroImg} alt="" className="features-img" style={{
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

export default AIConsulting;
