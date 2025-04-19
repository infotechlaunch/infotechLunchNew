import React, { useEffect, useState } from "react";
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "../pages/TawkChat";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import career from "../assets/Images/career-hero-image.webp"
import AOSProvider from "../components/AOSProvider";
import Ayush from "../assets/Images/ayush.png";
import Srishti from "../assets/Images/Srishti-Soni.png"
import Ruchi from "../assets/Images/Ruchi-Chourasia.png"
import vani from "../assets/Images/Vani_Mahobia.png"
import Edge1 from "../assets/Images/We-build-dedicated-delivery-info.svg"
import Edge2 from "../assets/Images/We-thoroughly-vet-professionals-info.svg"
import Edge3 from "../assets/Images/We-invest-in-significant-resources-info.svg"
import Edge4 from "../assets/Images/With-a-growing-database-of-nearly-info.svg"
import Blog from "../components/TalentSolutions/Blog";
import TalentSection from "../components/TalentSolutions/TalentSection";
const TalentSolutions: React.FC = () => {
 
    const statsData = [
        {
            number: "15",
            unit: "Mn+",
            title: "Users",
            subtitle: "Trust Our Developed Apps"
        },
        {
            number: "41",
            unit: "Mn+",
            prefix: "$",
            title: "Revenue",
            subtitle: "Generated on Our Solutions"
        },
        {
            number: "99",
            unit: "%",
            title: "Client Satisfaction",
            subtitle: "Expertly Managed by Our Products"
        },
        {
            number: "250",
            unit: "+",
            title: "Enterprise",
            subtitle: "Projects"
        }
    ];
    const EdgeData = [
        {
            imgSrc: Edge1,
            altText: "We build dedicated delivery teams",
            title: "We build dedicated delivery teams for clients with management program and sufficient spending"
        },
        {
            imgSrc: Edge2,
            altText: "We thoroughly vet professionals",
            title: "We thoroughly vet professionals who work with us through interviews and online testing"
        },
        {
            imgSrc: Edge3,
            altText: "We invest in significant resources",
            title: "We invest in significant resources to ensure our professionals are engaged and committed to our client's projects"
        },
        {
            imgSrc: Edge4,
            altText: "Growing database of candidates",
            title: "With a growing database of nearly 15 million candidate profiles, Innova Solutions is positioned to source hard-to-find talent"
        }
    ];
    const sanitizedStatsData = statsData.map(stat => ({
        ...stat,
        number: Number(stat.number) // Convert to number
      }));
    
      const [counters, setCounters] = useState(sanitizedStatsData.map(() => 0));
    
      useEffect(() => {
        const intervals = sanitizedStatsData.map((stat, index) => {
          const step = Math.ceil(stat.number / 50); // Now guaranteed to be a number
          return setInterval(() => {
            setCounters(prevCounters => {
              const newCounters = [...prevCounters];
              newCounters[index] = Math.min(newCounters[index] + step, stat.number);
              return newCounters;
            });
          }, 50);
        });
    
        setTimeout(() => intervals.forEach(clearInterval), 3000);
      }, []);

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="overflow-hidden">
                    <div className="bg-gradient-blue-red">
                        <section className=" ">
                            <div className="flex flex-col lg:flex-row  lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                                <div className="w-full lg:py-16 py-10">
                                    <div className="space-y-4">
                                        <div className="mt-10">
                                            <h1 data-aos="fade-right"
                                                className="text-[#fff] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                                                Talent Solutions</h1>
                                            <p data-aos="fade-right"
                                                className="text-[#fff] w-full mx-auto text-2xl font-bold  lg:text-base mt-2 lg:text-start text-center">
                                            </p>
                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-sm font-light text-[#fff] lg:text-base mt-2 lg:text-start text-center">
                                                InfoTech Launch partners with more than 1100 small, mid-size, and Fortune 500 companies across various industries to understand their talent challenges and needs. Our team of dedicated recruiters can help you find the best talent to help ful fill your company’s business goals and objectives.</p>

                                        </div>
                                        <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal"></ul>
                                    </div>

                                </div>
                                <div className="w-full lg:flex justify-end items-end " data-aos="fade-left">
                                    <img alt="[object Object]" loading="lazy" width="754" height="382" decoding="async" data-nimg="1" src={career} />
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="lg:py-16 py-10 bg-[#297ea3]">
                        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

                            <div className="space-y-4 ">
                                <div className="space-y-4 text-center">
                                    <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold"> Helping You Mobilize Talent Based
                                        on Your Hiring Needs</h2>

                                </div>
                                <div className="grid pt-8 grid-cols-1 md:grid-cols-4 gap-4 text-center">
                                    {statsData.map((stat, index) => (
                                        <div data-aos="fade-up" key={index} className="p-4 bg-white shadow-lg rounded-lg">
                                            <div className="text-4xl font-bold flex justify-center items-center">
                                                {stat.prefix && <span>{stat.prefix}</span>}
                                                <span>{counters[index]}</span>
                                                <span className="ml-1">{stat.unit}</span>
                                            </div>
                                            <div className="text-lg font-semibold mt-2">{stat.title}</div>
                                            <div className="text-sm text-gray-500">{stat.subtitle}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full lg:py-16 py-10 bg-gradient-blue-red">
                        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                            <div className="space-y-4 ">
                                <div className="space-y-4 text-center">
                                    <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold">InfoTech Launch Edge </h2>
                                </div>
                                <div className="grid pt-8 grid-cols-1 md:grid-cols-4 gap-6">
                                    {EdgeData.map((item, index) => (
                                        <div data-aos="fade-up" key={index} className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 text-center rounded-[40px] aos-init aos-animate">
                                            <img src={item.imgSrc} alt={item.altText} className="mx-auto w-20 h-20 mb-4" />
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                 <TalentSection/>
                   
                </div>
                <Blog />
                <ContactForm />
                <Footer />
                <TawkChat />
            </AOSProvider>
        </>
    );
};

export default TalentSolutions;
