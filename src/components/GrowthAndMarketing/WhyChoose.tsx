import React from "react";
import { Link } from 'react-router-dom';
import whychooeicon1 from '../../assets/Images/GrowthandMarketing/whychooseus/1.png';
import whychooeicon2 from '../../assets/Images/GrowthandMarketing/whychooseus/2.png';
import whychooeicon3 from '../../assets/Images/GrowthandMarketing/whychooseus/3.png';
import whychooeicon4 from '../../assets/Images/GrowthandMarketing/whychooseus/4.png';
const WhyChoose: React.FC = () => {

    return (
        <div className="w-full bg-gradient-blue-red py-16">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                
                <div className="lg:flex  block mt-10">
                    <div data-aos="fade-up"
                        className="lg:w-1/2 lg:bg-center lg:flex w-full  px-6 py-8 rounded-lg">
                        <div className="relative z-[1]">
                            <h2 className="xl:text-4xl text-3xl text-[#fff] font-bold" data-aos="fade-up">Why Partner With Us?
                            </h2>
                            <p className="pt-3 text-base text-white"> We deliver data-driven strategies that produce real, measurable results for your business growth. </p>
                            <p className="pt-3 text-base text-white"><i>No Setup Fees</i></p>
                            <p className="pt-3 text-base text-white"><i>Data-Driven Strategy</i></p>
                            <p className="pt-3 text-base text-white"><i>Personalized Audit & Competitor Analysis</i></p>
                            <p className="pt-3 text-base text-white"><i>Monthly Marketing Roadmaps</i></p>
                            {/* <div className="mt-4"><a href="/contact-us"><button
                                className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 text-center cursor-pointer transition duration-300 flex items-center hover:bg-white hover:text-black ">Get
                                in Touch</button></a></div> */}
                            <div className="mt-4">
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
                    </div>
                    <div className="lg:w-1/2 w-full" data-aos="fade-left">
                        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 text-center">
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 p-3 rounded-lg space-y-2" style={{ position: "relative", top: "-20px" }}>
                                <div>
                                <div className="grid justify-center"><img src={whychooeicon1} className="object-contain-1" /></div>
                                    <h3 className="text-xl font-semibold">100% Transparency Guaranteed </h3>
                                    <p className="text-sm font-normal">Know exactly where your investment goes with our clear, honest approach—no hidden agendas, no empty promises.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20  p-3 rounded-lg space-y-2 mb-6">
                                <div>
                                <div className="grid justify-center"><img src={whychooeicon2} className="object-contain-1" /></div>
                                    <h3 className="text-xl font-semibold"> Campaign Optimization That Delivers</h3>
                                    <p className="text-sm font-normal">Enhance performance with biweekly audits and detailed monthly reports—designed to boost customer lifetime value and maximize profitability."
                                    </p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 p-3 rounded-lg space-y-2" style={{ position: "relative", top: "-20px" }}>
                                <div>
                                <div className="grid justify-center"><img src={whychooeicon3} className="object-contain-1" /></div>
                                    <h3 className="text-xl font-semibold">Your Dedicated Account Manager
                                    </h3>
                                    <p className="text-sm font-normal">Stay aligned with your goals through weekly check-ins, ensuring strategic clarity and smooth execution every step of the way."
                                    </p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 p-3 rounded-lg space-y-2" >
                                <div>
                                <div className="grid justify-center"> <img src={whychooeicon4} className="object-contain-1" /></div>
                                    <h3 className="text-xl font-semibold">Flexible Pricing, Tailored for You</h3>
                                    <p className="text-sm font-normal">We understand every business is unique—choose a plan that aligns perfectly with your goals, budget, and growth stage.</p>
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
