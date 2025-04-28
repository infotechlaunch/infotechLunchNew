import React from "react";
import './Services.scss';
// import { Link } from "react-router-dom";
import ConnectExperts from "../../pages/ConnectExperts";
import Services01 from '../../assets/Images/services/Inconsistent-Lead-Generation.jpg';
import Services02 from '../../assets/Images/services/Cloud-Security-Risks.jpg';
import Services03 from '../../assets/Images/services/Outdated-User-Experience.jpg';
import Services04 from '../../assets/Images/services/Scalability-Challenges.jpg';
import Services05 from '../../assets/Images/services/Scalability-Challenges.jpg';
import Services06 from '../../assets/Images/services/Scalability-Challenges.jpg';

// import ConnectExperts from "../../pages/ConnectExperts";

const challengeData = [
    {
        id: "card01",
        img: Services01,
        title: "AI Agent Strategy and Consulting",
        desc: "Enhance your business operations with specialized AI consulting. We assess your current systems, identify the best-fit AI agents, and develop a strategic plan to drive lasting success",
        icon: (
            <span className="text-white fs-4 icon-Inconsistent-Lead-Generation2"></span>
        )

    },
    {
        id: "card02",
        img: Services02,
        title: "Custom AI Agent Development",
        desc: "As a leading AI agent development company, we create robust AI agents using platforms like AutoGen Studio and CrewAI. Our solutions are designed to be flexible and scalable, adapting seamlessly as your business grows and evolves.",
        icon: (
            <span className="text-white fs-4 icon-Cloud-Security-Concerns2"></span>
        )
    },
    {
        id: "card03",
        img: Services03,
        title: "AI Agent Integration",
        desc: "Easily link single or multi-agent systems to your current infrastructure. Our integration expertise guarantees efficient data flow and peak performance across all platforms.",
        icon: (
            <span className="text-white fs-4 icon-Outdated-User-Experience"></span>
        )
    },
    {
        id: "card04",
        img: Services04,
        title: "AI Agent Support and Maintenance",
        desc: "Ensure your AI agents operate at their best with our dedicated support services. We manage updates, fine-tune performance, and quickly resolve issues, allowing you to stay focused on scaling your business.",
        icon: (
            <span className="text-white fs-4 icon-Digital-Infrastructure-Scalability2"></span>
        )
    },
    {
        id: "card05",
        img: Services05,
        title: "AI Agent User Experience Design",
        desc: "Design seamless and intuitive interfaces that enhance human-AI collaboration. Our user-centered approach ensures natural interactions and encourages widespread adoption within your organization.",
        icon: (
            <span className="text-white fs-4 icon-Digital-Infrastructure-Scalability2"></span>
        )
    },
    {
        id: "card05",
        img: Services06,
        title: "AI Agent Training and Optimization",
        desc: "Unlock the full potential of your AI agents with professional training and ongoing optimization. We help your agents continuously learn and adapt to meet your evolving business needs.",
        icon: (
            <span className="text-white fs-4 icon-Digital-Infrastructure-Scalability2"></span>
        )
    }
];
const Services: React.FC = () => {

    return (

        <div className="challenges bg-gradient-blue-red py-12 sticky w-full lg:py-16 py-10">
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
                                Complete AI Agent Development Solutions
                                <br />
                                <span className="text-base md:text-xl font-medium">
 We design and build smart AI agents that independently carry out tasks, engage with users, and make informed decisions based on data insights.

                                </span>
                                </h2>

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
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="chalnges-right" style={{zIndex:"-1"}}>
                            <div className="md_challenges_box space-y-7">
                                {challengeData.map((challenge, index) => (
                                    <div key={challenge.id} id={challenge.id} className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `${8 + index * 0.25}rem` }}>
                                        <div className="md_challenges_left w-44">
                                            <img src={challenge.img} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                        </div>
                                        <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                            <div className="md_challenges_col">
                                                <div className="flex items-center mb-4">
                                                    <div className="flex items-center justify-center text-[24px] bg-orange text-white p-2 flex-[0_0_40px] w-[40px] h-[40px] rounded-md mr-3">
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

