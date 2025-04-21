import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Solutions.scss';
import app01 from "../../assets/Images/iOS_App.webp";
import app02 from "../../assets/Images/Android_App.webp";
import app03 from "../../assets/Images/Flutter_App.webp";
import app04 from "../../assets/Images/React_Native_App.webp";
import app05 from "../../assets/Images/PWA_App.webp";

// import Smart from "../../assets/Images/Smart.svg";
// import Scalability from "../../assets/Images/Scalability.svg";
import Chatbot from "../../assets/Images/pngtree.png";
import Machine from "../../assets/Images/Machine.png";
import Generative from "../../assets/Images/Generative.png";
import Consulting from "../../assets/Images/Consulting.png";

const Solutions: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('.panel-solutions') as NodeListOf<HTMLElement>;

            sections.forEach((section) => {
                const sectionOffset = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (sectionId && scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                    document.querySelectorAll('.solu-item').forEach(item => item.classList.remove('active'));
                    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        };

        const handleClick = (event: Event) => {
            const target = event.target as HTMLElement;
            const link = target.closest('.solu-item') as HTMLAnchorElement | null;

            if (link && link.getAttribute('href')) {
                event.preventDefault();
                document.querySelectorAll('.solu-item').forEach(item => item.classList.remove('active'));
                link.classList.add('active');

                const targetId = link.getAttribute('href') ?? '';
                if (targetId) {
                    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.getElementById('services-list')?.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.getElementById('services-list')?.removeEventListener('click', handleClick);
        };
    }, []);


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = [
                document.getElementById("solution1"),
                // document.getElementById("solution2"),
                document.getElementById("solution13"),
                document.getElementById("solution4"),
                document.getElementById("solution5"),
            ];
            const solutionList = document.getElementById("solution-list_mob");

            sections.forEach((section, index) => {
                if (section) {
                    const sectionOffset = section.offsetTop - 150;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                        setActiveIndex(index);
                    }
                }
            });

            // Move the active item to the left using transform
            if (solutionList) {
                const activeItem = solutionList.children[activeIndex] as HTMLElement;
                if (activeItem) {
                    const offsetLeft = activeItem.offsetLeft;
                    solutionList.style.transform = `translateX(-${offsetLeft}px)`;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);



    return (
        <div className="Solutions_sec w-full bg-gradient-blue-red lg:py-16 py-10">
            <div className="container mx-auto  px-6">
                <div className="w-full  mx-auto">
                    <div className="text-center mb-12 text-white">
                        <h3 className="text-orange text-3xl font-semibold mb-3"  data-aos="fade-up" >Solutions</h3>
                        {/* <h2 className="text-3xl lg:text-4xl font-semibold md:leading-[47px]" data-aos="fade-up" >
                            Full-Spectrum Of <span className="bg-red-500/10 px-2 inline-block">AI-Powered Solutions</span>
                            <br /> Engineered For Global Impact
                        </h2> */}

                        <h2 className="text-3xl lg:text-4xl font-semibold md:leading-[47px]" data-aos="fade-up" >
                            AI-Driven Digital Solutions
                        </h2>
                        <p>Crafted to Accelerate Innovation and Deliver Global Impact</p>
                    </div>
                    <div className="Solutions_wrap">
                        <div className="md:flex gap-8">
                            <div className="w-full md:w-[33%]">
                                <div className="desk-block">
                                    <div className="solution-list flex flex-col space-y-4" id="services-list">

                                        <a href="#solution13" className="solu-item flex flex-col p-6 bg-white transition">
                                            <h3 className="text-2xl text-gray-300 font-bold">AI Development</h3>
                                            <p className="text-gray-600">Smart. Scalable. Future-ready.</p>
                                        </a>
                                        <a href="#solution1" className="solu-item active flex flex-col p-6 bg-white transition">
                                            <h3 className="text-2xl text-gray-300 font-bold">Mobile App Development</h3>
                                            <p className="text-gray-600">Fast. Reliable. User-first.</p>
                                        </a>
                                        {/* <a href="#solution2" className="solu-item flex flex-col p-6 bg-white transition">
                                            <h3 className="text-2xl text-gray-300 font-bold">Blockchain Services</h3>
                                            <p className="text-gray-600">Secure Blockchain-Based App Solutions</p>
                                        </a> */}
                                        
                                        <a href="#solution5" className="solu-item flex flex-col p-6 bg-white transition">
                                            <h3 className="text-2xl text-gray-300 font-bold">Full Stack Development</h3>
                                            <p className="text-gray-600">Front to back. All in one.</p>
                                        </a>

                                        <a href="#solution4" className="solu-item flex flex-col p-6 bg-white transition">
                                            <h3 className="text-2xl text-gray-300 font-bold">Healthcare App Development</h3>
                                            <p className="text-gray-600">Secure. Compliant. Scalable.</p>
                                        </a>

                                    </div>
                                </div>
                                <div className="mob-block">
                                    <div className="solution-list" id="solution-list_mob" role="listitem" data-aos="fade-right" >

                                        <a className={`solution-list__item ${activeIndex === 2 ? "active" : ""}`} href="#solution13">
                                            <span>Intelligence</span>
                                        </a>

                                        <a className={`solution-list__item ${activeIndex === 0 ? "active" : ""}`} href="#solution1">
                                            <span>Mobile App</span>
                                        </a>
                                        {/* <a className={`solution-list__item ${activeIndex === 1 ? "active" : ""}`} href="#solution2">
                                            <span>Blockchain</span>
                                        </a> */}
                                        
                                        <a className={`solution-list__item ${activeIndex === 4 ? "active" : ""}`} href="#solution5">
                                            <span>AI-Powered</span>
                                        </a>

                                        <a className={`solution-list__item ${activeIndex === 3 ? "active" : ""}`} href="#solution4">
                                            <span>Healthcare App</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[66%]">
                                <div id="solutions-wrapper">

                                <section className="panel panel-solutions bg-white" id="solution13">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Your AI Development Partner</h3>
                                                    <p>We craft smart AI solutions to streamline processes, unlock insights, and enhance experiences.</p>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="panel-body">
                                            <div className="solution-category">
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <span className="icon-Project-Scoping"></span>
                                                    </div>
                                                    <p>Boost Efficiency</p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <span className="icon-Project-Resource-Allocation"></span>
                                                    </div>
                                                    <p>Data-Driven Insights</p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <span className="icon-Documentation"></span>
                                                    </div>
                                                    <p>Next-Level CX</p>
                                                </div>

                                            </div>
                                            <div className="solution-flow-wrapper">
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={Consulting} alt="" />
                                                        </div>
                                                        <p>AI Strategy & Consulting</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-automation w-12 h-12"><path d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17 22l5 -3l-5 -3z"></path></svg>
                                                        </div>
                                                        <p>AI Software Development</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={Generative} alt="" />
                                                        </div>
                                                        <p>Generative AI</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={Machine} alt="" />
                                                        </div>
                                                        <p>Machine Learning</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={Chatbot} alt="" />
                                                        </div>
                                                        <p>AI Agents & Chatbots</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </section>

                                    <section className="panel panel-solutions bg-white" id="solution1">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up">
                                                    <h3>Mobile App Development</h3>
                                                    <p>Bringing Your Vision to Life with Cutting-Edge Mobile Solutions</p>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="panel-body">
                                            <div className="solution-category">
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-file-check w-12 h-12"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M9 15l2 2l4 -4"></path></svg>
                                                    </div>
                                                    <p>Exclusive 5 Projects Annually </p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-automation w-12 h-12"><path d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17 22l5 -3l-5 -3z"></path></svg>
                                                    </div>
                                                    <p>Strategic Oversight from C-Level Experts</p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-ai w-12 h-12"><path d="M8 16v-6a2 2 0 1 1 4 0v6"></path><path d="M8 13h4"></path><path d="M16 8v8"></path></svg>
                                                    </div>
                                                    <p>Top 1% Global Tech Talent </p>
                                                </div>

                                            </div>
                                            <div className="solution-flow-wrapper">
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={app01} alt="" />
                                                        </div>
                                                        <p>IOS App </p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={app02} alt="" />
                                                        </div>
                                                        <p>Android App</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={app03} alt="" />
                                                        </div>
                                                        <p>
                                                            Flutter App</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={app04} alt="" />
                                                        </div>
                                                        <p>
                                                            React Native App</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={app05} alt="" />
                                                        </div>
                                                        <p>PWA App</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </section>
                                    {/* <section className="panel panel-solutions" id="solution2">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Blockchain Services</h3>
                                                    <p>The Best Blockchain Development Company in India</p>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="panel-body">
                                            <div className="solution-category">
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-shield-check w-12 h-12"><path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"></path><path d="M15 19l2 2l4 -4"></path></svg>
                                                    </div>
                                                    <p>The Meet of Cyber-Security with Blockchain </p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-broadcast w-12 h-12"><path d="M18.364 19.364a9 9 0 1 0 -12.728 0"></path><path d="M15.536 16.536a5 5 0 1 0 -7.072 0"></path><path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>
                                                    </div>
                                                    <p>Internet of Things (IoT) with Blockchain </p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-world w-12 h-12"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                                                    </div>
                                                    <p>Metaverse Blockchain Solutions </p>
                                                </div>

                                            </div>
                                            <div className="solution-flow-wrapper">
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-diamond w-12 h-12"><path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"></path><path d="M10 12l-2 -2.2l.6 -1"></path></svg>
                                                        </div>
                                                        <p>NFT at Boom </p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brain w-12 h-12"><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"></path><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"></path><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"></path><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"></path><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"></path><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"></path></svg>
                                                        </div>
                                                        <p>Blockchain with Artificial Intelligence (AI)</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-server w-12 h-12"><path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M7 8l0 .01"></path><path d="M7 16l0 .01"></path></svg>
                                                        </div>
                                                        <p>
                                                            Blockchain-as-a-Service (BaaS)</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={Smart} alt="" />
                                                        </div>
                                                        <p>
                                                            Smart Contract Solutions</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <img src={Scalability} alt="" />
                                                        </div>
                                                        <p>High Scalability</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </section> */}
                                    
                                    
                                    <section className="panel panel-solutions bg-white" id="solution5">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Full Stack Development</h3>
                                                    <p>Build powerful, scalable, and visually stunning web solutions tailored to your business goals.</p>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="panel-body">
                                            <div className="solution-category">
                                                <div className="solution-category-list">
                                                    <div className="icn">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-tools w-12 h-12"><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path><path d="M14.5 5.5l4 4"></path><path d="M12 8l-5 -5l-4 4l5 5"></path><path d="M7 8l-1.5 1.5"></path><path d="M16 12l5 5l-4 4l-5 -5"></path><path d="M16 17l-1.5 1.5"></path></svg>
                                                    </div>
                                                    <p>Expert in Business Analysis</p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M35.4173 9.16731C35.0858 9.16731 34.7679 9.03562 34.5334 8.80119C34.299 8.56677 34.1673 8.24883 34.1673 7.91731C34.1673 7.58579 34.299 7.26785 34.5334 7.03343C34.7679 6.79901 35.0858 6.66731 35.4173 6.66731C35.7488 6.66731 36.0668 6.79901 36.3012 7.03343C36.5356 7.26785 36.6673 7.58579 36.6673 7.91731C36.6673 8.24883 36.5356 8.56677 36.3012 8.80119C36.0668 9.03562 35.7488 9.16731 35.4173 9.16731ZM35.4173 9.16731V15.4173C35.4173 16.5807 35.4173 17.1623 35.274 17.634C35.1151 18.1587 34.8292 18.6361 34.4417 19.024C34.0541 19.4118 33.5769 19.698 33.0523 19.8573C32.579 20.0007 31.9973 20.0007 30.834 20.0007M4.58398 30.834C4.9155 30.834 5.23344 30.9657 5.46786 31.2001C5.70228 31.4345 5.83398 31.7525 5.83398 32.084C5.83398 32.4155 5.70228 32.7335 5.46786 32.9679C5.23344 33.2023 4.9155 33.334 4.58398 33.334C4.25246 33.334 3.93451 33.2023 3.70009 32.9679C3.46567 32.7335 3.33398 32.4155 3.33398 32.084C3.33398 31.7525 3.46567 31.4345 3.70009 31.2001C3.93451 30.9657 4.25246 30.834 4.58398 30.834ZM4.58398 30.834V24.584C4.58398 23.4207 4.58398 22.839 4.72731 22.3673C4.88622 21.8426 5.17211 21.3652 5.55964 20.9774C5.94717 20.5896 6.42438 20.3033 6.94898 20.144C7.42231 20.0007 8.00398 20.0007 9.16731 20.0007M9.16731 4.58398C9.16731 4.9155 9.03561 5.23344 8.80119 5.46786C8.56677 5.70228 8.24883 5.83398 7.91731 5.83398C7.58579 5.83398 7.26785 5.70228 7.03343 5.46786C6.79901 5.23344 6.66731 4.9155 6.66731 4.58398C6.66731 4.25246 6.79901 3.93451 7.03343 3.70009C7.26785 3.46567 7.58579 3.33398 7.91731 3.33398C8.24883 3.33398 8.56677 3.46567 8.80119 3.70009C9.03561 3.93451 9.16731 4.25246 9.16731 4.58398ZM9.16731 4.58398H15.4173C16.5807 4.58398 17.1623 4.58398 17.634 4.72731C18.1587 4.88622 18.6361 5.17211 19.024 5.55964C19.4118 5.94717 19.698 6.42438 19.8573 6.94898C20.0007 7.42231 20.0007 8.00398 20.0007 9.16731M30.834 35.4173C30.834 35.0858 30.9657 34.7679 31.2001 34.5335C31.4345 34.299 31.7525 34.1673 32.084 34.1673C32.4155 34.1673 32.7335 34.299 32.9679 34.5335C33.2023 34.7679 33.334 35.0858 33.334 35.4173C33.334 35.7489 33.2023 36.0668 32.9679 36.3012C32.7335 36.5356 32.4155 36.6673 32.084 36.6673C31.7525 36.6673 31.4345 36.5356 31.2001 36.3012C30.9657 36.0668 30.834 35.7489 30.834 35.4173ZM30.834 35.4173H24.584C23.4207 35.4173 22.839 35.4173 22.3673 35.274C21.8426 35.1151 21.3652 34.8292 20.9774 34.4417C20.5895 34.0541 20.3033 33.5769 20.144 33.0523C20.0007 32.579 20.0007 31.9973 20.0007 30.834' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /><path d='M9.24805 19.9173C9.24805 14.8106 9.24805 12.2573 10.8347 10.6706C12.4214 9.08398 14.9747 9.08398 20.0814 9.08398C25.188 9.08398 27.7414 9.08398 29.328 10.6706C30.9147 12.2573 30.9147 14.8106 30.9147 19.9173C30.9147 25.024 30.9147 27.5773 29.328 29.164C27.7414 30.7506 25.188 30.7506 20.0814 30.7506C14.9747 30.7506 12.4214 30.7506 10.8347 29.164C9.24805 27.5773 9.24805 25.024 9.24805 19.9173Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /><path d='M22.1783 23.3336L19.745 15.7986C19.6606 15.5608 19.5034 15.3557 19.2958 15.2124C19.0881 15.0691 18.8406 14.9949 18.5883 15.0003C18.3364 14.9952 18.0892 15.0696 17.8819 15.2129C17.6746 15.3562 17.5176 15.5611 17.4333 15.7986L15 23.3336M26.345 15.0003V23.3336M15.895 20.8336H21.2817' stroke='#F13C3C' stroke-linecap='round' stroke-linejoin='round' /></svg>

                                                    </div>
                                                    <p>Use Latest Technologies </p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-database w-12 h-12"><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path><path d="M4 6v6a8 3 0 0 0 16 0v-6"></path><path d="M4 12v6a8 3 0 0 0 16 0v-6"></path></svg>
                                                    </div>
                                                    <p>Cost Efficiency </p>
                                                </div>

                                            </div>
                                            <div className="solution-flow-wrapper">
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <span className="icon-Mobile-Application-Development2"></span>
                                                        </div>
                                                        <p>Website Development </p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <span className="icon-website-development2"></span>
                                                        </div>
                                                        <p>Website Design</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <span className="icon-UI-UX-design2"></span>
                                                        </div>
                                                        <p>
                                                            MERN stack development</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <span className="icon-Digital-Transformation2"></span>
                                                        </div>
                                                        <p>
                                                            React JS Development</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <span className="icon-Cloud-Computing-service2"></span>
                                                        </div>
                                                        <p>Node JS Development</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </section>

                                    <section className="panel panel-solutions bg-white" id="solution4">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Healthcare App Development</h3>
                                                    <p>We are known for providing top-rated healthcare software development services for startups and enterprises. </p>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="panel-body">
                                            <div className="solution-category">
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-code w-12 h-12"><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
                                                    </div>
                                                    <p>EMR/EHR Systems </p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-cash-banknote w-12 h-12"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M18 12l.01 0"></path><path d="M6 12l.01 0"></path></svg>
                                                    </div>
                                                    <p>Healthcare CRM Software Solutions </p>
                                                </div>
                                                <div className="solution-category-list">
                                                    <div className="icn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-news w-12 h-12"><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path><path d="M8 8l4 0"></path><path d="M8 12l4 0"></path><path d="M8 16l4 0"></path></svg>
                                                    </div>
                                                    <p>Telehealth Platforms </p>
                                                </div>

                                            </div>
                                            <div className="solution-flow-wrapper">
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-tools w-12 h-12"><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path><path d="M14.5 5.5l4 4"></path><path d="M12 8l-5 -5l-4 4l5 5"></path><path d="M7 8l-1.5 1.5"></path><path d="M16 12l5 5l-4 4l-5 -5"></path><path d="M16 17l-1.5 1.5"></path></svg>
                                                        </div>
                                                        <p>Revenue Cycle Management Software </p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-ticket w-12 h-12"><path d="M15 5l0 2"></path><path d="M15 11l0 2"></path><path d="M15 17l0 2"></path><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                                                        </div>
                                                        <p>Healthcare Analytics Solutions</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-chart-bar w-12 h-12"><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 20h14"></path></svg>
                                                        </div>
                                                        <p>
                                                            Pharmacy Management Software</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-apps w-12 h-12"><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 7l6 0"></path><path d="M17 4l0 6"></path></svg>
                                                        </div>
                                                        <p>
                                                            Online Doctor Consultation-Software</p>
                                                        <div className="icn-arrow"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-apps w-12 h-12"><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 7l6 0"></path><path d="M17 4l0 6"></path></svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#">
                                                    <div className="commonbs5form">
                                                        <div className="icn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-shield w-12 h-12"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path></svg>
                                                        </div>
                                                        <p>Laboratory Information Management Software</p>
                                                        <div className="icn-arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
