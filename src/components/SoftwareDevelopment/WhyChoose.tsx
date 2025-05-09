import React from "react";
import { Link } from 'react-router-dom';

const WhyChoose: React.FC = () => {

    return (
        <div className="w-full bg-black py-16">
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
                        className="lg:bg-center lg:flex hidden justify-end items-end  bg-purple-700 px-6 py-8 rounded-lg">
                        <div className="relative z-[1]">
                            <h2 className="xl:text-4xl text-3xl text-[#fff] font-semibold">10+</h2>
                            <h3 className="text-xl text-white mb-6">Years Of Industry Experience</h3>
                            <hr />
                            <h2 className="xl:text-4xl text-3xl text-[#fff] font-semibold mt-6">5k+</h2>
                            <h3 className="text-xl text-white mb-6">Businesses Empowered</h3>
                            <hr />
                            <h2 className="xl:text-4xl text-3xl text-[#fff] font-semibold mt-6">98.7%</h2>
                            <h3 className="text-xl text-white mb-6">Success Rate Achieved</h3>
                            <hr />
                            <h2 className="xl:text-4xl text-3xl text-[#fff] font-semibold mt-6">650</h2>
                            <h3 className="text-xl text-white"> Team Of Vetted Developers</h3>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">100% Customized Solution</h3>
                                    <p className="text-base font-normal">We Understand Your Unique Business needs in-depth and Deliver tailored software solutions to solve your specific business challenges.
</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                                    <p className="text-base font-normal">Comprehensive upfront pricing enables accurate budgeting without hidden fees.
</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Design-Led Engineering</h3>
                                    <p className="text-base font-normal">We Prioritize adaptability, ensuring exceptional user experience.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Quick Development</h3>
                                    <p className="text-base font-normal"> Clear communication channels for transparency & complete visibility, keeping you updated on project status.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                                    <p className="text-base font-normal">With us, you get optimal performance, security, and seamless integration.</p>
                                </div>
                            </div>
                            <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">24*7 Dedicated Support</h3>
                                    <p className="text-base font-normal">
                                    Expert product manager to oversee your project & provide ongoing assistance.</p>
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
