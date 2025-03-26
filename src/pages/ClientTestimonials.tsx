import React, { useState } from "react";
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "../pages/TawkChat";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import client from "../assets/Images/client-testimonials-hero-img.webp";
import AOSProvider from "../components/AOSProvider";
import user from "../assets/Images/icon/default.png";
import ayush from "../assets/Images/ayush.png";

const testimonials = [
    {
        id: 1,
        name: "Ayush Khatkar",
        role: "Founder & CEO",
        image: user,
        bgimage: ayush,
        videoUrl: "https://www.youtube.com/embed/VjQoAwl6cGU",
        review:
            "Fantastic service! The team delivered a custom notes-like web app that exceeded our expectations. Their attention to detail, responsiveness, and technical expertise were evident throughout the project. Every feature was implemented flawlessly, ensuring smooth performance and an intuitive user experience. ",
    },
    {
        id: 2,
        name: "John Doe",
        role: "CTO, TechCorp",
        image: user,
        bgimage: ayush,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        review:
            "Incredible team! Their dedication and smart solutions made our project a success. From the initial consultation to the final deployment, they maintained clear communication and provided valuable insights. They took our ideas and transformed them into a high-performing, user-friendly application."
    },
    {
        id: 3,
        name: "Jane Smith",
        role: "Product Manager",
        image: user,
        bgimage: ayush,
        videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
        review:
            "The best development team I’ve worked with! They understood our complex requirements and implemented them perfectly. The backend integrations, API development, and security measures were handled professionally. Their problem-solving skills were outstanding, and they always provided innovative solutions. Looking forward to future projects!"
    },
    {
        id: 4,
        name: "Michael Johnson",
        role: "CEO, FinTech Solutions",
        image: user,
        bgimage: ayush,
        videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
        review:
            "The best development team I’ve worked with! They understood our complex requirements and implemented them perfectly. The backend integrations, API development, and security measures were handled professionally. Their problem-solving skills were outstanding, and they always provided innovative solutions. Looking forward to future projects!"
    },
    {
        id: 5,
        name: "Sarah Lee ",
        role: "Marketing Director, CreativeWorks",
        image: user,
        bgimage: ayush,
        videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
        review:
            "Exceptional service! The team not only met our requirements but also provided valuable suggestions that enhanced our platform’s usability. They focused on user engagement, interactive design, and performance optimization, which significantly improved our customer retention. A pleasure to work with such a skilled and passionate team!"
    },
];
const ClientTestimonials: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="overflow-hidden">
                    <div className="bg-gradient-to-r from-[#f13c3c]/40 via-[#FFFFFF] to-[#f13c3c]/40">
                        <section className=" ">
                            <div className="flex flex-col lg:flex-row  lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                                <div className="w-full lg:py-16 py-10">
                                    <div className="space-y-4">
                                        <div className="mt-10">
                                            <h1 data-aos="fade-right"
                                                className="text-[#212121] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                                                Client Testimonials</h1>
                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-2xl font-bold text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                            </p>
                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
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
                                <p data-aos="fade-right" data-aos-delay="100" className="text-lg text-black text-center">Explore expert opinions, industry trends, and
                                    500+ Reviews Of Delighted Clients with <b> 4.5 Star</b> Rating</p>
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
                                            <p className="text-[#212121] text-lg font-medium text-start">{testimonial.review}</p>
                                            <div className="flex justify-between items-center mt-3 md:mt-0">
                                                <div className="flex items-center">
                                                    <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                                                    <div className="ml-3">
                                                        <p className="font-semibold text-start md:text-lg text-sm">{testimonial.name}</p>
                                                        <p className="font-light text-start text-sm">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex space-x-1 text-yellow-500">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <p className="text-base text-[#212121]">5 Stars Ratings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Video Modal */}
                                {activeVideo && (
                                    <div className="fixed inset-0 z-[9] flex items-center justify-center bg-black bg-opacity-80 p-4">
                                        <div className="bg-white p-4 rounded-lg shadow-lg w-[964px]  w-full relative">
                                            {/* Close Button */}
                                            <button
                                                onClick={() => setActiveVideo(null)}
                                                className="absolute top-2 right-2 bg-red-500 text-white text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300"
                                            >
                                                &times;
                                            </button>

                                            {/* Embedded Video */}
                                            <iframe
                                                width="100%"
                                                height="100%"
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



                <ContactForm />
                <Footer />
                <TawkChat />
            </AOSProvider>
        </>
    );
};

export default ClientTestimonials;
