import React from "react";
import logo from "../../assets/Images/cl01.png";
import logo1 from "../../assets/Images/cl02.png";
import logo2 from "../../assets/Images/cl03.png";
import logo3 from "../../assets/Images/cl04.png";
import logo4 from "../../assets/Images/cl05.png";
import logo5 from "../../assets/Images/cl06.png";
import logo6 from "../../assets/Images/cl07.png";
import logo7 from "../../assets/Images/cl08.png";
import logo9 from "../../assets/Images/cl09.png";
import logo10 from "../../assets/Images/cl10.png";
import logo11 from "../../assets/Images/cl11.png";
import logo12 from "../../assets/Images/cl12.png";
import logo13 from "../../assets/Images/cl13.png";
import logo14 from "../../assets/Images/cl14.png";
import logo15 from "../../assets/Images/cl15.png";
import logo16 from "../../assets/Images/cl16.png";
import logo17 from "../../assets/Images/cl17.png";
import logo18 from "../../assets/Images/cl18.png";
import logo19 from "../../assets/Images/cl19.png";
import logo20 from "../../assets/Images/cl20.png";
import logo21 from "../../assets/Images/cl21.png";
import logo22 from "../../assets/Images/cl22.png";
import logo23 from "../../assets/Images/cl23.png";
const Partners: React.FC = () => {
    return (
        <section className="section section--partners py-16 bg-gradient-blue-red">
            <div className="text-center mb-10 text-white">
            <span className="text-lg font-semibold mb-3"  data-aos="fade-up">Clients &amp; Partners</span>
                <h2 className="text-3xl lg:text-3xl text-orange font-semibold leading-[47px] mb-2"  data-aos="fade-up">Empowering Startups to Enterprises, <br /> Turning Digital Dreams Into Reality</h2>
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
