import React from "react";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import Ruchi from "../assets/Images/about/team/Ruchi-Chourasia.png"
import vani from "../assets/Images/about/team/Vani_Mahobia.png"
import Srishti from "../assets/Images/about/team/Srishti-Soni.png"
import CaseStudy from "../components/CaseStudy/CaseStudy";
import heroimg from "../assets/Images/aiTalentSolution/talent-hero-img.webp"
import WorkingProcess from "../components/WorkingProcess/WorkingProcess";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Partners from "../components/Partners/Partners";
import OurPortfolioHome from "../components/OurPortfolioHome/OurPortfolioHome";
import IndustriesHome from "../components/IndustriesHome/IndustriesHome";
import Blog from "../components/Blog/Blog";
import GetStarted from "../components/GetStarted/GetStarted";
import FAQ from "../components/Faq/Faq";
import AOSProvider from "../components/AOSProvider";
import Ayush from "../assets/Images/about/team/ayush.png";
// import vivek from "../assets/Images/vivek.png";
import bydef from "../assets/Images/about/team/bydef.png";

import wrk01 from "../assets/Images/about/icons/work/wrk01.png"
import wrk02 from "../assets/Images/about/icons/work/wrk02.png"
import wrk03 from "../assets/Images/about/icons/work/wrk03.png"
import wrk04 from "../assets/Images/about/icons/work/wrk04.png"
import wrk05 from "../assets/Images/about/icons/work/wrk05.png"
import wrk06 from "../assets/Images/about/icons/work/wrk06.png"
import wrk07 from "../assets/Images/about/icons/work/wrk07.png"
import wrk08 from "../assets/Images/about/icons/work/wrk08.png"
import coreicon1 from "../assets/Images/about/icons/core-value/icon-1.png";
import coreicon2 from "../assets/Images/about/icons/core-value/icon-2.png"
import coreicon3 from "../assets/Images/about/icons/core-value/icon-3.png"

