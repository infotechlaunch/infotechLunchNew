import React from "react";
import { Link } from 'react-router-dom';
const WhyChoose: React.FC = () => {

    return (
        <div className="w-full bg-gradient-to-b from-pink-100 to-blue-100 py-16">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="lg:flex space-y-3 items-center justify-between gap-10">
                    <div>
                        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold" data-aos="fade-up">Why Choose Our Generative AI Software Development Company?
                        </h2>
                    </div>
                    <div>
                        <Link data-aos="fade-up" to="/contact-us" data-discover="true" >
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
                    <div data-aos="fade-up"
                        className="lg:bg-center lg:flex hidden justify-end items-end  bg-no-repeat bg-cover bg-left whychoose  px-6 py-8 rounded-lg">
                        <div className="relative z-[1]">
                            <h2 className="xl:text-2xl text-xl text-[#fff] font-semibold">Optimum Outcome Focused</h2>
                            <p className="text-base font-normal text-white">Our developers are focused to bring optimum outcomes
                                through our competitive web and app.</p>
                            <div className="mt-4"><a href="/contact-us"><button
                                className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 text-center cursor-pointer transition duration-300 flex items-center hover:bg-white hover:text-black ">Get
                                in Touch</button></a></div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up">
                                <div>
                                    <h3 className="text-xl font-semibold">Expertise in AI &amp; Machine Learning</h3>
                                    <p className="text-sm font-normal">At InfoTech Launch, we have a team of skilled data scientists and
                                        AI specialists with extensive knowledge in machine learning, deep learning, and AI technologies,
                                        ensuring the highest quality solutions for your business.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up">
                                <div>
                                    <h3 className="text-xl font-semibold">Custom AI Solutions Tailored to Your Needs</h3>
                                    <p className="text-sm font-normal">We develop bespoke AI solutions based on your specific business
                                        challenges, creating customized models and applications that provide measurable improvements in
                                        efficiency, scalability, and performance.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up">
                                <div>
                                    <h3 className="text-xl font-semibold">Cutting-Edge AI Models &amp; Tools</h3>
                                    <p className="text-sm font-normal">Using advanced technologies like GPT-4, DALL·E, and BERT, we
                                        build innovative AI models that address a wide range of use cases—from content generation to
                                        data analysis and automation solutions.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up">
                                <div>
                                    <h3 className="text-xl font-semibold">End-to-End AI Development Services</h3>
                                    <p className="text-sm font-normal">From initial concept development to AI model training, testing,
                                        and deployment, InfoTech Launch offers complete AI development services, ensuring smooth
                                        execution and ongoing support throughout the entire process.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up">
                                <div>
                                    <h3 className="text-xl font-semibold">Industry-Specific Expertise</h3>
                                    <p className="text-sm font-normal">We specialize in delivering AI solutions for various industries
                                        such as healthcare, finance, e-commerce, gaming, and education, understanding each industry's
                                        unique needs and tailoring our AI models accordingly.</p>
                                </div>
                            </div>
                            <div className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" data-aos="fade-up">
                                <div>
                                    <h3 className="text-xl font-semibold">Scalable, Secure, and Cost-Effective Solutions</h3>
                                    <p className="text-sm font-normal">We ensure that the AI solutions we create are scalable, secure,
                                        and optimized for cost-effectiveness, enabling your business to grow while maintaining the
                                        highest standards of data protection and efficiency.</p>
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
