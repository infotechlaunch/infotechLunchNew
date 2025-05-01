import React from "react";
import logo from "../../assets/Images/home/clients/cl01.webp";
import logo1 from "../../assets/Images/home/clients/cl02.webp";
import logo2 from "../../assets/Images/home/clients/cl03.webp";
import logo3 from "../../assets/Images/home/clients/cl04.webp";
import logo4 from "../../assets/Images/home/clients/cl05.webp";
import logo5 from "../../assets/Images/home/clients/cl06.webp";
import logo6 from "../../assets/Images/home/clients/cl07.webp";
import logo7 from "../../assets/Images/home/clients/cl08.webp";
import logo9 from "../../assets/Images/home/clients/cl09.webp";
import logo10 from "../../assets/Images/home/clients/cl10.webp";
import logo11 from "../../assets/Images/home/clients/cl11.webp";
import logo12 from "../../assets/Images/home/clients/cl12.webp";
import logo13 from "../../assets/Images/home/clients/cl13.webp";
import logo14 from "../../assets/Images/home/clients/cl14.webp";
import logo15 from "../../assets/Images/home/clients/cl15.webp";
import logo16 from "../../assets/Images/home/clients/cl16.webp";
import logo17 from "../../assets/Images/home/clients/cl17.webp";
import logo18 from "../../assets/Images/home/clients/cl18.webp";
import logo19 from "../../assets/Images/home/clients/cl19.webp";
import logo20 from "../../assets/Images/home/clients/cl20.webp";
import logo21 from "../../assets/Images/home/clients/cl21.webp";
import logo22 from "../../assets/Images/home/clients/cl22.webp";
import logo23 from "../../assets/Images/home/clients/cl23.webp";
const Partners: React.FC = () => {
    return (
        <section className="section section--partners py-16 bg-gradient-blue-red">
            <div className="text-center mb-10 text-white">
            <span className="text-3xl font-semibold mb-6 text-gradient"  data-aos="fade-up">Clients &amp; Partners</span>
                <h2 className="text-3xl lg:text-3xl text-orange font-semibold leading-[47px] mb-2 mt-3"  data-aos="fade-up">Empowering Startups to Enterprises, <br /> Turning Digital Dreams Into Reality</h2>
                <p className="text-lg mt-2"  data-aos="fade-up">Join hands with a team that brings bold ideas to life—creating impactful digital solutions for every scale and sector.</p>
                </div>
            <div className="section__body">
                <div className="partners-wrapper">
                    <div className="partners-list">
                        <div className=" marquee-container left-to-right">
                            <div className="marquee">

                                <div className="partners-list__item">
                                    <img className="img-fluid" src={logo} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo1} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo2} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo3} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo4} alt="Logo" />
                                </div>

                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo5} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo6} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo7} alt="Logo" />
                                </div>
                                
                                <div className="partners-list__item">
                                    <img className="img-fluid" src={logo9} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo10} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo11} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo12} alt="Logo" />
                                </div>
                               
                            </div>
                        </div>

                        <div className=" marquee-container right-to-left">
                            <div className="marquee">
                            <div className="partners-list__item">
                                    <img className="img-fluid" src={logo13} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo14} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo15} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo16} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo17} alt="Logo" />
                                </div>

                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo18} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo19} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo20} alt="Logo" />
                                </div>
                                
                                <div className="partners-list__item">
                                    <img className="img-fluid" src={logo21} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo22} alt="Logo" />
                                </div>
                                <div className="partners-list__item">
                                <img className="img-fluid" src={logo23} alt="Logo" />
                                </div>
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Partners;
