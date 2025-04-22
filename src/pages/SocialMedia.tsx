import React from "react";
// import { Clock, BarChart3, Users, LineChart } from 'lucide-react';
import Footer from "../components/Footer/Footer";
// import { Link } from "react-router-dom";

// import { Link } from 'react-router-dom';
// import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import SocialMediaMgmtImg from "../assets/Images/aiSocialMedia/Ai-social-media.mp4";
import SmarterSocialVideo from "../assets/Images/aiSocialMedia/Smarter-Social.mp4";
// import SocialMediaImg from "../assets/Images/aiSocialMedia/social-media.png";
// import automateWorkflowImg from "../assets/Images/aiSocialMedia/automate-workflow.png";
// import youLoveImg from "../assets/Images/aiSocialMedia/you-love.png";
// import whoItsImg from "../assets/Images/aiSocialMedia/who-its.png";
// import smarterSocialImg from "../assets/Images/aiSocialMedia/smarter-social.jpeg";
// import whatappMarketingImg from "../assets/Images/aiSocialMedia/whatapp-marketing.jpeg";
import whatappMarketingImg from "../assets/Images/aiSocialMedia/USE-FOR-WEBSITE- Whatsup.png";
import reviewManagementImg from "../assets/Images/aiSocialMedia/review-management.png";
import aiDrivenImg from "../assets/Images/aiSocialMedia/AI-Driven-Sw-Automation.png";
import eComImg from "../assets/Images/aiSocialMedia/USE-FOR-WEBSITE_EComm-Solutions.png";
import whoItForImg from "../assets/Images/aiSocialMedia/whoitforimage.png";
// import whoItForImg from "../assets/Images/aiSocialMedia/who-it's-for.jpeg";
import "./SocialMedia.css";

import PricingComparisonTable from "../pages/PricingComparisonTable";

import ConnectExperts from "../pages/ConnectExperts";


const features = [
    'Dedicated Branding Specialist – No added fees',
    'Tailored Festival & Occasion Posts',
    'Full Engagement Support – Comments, DMs, local group outreach',
    'Google/Yelp Review Monitoring + Response',
    'Local & Paid WhatsApp Group Marketing',
    'Custom Strategy for Your Business Type',
];



