import React, { useState } from "react";
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "../pages/TawkChat";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import client from "../assets/Images/client-testimonials-hero-img.webp";
import AOSProvider from "../components/AOSProvider";
import user from "../assets/Images/icon/default.png";
import rafihassan from "../assets/Images/about/testimonial/rafi-hassan.png";
import rafihassanvideo from "../assets/Images/about/testimonial/rafi-hassan-video.mp4";
import prasanna from "../assets/Images/about/testimonial/prasanna.png";
import prasannavideo from "../assets/Images/about/testimonial/prasanna-video.mp4";
import nishal from "../assets/Images/about/testimonial/nishal-sethi.png";
import nishalvideo from "../assets/Images/about/testimonial/nishal-sethi-video.mp4";
// import testivideo2 from "../assets/Images/about/testimonials/sample-3.mp4";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules"; 

const testimonials = [
    {
        id: 1,
        name: "Rafi Hassan",
        role: "Food Truck Owner",
        image: user,
        bgimage: rafihassan,
        videoUrl: rafihassanvideo,
        review:
            "Hello, my name is Rafi Hassan from Habibi's Deli. We have partners with dishefs, they help us so much to get everything easy, everything simple. Running a food truck is always easier with them. Make sure you're in the kitchen for me.",
    },
    {
        id: 2,
        name: "Prasanna",
        role: "Pineville Kitchen",
        image: user,
        bgimage: prasanna,
        videoUrl: prasannavideo,
        review:
            "Partnering with Dishefs has been a game-changer for us. They bring in pre-qualified, background-checked leads, handle contracts, assist with inspections and permits, and even manage recurring payments—it's like being on cruise control! As kitchen owners, we know this business is tough, but Dishefs truly makes it easier. If you're an approved kitchen owner, don't leave money on the table. We highly recommend Dishefs!"
    },
    {
        id: 3,
        name: "Nishal Sethi",
        role: "Bombay grill , resturant owner",
        image: user,
        bgimage: nishal,
        videoUrl: nishalvideo,
        review:
            "It's like an Airbnb for caterers and bakers, where we set them up in mom-and-pop restaurants during off-hours. We aim to expand to hotels and churches to support both sides. Simply put, if you're not trying this, you're losing money on unused tables and giving away earnings as commissions to food delivery companies-earnings you could keep entirely. Just try it, you won't regret it."
    },
    // {
    //     id: 4,
    //     name: "Michael Johnson",
    //     role: "CEO, FinTech Solutions",
    //     image: user,
    //     bgimage: rafihassan,
    //     review:
    //         "The best development team I’ve worked with! They understood our complex requirements and implemented them perfectly. The backend integrations, API development, and security measures were handled professionally. Their problem-solving skills were outstanding, and they always provided innovative solutions. Looking forward to future projects!"
    // },
    // {
    //     id: 5,
    //     name: "Sarah Lee ",
    //     role: "Marketing Director, CreativeWorks",
    //     image: user,
    //     bgimage: rafihassan,
    //     review:
    //         "Exceptional service! The team not only met our requirements but also provided valuable suggestions that enhanced our platform’s usability. They focused on user engagement, interactive design, and performance optimization, which significantly improved our customer retention. A pleasure to work with such a skilled and passionate team!"
    // },
];
const ClientTestimonials: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="overflow-hidden">
                    <div className="bg-gradient-blue-red">
                        <section className=" ">
                            <div className="flex flex-col lg:flex-row  lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                                <div className="w-full lg:py-16 py-10">
                                    <div className="space-y-4">
                                        <div className="mt-10">
                                            <h1 data-aos="fade-right"
                                                className="text-[#fff] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                                                Client Testimonials</h1>

                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-sm font-light text-[#fff] lg:text-base mt-2 lg:text-start text-center">
                                                Empowering Innovators to Shape the Future of IT.</p>

                                        </div>
                                        <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal"></ul>
                                    </div>
                                </div>
                                <div className="w-full lg:flex justify-end items-end " data-aos="fade-left">
                                    <img src={client} alt="Client Testimonials" />
                                </div>
                            </div>
                        </section>
                    </div>


                </div>
                <section className="w-full lg:py-16 py-10 bg-white">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="space-y-4 ">
                            <div className="space-y-4 text-center">
                                <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#212121] font-bold"> Hear it from Our clients</h2>
                                {/* <p data-aos="fade-right" data-aos-delay="100" className="text-lg text-black text-center">Explore expert opinions, industry trends, and
                                    500+ Reviews Of Delighted Clients with <b> 4.5 Star</b> Rating</p> */}
                            </div>




                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="flex flex-wrap bg-[#F3F4F6] p-6 rounded-lg md:space-x-6 relative">
                                        {/* Client Image & Play Button */}
                                        <div className="relative w-full md:w-[40%] flex flex-col items-center">
                                            <div className="w-full">
                                                <img
                                                    src={testimonial.bgimage}
                                                    className="rounded-lg w-full h-auto md:h-[300px] object-cover"
                                                    alt={testimonial.name}
                                                />
                                            </div>

                                            <button className="play-btn bg-[#f13c3c]/50 bg-opacity-70 hover:bg-[#f13c3c] p-4 rounded-full absolute bottom-5 right-5 flex items-center justify-center"
                                                onClick={() => setActiveVideo(testimonial.videoUrl)}>
                                                <svg width="30" height="30" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <path d="M0 0h54v54H0z" />
                                                        <path d="M51.357 30.682 12.925 52.958C10.292 54.484 7 52.576 7 49.523V4.972C7 1.919 10.292.01 12.925 1.537l38.432 22.276c2.633 1.526 2.633 5.342 0 6.869z" fill="#000" fill-rule="nonzero" />
                                                    </g>
                                                </svg>

                                            </button>

                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="flex-1 mt-5 md:mt-0">
                                            <p className="text-[#212121] text-sm font-medium text-start">{testimonial.review}</p>
                                            <hr className="mt-4" />
                                            <div className="mt-4 md:mt-4">
                                                <div className="flex items-center">
                                                   
                                                    <div className="mr-3">
                                                        <p className="font-semibold text-start md:text-lg text-sm">{testimonial.name}</p>
                                                        <p className="font-light text-start text-sm">{testimonial.role}</p>
                                                    </div>
                                                    {/* <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} /> */}
                                                </div>
                                                <div>
                                                    <div className="flex space-x-1 text-yellow-500 mt-4">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                                </svg> 
                                                        ))}
                                                    </div>
                                                    {/* <p className="text-base text-[#212121]">5 Stars Ratings</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Video Modal */}
                                {activeVideo && (
                                    <div className="fixed inset-0 z-[9] flex items-center justify-center bg-black bg-opacity-80 p-4 testimonial-slider">
                                        <div className="bg-white p-4 rounded-lg shadow-lg video-area relative">
                                            {/* Close Button */}
                                            <button
                                                onClick={() => setActiveVideo(null)}
                                                className="absolute top-2 right-2 bg-red-500 text-white text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300"
                                            >
                                                &times;
                                            </button>

                                            {/* Embedded Video */}
                                            <iframe
                                                width="800px"
                                                height="500px"
                                                src={activeVideo}
                                                title="Testimonial Video"
                                                frameBorder="0"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="bg-gradient-blue-red lg:py-16 py-10">
                    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 bg-white md:py-14 py-8 md:px-10 px-6 rounded-3xl">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold" data-aos="fade-up">Testimonials</h2>
                            </div>
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

                        <div className="slider-container testimonial-slider mt-6">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: ".swiper-button-next-custom",
                                    prevEl: ".swiper-button-prev-custom",
                                }}
                                pagination={false}
                                modules={[Navigation, Pagination]}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                    900: { slidesPerView: 2 },
                                    1024: { slidesPerView: 2 },
                                }}
                            >

                                <SwiperSlide>
                                <iframe
                                                width="100%"
                                                height="320px"
                                                src={testivideo1}
                                                title="Testimonial Video"
                                            ></iframe> 
                                         </SwiperSlide>
                                            <SwiperSlide>
                                            <iframe
                                                width="100%"
                                                height="320px"
                                                src={testivideo2}
                                                title="Testimonial Video"
                                            ></iframe> 
                                    </SwiperSlide>
                                    
                                <SwiperSlide>
                                <iframe
                                                width="100%"
                                                height="320px"
                                                src={testivideo2}
                                                title="Testimonial Video"
                                            ></iframe> 
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div> */}



                <ContactForm />
                <Footer />
                <TawkChat />
            </AOSProvider>
        </>
    );
};

export default ClientTestimonials;
