import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import HeaderNew from "../../components/Header/HeaderNew";
import TawkChat from "./../../pages/TawkChat";
import Footer from "../../components/Footer/Footer";
import hero from "../../assets/Images/hero-img.webp"
import Axios from "axios";

const BlogDeatils: React.FC = () => {
    interface Blog {
        id: number;
        title: string;
        image: string;
        full_content: string;
        
    }
    const { id } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    
    useEffect(() => {
        Axios.get(`https://dishefs.com/infotech_admin/api/blog-details/${id}`)
        .then((response) => {
            // console.log('response data status =======>>>>', response.data.status);
            // console.log('response data data =======>>>>', response.data.data);
            if(response.data.status === true) {
                setBlog(response.data.data);
            }
        });
    }, []);

    return (
        <>
            <HeaderNew />
            <section className="bg-gradient-to-r from-[#f13c3c]/40 via-[#FFFFFF] to-[#f13c3c]/40">
                <div className="flex items-end justify-between  py-0  relative xl:container 2xl:px-0 md:px-6 px-4 w-full mx-auto flex lg:flex-row flex-col lg:gap-8 gap-0">
                    <div className="w-full space-y-4 lg:py-16 py-10 flex flex-col lg:items-start items-center lg:text-left text-center">
                        <h1 className="text-4xl font-semibold text-black leading-[3rem]">
                            {/* AI-Powered Parking Assistance App Development: Cost & Features */}
                            {blog?.title}
                        </h1>
                        <div className="mt-2">
                            <button className="btn btn-fix lazyloaded">Explorer blog
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"><path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#fff">
                                </path>
                                </svg>
                            </button>

                        </div>
                    </div>
                    <div className="flex flex-col justify-end w-full">
                        {/* <img decoding="async" className="wp-image-5662" width="1002px" height="304px" src={hero} alt="hero section" /> */}
                        <img decoding="async" className="wp-image-5662" width="1002px" height="304px" src={blog?.image ? blog.image : hero} alt="hero section" />
                    </div>

                </div>
            </section>
            
            <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4 mx-auto lg:grid-cols-2 md:grid-cols-2  grid-cols-1 xl:gap-14 cursor-pointer mt-8">
                
                {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">

                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                    <nav>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Importance of Choosing the Right Mobile App Development Company In Jaipur, India:</strong></li>
                            <li>Overview of Mobile App Development in Jaipur</li>
                            <li>Criteria For Selection</li>
                            <li>Top 10 Mobile App Development Companies In Jaipur</li>
                            <li>InfoTech Launch Private Limited</li>
                            <li>Orion Info Solution</li>
                            <li>Metablock Technologies</li>
                            <li>Owebest Technologies</li>
                            <li>Dev Tecnosys</li>
                            <li>Dian Apps</li>
                            <li>Metrix Solutions</li>
                            <li>JPLOFT Solutions</li>
                            <li>Konstant Infosolutions</li>
                            <li>Aladinn Digital Solutions</li>
                            <li>Comparison and Analysis</li>
                            <li>Benefits Of Hiring The Best Mobile App Development Company In Jaipur</li>
                            <li>Cost Of Hiring A Mobile App Development Company In Jaipur</li>
                            <li>Why Choose InfoTech Launch For Mobile App Development?</li>
                            <li>Conclusion</li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Mobile app development is the process of creating software for smartphones, tablets, and digital assistants,
                        which is generally for Android and iOS operating systems. Mobile app development market statistics were
                        <span className="font-bold">$66.5 billion</span> in 2021, expected to reach <span className="font-bold">$366.93 billion</span>
                        by 2030, with a CAGR of <span className="text-blue-500">23.80%</span> from 2022 to 2030.
                    </p>
                    <p className="mt-4 text-gray-700">
                        If you are looking for top mobile app development companies in Pink City, Jaipur, this blog will help you choose your app development company.
                        Come and explore this blog with us.
                    </p>


                    <h4 className="mt-6 text-lg font-semibold text-gray-800">Top 10 Mobile App Development Companies in Jaipur</h4>
                    <ul className="list-decimal pl-6 space-y-2 mt-3 text-gray-700">
                        <li><span className="font-bold text-blue-600">InfoTech Launch</span> - Best mobile app development company in Jaipur with an experienced team.</li>
                        <li><span className="font-bold">Orion Info Solutions</span> - Known for its innovative and user-friendly mobile apps.</li>
                        <li><span className="font-bold">Metablock Technologies</span> - Engaging and user-friendly mobile apps.</li>
                        <li><span className="font-bold">Owebest Technologies</span> - Provides customized app development services.</li>
                        <li><span className="font-bold">Dev Technosys</span> - Specializes in both iOS and Android app development.</li>
                        <li><span className="font-bold">Dian Apps</span> - Offers high-quality, customized mobile apps.</li>
                        <li><span className="font-bold">Metrix Solutions</span> - Combines creativity with technical expertise.</li>
                        <li><span className="font-bold">JPLOFT Solutions</span> - Provides cost-effective and scalable mobile apps.</li>
                        <li><span className="font-bold">Konstant Infosolutions</span> - Delivers end-to-end solutions for businesses.</li>
                        <li><span className="font-bold">Aladinn Digital Solutions</span> - Experienced developers team providing global solutions.</li>
                    </ul>
                </div> */}

                <div dangerouslySetInnerHTML={{ __html: blog?.full_content || "" }} />
            </div>
            </div>
            <Footer />
            <TawkChat />
        </>
    );
};

export default BlogDeatils;
