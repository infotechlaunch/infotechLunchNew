import React from 'react';
import { Link } from 'react-router-dom';
const Cloud: React.FC = () => {

    return (
        <div className="connect-with-us-wrapper w-full bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="w-full mx-auto">
                    <div className="flex">
                        <div className="w-full flex items-end justify-start">
                            <div className="p-6 bg-[#f13c3c]/60 shadow-lg max-w-[500px] rounded-[36px]" data-aos="fade-right" data-aos-delay="100">
                                <div className="relative">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl  font-bold mb-2 text-white">
                                        Ready to Take Your Business to Cloud 
                                        <span className="text-[#f13c3c]  text-3xl md:text-4xl lg:text-5xl"> 9 </span> ?
                                    </h3>
                                    <div className="connect-with-us-arrow"></div>
                                    <p className="text-sm pl-6 text-white">
                                        Unlock your business's full potential with our expert-driven
                                        solutions for growth, innovation, and success today.
                                    </p>
                                    <div className="flex mt-3 w-full">
                                        <Link to="/contact-us">
                                            <button className="btn btn-fix lazyloaded ">Talk to Our Expert
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cloud;
