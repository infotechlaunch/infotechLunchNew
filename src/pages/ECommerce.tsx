import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import EcommerceHeroImg from "../assets/Images/hero-img/ecommerce.webp";



const ECommerce: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="lg:bg-center relative bg-gradient-blue-red" >
                    <div
                        className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="w-full 2xl:py-40 xl:py-16 py-10"  data-aos="fade-right">
                            <div className="space-y-8">
                                <div>
                                    <h1 data-aos="fade-right" className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]">
                                        Launch & Scale Your E-Commerce Business With Smart Tech
                                    </h1>
                                    <p data-aos="fade-right" className="w-full mx-auto text-lg text-white lg:text-base mt-2">
                                        Custom e-commerce solutions built for performance — from storefront to secure checkout, we power your digital retail success.
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
                        <div className="w-full lg:flex justify-end items-end hidden"  data-aos="fade-left">
                            <img
                                src={EcommerceHeroImg}
                                alt="Healthcare Solutions"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
                <ContactForm />
                <Footer />
            </AOSProvider>
        </>

    );
};

export default ECommerce;
