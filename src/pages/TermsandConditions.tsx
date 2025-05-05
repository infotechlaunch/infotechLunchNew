import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";



const ECommerce: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="lg:bg-center relative bg-gradient-blue-red" >
                    <div
                        className="relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="w-full 2xl:py-40 xl:py-16 py-10"  data-aos="fade-right">
                            <div className="space-y-8 text-center">
                                <div>
                                    <h1 data-aos="fade-right" className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]">
                                       Terms & Conditions
                                    </h1>
                                    <p data-aos="fade-right" className="w-full mx-auto text-lg text-white lg:text-base mt-2">
                                   Coming Soon!   </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <Footer />
            </AOSProvider>
        </>

    );
};

export default ECommerce;
