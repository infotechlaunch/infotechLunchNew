import { useState } from "react";
import { Link } from 'react-router-dom';
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "../pages/TawkChat";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
import heroimg2 from "../assets/Images/hero-img/career-hero-img.webp"
import icon1 from "../assets/Images/icon/Courage-and-Audacity.png"
import icon2 from "../assets/Images/icon/Curiosity.png"
import icon3 from "../assets/Images/icon/Solidarity-and-Integrity.png"
import AOSProvider from "../components/AOSProvider";

const CareerPage: React.FC = () => {

    const [activeTab, setActiveTab] = useState("All Positions");


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
                                                Join Our Tech Revolution</h1>

                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-sm font-light text-[#fff] lg:text-base mt-2 lg:text-start text-center">
                                                Empowering Innovators to Shape the Future of IT.</p>
                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                            </p>
                                            <p data-aos="fade-right"
                                                className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                                            </p>
                                        </div>
                                        <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal"></ul>
                                    </div>

                                </div>
                                <div className="w-full lg:flex justify-end items-end " data-aos="fade-left">
                                    <img alt="[object Object]" loading="lazy" width="754" height="382" decoding="async" data-nimg="1" src={heroimg2} />
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="lg:py-16 py-10 bg-orange">
                        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                            <div className="text-center">
                                <h2 className="text-4xl font-semibold leading-[3rem] text-[#090808]" data-aos="fade-up">
                                    We have 17 open positions now!
                                </h2>
                            </div>
                            <div className="grid lg:grid-cols-5 lg:gap-20 gap-6 mt-10">
                                <div className="col-span-2" data-aos="fade-right">
                                    <div className="lg:space-y-5 lg:block bg-white flex gap-2 items-center lg:max-w-full max-w-[280px] overflow-hidden overflow-x-auto">
                                        <div
                                            className={`lg:w-full min-w-[244px] lg:text-start text-center md:px-10 px-7 py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer
                                    ${activeTab === "All Positions" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-l-8 border-[#f13c3c]" : "text-[#253A67]"}`}
                                            onClick={() => setActiveTab("All Positions")}
                                        >
                                            All Positions
                                        </div>
                                        <div
                                            className={`lg:w-full min-w-[244px] lg:text-start text-center md:px-10 px-7 py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer
                                    ${activeTab === "StackDeveloper" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-l-8 border-[#f13c3c]" : "text-[#253A67]"}`}
                                            onClick={() => setActiveTab("StackDeveloper")}
                                        >
                                            Full Stack Developer
                                        </div>
                                        <div
                                            className={`lg:w-full min-w-[244px] lg:text-start text-center md:px-10 px-7 py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer
                                    ${activeTab === "Development" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-l-8 border-[#f13c3c]" : "text-[#253A67]"}`}
                                            onClick={() => setActiveTab("Development")}
                                        >
                                            Frontend Development
                                        </div>
                                        <div
                                            className={`lg:w-full min-w-[244px] lg:text-start text-center md:px-10 px-7 py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer
                                    ${activeTab === "MobileApp" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-l-8 border-[#f13c3c]" : "text-[#253A67]"}`}
                                            onClick={() => setActiveTab("MobileApp")}
                                        >
                                            Mobile Development
                                        </div>
                                        <div
                                            className={`lg:w-full min-w-[244px] lg:text-start text-center md:px-10 px-7 py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer
                                    ${activeTab === "QualityAssurance" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-l-8 border-[#f13c3c]" : "text-[#253A67]"}`}
                                            onClick={() => setActiveTab("QualityAssurance")}
                                        >
                                            Quality Assurance
                                        </div>
                                        <div
                                            className={`lg:w-full min-w-[244px] lg:text-start text-center md:px-10 px-7 py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer
                                    ${activeTab === "ContentMarketing" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-l-8 border-[#f13c3c]" : "text-[#253A67]"}`}
                                            onClick={() => setActiveTab("ContentMarketing")}
                                        >
                                            Content and Marketing
                                        </div>



                                        <div className="space-y-5 lg:block hidden p-3">
                                            <p className="text-[#53648B] text-sm font-normal">
                                                We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.
                                            </p>
                                            <button className="md:text-base text-sm font-medium text-[#f13c3c] border border-[#f13c3c] rounded-full px-8 py-2.5 flex items-center gap-1 transition duration-300">
                                                Know More in Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    {activeTab === "All Positions" && (
                                        <>
                                            <div className="w-full relative capitalize space-y-10" data-aos="fade-left">

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 className="md:text-2xl text-xl font-semibold   text-[#090808] " data-aos="fade-up">Node.js Developer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are looking for a Node.js Developer
                                                            responsible for managing the interchange of data between the server and the users. Your primary
                                                            focus will be the development of all server-side logic, definition and maintenance of the central
                                                            database, and ensuring high performance and responsiveness to requests from the front-end. You will
                                                            also be responsible for integrating the front-end elements built by your co-workers into the
                                                            application. Therefore, a basic understanding of front-end technologies is necessary as well. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">React.js Developer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a dedicated React.js front-end
                                                            developer to join our growing company. You will work as part of a team to design and develop
                                                            high-quality software solutions for web applications and mobile apps using React.As a React.js
                                                            developer, you will implement new features and maintain existing code using React and other standard
                                                            tools in the React ecosystem, such as Node.js and Yarn. Your duties will include designing software
                                                            solutions to meet project requirements, maintaining and refactoring existing code, writing tests,
                                                            and fixing bugs. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">Mern Stack Developer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a skilled and experienced MERN
                                                            (MongoDB, Express.js, React, Node.js) Stack Developer to join our dynamic team. As a MERN Stack
                                                            Developer, you will be responsible for designing, implementing, and maintaining full-stack
                                                            applications. You will collaborate with cross-functional teams to deliver high-quality software
                                                            solutions. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">React Native Developer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are looking for a React Native developer
                                                            interested in building performant mobile apps on both the iOS and Android platforms. You will be
                                                            responsible for architecting and building these applications, as well as coordinating with the teams
                                                            responsible for other layers of the product infrastructure. Building a product is a highly
                                                            collaborative effort, and as such, a strong team player with a commitment to perfection is required.
                                                        </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">UI/UX Developer (with Tailwind CSS)</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a user experience designer to
                                                            join our design team. Your primary role will be to research and design usable interfaces, perform
                                                            usability testing, and create prototypes to validate design concepts. The ideal candidate will use
                                                            this information to help us create the best user experience possible for our website and mobile
                                                            applications. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div data-aos="fade-up" className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">QA Tester</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a dedicated software QA lead to
                                                            join our growing company.You will collaborate with other technical staff to create effective and
                                                            reliable software updates and hotfixes to support our user base. As a software QA lead, you can put
                                                            your passion for QA testing to work and help optimize our users’ experiences. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">Business Analyst</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> The Business Analyst will collaborate with
                                                            various departments and stakeholders to gather, document, and analyze business requirements,
                                                            processes, and workflows. They will translate these requirements into functional specifications for
                                                            technology teams and work closely with project managers, developers, and testers to ensure
                                                            successful project delivery. The Business Analyst will also be involved in identifying areas for
                                                            process improvement and recommending solutions to enhance operational efficiency and effectiveness.
                                                        </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">

                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">Content Writer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a dynamic Content Writer with 1
                                                            year of experience to join our team. The candidate will be responsible for creating engaging,
                                                            high-quality content across various digital platforms. This role requires a blend of creativity,
                                                            research skills, and a strong understanding of SEO principles to produce content that drives
                                                            engagement and aligns with our brand voice. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {activeTab === "StackDeveloper"
                                        && (
                                            <>
                                                <div className="w-full relative capitalize space-y-10">

                                                    <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                        <div className="space-y-4 ">
                                                            <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">Node.js Developer</h3>
                                                            <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                                className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                                From Office</span><span
                                                                    className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                    Time</span></div>
                                                            <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are looking for a Node.js Developer
                                                                responsible for managing the interchange of data between the server and the users. Your primary
                                                                focus will be the development of all server-side logic, definition and maintenance of the central
                                                                database, and ensuring high performance and responsiveness to requests from the front-end. You will
                                                                also be responsible for integrating the front-end elements built by your co-workers into the
                                                                application. Therefore, a basic understanding of front-end technologies is necessary as well. </p>
                                                            <div data-aos="fade-up" className="flex justify-end mt-4">
                                                                <Link to="/contact-us" data-discover="true">
                                                                    <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                            viewBox="0 0 24.231 11.738">
                                                                            <path id="Path_1487529" data-name="Path 1487529"
                                                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                                transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                        <div className="space-y-4 ">
                                                            <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">Mern Stack Developer</h3>
                                                            <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                                className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                                From Office</span><span
                                                                    className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                    Time</span></div>
                                                            <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a skilled and experienced MERN
                                                                (MongoDB, Express.js, React, Node.js) Stack Developer to join our dynamic team. As a MERN Stack
                                                                Developer, you will be responsible for designing, implementing, and maintaining full-stack
                                                                applications. You will collaborate with cross-functional teams to deliver high-quality software
                                                                solutions. </p>
                                                            <div data-aos="fade-up" className="flex justify-end mt-4">
                                                                <Link to="/contact-us" data-discover="true">
                                                                    <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                            viewBox="0 0 24.231 11.738">
                                                                            <path id="Path_1487529" data-name="Path 1487529"
                                                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                                transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                        <div data-aos="fade-up" className="space-y-4 ">
                                                            <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">React Native Developer</h3>
                                                            <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                                className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                                From Office</span><span
                                                                    className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                    Time</span></div>
                                                            <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are looking for a React Native developer
                                                                interested in building performant mobile apps on both the iOS and Android platforms. You will be
                                                                responsible for architecting and building these applications, as well as coordinating with the teams
                                                                responsible for other layers of the product infrastructure. Building a product is a highly
                                                                collaborative effort, and as such, a strong team player with a commitment to perfection is required.
                                                            </p>
                                                            <div data-aos="fade-up" className="flex justify-end mt-4">
                                                                <Link to="/contact-us" data-discover="true">
                                                                    <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                            viewBox="0 0 24.231 11.738">
                                                                            <path id="Path_1487529" data-name="Path 1487529"
                                                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                                transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    {activeTab === "Development"
                                        && (
                                            <>
                                                <div className="w-full relative capitalize space-y-10">



                                                    <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                        <div className="space-y-4 ">
                                                            <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">React.js Developer</h3>
                                                            <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                                className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                                From Office</span><span
                                                                    className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                    Time</span></div>
                                                            <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a dedicated React.js front-end
                                                                developer to join our growing company. You will work as part of a team to design and develop
                                                                high-quality software solutions for web applications and mobile apps using React.As a React.js
                                                                developer, you will implement new features and maintain existing code using React and other standard
                                                                tools in the React ecosystem, such as Node.js and Yarn. Your duties will include designing software
                                                                solutions to meet project requirements, maintaining and refactoring existing code, writing tests,
                                                                and fixing bugs. </p>
                                                            <div data-aos="fade-up" className="flex justify-end mt-4">
                                                                <Link to="/contact-us" data-discover="true">
                                                                    <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                            viewBox="0 0 24.231 11.738">
                                                                            <path id="Path_1487529" data-name="Path 1487529"
                                                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                                transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                        <div className="space-y-4 ">
                                                            <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">UI/UX Developer (with Tailwind CSS)</h3>
                                                            <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                                className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                                From Office</span><span
                                                                    className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                    Time</span></div>
                                                            <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a user experience designer to
                                                                join our design team. Your primary role will be to research and design usable interfaces, perform
                                                                usability testing, and create prototypes to validate design concepts. The ideal candidate will use
                                                                this information to help us create the best user experience possible for our website and mobile
                                                                applications. </p>
                                                            <div data-aos="fade-up" className="flex justify-end mt-4">
                                                                <Link to="/contact-us" data-discover="true">
                                                                    <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                            viewBox="0 0 24.231 11.738">
                                                                            <path id="Path_1487529" data-name="Path 1487529"
                                                                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                                transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                            </>
                                        )}
                                    {activeTab === "MobileApp" && (
                                        <>
                                            <div className="w-full relative capitalize space-y-10">
                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">React Native Developer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are looking for a React Native developer
                                                            interested in building performant mobile apps on both the iOS and Android platforms. You will be
                                                            responsible for architecting and building these applications, as well as coordinating with the teams
                                                            responsible for other layers of the product infrastructure. Building a product is a highly
                                                            collaborative effort, and as such, a strong team player with a commitment to perfection is required.
                                                        </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {activeTab === "QualityAssurance" && (
                                        <>
                                            <div className="w-full relative capitalize space-y-10">
                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">QA Tester</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a dedicated software QA lead to
                                                            join our growing company.You will collaborate with other technical staff to create effective and
                                                            reliable software updates and hotfixes to support our user base. As a software QA lead, you can put
                                                            your passion for QA testing to work and help optimize our users’ experiences. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {activeTab === "ContentMarketing" && (
                                        <>
                                            <div className="w-full relative capitalize space-y-10">
                                                <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10 rounded-xl">
                                                    <div className="space-y-4 ">
                                                        <h3 data-aos="fade-up" className="md:text-2xl text-xl font-semibold   text-[#090808] ">Content Writer</h3>
                                                        <div data-aos="fade-up" className="flex flex-wrap items-center justify-start gap-4"><span
                                                            className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">Work
                                                            From Office</span><span
                                                                className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">Full
                                                                Time</span></div>
                                                        <p data-aos="fade-up" className="font-normal md:text-base text-sm text-black "> We are seeking a dynamic Content Writer with 1
                                                            year of experience to join our team. The candidate will be responsible for creating engaging,
                                                            high-quality content across various digital platforms. This role requires a blend of creativity,
                                                            research skills, and a strong understanding of SEO principles to produce content that drives
                                                            engagement and aligns with our brand voice. </p>
                                                        <div data-aos="fade-up" className="flex justify-end mt-4">
                                                            <Link to="/contact-us" data-discover="true">
                                                                <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]">Apply Now
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" className="!bg-[#fff]" height="11.738"
                                                                        viewBox="0 0 24.231 11.738">
                                                                        <path id="Path_1487529" data-name="Path 1487529"
                                                                            d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                                                            transform="translate(-521.511 -1346.214)" fill="#f13c3c">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full lg:py-16 py-10 bg-gradient-blue-red">
                        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                            <div className="space-y-4 ">
                                <div className="space-y-4 text-center">
                                    <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold">What are we looking for?</h2>
                                    <p data-aos="fade-up" className="text-base text-[#fff] font-normal w-full">We’re not just developing websites and apps
                                        here, we’re making values and the foundation of our company.</p>
                                </div>
                                <div className="grid lg:gap-10 gap-6 pt-8 lg:grid-cols-3 md:grid-cols-2">
                                    <div
                                        className="feature-card-1 space-y-4 career-card-item relative overflow-hidden text-center border text-black rounded-md bg-white duration-200 transition cursor-pointer">
                                        <div className="p-10 space-y-3 ">
                                            <div className="flex justify-center" data-aos="fade-up">
                                                <img alt="[object Object]" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" src={icon1} />
                                            </div>
                                            <h2 data-aos="fade-up" className="lg:text-2xl text-xl font-bold ">Courage and Audacity</h2>
                                            <p data-aos="fade-up" className="text-sm">Winning in a competitive environment needs the person to be
                                                courageous enough to take bold steps. We are looking for people who are audacious and
                                                courageous enough to go ahead and take the challenges head-on and work towards getting
                                                fruitful results.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="space-y-4 career-card-item relative overflow-hidden text-center border text-black rounded-md bg-white duration-200 transition cursor-pointer">
                                        <div className="p-10 space-y-3">
                                            <div className="flex justify-center" data-aos="fade-up">
                                                <img alt="[object Object]" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" src={icon2} />
                                            </div>
                                            <h2 data-aos="fade-up" className="lg:text-2xl text-xl font-bold ">Curiosity</h2>
                                            <p data-aos="fade-up" className="text-sm">When a person is curious, they look for things very differently.
                                                We’re looking for someone who is always curious and eager to know the logic behind
                                                anything professional happening within the organization.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="space-y-4 career-card-item relative overflow-hidden text-center border text-black rounded-md bg-white duration-200 transition cursor-pointer">
                                        <div className="p-10 space-y-3">
                                            <div className="flex justify-center" data-aos="fade-up">
                                                <img alt="[object Object]" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" src={icon3} />
                                            </div>
                                            <h2 data-aos="fade-up" className="lg:text-2xl text-xl font-bold ">Solidarity and Integrity</h2>
                                            <p data-aos="fade-up" className="text-sm">Many jobs require teamwork, the ability to work efficiently and in
                                                tandem with a team is a strength that is what we are looking for. We want someone who
                                                brings out the best in other team members. We’re seeking the one who takes
                                                responsibility and learns from their own mistakes to show integrity and righteous
                                                behavior.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <ContactForm />
                <Footer />
                <TawkChat />
            </AOSProvider>
        </>
    );
};

export default CareerPage;
