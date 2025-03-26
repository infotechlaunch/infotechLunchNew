import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import Services from "../components/AIDevelopment/Services";
import HeaderNew from "../components/Header/HeaderNew";
import WorkingProcess from "../components/AIDevelopment/WorkingProcess";
import WhyChoose from "../components/AIDevelopment/WhyChoose";
import Partners from "../components/Partners/Partners";
import OurPortfolioHome from "../components/AIDevelopment/OurPortfolioHome";
import IndustriesHome from "../components/IndustriesHome/IndustriesHome";
import Blog from "../components/Blog/Blog";
import TawkChat from "./TawkChat";
import GetStarted from "../components/GetStarted/GetStarted";
import FAQ from "../components/Faq/Faq";
import ai from '../assets/Images/ai.png';
import AOSProvider from "../components/AOSProvider";
const achievements = [
    {
        id: 1,
        number: "70+",
        text: "Successful AI Chatbot Deployments",
        icon: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-3136474/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2024/06/0101d8f48c5f96dc43db26b76467b1b4.ai-achievement-icn_1.webp",
        image: ai,
    },
    {
        id: 2,
        number: "40+",
        text: "NLP and Conversational AI Experts",
        icon: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-3136474/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2024/06/618f66d287e47fd358ec5df6b768d6bf.ai-achievement-icn_2.webp",
        image: ai,
    },
    {
        id: 3,
        number: "15+",
        text: "Industries Revolutionized with AI Chatbots",
        icon: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-3136474/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2024/07/0fcb7dac7ae62aa95e3247afcc148a24.consulting-ai-achievement-icn_33.webp",
        image: ai,
    },
    {
        id: 4,
        number: "92%",
        text: "Accuracy in Intent Recognition Achieved",
        icon: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-3136474/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2024/06/ab4310884b11c5ee20a899b2a25f0b73.ai-achievement-icn_4.webp",
        image: ai,
    },
];
const AIDevelopment: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
   
    return (

        <>
         <AOSProvider>
            <HeaderNew />
            <div className="lg:bg-center relative bannerhome bg-ai bg-no-repeat bg-cover bg-left">
                <div
                    className="flex flex-col relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                    <div className="w-full 2xl:py-20 xl:py-16 py-10">
                        <div className="space-y-4">
                            <div>
                                <h1 data-aos="fade-right" className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  ">
                                    Enterprise to SEM AI ML Mobile App Development Services In India</h1>
                                <p data-aos="fade-right" className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2">Next-Gen AI Solutions
                                    for Next-Level Success.</p>
                                <p data-aos="fade-right" className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2">InfoTech Launch delivers
                                    cutting-edge custom AI ML Mobile App development services in Jaipur, India to meet your
                                    business's requirements.
                                     {/* With the best custom AI ML software development service solutions
                                    to machine learning models and AI-powered mobile apps, our best AI ML developers in India
                                    help businesses unlock innovation, streamline operations, and drive growth of all over the
                                    world. Whether you're looking to automate processes, enhance decision-making, or create
                                    intelligent mobile applications, Software, and other solutions to automate your work
                                    process. Our expert AI ML Developers team of AI specialists is here to turn your vision into
                                    reality. Explore our AI development solutions or get a free consultation today to see how we
                                    can transform your business with the power of artificial intelligence. */}
                                    </p>
                                <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2"></p>
                            </div>
                            <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal"></ul>
                            <p className="w-full mx-auto text-sm font-light text-white lg:text-base"></p>
                        </div>
                        <div className="md:py-6" data-aos="fade-right">
                            <Link to="/contact-us" className="btn btn-fix lazyloaded">Talk With Expert
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                    <path id="Path_1487529" data-name="Path 1487529"
                                        d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                        transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:flex justify-end items-end hidden"></div>
                </div>
            </div>
            <section className="lg:py-16 py-10 bg-[#fff]">
                <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                    <div className="space-y-4 text-center">
                        <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                            <h2 data-aos="fade-up" className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">We Specialize in a Variety of
                                AI Models – Tailored Gen AI Development Solutions for Every Business Need</h2>
                            <p data-aos="fade-up"> At InfoTech Launch, we pride ourselves on our expertise in developing and deploying a wide range of AI
                                models that cater to specific business requirements. Our team utilizes state-of-the-art algorithms
                                and machine learning techniques to create powerful, custom models that deliver real value and
                                enhance your business operations. We specialize in the following AI models</p>
                        </div>
                        <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                            <div className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 rounded-[40px]" data-aos="fade-up">
                                <div data-aos="fade-up"
                                    className="w-20 h-20 bg-[#f13c3c]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#f13c3c]">
                                    01</div>
                                <h3 data-aos="fade-up" className="text-2xl text-[#212121] font-semibold">Generative Pre-trained Transformers (GPT)</h3>
                                <p data-aos="fade-up">Harnessing the power of GPT models for natural language processing (NLP), automated content
                                    generation, and intelligent chatbot development.</p>
                            </div>
                            <div data-aos="fade-up" className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 rounded-[40px]">
                                <div data-aos="fade-up"
                                    className="w-20 h-20 bg-[#f13c3c]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#f13c3c]">
                                    02</div>
                                <h3 data-aos="fade-up" className="text-2xl text-[#212121] font-semibold">DALL·E</h3>
                                <p data-aos="fade-up">Leveraging AI for image generation and visual content creation, perfect for design, advertising,
                                    and creative industries.</p>
                            </div>
                            <div data-aos="fade-up" className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 rounded-[40px]">
                                <div data-aos="fade-up"
                                    className="w-20 h-20 bg-[#f13c3c]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#f13c3c]">
                                    03</div>
                                <h3 data-aos="fade-up" className="text-2xl text-[#212121] font-semibold">Stable Diffusion</h3>
                                <p data-aos="fade-up">Using AI to generate high-quality images, videos, and other multimedia content that fits your
                                    creative vision.</p>
                            </div>
                            <div data-aos="fade-up" className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 rounded-[40px]">
                                <div data-aos="fade-up"
                                    className="w-20 h-20 bg-[#f13c3c]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#f13c3c]">
                                    04</div>
                                <h3 data-aos="fade-up" className="text-2xl text-[#212121] font-semibold">BERT (Bidirectional Encoder Representations from
                                    Transformers) </h3>
                                <p data-aos="fade-up">Improving machine understanding of context in language, ideal for enhancing search engines,
                                    sentiment analysis, and customer feedback analysis.</p>
                            </div>
                            <div data-aos="fade-up" className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 rounded-[40px]">
                                <div data-aos="fade-up"
                                    className="w-20 h-20 bg-[#f13c3c]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#f13c3c]">
                                    05</div>
                                <h3 data-aos="fade-up" className="text-2xl text-[#212121] font-semibold">Reinforcement Learning Models</h3>
                                <p data-aos="fade-up">Developing systems that can learn and adapt autonomously for decision-making applications in
                                    gaming, robotics, and more.</p>
                            </div>
                            <div data-aos="fade-up" className="border-2 p-8 space-y-2 bg-white border-[#f13c3c]/20 rounded-[40px]">
                                <div data-aos="fade-up"
                                    className="w-20 h-20 bg-[#f13c3c]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#f13c3c]">
                                    06</div>
                                <h3 data-aos="fade-up" className="text-2xl text-[#212121] font-semibold">AutoML Models</h3>
                                <p data-aos="fade-up">Automating machine learning tasks, enabling fast and efficient development of AI systems with
                                    minimal human intervention.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="achievement-wrapper">
                        {achievements.map((item, index) => (
                            <div data-aos="fade-up"
                                key={item.id}
                                className={`achievement-wrapper__item ${index === activeIndex ? "is-active" : ""}`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="achievement-content">
                                    <div className="icn"> <img src={item.icon} alt="Icon" className="img-fluid lazyloaded" />
                                    </div>
                                    <div className="content">
                                        <h2>{item.number}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <div className="achievement-image"> <img alt="AI Experts" src={item.image} /> </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WorkingProcess />
            <WhyChoose />
            <Partners />
            <OurPortfolioHome />
            <IndustriesHome />
            <Blog />
            <GetStarted />
            <FAQ />
            <Footer />
            <TawkChat />
            </AOSProvider>
        </>

    );
};

export default AIDevelopment;
