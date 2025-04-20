import React from "react";
import { Link } from "react-router-dom";
import react from "../../assets/Images/icon/react-portfolio-icon.svg";
import nextjs from "../../assets/Images/icon/next-js-portfolio-icon.svg";
import tailwind from "../../assets/Images/icon/tailwind-portfolio-icon.svg";
import figma from "../../assets/Images/icon/figma-portfolio-icon.webp";
import html from "../../assets/Images/icon/html-portfolio-icon.svg";

import portfoli from "../../assets/Images/ai-powered-finance-solutions.webp";
import ecom from "../../assets/Images/ai-powered-healthcare-solutions.webp";
import retail from "../../assets/Images/ai-powered-retail-solutions.webp";

const OurPortfolioHome: React.FC = () => {
    return (

        <div className="lg:py-16 py-10 bg-gradient-blue-red">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="text-center mb-10">
                    <h2 className="xl:text-4xl text-3xl text-orange font-bold mb-4" data-aos="fade-up">Our Artificial Intelligence Success Stories</h2>
                    <p className="text-base font-normal mt-2 text-white" data-aos="fade-up">At
                        InfoTech Launch, we take pride in delivering AI solutions that drive measurable results for our clients. Here are some examples of how we’ve helped businesses achieve their goals</p>
                </div>
                <div className="space-y-10">
                    <div className="rounded-[40px] bg-[#F5F5F9] border border-[#000000]/10 space-x-3 px-8 md:py-10 py-6">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                            <div className="flex items-center" data-aos="fade-right">
                                <img alt="Fitclub Mobile App" loading="lazy" width="500"
                                    height="300" decoding="async" data-nimg="1" className="w-full rounded-xl"

                                    src={portfoli} />
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-4">
                                    <h3 className="xl:text-4xl md:text-2xl text-xl font-semibold" data-aos="fade-up">AI-Powered Retail Solutions</h3>
                                    <p className="xl:text-xl text-lg font-medium" data-aos="fade-up">Boosting Sales with AI-Powered Recommendations</p>
                                    <div className="space-y-2" data-aos="fade-up">
                                        <p className="text-black" >A retail client aimed to enhance customer engagement and drive sales. We developed an AI-powered recommendation engine that analyzed customer behavior and preferences, delivering personalized shopping experiences. As a result, the client achieved a 20% increase in sales and significantly improved customer satisfaction.</p>

                                    </div>
                                    <a href="/#">
                                        <button
                                            className="text-[#f13c3c] hover:bg-[#f13c3c]  hover:text-[#fff] border border-[#f13c3c] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">Explore
                                            Now <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 24 24" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                                            </svg></button></a>
                                    <div>
                                        <h4 className="text-[#212121] text-lg mt-6 font-semibold" data-aos="fade-up">Technology We Use</h4>
                                        <div className="flex space-x-4 mt-3">

                                            <img data-aos="fade-up" alt="Tech Icon" loading="lazy" width="55"
                                                height="55" decoding="async" data-nimg="1" className="md:w-[55px] w-[40px]"

                                                src={react} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={nextjs} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={tailwind} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={figma} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={html} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[40px] bg-[#fff] border border-[#000000]/10 space-x-3 px-8 md:py-10 py-6">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                            <div className="flex items-center" data-aos="fade-right">
                                <img alt="Fitclub Mobile App" loading="lazy" width="500"
                                    height="300" decoding="async" data-nimg="1" className="w-full rounded-xl"

                                    src={ecom} />
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-4">
                                    <h3 className="xl:text-4xl md:text-2xl text-xl font-semibold" data-aos="fade-up">AI-Powered Healthcare Solutions</h3>
                                    <p className="text-black py-3" data-aos="fade-up">We developed an AI-driven system utilizing computer vision and machine learning to enhance diagnostic accuracy and speed. This AI software development solution enabled the healthcare provider to deliver faster, more precise diagnoses, improving patient outcomes and operational efficiency.</p>
                                    <div>
                                        <p className="text-black py-3"></p>
                                        <ul className="list-disc list-inside space-y-2"></ul>
                                    </div>
                                    <a href="/#">
                                        <button
                                            className="text-[#f13c3c] hover:bg-[#f13c3c]  hover:text-[#fff] border border-[#f13c3c] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">Explore
                                            Now <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 24 24" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                                            </svg></button></a>
                                    <div>
                                        <h4 className="text-[#212121] text-lg mt-6 font-semibold" data-aos="fade-up"> Technology We Use</h4>
                                        <div className="flex space-x-4 mt-3">

                                            <img data-aos="fade-up" alt="Tech Icon" loading="lazy" width="55"
                                                height="55" decoding="async" data-nimg="1" className="md:w-[55px] w-[40px]"

                                                src={react} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={nextjs} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={tailwind} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={figma} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={html} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[40px] bg-[#fff] border border-[#000000]/10 space-x-3 px-8 md:py-10 py-6">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                            <div className="flex items-center" data-aos="fade-right">
                                <img alt="Fitclub Mobile App" loading="lazy" width="500"
                                    height="300" decoding="async" data-nimg="1" className="w-full rounded-xl"

                                    src={retail} />
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-4">
                                    <h3 className="xl:text-4xl md:text-2xl text-xl font-semibold" data-aos="fade-up">AI-Powered Finance Solutions</h3>
                                    <p className="text-black py-3" data-aos="fade-up">A financial institution struggled with rising fraud incidents and required a robust solution. We developed a real-time fraud detection system using machine learning, enabling proactive identification and preventing fraudulent transactions, ensuring enhanced security and trust.</p>
                                    <div>
                                        <p className="text-black py-3"></p>
                                        <ul className="list-disc list-inside space-y-2"></ul>
                                    </div>
                                    <a href="/#">
                                        <button
                                            className="text-[#f13c3c] hover:bg-[#f13c3c]  hover:text-[#fff] border border-[#f13c3c] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">Explore
                                            Now <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 24 24" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                                            </svg></button></a>
                                    <div>
                                        <h4 className="text-[#212121] text-lg mt-6 font-semibold" data-aos="fade-up">Technology We Use</h4>
                                        <div className="flex space-x-4 mt-3">

                                            <img data-aos="fade-up" alt="Tech Icon" loading="lazy" width="55"
                                                height="55" decoding="async" data-nimg="1" className="md:w-[55px] w-[40px]"

                                                src={react} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={nextjs} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={tailwind} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={figma} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={html} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-8 flex justify-center">
                    <Link to="/portfolio" data-discover="true">
                        <button className="btn btn-fix lazyloaded">View More<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                            <path id="Path_1487529" data-name="Path 1487529"
                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                        </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default OurPortfolioHome;
