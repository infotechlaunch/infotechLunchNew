import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import HeaderNew from "../components/Header/HeaderNew";
import Services from "../components/Services/ServicesSoftwareDevelopment";
import WhyChoose from "../components/SoftwareDevelopment/WhyChoose";
import Industries from "../components/SoftwareDevelopment/Industries";
import HireMobileAppHeroImg from "../assets/Images/hero-img/hirededicateddeveloper.webp";
import TawkChat from "./TawkChat";
import Partners from "../components/Partners/Partners";
import Benefiticon1 from "../assets/Images/services/softwaredevelopment/benefit/1.svg"
import Benefiticon2 from "../assets/Images/services/softwaredevelopment/benefit/2.svg"
import Benefiticon3 from "../assets/Images/services/softwaredevelopment/benefit/3.svg"
import Edge1 from "../assets/Images/services/softwaredevelopment/end-to-end/1.webp"
import Edge2 from "../assets/Images/services/softwaredevelopment/end-to-end/2.webp"
import Edge3 from "../assets/Images/services/softwaredevelopment/end-to-end/3.webp"
import Edge4 from "../assets/Images/services/softwaredevelopment/end-to-end/4.webp"
import Edge5 from "../assets/Images/services/softwaredevelopment/end-to-end/5.webp"
import Edge6 from "../assets/Images/services/softwaredevelopment/end-to-end/6.webp"
import Edge7 from "../assets/Images/services/softwaredevelopment/end-to-end/7.webp"
import Edge8 from "../assets/Images/services/softwaredevelopment/end-to-end/8.webp"
import Edge9 from "../assets/Images/services/softwaredevelopment/end-to-end/9.webp"

import legacysystem from "../assets/Images/services/softwaredevelopment/legacysystem/legacy-system.webp"
import legacyicon1 from "../assets/Images/services/softwaredevelopment/legacysystem/1.webp";
import legacyicon2 from "../assets/Images/services/softwaredevelopment/legacysystem/2.webp";
import legacyicon3 from "../assets/Images/services/softwaredevelopment/legacysystem/3.webp";
import legacyicon4 from "../assets/Images/services/softwaredevelopment/legacysystem/4.webp";
import legacyicon5 from "../assets/Images/services/softwaredevelopment/legacysystem/5.webp";
import legacyicon6 from "../assets/Images/services/softwaredevelopment/legacysystem/6.webp";

