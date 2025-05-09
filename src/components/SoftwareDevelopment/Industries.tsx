import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

import banking from "../../assets/Images/services/softwaredevelopment/industries/1.webp";
import healthcare from "../../assets/Images/services/softwaredevelopment/industries/2.webp";
import retail from "../../assets/Images/services/softwaredevelopment/industries/3.webp";
import insurance from "../../assets/Images/services/softwaredevelopment/industries/4.webp";
import aviation from "../../assets/Images/services/softwaredevelopment/industries/5.webp";
import telecom from "../../assets/Images/services/softwaredevelopment/industries/6.webp";
import transportat from "../../assets/Images/services/softwaredevelopment/industries/7.webp";
import fitness from "../../assets/Images/services/softwaredevelopment/industries/8.webp";
import realstate from "../../assets/Images/services/softwaredevelopment/industries/9.webp";

const Industries = [
    { title: "Banking", UrlLink: "#", img: banking },
    { title: "Healthcare", UrlLink: "/healthcare", img: healthcare },    
    { title: "Retail", UrlLink: "/entertainment", img: retail },
    { title: "Insurance", UrlLink: "/logistics", img: insurance },
    { title: "Aviation", UrlLink: "/aviation", img: aviation },
    { title: "Telecommunication", UrlLink: "/telecommunication", img: telecom },
    { title: "Logistics & Transportation", UrlLink: "#",  img: transportat },
    { title: "Fitness & Sports", UrlLink: "/fitness",  img: fitness },
    { title: "Real State", UrlLink: "/realstate", img: realstate },
];

const IndustriesHome: React.FC = () => {
    return (
        <div className="bg-gradient-blue-red lg:py-16 py-10">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 bg-white md:py-14 py-8 md:px-10 px-6 rounded-3xl">
            <div className="text-center">
                <div className="space-y-2">
                        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold"  data-aos="fade-up">Redefining Industry Standards</h2>
                        <p className="text-black py-3 text-base"  data-aos="fade-up">
                        With Our Proven Software Development Expertise</p>
                    </div>

                    {/* Swiper Navigation */}
                    {/* <div className="md:flex hidden items-center gap-4 px-4">
                        <button title="Previous" type="button" aria-label="Previous" className="swiper-button-prev-custom group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border duration-200 bg-white rounded-full hover:bg-[#f13c3c] hover:border-[#f13c3c] cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="35" width="35">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </button>
                        <button title="Next" type="button" aria-label="Next" className="swiper-button-next-custom group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border duration-200 bg-white rounded-full hover:bg-[#f13c3c] hover:border-[#f13c3c] cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="35" width="35">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                            </svg>
                        </button>
                    </div> */}
                </div>

                {/* Swiper Slider */}
                <div className="grid pt-8 grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    {/* <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        pagination={false}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            900: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    > */}
                        {Industries.map((service) => (
                            
                                <Link to={service.UrlLink} className="block">
                                    <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[200px] hover:shadow-lg transition-shadow">
                                        <img  data-aos="fade-up" alt={service.title} loading="lazy" className="w-full  rounded-lg " src={service.img} />
                                        <div>
                                            <h3 data-aos="fade-up" className="text-[#212121] mb-2 text-lg font-semibold">{service.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                        ))}
                    {/* </Swiper> */}
                </div>
            </div>
        </div>
    );
};

export default IndustriesHome;
