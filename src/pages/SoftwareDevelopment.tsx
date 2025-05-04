import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import HeaderNew from "../components/Header/HeaderNew";
import WorkingProcess from "../components/HireMobileAppDeveloper/WorkingProcess";
import WhyChoose from "../components/HireMobileAppDeveloper/WhyChoose";
import Partners from "../components/Partners/Partners";
import OurPortfolioHome from "../components/OurPortfolioHome/OurPortfolioHome";
import IndustriesHome from "../components/IndustriesHome/IndustriesHome";
import Blog from "../components/Blog/Blog";
import HireMobileAppHeroImg from "../assets/Images/hero-img/hirededicateddeveloper.webp";
import TawkChat from "./TawkChat";
import GetStarted from "../components/GetStarted/GetStarted";
import FAQ from "../components/Faq/Faq";
import HireDeveloper from "../components/HireMobileAppDeveloper/HireDeveloper";
import AOSProvider from "../components/AOSProvider";

const HireMobileAppDeveloper: React.FC = () => {
    return (

        <>
            <AOSProvider>
                <HeaderNew />
                <div className="lg:bg-center relative bg-gradient-blue-red">
                    <div
                        className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="w-full 2xl:py-20 xl:py-16 py-10">
                            <div className="space-y-4">
                                <div>
                                    <h1 data-aos="fade-right" className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  ">
                                        Hire Expert Mobile App Developers — 15+ Years of Futuristic App Solutions</h1>
                                        
                                    <p data-aos="fade-right" className="w-full mx-auto text-2xl font-bold text-white lg:text-base mt-2"></p>
                                    <p data-aos="fade-right" className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2">
                                        Build Future-Ready Apps With India’s Top Mobile Developers
                                    </p>
                                       </div>
                                  </div>
                            <div className="md:py-6">
                                <Link data-aos="fade-right" to="/contact-us" className="btn btn-fix lazyloaded">Schedule A Call Now!
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                        <path id="Path_1487529" data-name="Path 1487529"
                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                            transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:flex justify-end items-end overflow-hidden" style={{ borderRadius: "12px" }} data-aos="fade-left">
                            <div className="rounded-bordered">

                                <img src={HireMobileAppHeroImg} alt="" className="features-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="lg:py-16 py-10 bg-orange">
                    <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="space-y-4 text-center">
                            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                                <h2 data-aos="fade-up" className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">Why Do Businesses Need Mobile Applications?</h2>
                                <p data-aos="fade-up"> In the contemporary business landscape, mobile application development industry have become essential tools for companies to thrive and stay competitive. Here are six key reasons why businesses need mobile applications:</p>
                            </div>
                            <div className="grid py-10 text-left lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 gap-4">
                                <div data-aos="fade-up"
                                    className="bg-[#FAFAFA] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[#f13c3c]/10 hover:border-[#f13c3c] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md border border-[#f13c3c] w-fit text-[#f13c3c] bg-[#f13c3c]/10 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-user-heart w-12 h-12">
                                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                                            <path
                                                d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#212121] font-semibold">Enhanced Customer Engagement</h3>
                                        <p data-aos="fade-up" className="text-base text-[#212121]">Mobile apps enable businesses to engage customers directly with personalized messages, boosting loyalty, brand awareness, and continuous interaction.
</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#FAFAFA] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[#f13c3c]/10 hover:border-[#f13c3c] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md border border-[#f13c3c] w-fit text-[#f13c3c] bg-[#f13c3c]/10 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-wallet w-12 h-12">
                                            <path
                                                d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12">
                                            </path>
                                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#212121] font-semibold">Increased Accessibility and Convenience</h3>
                                        <p data-aos="fade-up" className="text-base text-[#212121]">Mobile apps provide 24/7 access, enabling users to interact anytime, boosting convenience, customer satisfaction, loyalty, and overall experience.
</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#FAFAFA] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[#f13c3c]/10 hover:border-[#f13c3c] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md border border-[#f13c3c] w-fit text-[#f13c3c] bg-[#f13c3c]/10 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-globe w-12 h-12">
                                            <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                            <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13"></path>
                                            <path d="M11 17v4"></path>
                                            <path d="M7 21h8"></path>
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#212121] font-semibold">Wider Market Reach</h3>
                                        <p data-aos="fade-up" className="text-base text-[#212121]">Mobile apps help businesses reach wider audiences by targeting mobile users, expanding market reach, and unlocking new growth opportunities globally.
                                        </p>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#FAFAFA] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[#f13c3c]/10 hover:border-[#f13c3c] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md border border-[#f13c3c] w-fit text-[#f13c3c] bg-[#f13c3c]/10 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-article w-12 h-12">
                                            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                            <path d="M7 8h10"></path>
                                            <path d="M7 12h10"></path>
                                            <path d="M7 16h10"></path>
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#212121] font-semibold">Competitive Edge</h3>
                                        <p data-aos="fade-up" className="text-base text-[#212121]">Mobile apps demonstrate innovation, giving businesses a competitive edge and attracting tech-savvy users who value convenience, functionality, and modern experiences.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#FAFAFA] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[#f13c3c]/10 hover:border-[#f13c3c] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md border border-[#f13c3c] w-fit text-[#f13c3c] bg-[#f13c3c]/10 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-message-circle w-12 h-12">
                                            <path
                                                d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#212121] font-semibold">Data Collection and Analytics</h3>
                                        <p data-aos="fade-up" className="text-base text-[#212121]">Mobile apps collect user data, enabling businesses to analyze trends, personalize offerings, enhance strategies, and boost customer satisfaction through insights.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#FAFAFA] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[#f13c3c]/10 hover:border-[#f13c3c] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md border border-[#f13c3c] w-fit text-[#f13c3c] bg-[#f13c3c]/10 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="tabler-icon tabler-icon-shopping-cart-discount w-12 h-12">
                                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                            <path d="M12.5 17h-6.5v-14h-2"></path>
                                            <path d="M6 5l14 1l-.859 6.011m-6.141 .989h-7"></path>
                                            <path d="M16 21l5 -5"></path>
                                            <path d="M21 21v.01"></path>
                                            <path d="M16 16v.01"></path>
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#212121] font-semibold">Revenue Generation and Marketing Opportunities
                                        </h3>
                                        <p data-aos="fade-up" className="text-base text-[#212121]">Mobile apps collect user data, enabling businesses to analyze trends, personalize offerings, enhance strategies, and boost customer satisfaction through insights</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <HireDeveloper />
                <WorkingProcess />

                <WhyChoose />
                <Partners />
                <OurPortfolioHome />
                <IndustriesHome />
                <Blog />
                <GetStarted />
                <FAQ />
                <Footer />
                <TawkChat />
            </AOSProvider>

        </>

    );
};

export default HireMobileAppDeveloper;
