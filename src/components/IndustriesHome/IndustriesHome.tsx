import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules

import travel from "../../assets/Images/home/Industries/travel-hospitality-industries-img.webp";
import sports from "../../assets/Images/home/Industries/sports-industries-img.webp";
import entertainment from "../../assets/Images/home/Industries/entertainment-industries-img.webp";
import social from "../../assets/Images/home/Industries/social-media-app-industries-img.webp";
import finance from "../../assets/Images/home/Industries/finance-industries-img.webp";
import dating from "../../assets/Images/home/Industries/dating-industries-img.webp";
import restaurant from "../../assets/Images/home/Industries/restaurant-industries-img.webp";
import ecommerce from "../../assets/Images/home/Industries/industries-ecommerce-img.webp";
import healthcare from "../../assets/Images/home/Industries/industries-healthcare-img.webp";
import blockchain from "../../assets/Images/home/Industries/industries-blockchain-img.webp";
import education from "../../assets/Images/home/Industries/industries-education-img.webp";
import industrie from "../../assets/Images/home/Industries/industries-industries-img.webp";
import transportat from "../../assets/Images/home/Industries/transportation-industries-img.webp";
import construction from "../../assets/Images/home/Industries/construction-industries-img.webp";
import game from "../../assets/Images/home/Industries/game-industries-img.webp";


const Industries = [
    { title: "Travel & Hospitality", UrlLink: "/travel-hospitality", sorttitle: "Enhancing customer journeys with intuitive, tech-driven travel and hospitality applications.", img: travel },
    { title: "Sports", UrlLink: "/Sports", sorttitle: "Redefining fan engagement with interactive, real-time sports apps and solutions.", img: sports },
    { title: "Entertainment", UrlLink: "/entertainment", sorttitle: "Innovating entertainment platforms with personalized, accessible digital experiences.", img: entertainment },
    { title: "Social Media App", UrlLink: "/industries-social-media-app", sorttitle: "Connecting users worldwide through innovative, feature-rich social media app solutions.", img: social },
    { title: "Finance", UrlLink: "/finance", sorttitle: "Delivering secure, user-friendly financial apps tailored to modern customer needs.", img: finance },
    { title: "Dating", UrlLink: "/dating", sorttitle: "Crafting intuitive dating platforms to foster meaningful connections seamlessly.", img: dating },
    { title: "Restaurant", UrlLink: "/industries-restaurant", sorttitle: "Enhancing dining experiences with user-focused, efficient restaurant management and ordering apps.", img: restaurant },
    { title: "E-Commerce", UrlLink: "/E-Commerce", sorttitle: "Revolutionizing online shopping with feature-rich, secure, and user-friendly mobile app solutions.", img: ecommerce },
    { title: "Healthcare", UrlLink: "/healthcare", sorttitle: "Empowering health services with innovative, patient-centric healthcare app development for better outcomes.", img: healthcare },
    { title: "Blockchain", UrlLink: "/blockchain", sorttitle: "Transforming industries with secure, transparent, and decentralized blockchain app development solutions.", img: blockchain },
    { title: "Education", UrlLink: "/education", sorttitle: "Enhancing learning experiences with interactive, engaging, and scalable education apps.", img: education },
    { title: "Logistics", UrlLink: "/logistics", sorttitle: "Streamlining logistics operations through advanced, real-time tracking and management solutions.", img: industrie },
    { title: "Transportation", UrlLink: "/transportation", sorttitle: "Simplifying travel with seamless, efficient transportation app innovations.", img: transportat },
    { title: "Construction", UrlLink: "/construction", sorttitle: "Driving project efficiency with modern construction management and planning applications.", img: construction },
    { title: "Game", UrlLink: "/game", sorttitle: "Creating immersive, engaging gaming experiences with cutting-edge app development technologies.", img: game },
];

const IndustriesHome: React.FC = () => {
    return (
        <div className="bg-gradient-blue-red lg:py-16 py-10">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 bg-white md:py-14 py-8 md:px-10 px-6 rounded-3xl">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold"  data-aos="fade-up">Industries We Serve</h2>
                        <p className="text-black py-3"  data-aos="fade-up">
                            We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.
                        </p>
                    </div>

                    {/* Swiper Navigation */}
                    <div className="md:flex hidden items-center gap-4 px-4">
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
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="slider-container mt-6">
                    <Swiper
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
                    >
                        {Industries.map((service, index) => (
                            <SwiperSlide key={index}>
                                <Link to={service.UrlLink} className="block">
                                    <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[300px] hover:shadow-lg transition-shadow">
                                        <img  data-aos="fade-up" alt={service.title} loading="lazy" className="w-full" src={service.img} />
                                        <div>
                                            <h3 data-aos="fade-up" className="text-[#212121] mb-2 text-lg font-semibold">{service.title}</h3>
                                            <p data-aos="fade-up" className="text-sm">{service.sorttitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default IndustriesHome;
