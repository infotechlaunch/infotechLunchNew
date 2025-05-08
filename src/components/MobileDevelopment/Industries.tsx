import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

import travel from "../../assets/Images/home/Industries/travel-hospitality-industries-img.webp";
import sports from "../../assets/Images/home/Industries/sports-industries-img.webp";
import entertainment from "../../assets/Images/home/Industries/entertainment-industries-img.webp";
import social from "../../assets/Images/home/Industries/social-media-app-industries-img.webp";
import finance from "../../assets/Images/home/Industries/finance-industries-img.webp";
// import dating from "../../assets/Images/dating-industries-img.webp";
import restaurant from "../../assets/Images/home/Industries/restaurant-industries-img.webp";
import ecommerce from "../../assets/Images/home/Industries/industries-ecommerce-img.webp";
import healthcare from "../../assets/Images/home/Industries/industries-healthcare-img.webp";
// import blockchain from "../../assets/Images/industries-blockchain-img.webp";
import education from "../../assets/Images/home/Industries/industries-education-img.webp";
import transportat from "../../assets/Images/home/Industries/transportation-industries-img.webp";
import construction from "../../assets/Images/home/Industries/construction-industries-img.webp";
// import game from "../../assets/Images/game-industries-img.webp";
import fitness from "../../assets/Images/home/Industries/Fitness.webp";
import insurance from "../../assets/Images/home/Industries/insurance.webp";
import agriculture from "../../assets/Images/home/Industries/agriculture.webp";
import realstate from "../../assets/Images/home/Industries/real-state.webp";
import automotive from "../../assets/Images/home/Industries/automotive.png";

const Industries = [
    { title: "Healthcare", UrlLink: "/healthcare", img: healthcare },
    { title: "Finance & Banking", UrlLink: "/finance", img: finance },
    { title: "Retail & ECommerce", UrlLink: "/entertainment", img: ecommerce },
    { title: "Manufacturing", UrlLink: "#", img: construction },
    { title: "Autmotive", UrlLink: "#", img: automotive },
    { title: "Logistics & Supply Chain", UrlLink: "#",  img: transportat },
    { title: "Education", UrlLink: "/education", img: education },
    { title: "Agriculture", UrlLink: "/E-Commerce", img: agriculture },
    { title: "Real State", UrlLink: "/realstate", img: realstate },
    { title: "Entertainment", UrlLink: "/entertainment",  img: entertainment },
    { title: "Travel & Hospitality", UrlLink: "#",  img: travel },
    { title: "Insurance", UrlLink: "/logistics", img: insurance },
    { title: "Fitness", UrlLink: "/fitness",  img: fitness },
    { title: "Social Networking", UrlLink: "/industries-social-media-app", img: social },
    { title: "Food & Restaurant", UrlLink: "/industries-restaurant", img: restaurant },
    { title: "Sports", UrlLink: "/sports", img: sports },
];

const IndustriesHome: React.FC = () => {
    return (
        <div className="bg-gradient-blue-red lg:py-16 py-10">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 bg-white md:py-14 py-8 md:px-10 px-6 rounded-3xl">
            <div className="text-center">
                <div className="space-y-2">
                        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold"  data-aos="fade-up">Revolutionizing Industries with Top-Tier Mobile App Development Services
                        </h2>
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
                <div className="grid pt-8 grid-cols-1 md:grid-cols-4 gap-4 text-center">
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
                                        <img  data-aos="fade-up" alt={service.title} loading="lazy" className="w-full" src={service.img} />
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
