import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import lunch from "../assets/Images/infotech-web-dev-laptop.png";
import health from "../assets/Images/portfoli/11.png";
import Careem from "../assets/Images/portfoli/7.png";
import fitness from "../assets/Images/portfoli/10.png";
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";


const projects = [
    {
        title: "Healthcare Services App",
        description:
            "A comprehensive telemedicine and healthcare management solution for patients and providers. It facilitates virtual consultations, appointment scheduling, and health record management, improving access to healthcare.",
        image: health,
        alt: "Healthcare Services App",
        link: "#",
    },
    {
        title: "Careem Clone app",
        description:
            "The Careem Clone App is a feature-rich ride-hailing and delivery platform that connects users with drivers for seamless transportation. It offers real-time tracking, secure payments, and an intuitive interface for a smooth user experience. .",
        image: Careem,
        alt: "Careem Clone app",
        link: "#",
    },
    {
        title: "Fitness App",
        description:
            "Welcome to FitClub, where your fitness journey meets innovation. Seamlessly sculpt your well-being with our all-in-one mobile app, empowering you to own your health like never before.",
        image: fitness,
        alt: "Fitness App",
        link: "#",
    },
];

const Portfolio: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="overflow-hidden">
                    <div className="lg:py-[4rem] py-[3rem] bg-gradient-blue-red">
                        <section>
                            <div className="lg:flex lg:flex-row md:items-center lg:space-x-20 lg:space-y-0 space-y-6 2xl:w-10/12 w-full md:w-10/12 lg:w-11/12 mx-auto">
                                <div>
                                    <div className="space-y-2">
                                        <h1 data-aos="fade-right"
                                            className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem] text-start">
                                            Our Portfolio</h1>
                                        <h2 data-aos="fade-right"
                                            className="w-full mx-auto xl:text-3xl text-xl font-normal text-white text-start">
                                            Work We Have Done For Some of Our Great Clients</h2>
                                        <p data-aos="fade-right" className="w-full mx-auto text-sm font-light text-white lg:text-base">Delivering
                                            Innovative Robust and Result Oriented Business IT Solutions for Medium to
                                            Small Businesses.</p>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <Link data-aos="fade-right" to="/contact-us" className="btn btn-fix lazyloaded">Talk To Consultant
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                                <path id="Path_1487529" data-name="Path 1487529"
                                                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                    transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div><img alt="Our Portfolio" loading="lazy" width="640" height="369" decoding="async"
                                    data-nimg="1" className="mx-auto"
                                    src={lunch} />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="py-8 bg-orange lg:py-20">
                        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
                            <div className="space-y-4 flex flex-col justify-center text-center mx-auto lg:w-4/6" data-aos="fade-up">
                                <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#000]">Our Excellent
                                    Portfolio</h2>
                                <p className="text-base  text-[#000]">Driving growth and success through creative design
                                    and development. Showcasing our passion for design and creativity</p>
                            </div>
                            <div className="container grid gap-8 py-10 text-left lg:grid-cols-1 lg:gap-14">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className={`border border-[#000000]/10 grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-8 rounded-3xl xl:p-10 lg:p-8 p-6 items-center ${index % 2 === 0 ? "bg-[#F5F5F9]" : "bg-white"
                                            }`}
                                    >
                                        <div className="flex justify-center w-full md:justify-start" data-aos="fade-right">
                                            <img
                                                title={project.title}
                                                alt={project.alt}
                                                loading="lazy"
                                                width="600"
                                                height="600"
                                                decoding="async"
                                                className="rounded-md w-full"
                                                src={project.image}
                                            />
                                        </div>
                                        <div className="w-full text-left" data-aos="fade-left">
                                            <div className="space-y-3">
                                                <h3 data-aos="fade-up" className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">
                                                    {project.title}
                                                </h3>
                                                <p data-aos="fade-up" className="text-base font-light text-black">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div data-aos="fade-up" className="mt-8">
                                                <Link data-aos="fade-right" to="/contact-us">
                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Initiate Now<svg xmlns="http://www.w3.org/2000/svg" className="!bg-[#fff]" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"><path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#f13c3c"></path></svg></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                </div>
                <ContactForm />
                <Footer />
            </AOSProvider>
        </>

    );
};

export default Portfolio;
