import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules"; // Import modules
import healthcare from "../../assets/Images/aiDevelopment/aiconsulting/industries/healthcare.webp";
import finance from "../../assets/Images/aiDevelopment/aiconsulting/industries/finance-and-banking.webp";
import ecommerce from "../../assets/Images/aiDevelopment/aiconsulting/industries/retail-and-ecommerce.webp";
import manufaturing from "../../assets/Images/aiDevelopment/aiconsulting/industries/manufacturing.webp";
import automotive from "../../assets/Images/aiDevelopment/aiconsulting/industries/automotive.webp";
import logistics from "../../assets/Images/aiDevelopment/aiconsulting/industries/logistic-and-supplychain.webp";
import education from "../../assets/Images/aiDevelopment/aiconsulting/industries/Education.webp";
import agriculture from "../../assets/Images/aiDevelopment/aiconsulting/industries/Agriculture.webp";
import realstate from "../../assets/Images/aiDevelopment/aiconsulting/industries/real-state.webp";
import entertainment from "../../assets/Images/aiDevelopment/aiconsulting/industries/Entertainment.webp";
import travel from "../../assets/Images/aiDevelopment/aiconsulting/industries/Travel-and-hospitality.webp";
import insurance from "../../assets/Images/aiDevelopment/aiconsulting/industries/insurance.webp";
import fitness from "../../assets/Images/aiDevelopment/aiconsulting/industries/fitness.webp";
import social from "../../assets/Images/aiDevelopment/aiconsulting/industries/social-networking.webp";
import restaurant from "../../assets/Images/aiDevelopment/aiconsulting/industries/food-and-restaurant.webp"
import sports from "../../assets/Images/aiDevelopment/aiconsulting/industries/sports.webp";

const Industries = [
    { title: "Healthcare", UrlLink: "/healthcare", img: healthcare },
    { title: "Finance & Banking", UrlLink: "/finance", img: finance },
    { title: "Retail & ECommerce", UrlLink: "/entertainment", img: ecommerce },
    { title: "Manufacturing", UrlLink: "#", img: manufaturing },
    { title: "Autmotive", UrlLink: "#", img: automotive },
    { title: "Logistics & Supply Chain", UrlLink: "#",  img: logistics },
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
                                        <img  data-aos="fade-up" alt={service.title} loading="lazy" className="w-full feature-img-2 rounded-lg" src={service.img} />
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
