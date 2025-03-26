import React from "react";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";

const ContactUs: React.FC = () => {

    return (
        <>
           <AOSProvider>
           <HeaderNew/>
            <section className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-contact">
                <div className=" lg:space-y-0 space-y-6 2xl:w-10/12 md:w-10/12 lg:w-11/12 mx-auto">
                    <div className="space-y-2 flex justify-center items-center">
                        <h1 className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem] text-start">
                            Contact Us</h1>
                    </div>
                </div>
            </section> 
            <ContactForm/>
            <Footer />
            </AOSProvider>
        </>

    );
};

export default ContactUs;
