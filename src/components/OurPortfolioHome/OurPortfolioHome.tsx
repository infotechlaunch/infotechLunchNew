import React from "react";
import { Link } from "react-router-dom";
import react from "../../assets/Images/icon/react-portfolio-icon.svg";
import nextjs from "../../assets/Images/icon/next-js-portfolio-icon.svg";
import tailwind from "../../assets/Images/icon/tailwind-portfolio-icon.svg";
import figma from "../../assets/Images/icon/figma-portfolio-icon.webp";
import html from "../../assets/Images/icon/html-portfolio-icon.svg";

import portfoli from "../../assets/Images/portfolio/8.webp";
import ecom from "../../assets/Images/portfolio/10.webp";


const OurPortfolioHome: React.FC = () => {
    return (

        <div className="bg-orange lg:py-16 py-10">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="text-center mb-10">
                    <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold" data-aos="fade-up">Our Portfolio</h2>
                    <p className="text-base font-normal mt-2" data-aos="fade-up">Dive into our portfolio showcasing impactful digital products and tailored solutions. From sleek websites to powerful mobile apps, each project reflects our passion for innovation, quality, and client success.</p>
                </div>
                <div className="space-y-10">
                    <div className="rounded-[40px] bg-[#FFF] border border-[#000000]/10 space-x-3 px-8 md:py-10 py-6">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                            <div className="flex items-center">
                                <img alt="Fitclub Mobile App" loading="lazy" width="500" data-aos="fade-up"
                                    height="300" decoding="async" data-nimg="1" className="w-full rounded-xl"

                                    src={portfoli} />
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-4">
                                    <h3 data-aos="fade-up" className="xl:text-4xl md:text-2xl text-xl font-semibold">Healthcare Services App</h3>
                                    <p data-aos="fade-up" className="text-black py-3">A modern telemedicine app enabling virtual consultations, easy appointment booking, and secure health records—redefining healthcare access across India.</p>
                                    <div>
                                        <p className="text-black py-3"></p>
                                        <ul className="list-disc list-inside space-y-2"></ul>
                                    </div>
                                    <a href="/portfolio">
                                        <button data-aos="fade-up"
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
                            <div className="flex items-center">
                                <img alt="Fitclub Mobile App" loading="lazy" width="500" data-aos="fade-up"
                                    height="300" decoding="async" data-nimg="1" className="w-full rounded-xl"

                                    src={ecom} />
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-4">
                                    <h3 data-aos="fade-up" className="xl:text-4xl md:text-2xl text-xl font-semibold">Fitness App</h3>
                                    <p data-aos="fade-up" className="text-black py-3">An all-in-one e-commerce app for fitness enthusiasts. Shop gear, track progress, and get personalized health insights, all in one seamless experience.</p>
                                    <div>
                                        <p className="text-black py-3"></p>
                                        <ul className="list-disc list-inside space-y-2"></ul>
                                    </div>
                                    <a href="/portfolio">
                                        <button data-aos="fade-up"
                                            className="text-[#f13c3c] hover:bg-[#f13c3c]  hover:text-[#fff] border border-[#f13c3c] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">Explore
                                            Now <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 24 24" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                                            </svg></button></a>
                                    <div>
                                        <h4 data-aos="fade-up" className="text-[#212121] text-lg mt-6 font-semibold">Technology We Use</h4>
                                        <div className="flex space-x-4 mt-3">

                                            <img data-aos="fade-up" alt="Tech Icon" loading="lazy" width="55"
                                                height="55" decoding="async" data-nimg="1" className="md:w-[55px] w-[40px]"

                                                src={react} />
                                            <img data-aos="fade-up"
                                                alt="Tech Icon" loading="lazy" width="55" height="55" decoding="async"
                                                data-nimg="1" className="md:w-[55px] w-[40px]"
                                                src={nextjs} /><img data-aos="fade-up"
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
                    <Link to="/portfolio" data-discover="true" data-aos="fade-up">
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