import toolimg1 from '../assets/Images/services/softwaredevelopment/apps/java.webp';
import toolimg2 from '../assets/Images/services/softwaredevelopment/apps/javascript.webp';
import toolimg3 from '../assets/Images/services/softwaredevelopment/apps/xml.svg';
import toolimg4 from '../assets/Images/services/softwaredevelopment/apps/Kotlin.webp';
import toolimg5 from '../assets/Images/services/softwaredevelopment/apps/Objective-C.webp';
import toolimg6 from '../assets/Images/services/softwaredevelopment/apps/swift.webp';
import AOSProvider from "../components/AOSProvider";
const EdgeData = [
    {
        imgSrc: Edge1,
        altText: "We build dedicated delivery teams",
        heading: "Software Consulting",
        title: "Our expert software consultants assess your requirements and offer insightful recommendations to create customized solutions that drive growth, enhance efficiency, and boost profitability."
    },
    {
        imgSrc: Edge2,
        altText: "We thoroughly vet professionals",
        heading: "Custom Software Development",
        title: "We provide personalized software solutions tailored to your specific needs, leveraging agile methodologies for quicker delivery, enhanced scalability, and smooth integration."
    },
    {
        imgSrc: Edge3,
        altText: "We invest in significant resources",
        heading: "Enterprise Software Development",
        title: "We develop ERP, CRM, and other enterprise solutions customized to enhance operations, boost productivity, improve customer service, and drive business growth."
    },
    {
        imgSrc: Edge4,
        altText: "Growing database of candidates",
        heading: "Software Product Development",
        title: "We assist in creating competitive software products from concept to launch, utilizing established strategies for design, testing, and ongoing maintenance."
    },
    {
        imgSrc: Edge5,
        altText: "Growing database of candidates",
        heading: "Software Migration & Integration",
        title: "We support infrastructure upgrades and third-party service integrations, ensuring optimal functionality, compliance, and alignment with your vision."
    },
    {
        imgSrc: Edge6,
        altText: "Growing database of candidates",
        heading: "Agile Application Development",
        title: "Our iterative approach ensures rapid delivery and adaptability to change, focusing on continuous feedback and user-centric results."
    },
    {
        imgSrc: Edge7,
        altText: "Growing database of candidates",
        heading: "API Development",
        title: "We develop strong APIs that link apps and data, enhancing capabilities and interoperability with scalable, purpose-driven solutions."
    },
    {
        imgSrc: Edge8,
        altText: "Growing database of candidates",
        heading: "UI/UX Design",
        title: "We design captivating user experiences that reflect your brand identity and improve satisfaction with mobile-first, user-centered designs."
    },
    {
        imgSrc: Edge9,
        altText: "Growing database of candidates",
        heading: "Application Modernization",
        title: "We modernize legacy systems with the latest technologies and provide 24/7 support to eliminate downtime."
    }
];
const HireMobileAppDeveloper: React.FC = () => {
    return (

        <>
            <AOSProvider>
                <HeaderNew />
                <div className="lg:bg-center relative bg-gradient-blue-red py-16">
                    <div
                        className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="py-20 w-full 2xl:py-20 xl:py-16 py-10">
                            <div className="space-y-4">
                                <div>
                                    <h1 data-aos="fade-right" className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  ">
                                        Get Powerful Digital Solutions</h1>
                                    <p data-aos="fade-right" className="w-full mx-auto text-base font-light text-white mt-2 mb-3">Meet Today’s demands and unlock tomorrow’s opportunities with our innovative and future-ready digital solutions.
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
                <section className="lg:py-16 py-10">
                    <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="space-y-4 text-center">
                            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                                <h2 data-aos="fade-up" className="lg:text-4xl text-2xl font-bold text-[#212121] text-center leading-[3rem]">How Our Tailored Software Development Solutions Can Benefit Your Business?
                                </h2>
                            </div>
                            <div className="grid py-10 text-left lg:grid-cols-3 md:grid-cols-3 2xl:gap-10 gap-10 w-10/12 lg:w-11/12 mx-auto">
                                <div data-aos="fade-up"
                                    className="bg-[#000] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[purple]/100 hover:border-[purple] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md w-fit text-[#f13c3c]  p-2">
                                        <img src={Benefiticon1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#fff] font-semibold mb-6">Process Automation</h3>
                                        <ul className="list-point-2 text-orange">
                                            <li>Simplify Business Workflows</li>
                                            <li>Remove Repetitive Manual Tasks</li>
                                            <li>Maximize Operational Efficiency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#000] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[purple]/100 hover:border-[purple] cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md w-fit text-[#f13c3c]  p-2">
                                        <img src={Benefiticon2} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#fff] font-semibold mb-6">Unlock Scalability

                                        </h3>
                                        <ul className="list-point-2 text-orange">
                                            <li>Easily Grow to Support Millions of Users</li>
                                            <li> Add Unlimited Features and Functionality</li>
                                            <li>Expand Seamlessly Without Limits</li>
                                        </ul>

                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                    className="bg-[#000] p-6 border border-[#f13c3c]/10 group rounded-md space-y-4 hover:bg-[purple]/100 hover:border-[purple]  cursor-pointer duration-200">
                                    <div data-aos="fade-up" className="relative rounded-md w-fit text-[#f13c3c]  p-2">
                                        <img src={Benefiticon3} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 data-aos="fade-up" className="2xl:text-2xl text-xl text-[#fff] font-semibold mb-6">Reduce Costs</h3>
                                        <ul className="list-point-2 text-orange">
                                            <li>Cut Recurring Monthly Tool Expenses</li>
                                            <li>Optimize Technology Infrastructure Spending</li>
                                            <li>Streamline Overall Operational Costs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lg:py-16 py-10 bg-blue-700">
                    <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="">
                            <div className="lg:flex lg:flex-row justify-center 2xl:w-10/12 w-10/12 mx-auto block">
                                <h2 data-aos="fade-right" className="text-4xl font-bold text-[#fff] leading-[3rem]">Legacy Systems Dragging You Down, Competitive Edge At Stake?
                                </h2>
                                <h4 data-aos="fade-left" className="text-2xl font-semibold text-white mt-20">Let's Leverage New-Gen Technologies to make your Business Future-Proof.</h4>
                            </div>
                            <div className="grid py-10 text-left items-center lg:grid-cols-2 md:grid-cols-2 2xl:gap-10 gap-10 w-10/12 lg:w-11/12 mx-auto">
                                <div data-aos="fade-right"
                                    className="bg-[#000] group rounded-md space-y-4 hover:bg-[purple]/100 hover:border-[purple] cursor-pointer duration-200">
                                    
                                    <div className="space-y-2">
                                    <img src={legacysystem} alt="" className="features-img" />
                                    </div>
                                </div>
                                <div className="legacy-system" data-aos="fade-left">
                                    <div className="solution-flow-wrapper ">
                                        <Link to="#">
                                            <div className="commonbs5form">
                                                <div className="icn">
                                                    <img src={legacyicon1} alt="" />
                                                </div>
                                                <p>(IOT) Internet of Things</p>
                                                <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#">
                                            <div className="commonbs5form">
                                                <div className="icn">
                                                <img src={legacyicon2} alt="" />
                                                </div>
                                                <p>AI Software Development</p>
                                                <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#">
                                            <div className="commonbs5form">
                                                <div className="icn">
                                                <img src={legacyicon3} alt="" />
                                                </div>
                                                <p>Blockchain & Decentralization</p>
                                                <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </div>
                                        </Link>
                                        
                                        <Link to="#">
                                            <div className="commonbs5form">
                                                <div className="icn">
                                                <img src={legacyicon4} alt="" />
                                                </div>
                                                <p>Artificial Intelligence & ML</p>
                                                <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#">
                                            <div className="commonbs5form">
                                                <div className="icn">
                                                <img src={legacyicon5} alt="" />
                                                </div>
                                                <p>Big Data Analytics</p>
                                                <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#">
                                            <div className="commonbs5form">
                                                <div className="icn">
                                                <img src={legacyicon6} alt="" />
                                                </div>
                                                <p>Data Science</p>
                                                <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </div>
                                        </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <WhyChoose />

                <Industries />

                <section className="w-full lg:py-16 py-10 bg-gradient-blue-red">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="space-y-4 ">
                            <div className="space-y-4 text-center">
                                <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold">End-to-End Software Development Services,
                                    Tailored To Your Business Needs</h2>
                            </div>
                            <div className="grid pt-8 grid-cols-1 md:grid-cols-3 gap-6">
                                {EdgeData.map((item, index) => (
                                    <div key={index} className="feature-card-1 border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                        <img src={item.imgSrc} alt={item.altText} className="object-contain-1 mx-auto w-20 h-20 mb-4" />
                                        <h3 className="text-lg font-semibold">{item.heading}</h3>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Partners />
                <Services />
                <section className="lg:py-16 py-10 bg-gradient-blue-red">
                        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                
                          <div className="space-y-4 ">
                            <div className="space-y-4 text-center">
                              <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold">Building Tomorrow's Software,
                              <br/>Backed By Cutting-Edge Tech Stack</h2>
                            </div>
                            <div className="grid pt-8 grid-cols-2 md:grid-cols-5 gap-4 text-center">
                
                              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                  <img src={toolimg1} className="tool-icon-1" />
                                </div>
                                <div className="w-2/3">
                                  <p className="text-xl font-semibold">Java</p>
                                </div>
                              </div>
                              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                  <img src={toolimg2} className="tool-icon-1" />
                                </div>
                                <div className="w-2/3">
                                  <p className="text-xl font-semibold">Java Script</p>
                                </div>
                              </div>
                              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                  <img src={toolimg3} className="tool-icon-1" />
                                </div>
                                <div className="w-2/3">
                                  <p className="text-xl font-semibold">XML</p>
                                </div>
                              </div>
                              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                  <img src={toolimg4} className="tool-icon-1" />
                                </div>
                                <div className="w-2/3">
                                  <p className="text-xl font-semibold">Kotlin</p>
                                </div>
                              </div>
                              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                  <img src={toolimg5} className="tool-icon-1" />
                                </div>
                                <div className="w-2/3">
                                  <p className="text-xl font-semibold">Objective C</p>
                                </div>
                              </div>
                              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                                <div className="w-1/3">
                                  <img src={toolimg6} className="tool-icon-1" />
                                </div>
                                <div className="w-2/3">
                                  <p className="text-xl font-semibold">
                                  Swift</p>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </section>
                <Footer />
                <TawkChat />
            </AOSProvider >

        </>

    );
};

export default HireMobileAppDeveloper;
