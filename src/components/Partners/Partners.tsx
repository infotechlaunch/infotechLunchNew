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
const Partners: React.FC = () => {
    return (
        <section className="section section--partners py-16">
            <div className="text-center mb-10">
            <span className="text-[#f13c3c] text-lg font-semibold mb-3"  data-aos="fade-up">Clients &amp; Partners</span>
                <h2 className="text-3xl lg:text-4xl font-semibold leading-[47px] mb-2"  data-aos="fade-up">From Startups To Enterprises, <br /> We Transform Digital Visions At Every Scale</h2>
                <p className="text-gray-600 text-lg font-semibold mt-2"  data-aos="fade-up">Partner with experts who transform ideas into market-leading solutions, regardless of your business size or industry.</p>
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
                               
                            </div>
                        </div>

                        <div className=" marquee-container right-to-left">
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
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Partners;
