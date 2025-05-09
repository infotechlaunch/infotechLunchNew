import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import laundry from "../../assets/Images/services/mobiledevelopment/industries/laundry.webp";
import enterprise from "../../assets/Images/services/mobiledevelopment/industries/enterprise.webp";
import social from "../../assets/Images/services/mobiledevelopment/industries/socialnetworking.webp";
import banking from "../../assets/Images/services/mobiledevelopment/industries/banking.webp";
import food from "../../assets/Images/services/mobiledevelopment/industries/food.webp";
import ecommerce from "../../assets/Images/services/mobiledevelopment/industries/ecommerce.webp";
import healthcare from "../../assets/Images/services/mobiledevelopment/industries/healthcare.webp";
import blockchain from "../../assets/Images/services/mobiledevelopment/industries/blockchain.webp";
import education from "../../assets/Images/services/mobiledevelopment/industries/education.webp";
import realstate from "../../assets/Images/services/mobiledevelopment/industries//realstate.webp";
import ondemand from "../../assets/Images/services/mobiledevelopment/industries/ondemand.webp";
import IOT from "../../assets/Images/services/mobiledevelopment/industries/IOT.webp";
import pickupdelivery from "../../assets/Images/services/mobiledevelopment/industries/pickanddelivery.webp";
import manufacturing from "../../assets/Images/services/mobiledevelopment/industries/manufacturing.webp";

const Industries = [
    { title: "On Demand", UrlLink: "#", img: ondemand },
    { title: "Ecommerce", UrlLink: "/E-Commerce", img: ecommerce },
    { title: "Food", UrlLink: "/industries-restaurant", img: food },
    { title: "Pickup & Delivery", UrlLink: "/pickup-delivery", img: pickupdelivery },
    { title: "Blockchain", UrlLink: "#", img: blockchain },
    { title: "IOT", UrlLink: "#",  img: IOT },
    { title: "Transportation", UrlLink: "/education", img: education },
    { title: "Healthcare", UrlLink: "/health-care", img: healthcare },
    { title: "Banking", UrlLink: "#", img: banking },
    { title: "Enterprise", UrlLink: "#",  img: enterprise },
    { title: "Laundry", UrlLink: "#",  img: laundry },
    { title: "Social Networking", UrlLink: "#", img: social },
    { title: "Real Estate", UrlLink: "#",  img: realstate },
    { title: "Manufacturing", UrlLink: "#", img: manufacturing },
    { title: "Education", UrlLink: "/education", img: education }
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
                                    <div className="border border-[#E8E8E8] rounded-lg p-3 space-y-4 min-h-[200px] hover:shadow-lg transition-shadow">
                                        <img  data-aos="fade-up" alt={service.title} loading="lazy" className="w-full rounded-lg" src={service.img} />
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
