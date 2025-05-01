import React from "react";
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "../pages/TawkChat";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import Ruchi from "../assets/Images/about/team/Ruchi-Chourasia.png"
import vani from "../assets/Images/about/team/Vani_Mahobia.png"
import Srishti from "../assets/Images/about/team/Srishti-Soni.png"
import AOSProvider from "../components/AOSProvider";


const LifeInInfoTechLaunch: React.FC = () => {
    return (
        <>
        <AOSProvider>
            <HeaderNew />
            <div className="overflow-hidden">
                <div className="bg-gradient-to-r from-[#f13c3c]/40 via-[#FFFFFF] to-[#f13c3c]/40">
                    <section className=" ">
                        <div className="flex flex-col lg:flex-row  lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                            <div className="w-full 2xl:py-16  py-10">
                                <div className="space-y-4">
                                    <div className="mt-10">
                                        <h1 data-aos="fade-right"
                                            className="text-[#212121] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                                            Life@InfoTechLaunch</h1>
                                        <p data-aos="fade-right"
                                            className="w-full mx-auto text-2xl font-bold text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                        </p>
                                        <p data-aos="fade-right"
                                            className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                            Empowering innovation and connectivity, our company is dedicated to delivering cutting-
                                            edge solutions. With a commitment to excellence, we strive to redefine industries
                                            through forward-thinking and client-centric approaches.</p>
                                        <p data-aos="fade-right"
                                            className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                        </p>
                                        <p data-aos="fade-right"
                                            className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                        </p>
                                    </div>
                                    <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal"></ul>
                                </div>
                            </div>
                            <div className="w-full lg:flex justify-end items-end "></div>
                        </div>
                    </section>
                </div>
                <section className="lg:py-16 py-10 bg-[#F7F9FC]">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2" data-aos="fade-up">Life@InfoTechLaunch</h2>
                            <p className="text-gray-600 text-lg font-semibold mt-2" data-aos="fade-up">Meet an exceptional team of technology advisors, growth facilitators,
                                and subject matter experts with proven experience</p></div>
                        <div className="gallery-container mt-10" id="animated-thumbnails-gallery" data-aos="fade-up" >
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Ruchi} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={vani} />
                            </a>
                            <a className="gallery-item wide ">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            {/* <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item wide">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item wide ">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item small">
                                <img className="img-responsive" src={Srishti} />
                            </a>
                            <a className="gallery-item wide">
                                <img className="img-responsive" src={Srishti} />
                            </a> */}
                        </div>
                    </div>
                </section>

            </div>
            <ContactForm />
            <Footer />
            <TawkChat />
            </AOSProvider>
        </>
    );
};

export default LifeInInfoTechLaunch;
