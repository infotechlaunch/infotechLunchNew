import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Solutions.scss';
import prcoessico1 from "../../assets/Images/services/mobiledevelopment/process/process-1.webp";
import prcoessico2 from "../../assets/Images/services/mobiledevelopment/process/process-2.webp";
import prcoessico3 from "../../assets/Images/services/mobiledevelopment/process/process-3.webp";
import prcoessico4 from "../../assets/Images/services/mobiledevelopment/process/process-4.webp";
import prcoessico5 from "../../assets/Images/services/mobiledevelopment/process/process-5.webp";

import icon1 from "../../assets/Images/services/mobiledevelopment/process/consultation/RequirementAnalysis.webp";
import icon2 from "../../assets/Images/services/mobiledevelopment/process/consultation/MarketEvaluation.webp";
import icon3 from "../../assets/Images/services/mobiledevelopment/process/consultation/FeasibilityAnalysis.webp";
import icon4 from "../../assets/Images/services/mobiledevelopment/process/consultation/ProjectScopeAssessment.webp";

import icon9 from "../../assets/Images/services/mobiledevelopment/process/designing/Creatingdesignsketches.webp";
import icon10 from "../../assets/Images/services/mobiledevelopment/process/designing/Wireframecreation.webp";
import icon11 from "../../assets/Images/services/mobiledevelopment/process/designing/Mockupcreation.webp";
import icon12 from "../../assets/Images/services/mobiledevelopment/process/designing/PrototypingandDesigning.webp";

import icon13 from "../../assets/Images/services/mobiledevelopment/process/development/100-custom-app-development.webp";
import icon14 from "../../assets/Images/services/mobiledevelopment/process/development/Complete-source-code-IP-rights.webp";
import icon15 from "../../assets/Images/services/mobiledevelopment/process/development/Robust-scalable-and-secure-solutions.webp";
import icon16 from "../../assets/Images/services/mobiledevelopment/process/development/Latest-technology-tools.webp";

import icon17 from "../../assets/Images/services/mobiledevelopment/process/deployment/App-and-playstore-deployment.webp";
import icon18 from "../../assets/Images/services/mobiledevelopment/process/deployment/App-play-store-optimization.webp";
import icon19 from "../../assets/Images/services/mobiledevelopment/process/deployment/Dedicated-customer-service-support.webp";
import icon20 from "../../assets/Images/services/mobiledevelopment/process/deployment/Software-license-management.webp";

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
                        <h3 className="text-gradient text-3xl font-semibold mb-3" data-aos="fade-up" >Process</h3>
                        <h2 className="text-3xl lg:text-4xl font-semibold md:leading-[47px] mt-3" data-aos="fade-up" >
                            Our Comprehensive Mobile App Development Process <br />Ensures Your Success
                        </h2>
                        <p className="text-base mt-3 mb-4">
                            We follow a thorough, step-by-step approach to turn your app idea into a high-performing digital solution, delivering results that align with your goals and drive long-term success.</p>
                    </div>
                    <div className="Solutions_wrap">
                        <div className="md:flex gap-8">
                            <div className="w-full md:w-[33%]">
                                <div className="desk-block">
                                    <div className="solution-list flex flex-col space-y-3" id="services-list">

                                        <a href="#solution1" className="solu-item flex flex-row items-center p-6 bg-white transition">
                                            <img src={prcoessico1} />
                                            <h3 className="text-2xl text-black-300 font-bold">Consultation
                                            </h3>
                                            <h5 className="text-4xl text-red-700 font-bold">01</h5>
                                        </a>
                                        <a href="#solution2" className="solu-item active flex flex-row items-center p-6 bg-white transition">
                                            <img src={prcoessico2} />
                                            <h3 className="text-2xl text-black-300 font-bold">Strategy
                                            </h3>
                                            <h5 className="text-4xl text-red-700 font-bold">02</h5>
                                        </a>
                                        <a href="#solution3" className="solu-item  flex flex-row items-center p-6 bg-white transition">
                                            <img src={prcoessico3} />
                                            <h3 className="text-2xl text-black-300 font-bold">Designing
                                            </h3>
                                            <h5 className="text-4xl text-red-700 font-bold">03</h5>
                                        </a>

                                        <a href="#solution4" className="solu-item  flex flex-row items-center p-6 bg-white transition">
                                            <img src={prcoessico4} />
                                            <h3 className="text-2xl text-black-300 font-bold">Development
                                            </h3>
                                            <h5 className="text-4xl text-red-700 font-bold">04</h5>
                                        </a>

                                        <a href="#solution5" className="solu-item  flex flex-row items-center p-6 bg-white transition">
                                            <img src={prcoessico5} />
                                            <h3 className="text-2xl text-black-300 font-bold">Deployment
                                            </h3>
                                            <h5 className="text-4xl text-red-700 font-bold">05</h5>
                                        </a>

                                    </div>
                                </div>
                                <div className="mob-block">
                                    <div className="solution-list" id="solution-list_mob" role="listitem" data-aos="fade-right" >

                                        <a className={`solution-list__item ${activeIndex === 2 ? "active" : ""}`} href="#solution1">
                                            <span>1) Consultation</span>
                                        </a>

                                        <a className={`solution-list__item ${activeIndex === 0 ? "active" : ""}`} href="#solution2">
                                            <span>2) Strategy</span>
                                        </a>
                                        <a className={`solution-list__item ${activeIndex === 1 ? "active" : ""}`} href="#solution3">
                                            <span>3) Designing</span>
                                        </a>

                                        <a className={`solution-list__item ${activeIndex === 4 ? "active" : ""}`} href="#solution4">
                                            <span>4) Development</span>
                                        </a>

                                        <a className={`solution-list__item ${activeIndex === 3 ? "active" : ""}`} href="#solution5">
                                            <span>5) Deployment</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[66%]">
                                <div id="solutions-wrapper">

                                    <section className="panel panel-solutions bg-white" id="solution1">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Validate Your App Idea with Industry Experts</h3>
                                                    <h5 className="text-base">At InfotechLaunch, we validate your app idea through in-depth research and expert analysis, ensuring your Android or iOS app stands out with a strong business plan based on market trends and user needs.</h5>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="grid grid-cols-4 text-center mt-6">
                                            <div className="solution-category-list ">
                                                <div className="icn grid justify-center">
                                                    <img src={icon1} />
                                                </div>
                                                <p className="text-base">Requirement <br />Analysis</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon2} />
                                                </div>
                                                <p className="text-base">Market <br />Evaluation</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon3} />
                                                </div>
                                                <p className="text-base">Feasibility <br />Analysis</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon4} />
                                                </div>
                                                <p className="text-base">Project Scope Assessment</p>
                                            </div>

                                        </div>
                                    </section>

                                    <section className="panel panel-solutions bg-white" id="solution2">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Building the Foundation for Your App’s Success</h3>
                                                    <h5 className="text-base">
                                                        At InfotechLaunch, we craft tailored strategies for Android and iOS app development, aligning with business goals, defining success metrics, and delivering innovative solutions that drive real results with expert execution.
                                                    </h5>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="grid grid-cols-4 text-center mt-6">
                                            <div className="solution-category-list ">
                                                <div className="icn grid justify-center">
                                                    <img src={icon1} />
                                                </div>
                                                <p className="text-base">Identifying product objective</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon2} />
                                                </div>
                                                <p className="text-base">Target audience identification</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon3} />
                                                </div>
                                                <p className="text-base">Product discovery & analysis</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon4} />
                                                </div>
                                                <p className="text-base">Product launch & marketing strategy</p>
                                            </div>

                                        </div>
                                    </section>
                                    <section className="panel panel-solutions bg-white" id="solution3">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>More Than Just Stunning Designs — We Deliver Exceptional User Experiences</h3>
                                                    <h5 className="text-base">At InfotechLaunch, we create seamless, intuitive, and engaging app interfaces, leveraging design thinking and expertise to enhance user satisfaction, drive engagement, and fuel business growth for startups, SMBs, and enterprises.
