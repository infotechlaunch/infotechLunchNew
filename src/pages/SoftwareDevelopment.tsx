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
                <section className="lg:py-16 py-10">
                    <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="space-y-4 text-center">
                            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                                <h2 data-aos="fade-up" className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">How Our Tailored Software Development Solutions Can Benefit Your Business?
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
                <Partners/>
                <Services />
                <Footer />
                <TawkChat />
            </AOSProvider >

        </>

    );
};

export default HireMobileAppDeveloper;
