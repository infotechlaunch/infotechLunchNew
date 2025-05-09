import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import growthAndMarketingImg from "../assets/Images/GrowthandMarketing/digital-marketing-services-image.png";
import Ruchi from "../assets/Images/about/team/Ruchi-Chourasia.png"
import vani from "../assets/Images/about/team/Vani_Mahobia.png"
import Srishti from "../assets/Images/about/team/Srishti-Soni.png"
import icon1 from "../assets/Images/GrowthandMarketing/achivements/1.png"
import icon2 from "../assets/Images/GrowthandMarketing/achivements/2.png"
import icon3 from "../assets/Images/GrowthandMarketing/achivements/3.png"
import icon4 from "../assets/Images/GrowthandMarketing/achivements/4.png"
import beyondicon1 from "../assets/Images/GrowthandMarketing/trusted/googlepartner.png"
import beyondicon2 from "../assets/Images/GrowthandMarketing/trusted/bingadds.png"
import beyondicon3 from "../assets/Images/GrowthandMarketing/trusted/hubspot.png"
import beyondicon4 from "../assets/Images/GrowthandMarketing/trusted/mailcimp.png"
import WhyChoose from "../components/GrowthAndMarketing/WhyChoose";
import GetStarted from "../components/GrowthAndMarketing/GetStarted";
import CaseStudy from "../components/GrowthAndMarketing/CaseStudy";

const GrowthMarketing: React.FC = () => {
    const statsData = [
        {
            number: "25",
            unit: "K+",
            title: "Campaigns",
            img: icon1
        },
        {
            number: "81",
            unit: "%",
            title: "Traffic Increase",
            img: icon2
        },

        {
            number: "3",
            unit: "k+",
            title: "Happy Clients",
            img: icon3
        },
        {
            number: "47",
            unit: "%",
            title: "Happy Clients",
            img: icon4
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
                <div className="lg:bg-center relative bg-gradient-blue-red">
                    <div
                        className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="w-full 2xl:py-40 xl:py-16 py-10">
                            <div className="space-y-8">
                                <div>
                                    <h1 data-aos="fade-right" className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]">
                                        Empowering Businesses to Grow Online
                                    </h1>
                                    <p data-aos="fade-right" className="w-full mx-auto text-lg text-white lg:text-base mt-2">

                                        Unlock your brand’s full potential with our all-in-one digital marketing solutions designed to drive visibility, engagement, and growth in the digital landscape.
                                    </p>
                                </div>
                            </div>
                            <div className="md:py-6">
                                <Link data-aos="fade-right" to="/contact-us" className="btn btn-fix lazyloaded">Talk With Expert
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                        <path id="Path_1487529" data-name="Path 1487529"
                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                            transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex justify-end items-end overflow-hidden" style={{ borderRadius: "12px" }}>
                            <div data-aos="fade-left">

                                <img src={growthAndMarketingImg} alt="" className="features-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="lg:py-16 py-10 bg-purple-700 ">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="text-center mb-[40px] ">
                            <h2 className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2 text-orange" data-aos="fade-up">Our Leadership</h2>
                            <p className="text-lg font-semibold mt-2 text-white" data-aos="fade-up">A collective of innovative minds and spirited individuals, committed to bringing their best in a dynamic and supportive digital workspace.</p>
                        </div>
                        <div className="leadership_list" >
                            <div className="lead_card" data-aos="fade-up" >
                                <div className="lead_inner">
                                    <div className="media">
                                        <img src={vani} alt="" data-wpmeteor-wheel="true" />
                                    </div>
                                    <div className="lead_cnt">
                                        <h3 className="text-white">Vani Mahobia</h3>
                                        <p className="text-orange">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lead_card" data-aos="fade-up">
                                <div className="lead_inner">
                                    <div className="media">
                                        <img src={Srishti} alt="" data-wpmeteor-wheel="true" />
                                    </div>
                                    <div className="lead_cnt">
                                        <h3>Srishti Soni</h3>
                                        <p>Sr Digital Marketing Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lead_card" data-aos="fade-up">
                                <div className="lead_inner">
                                    <div className="media">
                                        <img src={Ruchi} alt="" />
                                    </div>
                                    <div className="lead_cnt">
                                        <h3>Ruchi Chourasia</h3>
                                        <p>Chief Technical Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:py-16 py-10 bg-[#297ea3]">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

                        <div className="space-y-4 ">

                            <div className="grid pt-8 grid-cols-1 md:grid-cols-4 gap-4 text-center">
                                {statsData.map((stat, index) => (
                                    <div key={index} className="p-4 bg-white shadow-lg rounded-lg  feature-card-1">
                                        <div className="grid justify-center mb-4"><img src={stat.img} /></div>
                                        <div className="text-4xl font-bold flex justify-center items-center text-purple-400">

                                            <span>{counters[index]}</span>
                                            <span className="ml-1">{stat.unit}</span>
                                        </div>
                                        <div className="text-lg font-semibold mt-2">{stat.title}</div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <WhyChoose />
                <section className="bg-gradient-blue-red" >
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="bg-white rounded-lg p-6" data-aos="fade-up">
               
                    <div className="mx-auto lg:flex items-center block">
                    <div className="bg-black text-center  border bg-white  border-[#5556D1]/20 mr-5 p-3">
                            <h2 className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2 text-black" data-aos="fade-up">We Are a Trusted :
                            </h2>
                    </div>
                    <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-6 gap-4 text-center align-center">
                        <div className="p-3 rounded-lg space-y-2">
                            <div>
                                <div className="grid justify-center mb-4"><img src={beyondicon1}  /></div>
                                </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <div className="grid justify-center mb-4"><img src={beyondicon2}  /></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <div className="grid justify-center mb-4"><img src={beyondicon3}  /></div>
                            </div>
                        </div>
                        <div className="space-y-2" >
                            <div>
                                <div className="grid justify-center mb-4"> <img src={beyondicon4}  /></div>
                                 </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </section>
                <CaseStudy/>
                <GetStarted/>
                <ContactForm />
                <Footer />
            </AOSProvider>
        </>

    );
};

export default GrowthMarketing;
