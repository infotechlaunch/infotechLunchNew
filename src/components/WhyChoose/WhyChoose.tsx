import React from "react";
// import { Link } from 'react-router-dom';
import icon1 from "../../assets/Images/icon/why-choose/Optimum-Outcome-Focused.png";
import icon2 from "../../assets/Images/icon/why-choose/Experienced-Techies.png";
import icon3 from "../../assets/Images/icon/why-choose/Cutting-Edge-Technologies.png";
import icon4 from "../../assets/Images/icon/why-choose/Cost-Effective-Deadline-Oriented.png";
import icon5 from "../../assets/Images/icon/why-choose/Transparency-with-Clients.png";
import icon6 from "../../assets/Images/icon/why-choose/Modern-IT-Services.png";

import ConnectExperts from "../../pages/ConnectExperts";


const WhyChoose: React.FC = () => {

    return (
        <div className="w-full bg-gradient-blue-red py-16">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="lg:flex space-y-3 items-center justify-between gap-10">
                    <div>
                        <h2 className="xl:text-4xl text-3xl text-white font-bold" data-aos="fade-right" data-aos-delay="100">Why Choose Us?</h2>
                        <p className="text-base text-white font-normal mt-2 w-full" data-aos="fade-right" data-aos-delay="100">We deliver innovative, custom solutions that drive results, earning trust by turning ideas into reality.</p>
                    </div>
                    {/* <div>
                        <Link to="/contact-us" data-discover="true" data-aos="fade-left" data-aos-delay="100">
                            <button className="btn btn-fix lazyloaded">Connect
                                to expert<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                    <path id="Path_1487529" data-name="Path 1487529"
                                        d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                        transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                </svg>
                            </button>
                        </Link>
                    </div> */}

                    <ConnectExperts />

                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 mt-10">
                    <div className="lg:bg-center lg:flex hidden justify-end items-end  bg-no-repeat bg-cover bg-left whychoose  px-6 py-8 rounded-lg">
                        <div className="relative z-[1]" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="xl:text-2xl text-xl mb-4 font-semibold">Outcome-Driven Excellence</h2>
                            <p className="text-base font-normal text-white">Our developers are committed to delivering top-tier results through innovative web and app solutions that drive measurable success.</p>
                            
                            <div className="mt-4">
                                <Link to="/contact-us" data-discover="true" data-aos="fade-left" data-aos-delay="100">
                                    <button className="btn btn-fix lazyloaded">Get
                                        in Touch<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                            <path id="Path_1487529" data-name="Path 1487529"
                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                        </div>
                        {/* <div className="mt-7 z-10 relative">
                            <ConnectExperts />
                        </div> */}
                    </div>
                    <div className="col-span-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="100">
                                <div >
                                <img src={icon1} alt="" className="why-choose-icon" />
                                        <h3 className="text-xl font-semibold mb-6">Optimum Outcome Focused</h3>
                                    <p className="text-sm font-normal">We focus on delivering top results through cutting-edge web and app solutions that truly stand out.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="200">
                                <div>
                                <img src={icon2} alt="" className="why-choose-icon" />
                                    <h3 className="text-xl font-semibold mb-6">Experienced Techies</h3>
                                    <p className="text-sm font-normal">Our expert team brings 10+ years of experience, delivering top-tier IT solutions across diverse industries with precision and excellence.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="300">
                                <div>
                                <img src={icon3} alt="" className="why-choose-icon" />
                                    <h3 className="text-xl font-semibold mb-6">Cutting Edge Technologies</h3>
                                    <p className="text-sm font-normal">We leverage the latest technologies to build high-performance, secure, and scalable web and mobile solutions tailored to your business needs.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="400">
                                <div >
                                <img src={icon4} alt="" className="why-choose-icon" />
                                    <h3 className="text-xl font-semibold mb-6">Cost-Effective &amp; Deadline Oriented</h3>
                                    <p className="text-sm font-normal">We deliver high-quality web and app solutions at competitive costs, with a strong focus on meeting project deadlines.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="500">
                                <div >
                                <img src={icon5} alt="" className="why-choose-icon" />
                                    <h3 className="text-xl font-semibold mb-6">Transparency with Clients</h3>
                                    <p className="text-sm font-normal">We ensure real-time updates and 24/7 support, keeping clients fully informed and engaged throughout the development process.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="600">
                                <div >
                                <img src={icon6} alt="" className="why-choose-icon" />
                                    <h3 className="text-xl font-semibold mb-6">Modern IT Services</h3>
                                    <p className="text-sm font-normal">We craft future-ready IT solutions using the latest technologies and trends to meet market demands and engage your audience effectively.</p>
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
