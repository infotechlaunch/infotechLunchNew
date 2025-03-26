import React, { useEffect, useState } from "react";
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "../pages/TawkChat";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import career from "../assets/Images/career-hero-image.webp"
import AOSProvider from "../components/AOSProvider";
import { Link } from "react-router-dom";
const AISocialMedia: React.FC = () => {
 

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="overflow-hidden">
   <div className="bg-gradient-to-r from-[#f13c3c]/40 via-[#FFFFFF] to-[#f13c3c]/40">
      <section className=" ">
         <div className="flex flex-col lg:flex-row  lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="w-full lg:py-16 py-10">
               <div className="space-y-4">
                  <div className="mt-10">
                     <h1 data-aos="fade-right"
                        className="text-[#212121] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                        Transform Your Business with AI-Driven Innovation
                     </h1>
                     <p data-aos="fade-right"
                        className="w-full mx-auto text-4xl font-bold text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                        AI-powered solutions for Social Media, Reputation Management, eCommerce, and Recruitment.
                     </p>
                     <div className="mt-4">
                        <Link to="/contact-us" data-aos="fade-up">
                        <button className="btn btn-fix lazyloaded">
                        Get Started Today”
                           <svg xmlns="http://www.w3.org/2000/svg" width="24.231"
                              height="11.738" viewBox="0 0 24.231 11.738">
                              <path id="Path_1487529" data-name="Path 1487529"
                                 d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                 transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                           </svg>
                        </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full lg:flex justify-end items-end " data-aos="fade-left">
               <img alt="[object Object]" loading="lazy" width="754" height="382" decoding="async" data-nimg="1" src={career} />
            </div>
         </div>
      </section>
   </div>
</div>
               
                <ContactForm />
                <Footer />
                <TawkChat />
            </AOSProvider>
        </>
    );
};

export default AISocialMedia;
