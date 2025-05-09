import React from "react";
// import { Link } from 'react-router-dom';
import sericon1 from '../../assets/Images/services/mobiledevelopment/services/android.webp';
import sericon2 from '../../assets/Images/services/mobiledevelopment/services/ios.webp';
import sericon3 from '../../assets/Images/services/mobiledevelopment/services/hybrid.webp';
import sericon4 from '../../assets/Images/services/mobiledevelopment/services/react.webp';
const WhyChoose: React.FC = () => {

    return (
        <div className="w-full  py-16">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="lg:flex space-y-3 items-center justify-between gap-10">
                    <div>
                        <h2 className="xl:text-4xl text-3xl text-black font-bold" data-aos="fade-up"> End-to-End Mobile App Development Services for Your Every Business Need </h2>
                        {/* <p className="pt-3 text-base text-white"> Our AI Agent development services combine technical expertise with industry best practices to dleiver Intelligent AI agents that scale with your business.
                        </p> */}
                    </div>
                    <div>
                        <p className="pt-3 text-base text-black">Proven Expertise in Delivering End-to-End Mobile App Development Services Focused on Quality, Efficiency & User Engagement
                        </p>
                        {/* <Link data-aos="fade-up" to="/contact-us" data-discover="true" >
                            <button className="btn btn-fix lazyloaded">Connect
                                to expert<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                    <path id="Path_1487529" data-name="Path 1487529"
                                        d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                        transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                </svg>
                            </button>
                        </Link> */}
                    </div>

                </div>
                <div className="mt-10">
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                        <div className="feature-card-1 border bg-black border-[#5556D1]/20  text-white p-5 rounded-lg space-y-2">
                            <div>
                                <div className="flex items-center mb-3">
                                    <div className="w-1/4 mr-2">
                                        <img src={sericon1} className="object-contain-1" />
                                    </div>
                                    <div className="w-3/4">
                                        <h3 className="text-base font-semibold">Android App Development Services </h3>
                                    </div>
                                </div>
                                <hr />
                                <ul className="list-point-2">
                                    <li>Expert software consulting and strategy</li>
                                    <li>Custom Android app design</li>
                                    <li>Enterprise Android application development</li>
                                    <li>App support and maintenance services</li>
                                    <li>API integration for functionality</li>
                                    <li>Comprehensive Android app testing</li>
                                    <li>Play Store optimization techniques</li>
                                    <li>App version upgrades and updates</li>
                                </ul>
                            </div>
                        </div>
                        <div className="feature-card-1 border bg-black border-[#5556D1]/20  text-white p-5 rounded-lg space-y-2">
                            <div>
                            <div className="flex items-center mb-3">
                                    <div className="w-1/4 mr-2">
                                        <img src={sericon2} className="object-contain-1" />
                                    </div>
                                    <div className="w-3/4">
                                        <h3 className="text-base font-semibold">Ios App Development Services</h3>
                                    </div>
                                </div>
                                <hr />
                                <ul className="list-point-2">
                                    <li>Expert software consulting and strategy</li>
                                    <li>iPhone app design and development</li>
                                    <li>iWatch app development services</li>
                                    <li>iOS app support and maintenance</li>
                                    <li>iPad app development solutions</li>
                                    <li>Apple TV app development</li>
                                    <li>App Store optimization techniques</li>
                                </ul>
                            </div>
                        </div>
                        <div className="feature-card-1 border bg-black border-[#5556D1]/20  text-white p-5 rounded-lg space-y-2">
                            <div>
                            <div className="flex items-center mb-3">
                                    <div className="w-1/4 mr-2">
                                        <img src={sericon3} className="object-contain-1" />
                                    </div>
                                    <div className="w-3/4">
                                        <h3 className="text-base font-semibold">Hybrid App Development Services</h3>
                                    </div>
                                </div>
                                <hr />
                                <ul className="list-point-2">
                                    <li>HTML5 app development</li>
                                    <li>Ionic app development</li>
                                    <li>PhoneGap app development</li>
                                    <li>React Native app development</li>
                                    <li>Hybrid framework migration</li>
                                    <li>Hybrid app support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="feature-card-1 border bg-black border-[#5556D1]/20  text-white p-5 rounded-lg space-y-2">
                            <div>
                            <div className="flex items-center mb-3">
                                    <div className="w-1/4 mr-2">
                                        <img src={sericon4} className="object-contain-1" />
                                    </div>
                                    <div className="w-3/4">
                                        <h3 className="text-base font-semibold">React native App Development Services</h3>
                                    </div>
                                </div>
                                <hr />
                                <ul className="list-point-2">
                                    <li>React Native Android development</li>
                                    <li>React Native iOS development</li>
                                    <li>React Native app customization</li>
                                    <li>React Native UI/UX design</li>
                                    <li>React Native support & maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChoose;
