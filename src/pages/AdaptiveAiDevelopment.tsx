// import React from "react";
import React, { useState } from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import aiAdaptiveHeroImg from "../assets/Images/aiDevelopment/aiAdaptive/HeroImg.jpg";
import Services from "../components/Services/ServicesAIAdaptive";
import ConnectExperts from "../pages/ConnectExperts";
import TawkChat from "./TawkChat";
import achieveimg1 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/AIResearchersandDevelopers.webp';
import achieveicon1 from '../assets/Images/aiDevelopment/icon1.png';
import achieveimg2 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/SuccessfulAIProjectsDelivered.webp';
import achieveicon2 from '../assets/Images/aiDevelopment/icon2.png';
import achieveimg3 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/YearsofAIIndustryExperience.webp';
import achieveicon3 from '../assets/Images/aiDevelopment/icon3.png';
import achieveimg4 from '../assets/Images/aiDevelopment/aiAdaptive/FeatureImg/IndustriesServedWithAISolution.webp';
import achieveicon4 from '../assets/Images/aiDevelopment/icon4.png';
import toolimg1 from '../assets/Images/aiDevelopment/aiAdaptive/tools/1.png';
import toolimg2 from '../assets/Images/aiDevelopment/aiAdaptive/tools/2.png';
import toolimg3 from '../assets/Images/aiDevelopment/aiAdaptive/tools/3.png';
import toolimg4 from '../assets/Images/aiDevelopment/aiAdaptive/tools/4.png';
import toolimg5 from '../assets/Images/aiDevelopment/aiAdaptive/tools/5.png';
import toolimg6 from '../assets/Images/aiDevelopment/aiAdaptive/tools/6.png';
import toolimg7 from '../assets/Images/aiDevelopment/aiAdaptive/tools/7.png';
import toolimg8 from '../assets/Images/aiDevelopment/aiAdaptive/tools/8.png';
import toolimg9 from '../assets/Images/aiDevelopment/aiAdaptive/tools/9.png';
import toolimg10 from '../assets/Images/aiDevelopment/aiAdaptive/tools/10.png';
import toolimg11 from '../assets/Images/aiDevelopment/aiAdaptive/tools/11.png';

import IndustriesAdaptiveAI from "../components/AdaptiveAI/Industries";
const achievements = [
    {
        id: 1,
        number: "70+",
        text: "AI Researchers and Developers",
        icon: achieveicon1,
        image: achieveimg1,
    },
    {
        id: 2,
        number: "40+",
        text: "Successful AI Projects Delivered",
        icon: achieveicon2,
        image: achieveimg2,
    },
    {
        id: 3,
        number: "15+",
        text: "Years of AI Industry Experience",
        icon: achieveicon3,
        image: achieveimg3,
    },
    {
        id: 4,
        number: "92%",
        text: "Industries Served With AI Solution",
        icon: achieveicon4,
        image: achieveimg4,
    },
];
const AdaptiveAiDevelopment: React.FC = () => {
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
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white" data-aos="fade-right">
                                Top AI Development Services

                            </h1>
                            <h3 className="text-2xl  text-white mb-3 font-semibold" data-aos="fade-right">
                                To Drive Innovation and Growth
                            </h3>
                            <p className="text-lg md:text-xl text-white mb-3" data-aos="fade-right">
                                Accelerate innovation with InfoTech Launch — expert AI development for automation, optimization, and scalable growth.</p>

                            <ConnectExperts />
                        </div>
                    </div>
                    <div className="hero-image" style={{ zIndex: "0" }}>
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
            <IndustriesAdaptiveAI />

            <section className="lg:py-16 py-10 bg-gradient-blue-red">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

                    <div className="space-y-4 ">
                        <div className="space-y-4 text-center">
                            <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold"> Cutting-Edge Tools & Technologies <br /> For Powerful adaptive AI Adaptive</h2>
                            <p className="text-base text-white">Our AI developers leverage the latest and most efficient tech stack to streamline development, accelerate deployment, <br />and ensure seamless integration for your AI project.</p>

                        </div>
                        <div className="grid pt-8 grid-cols-1 md:grid-cols-5 gap-4 text-center">

                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg1} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">Caffe 2</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg2} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">PyTorch</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg3} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">NVCAFF</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg4} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">Chainer</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg5} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">Theano</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg6} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">Mxnet</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg7} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">Kurento</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg8} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">3D rendering</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg9} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-base font-semibold">Deeplearning4j</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange  shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg10} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">AI</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                    <img src={toolimg11} className="tool-icon" />
                                </div>
                                <div className="w-2/3">
                                    <p className="text-xl font-semibold">Igniter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <Footer />
            </>
            );
};

export default AdaptiveAiDevelopment;
