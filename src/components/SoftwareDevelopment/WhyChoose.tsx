import React from "react";
import { Link } from 'react-router-dom';
import whychooeicon1 from '../../assets/Images/aiDevelopment/aiAgentDevelopment/WhyChoose/Autonomous_Decision_Making.png';
import whychooeicon2 from '../../assets/Images/aiDevelopment/aiAgentDevelopment/WhyChoose/Skills_Library_Integration.png';
import whychooeicon3 from '../../assets/Images/aiDevelopment/aiAgentDevelopment/WhyChoose/Multimodal_Interaction.png';
import whychooeicon4 from '../../assets/Images/aiDevelopment/aiAgentDevelopment/WhyChoose/Defined_Multiagent_Workflow.png';
import whychooeicon5 from '../../assets/Images/aiDevelopment/aiAgentDevelopment/WhyChoose/Customizable_Conversation_Patterns.png';
import whychooeicon6 from '../../assets/Images/aiDevelopment/aiAgentDevelopment/WhyChoose/Enhanced_LLM_Inference.png';
const WhyChoose: React.FC = () => {

    return (
        <div className="w-full bg-gradient-blue-red py-16">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="lg:flex space-y-3 items-center justify-between gap-10">
                    <div>
                        <h2 className="xl:text-4xl text-3xl text-[#fff] font-bold" data-aos="fade-up">Why are We the Most Trusted
                        Custom Software Development Company?</h2>
                        <p className="pt-3 text-base text-white">We believe that mutual trust and transparency are the key to effective business relationships </p>
                    </div>
                    <div>
                        <Link data-aos="fade-up" to="/contact-us" data-discover="true" >
                            <button className="btn btn-fix lazyloaded">Connect
                                to expert<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                    <path id="Path_1487529" data-name="Path 1487529"
                                        d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                        transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 mt-10">
                    <div data-aos="fade-up"
                        className="lg:bg-center lg:flex hidden justify-end items-end  bg-no-repeat bg-cover bg-left whychoose  px-6 py-8 rounded-lg">
                        <div className="relative z-[1]">
                            <h2 className="xl:text-2xl text-xl text-[#fff] font-semibold">Fully Customized Solutions</h2>
                            <p className="text-base font-normal text-white">We deeply understand your unique business needs and deliver tailored software designed to address your specific challenges.</p>
                            <div className="mt-4"><a href="/contact-us"><button
                                className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 text-center cursor-pointer transition duration-300 flex items-center hover:bg-white hover:text-black ">Get
                                in Touch</button></a></div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                        <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                <div>
                                    <img src={whychooeicon1} className="object-contain-1" />
                                    <h3 className="text-xl font-semibold">Fully Customized Solutions</h3>
                                    <p className="text-sm font-normal">
We deeply understand your unique business needs and deliver tailored software designed to address your specific challenges.
</p>
                                </div>
                            </div>
                             <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                <div>
                                    <img src={whychooeicon1} className="object-contain-1" />
                                    <h3 className="text-xl font-semibold">Clear & Honest Pricing</h3>
                                    <p className="text-sm font-normal">Detailed upfront costs ensure precise budgeting with no hidden charges.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                <div>
                                <img src={whychooeicon2} className="object-contain-1" />
                                <h3 className="text-xl font-semibold">Design-Driven Development</h3>
                                    <p className="text-sm font-normal">We focus on adaptability to deliver outstanding user experiences.
</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                                <div>
                                <img src={whychooeicon3} className="object-contain-1" />
                                <h3 className="text-xl font-semibold">Rapid Development</h3>
                                    <p className="text-sm font-normal"> Transparent communication ensures full visibility and keeps you informed throughout the project lifecycle.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                                <div>
                                <img src={whychooeicon4} className="object-contain-1" />
                                 <h3 className="text-xl font-semibold">Quality Assurance</h3>
                                    <p className="text-sm font-normal">We ensure top-notch performance, robust security, and smooth system integration.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                                <div>
                                <img src={whychooeicon5} className="object-contain-1" />
                                <h3 className="text-xl font-semibold">24/7 Dedicated Support</h3>
                                    <p className="text-sm font-normal">
                                    A skilled product manager oversees your project and offers continuous, expert assistance around the clock.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChoose;
