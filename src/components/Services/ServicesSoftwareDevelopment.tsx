import React from "react";
import './Services.scss';
// import { Link } from "react-router-dom";
import ConnectExperts from "../../pages/ConnectExperts";
import Services01 from '../../assets/Images/services/softwaredevelopment/Solution/1.webp';
import Services02 from '../../assets/Images/services/softwaredevelopment/Solution/2.webp';
import Services03 from '../../assets/Images/services/softwaredevelopment/Solution/3.webp';
import Services04 from '../../assets/Images/services/softwaredevelopment/Solution/4.webp';
import Services05 from '../../assets/Images/services/softwaredevelopment/Solution/5.webp';


// import ConnectExperts from "../../pages/ConnectExperts";

const Services: React.FC = () => {

    return (

        <div className="challenges bg-orange py-12 sticky w-full lg:py-16 py-10">
            <div className="container mx-auto px-6">
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Section */}
                        <div className="chalnges-left w-full">
                            <div className="sticky top-32 ">
                                {/* <h3 className="text-danger text-3xl font-semibold mb-3" data-aos="fade-right" data-aos-delay="100">
                                    <span>Services</span>
                                </h3> */}

                                <h2 className="text-lg md:text-4xl lg:text-4xl font-bold leading-tight mb-4" data-aos="fade-right" data-aos-delay="100">
                                    Tailored Software Solutions for All Business Needs, Designed to Drive Your Success
                                </h2>
                                <ConnectExperts />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="chalnges-right w-full" style={{ zIndex: "-1" }}>
                            <div className="md_challenges_box space-y-7">
                                <div className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `8rem` }}>
                                    <div className="md_challenges_left w-60">
                                        <img src={Services01} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                    </div>
                                    <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                        <div className="md_challenges_col">
                                            <div className="mb-4">
                                                <div className="text-xl font-semibold">Business & Project Management Tools</div>
                                            </div>
                                            <ul className="list-point-2">
                                                <li>Efficient project tracking</li>
                                                <li>Streamlined task organization</li>
                                                <li>Accurate time management</li>
                                                <li>Optimized resource allocation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `8rem` }}>
                                    <div className="md_challenges_left w-60">
                                        <img src={Services02} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                    </div>
                                    <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                        <div className="md_challenges_col">
                                            <div className="mb-4">
                                                <div className="text-xl font-semibold">Sales & Marketing Software Tools</div>
                                            </div>
                                            <ul className="list-point-2">
                                                <li>Automate marketing efforts</li>
                                                <li>Streamline sales processes</li>
                                                <li>Manage email campaigns</li>
                                                <li>Control social media effectively</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `8rem` }}>
                                    <div className="md_challenges_left w-60">
                                        <img src={Services03} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                    </div>
                                    <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                        <div className="md_challenges_col">
                                            <div className="mb-4">
                                                <div className="text-xl font-semibold">Customer Service Management Tools</div>
                                            </div>
                                            <ul>
                                                <li>Real-time support with chatbots/live chat</li>
                                                <li> Efficient customer relationship tracking</li>
                                                <li>  Organized ticket resolution</li>
                                                <li>  Streamlined help desk operations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `8rem` }}>
                                    <div className="md_challenges_left w-60">
                                        <img src={Services04} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                    </div>
                                    <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                        <div className="md_challenges_col">
                                            <div className="mb-4">
                                                <div className="text-xl font-semibold">Business Analytics Solutions
                                                </div>
                                            </div>
                                            <ul className="list-point-2">
                                                <li>Gain insights with BI tools</li>
                                                <li>Visualize data effectively</li>
                                                <li>Forecast trends using predictive analytics</li>
                                                <li>Discover patterns through data mining</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`md_challenges_slide flex justify-end sticky mb-7`} style={{ top: `8rem` }}>
                                    <div className="md_challenges_left w-60">
                                        <img src={Services05} alt="" className="rounded-l-2xl object-cover w-full h-full" />
                                    </div>
                                    <div className="md_challenges_right bg-white flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                                        <div className="md_challenges_col">
                                            <div className="mb-4">
                                                <div className="text-xl font-semibold">Talent & Productivity Management Tools</div>
                                            </div>
                                            <ul className="list-point-2">
                                                <li> Streamlined HR operations</li>
                                                <li>Efficient applicant tracking</li>
                                                <li>Performance evaluation tools</li>
                                                <li> Centralized learning and training platform</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Services;

