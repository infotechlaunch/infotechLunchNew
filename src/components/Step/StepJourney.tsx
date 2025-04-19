import React from "react";
import './StepJourney.scss';



const StepJourney: React.FC = () => {

    return (
        <div className="w-full bg-orange py-10 md:py-16">
            <div className="container mx-auto px-6 px-6">
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-1 text-center lg:text-left">
                                <h3 className="text-1xl font-bold">Start Your Success Journey</h3>
                            <div className="easy_step-txt">
                                <div className="tag-lines mb-2 md:mb-4" data-aos="fade-right">
                                    <span className="text-lg font-semibold">Connect. Collaborate. Achieve.</span>
                                </div>
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-tight" data-aos="fade-right">
                                    Begin<br /> Your<br /> Journey<br /> in Just<br />
                                    <span className="text-blue-600 text-2xl md:text-3xl lg:text-4xl font-extrabold"> 3 </span>
                                     Simple <br /> Steps
                                </h2>
                              <div data-aos="fade-right" className="arrow-up-btm"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 ">
                                <div className="easy_step_box  duration-300" data-aos="fade-up" data-aos-delay="100">
                                    <div className="step-no mb-3 text-3xl md:text-4xl font-bold text-white  duration-300 group-hover:text-blue-600">
                                        01
                                    </div>
                                    <div className="easy_step_info text-center p-6 border border-gray-400 rounded-xl  duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-lg">
                                        <div className="icon-circle-image my-4">
                                            <span className="text-5xl text-white icon-Tell-Us-About-Your-Business3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                                <span className="path5"></span>
                                                <span className="path6"></span>
                                                <span className="path7"></span>
                                                <span className="path8"></span>
                                                <span className="path9"></span>
                                                <span className="path10"></span>
                                                <span className="path11"></span>
                                                <span className="path12"></span>
                                            </span>
                                        </div>
                                        <div className="text-lg font-semibold mb-3 text-orange">Share Your Vision</div>
                                        <p className="text-gray-700 group-hover:text-white">
                                        Tell us your goals — we’ll use them to craft a tailored plan for your success.
                                        </p>
                                    </div>
                                </div>
                                <div className="easy_step_box  duration-300 mt-[20px] lg:mt-[50px]" data-aos="fade-up" data-aos-delay="200">
                                    <div className="step-no mb-3 text-3xl md:text-4xl font-bold text-white  duration-300 group-hover:text-blue-600">
                                        02
                                    </div>
                                    <div className="easy_step_info text-center p-6 border border-gray-400 rounded-xl  duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-lg">
                                        <div className="icon-circle-image my-4">
                                            <span className="text-5xl display-4 text-white icon-Consult-with-Our-Experts">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="text-lg font-semibold mb-3 text-orange">Talk to Our Experts</div>
                                        <p className="text-gray-700 group-hover:text-white">
                                            Collaborate with our team to refine ideas and discover the best-fit solutions. 
                                        </p>
                                    </div>
                                </div>
                                <div className="easy_step_box  duration-300 mt-[20px] lg:mt-[100px]" data-aos="fade-up" data-aos-delay="300">
                                    <div className="step-no mb-3 text-3xl md:text-4xl font-bold text-white  duration-300 group-hover:text-blue-600">
                                        03
                                    </div>
                                    <div className="easy_step_info text-center p-6 border border-gray-400 rounded-xl  duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-lg">
                                    <div className="icon-circle-image my-4">
                                            <span className="text-5xl display-4 text-white icon-Launch-Your-Customized-Solution">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                                <span className="path5"></span>
                                                <span className="path6"></span>
                                                <span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="text-lg font-semibold mb-3 text-orange ">Launch & Grow</div>
                                        <p className="text-gray-700 group-hover:text-white">
                                            Get your custom solution live and start seeing real, measurable results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default StepJourney;