</h5>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="grid grid-cols-4 text-center mt-6">
                                            <div className="solution-category-list ">
                                                <div className="icn grid justify-center">
                                                    <img src={icon9} />
                                                </div>
                                                <p className="text-base">Creating design sketches</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon10} />
                                                </div>
                                                <p className="text-base">Wireframe creation</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon11} />
                                                </div>
                                                <p className="text-base">Mock-up creation</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon12} />
                                                </div>
                                                <p className="text-base">Prototyping & Designing</p>
                                            </div>

                                        </div>
                                    </section>
                                    <section className="panel panel-solutions bg-white" id="solution4">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                    <h3>Delivering Innovative Solutions for Outstanding Results</h3>
                                                    <h5 className="text-base">InfotechLaunch is a full-service mobile app development company specializing in iOS, Android, React Native, blockchain, hybrid apps, custom software, and web development, delivering advanced solutions for exceptional results.
</h5>
                                                </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="grid grid-cols-4 text-center mt-6">
                                            <div className="solution-category-list ">
                                                <div className="icn grid justify-center">
                                                    <img src={icon13} />
                                                </div>
                                                <p className="text-base">100% custom app development</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon14} />
                                                </div>
                                                <p className="text-base">Complete source code & IP rights</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon15} />
                                                </div>
                                                <p className="text-base">Robust, scalable & secure solutions</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon16} />
                                                </div>
                                                <p className="text-base">Latest technology & tools</p>
                                            </div>

                                        </div>
                                    </section>

                                    <section className="panel panel-solutions bg-white" id="solution5">
                                        <div className="panel-head">
                                            <Link to="#">
                                                <div className="solution-content" data-aos="fade-up" >
                                                <h3>Striving for Long-Term Success & Growth Potential</h3>
                                                    <h5 className="text-base">As a leading app development company, we create flawless apps, enhance visibility, ensure user engagement, and provide 24/7 support post-launch, making us a trusted partner for mobile app development.
</h5>     </div>
                                                <div className="arrow"> <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"></path></g></svg>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="grid grid-cols-4 text-center mt-6">
                                            <div className="solution-category-list ">
                                                <div className="icn grid justify-center">
                                                    <img src={icon17} />
                                                </div>
                                                <p className="text-base">App & play store deployment</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon18} />
                                                </div>
                                                <p className="text-base">App & play store optimization</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon19} />
                                                </div>
                                                <p className="text-base">Dedicated customer service support</p>
                                            </div>
                                            <div className="solution-category-list">
                                                <div className="icn grid justify-center">
                                                    <img src={icon20} />
                                                </div>
                                                <p className="text-base">Software license management</p>
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
