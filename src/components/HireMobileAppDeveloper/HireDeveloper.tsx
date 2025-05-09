import React from "react";
import { Link } from 'react-router-dom';
import technology from '../../assets/Images/ai-robot.webp';
const GetStarted: React.FC = () => {
    return (
        <div className="GetStarted_sect">
            <section className="bg-orange py-12">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 action-sec relative bg-[#0C0F18] rounded-[24px]">
                    <div className="lg:py-12 py-6 lg:px-14 px-8 lg:flex gap-8 items-center">
                        <div className="space-y-3 lg:w-[70%] w-full">
                            <h2 data-aos="fade-right" className="xl:text-4xl text-3xl text-[#fff] mt-3 font-semibold">Looking to Hire App
                                Developers for Your Project?</h2>
                            <p data-aos="fade-right" className="text-base text-white">Our team of expert iOS and Android developers is ready to turn your ideas into reality. Hire app developers tailored to your business needs and build cutting-edge, high-performance applications with ease!</p>
                            <div data-aos="fade-right" className="mt-7 z-10 relative">
                                <Link to="/contact-us" className="btn btn-fix lazyloaded">Hire A Developer
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                        <path id="Path_1487529" data-name="Path 1487529"
                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                            transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-[30%] w-full mx-auto flex justify-center lg:mt-0 mt-5">
                            <div data-aos="fade-left" className="LazyLoad is-visible">
                                <img alt="Get in touch now." loading="lazy" width="800"
                                    height="600" decoding="async" data-nimg="1" className="action-img" src={technology} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default GetStarted;
