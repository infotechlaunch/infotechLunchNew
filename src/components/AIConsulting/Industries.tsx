import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules"; // Import modules

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
// import industrie from "../../assets/Images/home/Industries/industries-industries-img.webp";
import transportat from "../../assets/Images/home/Industries/transportation-industries-img.webp";
import construction from "../../assets/Images/home/Industries/construction-industries-img.webp";
import automotive from "../../assets/Images/home/Industries/automotive.png";
import fitness from "../../assets/Images/home/Industries/Fitness.webp";
import insurance from "../../assets/Images/home/Industries/insurance.webp";
// import game from "../../assets/Images/game-industries-img.webp";
import agriculture from "../../assets/Images/home/Industries/agriculture.webp";
import realstate from "../../assets/Images/home/Industries/real-state.webp";


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
    { title: "Insurance", UrlLink: "/logistics", img: insurance},
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
                        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold"  data-aos="fade-up">AI Innovation for Every Industry:</h2>
                        <p className="text-black py-3"  data-aos="fade-up">
                        Tailored AI consulting that turns your industry's challenges into opportunities for breakthrough growth.
                        </p>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="grid pt-8 grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  
                        {Industries.map((service) => (
                          
                                <Link to={service.UrlLink} className="block">
                                    <div className="feature-card-2 border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[200px] hover:shadow-lg transition-shadow">
                                        <img  data-aos="fade-up" alt={service.title} loading="lazy" className="w-full feature-img-2" src={service.img} />
                                        <div>
                                            <h3 data-aos="fade-up" className="text-[#212121] mb-2 text-lg font-semibold">{service.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                           
                        ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesHome;
