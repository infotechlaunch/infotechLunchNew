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
import achieveimg1 from '../assets/Images/aiDevelopment/aiAgentDevelopment/achivement/AI_Agents_Deployed.webp';
import achieveicon1 from '../assets/Images/aiDevelopment/icon1.png';
import achieveimg2 from '../assets/Images/aiDevelopment/aiAgentDevelopment/achivement/enterprise_client.webp';
import achieveicon2 from '../assets/Images/aiDevelopment/icon2.png';
import achieveimg3 from '../assets/Images/aiDevelopment/aiAgentDevelopment/achivement/enterprise_client.webp';
import achieveicon3 from '../assets/Images/aiDevelopment/icon3.png';
import achieveimg4 from '../assets/Images/aiDevelopment/aiAgentDevelopment/achivement/client_satisfaction rate.webp';
import achieveicon4 from '../assets/Images/aiDevelopment/icon4.png';
import WhyChoose from "../components/AIAgentDevelopment/WhyChoose";
import toolimg1 from '../assets/Images/aiDevelopment/aiAgentDevelopment/Process/DiscoveryPlanning.png';
import toolimg2 from '../assets/Images/aiDevelopment/aiAgentDevelopment/Process/DiscoveryPlanning.png';
import toolimg3 from '../assets/Images/aiDevelopment/aiAgentDevelopment/Process/DiscoveryPlanning.png';
import toolimg4 from '../assets/Images/aiDevelopment/aiAgentDevelopment/Process/DiscoveryPlanning.png';
import toolimg5 from '../assets/Images/aiDevelopment/aiAgentDevelopment/Process/DiscoveryPlanning.png';
import toolimg6 from '../assets/Images/aiDevelopment/aiAgentDevelopment/Process/DiscoveryPlanning.png';
import ContactForm from "../components/ContactUs/ContactForm";
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
                    <div className="hero-image" style={{ zIndex: "0" }}>
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
            <WhyChoose />
            <section className="w-full lg:py-16 py-10 bg-gradient-blue-red">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                    <div className="space-y-4 ">
                        <div className="space-y-4 text-center">
                            <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold">Our Agile AI Agent Development Process <br />Drives Superior Results</h2>
                            <p className="text-white text-base">From concept to deployment, we craft powerful AI agents with speed, precision, and innovation.
                            </p>
                            
                        </div>
                        <div className="flex justify-center">
                        <ConnectExperts />
                        </div>
                        <div className="grid pt-8 grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                <img src={toolimg1} alt="dzcs" className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                <h4 className="text-xl font-semibold">01. Discovery & Planning</h4>
                                <p>Identify objectives, assess feasibility, and define success metrics for your custom AI agent solution.</p>
                            </div>
                            <div className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                <img src={toolimg2} alt="dzcs" className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                <h4 className="text-xl font-semibold">02. Data Architecture & Design</h4>
                                <p>Collect, prepare, and structure data with a scalable AI-ready architecture and integration framework.</p>
                            </div>
                            <div className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                <img src={toolimg3} alt="dzcs" className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                <h4 className="text-xl font-semibold">03. Intelligent Development</h4>
                                <p>Develop and train advanced AI models using machine learning algorithms and rigorous testing.</p>
                            </div>
                            <div className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                <img src={toolimg4} alt="dzcs" className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                <h4 className="text-xl font-semibold">04. Seamless Integration</h4>
                                <p>Integrate AI agents securely into your existing infrastructure with full performance validation.</p>
                            </div>
                            <div className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                <img src={toolimg5} alt="dzcs" className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                <h4 className="text-xl font-semibold">05. Strategic Deployment</h4>
                                <p>Deploy in phases, train your team, and enable real-time monitoring for ongoing success.</p>
                            </div>
                            <div className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                <img src={toolimg6} alt="dzcs" className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                <h4 className="text-xl font-semibold">06. Continuous Evolution</h4>
                                <p>Ensure AI performance through regular optimization, maintenance, and capability scaling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GetStarted />
            <section className="lg:py-16 py-10 bg-gradient-blue-red">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

                    <div className="space-y-4 ">
                        <div className="space-y-4 text-center">
                            <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold"> Tools & Technology</h2>
                            <p className="text-base text-white">Build AI Agent With State-Of-The-Art Development Tools And Technology</p>
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
            <FAQ />
            <Footer />
        </>
    );
};

export default AIAgentDevelopmentNew;
