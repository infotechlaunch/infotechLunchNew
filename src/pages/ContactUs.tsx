import React from "react";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import head_image_animation from "../assets/images/about/Video_Ready_Customer_Support_Scene.mp4";

const ContactUs: React.FC = () => {

    return (
        <>
           <AOSProvider>
           <HeaderNew/>
           <section className="hero-container bg-gradient-blue-red">
                               <div className="lg:flex gap-10 block items-center">
                                   <div className="hero-text" data-aos="fade-right">
           
                                       <h1 className="text-4xl font-bold mb-5 mt-5 text-white">
                                       Contact Us </h1>
                                       <p className="text-lg mb-5 text-white">
                                       Get in touch with us today to learn more about Us. <br />Our team is ready to assist you with any questions or inquiries you may have.      </p>
           
                                       <div
                                           style={{
                                               display: "flex",
                                               alignItems: "center",
                                               gap: "1rem",
                                               margin: "auto",
                                               marginBottom: "20px"
                                           }}
                                       >
                                       </div>
                                   </div>
                                   <div className="hero-image" data-aos="fade-left" style={{ zIndex: "0" }}>
                                       <video
                                           className="z-0 w-full" style={{ borderRadius: "12px" }}
                                           src={head_image_animation}
                                           autoPlay
                                           loop
                                           muted
                                           playsInline
                                       />
                                   </div>
                               </div>
                           </section>
            {/* <section className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-gradient-blue-red">
                <div className=" lg:space-y-0 space-y-6 2xl:w-10/12 md:w-10/12 lg:w-11/12 mx-auto">
                    <div className="space-y-2 flex justify-center items-center">
                        <h1 className="text-white xl:text-4xl text-xl font-extrabold xl:leading-[3rem] leading-[3rem] text-start">
                            Contact Us</h1>
                    </div>
                </div>
            </section>  */}
            <ContactForm/>
            <Footer />
            </AOSProvider>
        </>

    );
};

export default ContactUs;
