import React from "react";
import './Services.scss';
// import { Link } from "react-router-dom";
import ConnectExperts from "../../pages/ConnectExperts";
import Services01 from '../../assets/Images/aiDevelopment/aiChatbot/services/1.webp';
import Services02 from '../../assets/Images/aiDevelopment/aiChatbot/services/2.webp';
import Services03 from '../../assets/Images/aiDevelopment/aiChatbot/Services/3.webp';
import Services04 from '../../assets/Images/aiDevelopment/aiChatbot/Services/4.webp';
import Services05 from '../../assets/Images/aiDevelopment/aiChatbot/Services/5.webp';
import Services06 from '../../assets/Images/aiDevelopment/aiChatbot/Services/6.webp';

// import ConnectExperts from "../../pages/ConnectExperts";

const challengeData = [
    {
        id: "card01",
        img: Services01,
        title: "Custom AI Chatbot Development",
        desc: "Create bespoke chatbots tailored to your brand and business needs for seamless user experiences and impactful engagement.",
        icon: (
            <span className="text-white fs-4 icon-Inconsistent-Lead-Generation2"></span>
        )

    },
    {
        id: "card02",
        img: Services02,
        title: "Conversation UI Design",
        desc: "Build intuitive, user-friendly interfaces that encourage natural conversations and effortless customer navigation.",
        icon: (
            <span className="text-white fs-4 icon-Cloud-Security-Concerns2"></span>
        )
    },
    {
        id: "card03",
        img: Services03,
        title: "AI Chatbot Architecture Design",
        desc: "Get expert guidance to select and design optimal chatbot architectures, blending machine learning models for superior performance.",
        icon: (
            <span className="text-white fs-4 icon-Outdated-User-Experience"></span>
        )
    },
    {
        id: "card04",
        img: Services04,
        title: "NLP Engine Integration",
        desc: "Integrate advanced natural language processing (NLP) capabilities for deeper understanding and personalized, human-like interactions.",
        icon: (
            <span className="text-white fs-4 icon-Digital-Infrastructure-Scalability2"></span>
        )
    },
    {
        id: "card05",
        img: Services05,
        title: "Seamless Integrations",
        desc: "Connect your chatbot with existing enterprise systems to unlock its full potential and streamline workflows.",
        icon: (
            <span className="text-white fs-4 icon-Digital-Infrastructure-Scalability2"></span>
        )
    },
    {
        id: "card06",
        img: Services06,
        title: "Comprehensive Support and Maintenance",
        desc: "Ensure long-term chatbot performance with proactive support, real-time monitoring, regular updates, and expert optimization to maximize ROI.",
        icon: (
            <span className="text-white fs-4 icon-Digital-Infrastructure-Scalability2"></span>
        )
    },


];
const Services: React.FC = () => {

    return (

        <div className="challenges bg-black py-12 sticky w-full lg:py-16 py-10">
            <div className="container mx-auto px-6">
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Section */}
                        <div className="chalnges-left">
                            <div className="sticky top-32 text-white">
                                <h3 className="text-gradient-red text-3xl font-semibold mb-3" data-aos="fade-right" data-aos-delay="100">
                                    <span>Services</span>
                                </h3>

                                <h2 className="text-lg md:text-4xl lg:text-4xl font-bold leading-tight mb-4" data-aos="fade-right" data-aos-delay="100">
                                    AI Chatbot Development Services
                                </h2>
                                <span className="text-base font-medium" style={{ lineHeight: "1.5rem", marginBottom: "20px", display: "block" }}>

                                    At InfoTech Launch, we offer a full suite of AI chatbot development services designed to revolutionize customer interactions, streamline operations, and accelerate business innovation. Our solutions are built to deliver intelligent, human-like conversations that maximize user engagement and operational efficiency.
                                </span>

                                {/* <div className="mt-6">
                                    <Link to="/contact-us" data-aos="fade-right" data-aos-delay="100">
                                        <button className="btn btn-fix lazyloaded">Get Solution?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24.231"
                                                height="11.738" viewBox="0 0 24.231 11.738">
                                                <path id="Path_1487529" data-name="Path 1487529"
                                                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                    transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div> */}
                                <ConnectExperts />
                                <video
                                    className="z-0"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2024/07/MV.mp4?var=1838242011" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="chalnges-right" style={{ zIndex: "-1" }}>
                            <div className="md_challenges_box space-y-7">
                                {challengeData.map((challenge, index) => (
                                    <div key={challenge.id} id={challenge.id} className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `${8 + index * 0.25}rem` }}>
                                        <div className="md_challenges_left w-44">
                                            <img src={challenge.img} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                        </div>
                                        <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                            <div className="md_challenges_col">
                                                <div className="flex items-center mb-4">
                                                    <div className="flex items-center justify-center text-[24px] bg-black text-white p-2 flex-[0_0_40px] w-[40px] h-[40px] rounded-md mr-3">
                                                        {challenge.icon}
                                                    </div>
                                                    <div className="text-lg font-semibold">{challenge.title}</div>
                                                </div>
                                                <p className="text-sm">{challenge.desc}</p>
                                                <a href="#" className="link-btn mt-4 text-black font-semibold inline-block transition hover:text-blue-500">
                                                    Contact Us
                                                    <span className="icon-right-arrow ml-2 bg-black text-white p-1 rounded-full inline-flex items-center justify-center w-5 h-5 transition hover:bg-blue-500">
                                                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path></svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Services;

