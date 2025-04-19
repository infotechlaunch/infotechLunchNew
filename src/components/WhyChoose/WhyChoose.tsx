import React from "react";
import { Link } from 'react-router-dom';
const WhyChoose: React.FC = () => {

    return (
        <div className="w-full bg-gradient-to-b from-pink-100 to-blue-100 py-16">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="lg:flex space-y-3 items-center justify-between gap-10">
                    <div>
                        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold" data-aos="fade-right" data-aos-delay="100">Why Choose Us?</h2>
                        <p className="text-base text-[#212121] font-normal mt-2 w-full" data-aos="fade-right" data-aos-delay="100">As a leading IT company, we specialize in delivering innovative, tailor-made solutions that drive results. Discover what sets us apart and why clients trust us to bring their ideas to life.</p>
                    </div>
                    <div>
                        <Link to="/contact-us" data-discover="true" data-aos="fade-left" data-aos-delay="100">
                            <button className="btn btn-fix lazyloaded">Connect
                                to expert<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                    <path id="Path_1487529" data-name="Path 1487529"
                                        d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                        transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 mt-10">
                    <div className="lg:bg-center lg:flex hidden justify-end items-end  bg-no-repeat bg-cover bg-left whychoose  px-6 py-8 rounded-lg">
                        <div className="relative z-[1]" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="xl:text-2xl text-xl text-[#fff] font-semibold">Outcome-Driven Excellence</h2>
                            <p className="text-base font-normal text-white">Our developers are committed to delivering top-tier results through innovative web and app solutions that drive measurable success.</p>
                            <div className="mt-4">
                                <Link to="/contact-us" data-discover="true" data-aos="fade-left" data-aos-delay="100">
                                    <button className="btn btn-fix lazyloaded">Get
                                        in Touch<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                            <path id="Path_1487529" data-name="Path 1487529"
                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                        </svg>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="100">
                                <div >
                                    <h3 className="text-xl font-semibold">Optimum Outcome Focused</h3>
                                    <p className="text-sm font-normal">Our developers are focused to bring optimum outcomes through
                                        our competitive web and app development services. We create innovative IT Solutions that
                                        stand out of the crowd.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    <h3 className="text-xl font-semibold">Experienced Techies</h3>
                                    <p className="text-sm font-normal">Our experienced techies are the reason why we deliver the
                                        prominent IT services to clients across various industries. Every team member is 10+
                                        years experienced, mastered their domain and developed impeccable solutions.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="300">
                                <div>
                                    <h3 className="text-xl font-semibold">Cutting Edge Technologies</h3>
                                    <p className="text-sm font-normal">We are the leading web and mobile app development company
                                        that use aced technologies to build the software and apps. We are more attentive in
                                        building highly performing, secured, and robust solutions that cater to the needs of
                                        businesses.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="400">
                                <div >
                                    <h3 className="text-xl font-semibold">Cost-Effective &amp; Deadline Oriented</h3>
                                    <p className="text-sm font-normal">Our approach is to build the best software under competitive
                                        cost. Our company quotes affordable web &amp; app development costs with high quality
                                        maintenance. Along cost-efficiency, our agenda is to meet the defined deadline for
                                        project completion.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="500">
                                <div >
                                    <h3 className="text-xl font-semibold">Transparency with Clients</h3>
                                    <p className="text-sm font-normal">We prioritize transparency with clients. Whatever the status
                                        of development, everything is informed to the clients in real time. Most importantly,
                                        our customer support is available 24*7 for the clients to resolve their queries
                                        immediately.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up" data-aos-delay="600">
                                <div >
                                    <h3 className="text-xl font-semibold">Modern IT Services</h3>
                                    <p className="text-sm font-normal">We look towards building modern IT solutions that cater to
                                        every demand of concurrent market standards. The developers use the latest tech trends
                                        and innovative approaches to create futuristic software that fulfills the needs and
                                        engages the targeted audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChoose;