const SocialMedia: React.FC = () => {





    return (
        <>
            <AOSProvider>
                <HeaderNew />
               
                <section className="hero-container bg-gradient-blue-red">
                    <div className="hero-content">
                        <div className="hero-text text-gradient" data-aos="fade-right">
                            <h1>AI-Powered Social Media Management</h1>
                            <p>
                                Unlock next-level growth with our AI-driven social media tools. Schedule, create, manage, and analyze—
                                all in one sleek platform.
                            </p>
                            {/* <button className="hero-button" onClick={onOpen}>Get Started</button> */}

                            {/* <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md"
                        onClick={onOpen}
                        >
                            Get Started
                        </button> */}

                            <ConnectExperts />
                        </div>
                        <div className="hero-image" data-aos="fade-left">
                        <video
                    className="z-0" style={{ borderRadius: "12px"}}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={SocialMediaMgmtImg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                        </div>

                    </div>
                </section>



                {/* <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
                    <img
                        src={smarterSocialImg}
                        alt="AI Powered Social Media"
                        style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover"
                        }}
                    />
                </div> */}

                {/* one page image start  */}


                <div className="min-h-screen bg-gradient-blue-red font-sans text-white">
                    {/* Content Container with subtle transparency */}
                    <div className="bg-gradient-blue-red  text-white bg-opacity-90 min-h-screen">
                        {/* Automate Workflow Section */}
                        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white-rounded">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                                <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
                                <video
                    className="z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={SmarterSocialVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                                </div>
                                <div className="md:w-1/2" data-aos="fade-left">
                                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                        Smarter Social Starts Here
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Automate content, scheduling, and analytics with AI—save time, boost visibility, and focus on what matters most </p>
                                    <p className="text-lg text-gray-700 mb-6">
                                        Focus on strategy. Let automation take care of the rest.
                                    </p>
                                    {/* <button onClick={onOpen} className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                            Get Started
                        </button> */}

                                    <ConnectExperts />

                                </div>
                            </div>
                        </section>
                        {/* Who It's For Section */}
                        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-blue-red">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                                <div className="md:w-1/2" data-aos="fade-right">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gradient-red mb-6">
                                        Who It's For
                                    </h2>
                                    <p className="text-lg text-white mb-8">
                                        Solo founders, marketing teams, local businesses, restaurants,
                                        and anyone ready to scale without burnout.
                                    </p>
                                    {/* <button onClick={onOpen} className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
                            Get Started
                        </button> */}

                                    <ConnectExperts />

                                </div>
                                {/* <div className="md:w-1/2 flex justify-center">
                        <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-full p-4 w-64 h-64 md:w-72 md:h-72 flex items-center justify-center shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full"></div>
                            <div className="absolute w-full h-full opacity-20">
                                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-md"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-300 rounded-full blur-md"></div>
                                <div className="absolute top-1/3 right-10 w-12 h-12 bg-purple-300 rounded-full blur-sm"></div>
                            </div>
                            
                            <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full shadow-lg border-2 border-white"></div>
                                    <div className="w-10 h-14 bg-gradient-to-b from-blue-700 to-blue-900 -mt-2 rounded-b-xl"></div>
                                </div>
                                
                                <div className="absolute top-12 left-1/4 transform -translate-x-1/2 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-md border-2 border-white"></div>
                                    <div className="w-8 h-10 bg-gradient-to-b from-red-400 to-red-600 -mt-1 rounded-b-xl"></div>
                                </div>
                                
                                <div className="absolute top-12 right-1/4 transform translate-x-1/2 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-md border-2 border-white"></div>
                                    <div className="w-8 h-10 bg-gradient-to-b from-blue-500 to-blue-700 -mt-1 rounded-b-xl"></div>
                                </div>
                                
                                <div className="absolute bottom-4 left-1/3 transform -translate-x-1/2 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full shadow-md border-2 border-white"></div>
                                    <div className="w-8 h-10 bg-gradient-to-b from-pink-300 to-pink-500 -mt-1 rounded-b-xl"></div>
                                </div>
                                
                                <div className="absolute bottom-4 right-1/3 transform translate-x-1/2 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-md border-2 border-white"></div>
                                    <div className="w-8 h-10 bg-gradient-to-b from-blue-400 to-blue-600 -mt-1 rounded-b-xl"></div>
                                </div>
                                
                                <div className="absolute inset-0 w-full h-full">
                                    <div className="w-full h-full border-4 border-white/30 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 w-px h-px">
                                        <div className="absolute top-0 left-0 w-20 h-0.5 bg-white/50 transform -rotate-45 origin-left"></div>
                                        <div className="absolute top-0 left-0 w-20 h-0.5 bg-white/50 transform rotate-45 origin-left"></div>
                                        <div className="absolute top-0 left-0 w-0.5 h-20 bg-white/50 transform -translate-x-1/2"></div>
                                        <div className="absolute top-0 left-0 w-20 h-0.5 bg-white/50 transform -rotate-120 origin-left"></div>
                                        <div className="absolute top-0 left-0 w-20 h-0.5 bg-white/50 transform rotate-120 origin-left"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute w-full h-full">
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                                <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-green-300 rounded-full animate-pulse delay-150"></div>
                                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-300"></div>
                            </div>
                        </div>
                        </div> */}
                                <div className="md:w-1/2 flex justify-center">
                                    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-full w-64 h-64 md:w-72 md:h-72 flex items-center justify-center shadow-xl relative overflow-hidden">

                                        <img src={whoItForImg} alt="" style={{
                                            height: "350px",
                                            width: "auto",
                                            objectFit: "cover"
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Features Section */}
                        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                            <h2 className="text-4xl md:text-4xl font-bold text-white text-center mb-12" data-aos="fade-up">
                                What You'll Love
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-4 what-love-style text-center">
                                {/* Feature 1 */}
                                <div className="bg-white p-6 rounded-xl hover:shadow-xl transition duration-300" data-aos="fade-up">
                                    <div className="bg-gradient-to-r from-red-400 to-blue-400 p-3 icon-rounded-1">
                                        {/* Clock Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Smart Scheduling</h3>
                                        <p className="text-lg text-gray-600">Post at the perfect time, every time</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white p-6 rounded-xl hover:shadow-xl transition duration-300" data-aos="fade-up">
                                    <div className="bg-gradient-to-r from-red-400 to-blue-400 p-3 icon-rounded-1">
                                        {/* Bar Chart Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Multi-Platform Magic</h3>
                                        <p className="text-lg text-gray-600">Manage all your channels from one sleek dashboard</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white p-6 rounded-xl hover:shadow-xl transition duration-300" data-aos="fade-up">
                                    <div className="bg-gradient-to-r from-red-400 to-blue-400 p-3 icon-rounded-1">
                                        {/* Users Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Branded Content, At Scale</h3>
                                        <p className="text-lg text-gray-600">AI crafts posts in your voice</p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="bg-white p-6 rounded-xl hover:shadow-xl transition duration-300" data-aos="fade-up">
                                    <div className="bg-gradient-to-r from-red-400 to-blue-400 p-3 icon-rounded-1">
                                        {/* Line Chart Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Real-Time Insights</h3>
                                        <p className="text-lg text-gray-600">See what's working and optimize fast</p>
                                    </div>
                                </div>
                            </div>
                        </section>



                        {/* CTA Section */}
                        <section className="py-16 px-4 md:px-8 lg:px-16 bg-orange text-black">
                            <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Ready to Transform Your Social Media Strategy?
                                </h2>
                                <p className="text-xl mb-8 max-w-2xl mx-auto">
                                    Join thousands of businesses already saving time and driving better results.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    {/* <button onClick={onOpen} className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
                            Get Started
                        </button> */}

                                    <ConnectExperts />

                                    {/* <button className="bg-transparent hover:bg-white hover:bg-opacity-10 border-2 border-white font-medium py-3 px-8 rounded-lg transition duration-300">
                            Schedule a Demo
                        </button> */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


                {/* one page image end  */}

                {/* <section className="products-section bg-gradient-to-r from-red-100 via-purple-100 to-blue-100">
                    <h2 className="products-heading">Products We Offer</h2>
                    <div className="products-container">
                        <div className="product-card">
                            <img src={whatappMarketingImg} alt="AI Powered Review Management" />
                        </div>
                        <div className="product-card">
                            <img src={reviewManagementImg} alt="WhatsApp Group Marketing" />
                        </div>
                        <div className="product-card">
                            <img src={aiDrivenImg} alt="WhatsApp Group Marketing" />
                        </div>
                        <div className="product-card">
                            <img src={eComImg} alt="WhatsApp Group Marketing" />
                        </div>
                    </div>
                </section> */}

                <section className="products-section bg-gradient-blue-red" >
                    <h2 className="products-heading text-white" data-aos="fade-up">Products We Offer</h2>
                    <div className="products-container marquee2">
                        <div className="product-card">
                            <img src={whatappMarketingImg} alt="Logo" />
                        </div>
                        <div className="product-card">
                            <img src={reviewManagementImg} alt="Logo" />
                        </div>
                        <div className="product-card">
                            <img src={aiDrivenImg} alt="Logo" />
                        </div>
                        <div className="product-card">
                            <img src={eComImg} alt="Logo" />
                        </div>
                    </div>
                </section>

                <div className="bg-gradient-blue-red text-white font-sans">

                    <section className="workflow-section">
                        <h3 className="products-heading text-white" data-aos="fade-up">🚀 What You’ll Love</h3>

                        <div className="workflow-features" data-aos="fade-up">
                            <div className="feature-card">Smart Scheduling<br /><span>Post at the perfect time, every time</span></div>
                            <div className="feature-card">Branded Content, At Scale<br /><span>AI crafts posts in your voice</span></div>
                            <div className="feature-card">Consistent Engagement<br /><span>Auto-responses that never miss a moment</span></div>
                        </div>
                        <div className="workflow-features" data-aos="fade-up">
                            <div className="feature-card">Multi-Platform Magic<br /><span>Manage all your channels from one dashboard</span></div>
                            <div className="feature-card">Real-Time Insights<br /><span>See what’s working and optimize</span></div>
                        </div>
                    </section>

                    <section className="callout-wrapper bg-gradient-blue-red flex flex-col md:flex-row justify-center items-stretch gap-4 p-6">
                        <div className="callout-card callout-highlight flex-1 bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
                            <div className="callout-icon text-4xl mb-4">👥</div>
                            <h2 className="callout-heading text-3xl font-semibold mb-2">Who It’s For</h2>
                            <p className="callout-description text-gray-700">
                                Solo founders, marketing teams, local businesses, restaurants, and anyone ready to scale without burnout.
                            </p>
                        </div>

                        <div className="callout-card callout-highlight flex-1 bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
                            <div className="callout-icon text-4xl mb-4">🎁</div>
                            <h2 className="callout-heading text-3xl font-semibold mb-2">Try It Free – 2 Weeks, On Us</h2>
                            <p className="callout-description text-gray-700">
                                No contracts. No credit card. Just results.
                            </p>
                        </div>
                    </section>

                    {/* <section className="table-wrapper bg-gradient-to-r from-red-100 via-purple-100 to-blue-100" style={{marginTop: "-50px"}}>
                        <h2 className="table-title text-center">🚀 What Others Don’t Want You to Know</h2>
                        <div className="table-scroll">
                            <table className="comparison-table">
                            <thead>
                                <tr>
                                <th>Features</th>
                                <th>SocialBee</th>
                                <th>ConciergeBee</th>
                                <th>Combined Total</th>
                                <th>ITL – All Packages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Branding Specialist</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>$0</td>
                                <td>✅ Included</td>
                                </tr>
                                <tr>
                                <td>Review Management</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅ Yes, Actively Managed</td>
                                </tr>
                                <tr>
                                <td>WhatsApp Group Marketing</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅ Built-in</td>
                                </tr>
                                <tr>
                                <td>Video Content Creation</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>$449/mo</td>
                                <td>✅ Built-in</td>
                                </tr>
                                <tr>
                                <td>Social Media Posting</td>
                                <td>✅ (1–3/week)</td>
                                <td>✅ (2/week)</td>
                                <td>$299–$499/mo</td>
                                <td>✅ Built-in</td>
                                </tr>
                                <tr>
                                <td>Web Optimization & SEO</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅ Built-in</td>
                                </tr>
                                <tr>
                                <td>Ad Management Strategy</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>+$449/mo</td>
                                <td>✅ Built-in</td>
                                </tr>
                                <tr>
                                <td>Total Aggregated Cost</td>
                                <td>$847–$1347/mo</td>
                                <td>$349/mo</td>
                                <td></td>
                                <td>✅</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </section> */}

                    <PricingComparisonTable />

                    <section className="bg-gradient-blue-red py-14 px-6 md:px-20">
                        <div className="itl-section max-w-5xl mx-auto text-center md:text-left" data-aos="fade-up">
                            <h2 className="text-3xl itl-h2 md:text-4xl font-bold text-black mb-8 flex items-center justify-center gap-3">
                                <span role="img" aria-label="lightbulb">💡</span>
                                What You Get With ITL (Every Plan Includes):
                            </h2>

                            <ul className="space-y-4 text-lg text-gray-800 itl-mobile-style-ul mt-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex gap-3" style={{ marginLeft: "20%" }}>
                                        <span role="img" aria-label="check">✅</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* <section className="bg-gradient-to-r from-red-100 via-purple-100 to-blue-100 py-12 px-6">
                        <h2 className="text-2xl font-semibold text-center mb-6">📦 Transparent Pricing – No Hidden Add-Ons</h2>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                            ["Basic", "$349 + Tax", "Startups & Local SMBs"],
                            ["Advanced", "$449 + Tax", "Growing brands that need reviews & SEO"],
                            ["Professional", "$549 + Tax", "Scaling teams, video, ads & automation"]
                        ].map(([plan, cost, desc]) => (
                            <div key={plan} className="border t-pricing p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold">{plan}</h3>
                            <p className="text-lg mt-2">{cost}</p>
                            <p className="text-gray-600 mt-2">{desc}</p>
                            </div>
                        ))}
                        </div>
                    </section> */}

                    {/* <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12" style={{marginTop: "-100px"}}>
                        <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-10 text-center border border-gray-200">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            🔍 Want to See Real Results?
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                            Discover how we've helped clients turn <span className="font-medium text-gray-800">1-star reviews into 4-stars</span> and boosted <span className="font-medium text-gray-800">WhatsApp group members by 300%</span> — all within just 2 weeks.
                            </p>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                            <p className="text-blue-800 text-sm md:text-base">
                                Our Review Recovery Stories show real change, real fast. Let us do the same for you.
                            </p>
                            </div>

                            <button className="mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm md:text-base transition duration-300">
                            👉 Get Started Now – 2-Week FREE Trial
                            </button>
                        </div>
                    </div> */}

                </div>

                {/* Popup Section Start  */}


                {/* Popup Section Start  */}

                {/* <ContactForm /> */}
                <Footer />
            </AOSProvider>
        </>

    );
};

export default SocialMedia;
