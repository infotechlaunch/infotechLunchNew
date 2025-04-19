import React from "react";
import Footer from "../components/Footer/Footer";

import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
// import SocialMediaMgmtImg from "../assets/Images/aiSocialMedia/New_AI PoweredSocialMediaMgmt2.png";

// import ConnectExperts from "../pages/ConnectExperts";

const AiVoiceAgent: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />

                <section className="hero-container bg-gradient-to-r from-red-300 via-purple-200 to-blue-300 flex items-center justify-center">
                    <div className="hero-content text-center max-w-2xl p-6">
                    <p className="border border-black rounded-[20px] text-center inline-block px-4 py-2">
                        Reimagining Business, One Call at a Time.
                    </p>

                        <h1 className="text-5xl font-bold">
                        AI Voice Facilitators That Sell, Book, and Handle Business — <span className="text-red-500">So You Don't Have To</span>
                        </h1>
                        <p className="text-sm">
                        Our custom-trained AI Voice Facilitators answer calls, qualify leads, and book appointments — 24/7, with perfect memory and zero burnout. Trusted by growth-focused businesses who want real results, not hype.
                        </p>
                    </div>
                </section>


                <Footer />
            </AOSProvider>
        </>
    );
};

export default AiVoiceAgent;