const AboutUs: React.FC = () => {
    const workItems = [
        { img: wrk01, text: "Learning & Development" },
        { img: wrk02, text: "Mindful Personal Guidance" },
        { img: wrk03, text: "Constructive Feedback" },
        { img: wrk04, text: "Inclusive & Open-Culture" },
        { img: wrk05, text: "Innovation & Quality First" },
        { img: wrk06, text: "Best & Global Opportunities" },
        { img: wrk07, text: "Work with Latest Technology" },
        { img: wrk08, text: "Proactive Implementation" },
    ];
    const values = [
        {
            number: "01",
            image: coreicon1,
            title: "Ensure impactful innovations",
            description:
                "An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.",
        },
        {
            number: "02",
            image: coreicon2,
            title: "Focus on self-development",
            description:
                "Training and mentorship programs, interactive sessions and community meetups to drive personal growth.",
        },
        {
            number: "03",
            image: coreicon3,
            title: "Integrate work-life balance",
            description:
                "Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.",
        },
    ];
    return (
        <>
            <AOSProvider>
                <HeaderNew />

                <div className="bg-gradient-blue-red">
                    <section className=" ">
                        <div className="flex flex-col lg:flex-row  lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                            <div className="w-full lg:py-16 py-10">
                                <div className="space-y-4">
                                    <div className="mt-10">
                                        <h1 data-aos="fade-right"
                                            className="text-[#fff] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                                            Leadership</h1>
                                        <p data-aos="fade-right"
                                            className="w-full mx-auto text-sm font-light text-[#fff] lg:text-base mt-2 lg:text-start text-center">
                                            Empowering innovation and connectivity, our company is dedicated to delivering cutting-
                                            edge solutions. With a commitment to excellence, we strive to redefine industries
                                            through forward-thinking and client-centric approaches</p>

                                    </div>
                                </div>
                            </div>
                           <div className="w-full lg:flex justify-end items-end " data-aos="fade-left">
                                    <img alt="[object Object]" loading="lazy" width="754" height="382" decoding="async" data-nimg="1" src={heroimg} />
                                </div>
                        </div>
                    </section>
                </div>
                <section className="who_sect lg:py-16 py-10">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="who_cnt items-center">
                            <h3 data-aos="fade-right" className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2">Who We Are?</h3>
                            <p data-aos="fade-left" className="text-sm md:text-lg font-normal">We are believers of change! A change driven by technology and innovation. We help
                                businesses and individuals in adapting as well as adopting digital transformation. Our
                                aim is to change people’s lives and improve businesses with our progressive and
                                innovative technology solutions.</p>

                        </div>
                        <div className="who_cnt items-center" >
                            <p className="text-sm md:text-lg font-normal" data-aos="fade-left">
                                We start by listening to the issues, requirements, challenges and objectives. The
                                process continues with an effort to understand the business, market sector and
                                competitors to develop information which is combined with our technical knowledge,
                                expertise and research in order to provide the best solution at the lowest cost.
                            </p>
                            <h3 data-aos="fade-right" className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2">What We Do Best</h3>
                           
                        </div>
                    </div>
                </section>
                <section className="lg:py-16 py-10 bg-gradient-blue-red ">
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
                        <div className="leadership_list !mt-[50px]">
                            <div className="lead_card" data-aos="fade-up">
                                <div className="lead_inner">
                                    <div className="media">
                                        <img src={Ayush} alt="" />
                                    </div>
                                    <div className="lead_cnt">
                                        <h3>Ayush Tamboli</h3>
                                        <p>Digital Analyst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lead_card" data-aos="fade-up">
                                <div className="lead_inner">
                                    <div className="media">
                                        <img src={bydef} alt=""  />
                                    </div>
                                    <div className="lead_cnt">
                                        <h3>Ansh Sharma</h3>
                                        <p>Sr Delivery Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lead_card" data-aos="fade-up">
                                <div className="lead_inner">
                                    <div className="media">
                                        <img src={bydef} alt="" />
                                    </div>
                                    <div className="lead_cnt">
                                        <h3>Dhanjit Singh</h3>
                                        <p>Full Stack Backend Enginner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Wrk_life py-10 lg:py-16">
                    <div className="mx-auto w-11/12 xl:w-5/6 2xl:w-10/12">

                        <div className="text-center w-[300px] mx-auto mb-12">
                            <h3 data-aos="fade-up" className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2 aos-init aos-animate">
                                Work Life
                            </h3>
                            <h4 data-aos="fade-up" className="text-3xl lg:text-4xl font-normal capitalize">
                                At Its <span className="font-semibold">Best</span>
                            </h4>
                        </div>
                        <div className="mx-auto w-11/12 xl:w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {workItems.map((item, index) => (
                                <div
                                    key={index} data-aos="fade-up"
                                    className={`flex items-center p-4 md:border-r md:border-gray-500 ${index === 2 || index === 5 || index === 7 ? "border-none" : ""
                                        }`}
                                >
                                    <div className="w-16">
                                        <img src={item.img} alt="" className="w-full" />
                                    </div>
                                    <div className="ml-5">
                                        <p className="text-black text-lg font-normal">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CaseStudy />
                <section className="bg-gradient-blue-red  lg:py-16 py-10 ">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="text-white text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2" data-aos="fade-up">Our Core Values</h2>
                        <p className="text-lg font-semibold mt-2" data-aos="fade-up">
                                We’re enthusiastic learners and seasoned inventors. Together, we can{" "}
                                <span className="block font-semibold">
                                    create solutions that serve not just technology but the humans behind it.
                                </span>
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="p-6 shadow-lg rounded-lg bg-gray-50 text-center feature-card-1">
                                    <div className="flex justify-center mb-4">
                                        <img alt={value.title} src={value.image} className="object-contain-1" />
                                        </div>
                                    {/* <h4 className="text-[#f13c3c]/20 text-5xl font-extrabold mb-2">
                                        {value.number}
                                    </h4> */}
                                    <h3 className="text-black text-lg font-semibold mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-black text-sm font-normal leading-6">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <WorkingProcess />
                <WhyChoose />
                <Partners />
                <OurPortfolioHome />
                <IndustriesHome />
                <Blog />
                <GetStarted />
                <FAQ />
                <ContactForm />
                {/*Testing */}
                <Footer />
            </AOSProvider>
        </>

    );
};

export default AboutUs;
