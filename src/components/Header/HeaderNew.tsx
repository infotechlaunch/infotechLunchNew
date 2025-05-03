import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/Images/logo.png';
import iconsev from '../../assets/Images/icon/mobile-app-development-header-icon.svg';
// import iconsev01 from '../../assets/Images/icon/ai-development-icon.svg';
import iconsev02 from '../../assets/Images/icon/blockchain-app-dev-header-icon.svg';
import iconsev03 from '../../assets/Images/icon/coin-and-tokens-dev-header-icon.svg';
import iconsev04 from '../../assets/Images/icon/healthcare-app-dev-header-icon.svg';
import iconsev05 from '../../assets/Images/icon/full-stack-dev-header-icon.svg';
import iconsev06 from '../../assets/Images/icon/hire-dedicated-dev-header-icon.svg';


import iconsev07 from '../../assets/Images/icon/about-us-header-icon.svg';
import iconsev08 from '../../assets/Images/icon/hire-dedicated-dev-header-icon.svg';
import iconsev09 from '../../assets/Images/icon/our-portfolio-header-icon.svg';
import iconsev10 from '../../assets/Images/icon/career-at-comfygen-header-icon.svg';
// import iconsev11 from '../../assets/Images/icon/life-at-comfygen-header-icon.svg';
import iconsev12 from '../../assets/Images/icon/contact-us-img.svg';
import iconsev13 from '../../assets/Images/icon/our-blog-img.svg';
import aiConsultingIcon from '../../assets/Images/icon/ai-conulting.png';


import bg from '../../assets/Images/mobile-app-development-services-img.webp';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {aiVoiceIcon} from "@fortawesome/fa-solid fa-microphone-lines";

const tabs = [
    {
        id: "mobile-app",
        title: "Mobile App Development",
        description: "Innovative Solutions for Every Platform",
        icon: iconsev, // Replace with actual path
        links: [
            { name: "UI/UX Design", path: "/ui-ux-design" },
        ],
    },
    {
        id: "healthcare",
        title: "Healthcare App Development",
        description: "Transforming Healthcare with Smart Apps",
        icon: iconsev04,
        links: [
            { name: "Healthcare", path: "/health-care" },
        ],
    },



    {
        id: "full-stack",
        title: "Software Development",
        description: "In-depth End-to-End Development Services",
        icon: iconsev05,
        links: [
            { name: "Full stack Development", path: "/ai-development" },
        ],
    },
    {
        id: "ideation",
        title: "Hire Dedicated Developers",
        description: "Skilled Developers for Your Projects",
        icon: iconsev06,
        links: [
            { name: "Hire Mobile App Developer", path: "/hire-mobile-app-developer" },
        ],
    },
];

const companies = [
    {
        id: "about-us",
        title: "About Us",
        description: "Who We Are and What We Do",
        icon: iconsev07,
        path: "/about-us",

    },
    {
        id: "testimonial",
        title: "Client testimonial",
        description: "What Our Clients Say About Us",
        icon: iconsev08,
        path: "/client-testimonial",

    },
    {
        id: "portfolio",
        title: "Our Portfolio",
        description: "Showcasing Our Successful Projects",
        icon: iconsev09,
        path: "/portfolio",

    },
    {
        id: "Career",
        title: "Career At In InfoTech Launch",
        description: "Join Our Dynamic Team Today",
        icon: iconsev10,
        path: "/Career-at-infotechlaunch",

    },
    // {
    //     id: "Life",
    //     title: "Life at InInfoTech Launch",
    //     description: "Experience Our Collaborative Work Culture",
    //     icon: iconsev11,
    //     path: "/life-at-infotechlaunch",

    // },
    {
        id: "Contact",
        title: "Contact us",
        description: "Get in Touch with Us",
        icon: iconsev12,
        path: "/contact-us",

    },
    {
        id: "Blog",
        title: "Our Blog",
        description: "Insights and Updates from InInfoTech Launch",
        icon: iconsev13,
        path: "/blog",

    }


];

const aiDevelopment = [

    {
        id: "mobile-app",
        title: "AI Consulting",
        description: "Smart AI solutions for business growth.",
        icon: aiConsultingIcon,
        path: "/ai-consulting"
    },
 
    {
        id: "blockchain",
        title: "AI Agent Development",
        description: "Building smart agents for automated tasks.",
        icon: iconsev02,
        path: "/ai-agent-development-new"
    },

    {
        id: "crypto",
        title: "Adaptive AI Development",
        description: "Creating AI that learns and evolves.",
        icon: iconsev03,
        path: "/adaptive-ai-development"
    },

    {
        id: "healthcare",
        title: "AI Chatbot Development",
        description: "Building chatbots that talk smart.",
        icon: iconsev04,
        path: "/ai-chatbot-development"
    },
    {
        id: "development",
        title: "AI Development",
        description: "Building chatbots that talk smart.",
        icon: iconsev04,
        path: "/ai-development"
    },

];

const HeaderNew: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSlideOver = () => {
        setIsOpen(!isOpen);
    };

    const [openSection, setOpenSection] = useState<string | number | null>(null);

    const toggleSection = (sectionId: string | number) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    return (
        <div className="h-[60px] md:h-[80px]">
            <div className='headerMain fixed top-0 w-full bg-white z-50'>
                <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                    <nav className="flex items-center justify-between py-0 w-full mx-auto  md:px-0 relative  mx-auto">
                        
                        <div>
                            <Link to="/" className="relative flex items-center flex-shrink-0 text-white">
                                <span className="w-[70px] h-[70px] bg-[#297ea3] rounded-full mr-[15px] flex items-center justify-center">
                                    <img src={Logo} alt="" className="w-[70px] h-auto" />
                                </span>
                                <span className="flex flex-col leading-tight text-[#212121]">
                                    <span className="xl:text-1xl md:text-1xl text-1xl font-bold">InfoTech</span>
                                    <span className="xl:text-1xl md:text-1xl text-1xl font-bold">Launch</span>
                                </span>
                            </Link>
                        </div>

                        <div>
                            <button onClick={toggleSlideOver} className="bg-[#fff] menu-bar flex items-center my-2 rounded cursor-pointer text-slate-600 xl:hidden">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="45"
                                    width="45" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                                    <path fill="#000" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="xl:flex flex-col xl:w-auto w-full items-center text-white px-6 xl:block hidden">
                            <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
                                <div className={`${
                                    location.pathname === "/"
                                    ? "bg-blue-100 text-black border-[#f13c3c]"
                                    : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                } relative block text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>
                                </div>

                                

                                <div className={`${
                                        location.pathname === "/ai-voice-agent"
                                        ? "bg-blue-100 text-black border-[#f13c3c]"
                                        : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                    } relative block text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                    <Link to="/ai-voice-agent">
                                        <span>AI Voice Agent</span>
                                    </Link>
                                </div>

                                <div className={`${
                                        location.pathname === "/ai-social-media"
                                        ? "bg-blue-100 text-black border-[#f13c3c]"
                                        : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                    } relative block text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                    <Link to="/ai-social-media">
                                        <span>AI Social Media</span>
                                    </Link>
                                </div>

                                <div className={`${
                                        location.pathname === "/talent-solutions"
                                        ? "bg-blue-100 text-black border-[#f13c3c]"
                                        : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                    } relative block text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                    <Link to="/talent-solutions">
                                        <span>AI Talent Solutions</span>
                                    </Link>
                                </div>
                                
                                <div>
                                <div className="group">
                                    {/* <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80"> */}
                                    <button className={`${
                                            location.pathname === "/ai-consulting" || 
                                            location.pathname === "/ai-agent-development-new" ||
                                            location.pathname === "/adaptive-ai-development" ||
                                            location.pathname === "/ai-chatbot-development" ||
                                            location.pathname === "/ai-development"
                                            ? "bg-blue-100 text-black border-[#f13c3c]"
                                            : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                        } inline-flex items-center text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                        <span className=" font-medium ">AI Development</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[0px] lg:bg-white rounded-2xl  capitalize text-gray-700 lg:absolute top-20  lg:drop-shadow-xl lg:border whitespace-nowrap  left-0  transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-full">
                                        <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                                            <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                                                <div className="">
                                                    <ul className="tab_list">
                                                        {aiDevelopment.map((tab) => (
                                                            <li
                                                                key={tab.id}
                                                                onClick={() => setActiveTab(tab.id)}
                                                                className={`flex items-start gap-2 p-2 py-3 rounded-md cursor-pointer ${activeTab === tab.id ? "bg-[#f13c3c]/10" : "hover:bg-[#f13c3c]/10"
                                                                    }`}
                                                            >
                                                                <Link to={tab.path}>
                                                                <div>
                                                                    <p className="2xl:text-lg xl:text-base font-medium text-[#212121]">{tab.title}</p>
                                                                    <span className="text-[#212121]/80 text-sm font-normal">{tab.description}</span>
                                                                </div>
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                </div>
                                                <div className="space-y-10">
                                                    
                                                </div>

                                                <div>
                                                    <Link to="/contact-us" className="relative">
                                                        <img alt="" loading="lazy" width="452" height="475" className="w-full" src={bg} />
                                                        <span className="bg-[#fff] absolute bottom-0 right-0 p-4 block justify-end items-center rounded-tl-[50px]">
                                                            <button className="flex items-center gap-2 bg-[#f13c3c] py-3 px-6 font-semibold rounded-full text-base text-white">Connect
                                                                to expert
                                                            </button>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                
                                {/* <div>
                                    <Link to="/ai-social-media/">
                                        <span
                                            className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer px-2  py-9 hover:text-[#f13c3c] text-black/80 ">AI Social Media </span>
                                    </Link>
                                </div> */}
                                
                                <div className="group">
                                    {/* <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80"> */}
                                    <button className={`${
                                        location.pathname === "/ui-ux-design" ||
                                        location.pathname === "/health-care" ||
                                        location.pathname === "/hire-mobile-app-developer"
                                        ? "bg-blue-100 text-black border-[#f13c3c]"
                                        : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                    } inline-flex items-center text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                    <span className=" font-medium ">Services</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[0px] lg:bg-white rounded-2xl  capitalize text-gray-700 lg:absolute top-20  lg:drop-shadow-xl lg:border whitespace-nowrap  left-0  transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-full">
                                        <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                                            <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                                                <div className="">
                                                    <ul className="tab_list">
                                                        {tabs.map((tab) => (
                                                            <li
                                                                key={tab.id}
                                                                onClick={() => setActiveTab(tab.id)}
                                                                className={`flex items-start gap-2 p-2 py-3 rounded-md cursor-pointer ${activeTab === tab.id ? "bg-[#f13c3c]/10" : "hover:bg-[#f13c3c]/10"
                                                                    }`}
                                                            >
                                                                <img alt={tab.title} loading="lazy" width="40" height="40" src={tab.icon} />
                                                                <div>
                                                                    <p className="2xl:text-lg xl:text-base font-medium text-[#212121]">{tab.title}</p>
                                                                    <span className="text-[#212121]/80 text-sm font-normal">{tab.description}</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="space-y-10">
                                                    <div className="tab_data">
                                                        {tabs.map(
                                                            (tab) =>
                                                                activeTab === tab.id && (
                                                                    <ul key={tab.id} className="text-sm font-medium space-y-2">
                                                                        {tab.links.map((link, index) => (
                                                                            <li key={index}>
                                                                                <Link to={link.path} className="py-1.5 block text-black/80 hover:text-[#f13c3c] whitespace-nowrap transition duration-200 transform hover:translate-x-4"
                                                                                >
                                                                                    {link.name}
                                                                                </Link>

                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )
                                                        )}
                                                    </div>
                                                </div>

                                                <div>
                                                    <Link to="/contact-us" className="relative">
                                                        <img alt="" loading="lazy" width="452" height="475" className="w-full" src={bg} />
                                                        <span className="bg-[#fff] absolute bottom-0 right-0 p-4 block justify-end items-center rounded-tl-[50px]">
                                                            <button className="flex items-center gap-2 bg-[#f13c3c] py-3 px-6 font-semibold rounded-full text-base text-white">Connect
                                                                to expert
                                                            </button>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    {/* <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80"> */}
                                    <button className={`${
                                        location.pathname === "/about-us" ||
                                        location.pathname === "/portfolio" ||
                                        location.pathname === "/contact-us" ||
                                        location.pathname === "/client-testimonial" ||
                                        location.pathname === "/Career-at-infotechlaunch" ||
                                        location.pathname === "/blog" ||
                                        location.pathname.startsWith("/BlogDeatils")
                                        ? "bg-blue-100 text-black border-[#f13c3c]"
                                        : "text-black/80 border-transparent hover:text-[#f13c3c]"
                                    } inline-flex items-center text-sm leading-none transition duration-300 border-b-2 cursor-pointer px-2 py-5`}>
                                        <span className="font-medium">Company</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>

                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[0px] lg:bg-white rounded-2xl capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap left-0 transform hidden group-hover:block transition duration-200 ease-in-out origin-top w-full">
                                        <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                                            <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">

                                                <div className="col-span-2">
                                                    <ul className="tab_list grid grid-cols-2 2xl:gap-[10px] gap-[20px]">
                                                        {companies.map((company) => (
                                                            <Link to={company.path} className="flex items-start gap-2 p-2 py-3 rounded-md cursor-pointer hover:bg-[#f13c3c]/10">
                                                                <img alt={company.title} loading="lazy" width="40" height="40" src={company.icon} />
                                                                <div>
                                                                    <p className="2xl:text-lg xl:text-base font-medium text-[#212121]">
                                                                        {company.title}
                                                                    </p>
                                                                    <span className="text-[#212121]/80 text-sm font-normal">{company.description}</span>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link to="/contact-us" className="relative">
                                                        <img alt="" loading="lazy" width="452" height="475" className="w-full" src={bg} />
                                                        <span className="bg-[#fff] absolute bottom-0 right-0 p-4 block justify-end items-center rounded-tl-[50px]">
                                                            <button className="flex items-center gap-2 bg-[#f13c3c] py-3 px-6 font-semibold rounded-full text-base text-white">
                                                                Connect to expert
                                                            </button>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div id="slideover-container" className={`fixed inset-0 w-full h-full ${isOpen ? "visible" : "invisible"}`}>
                            <span
                                id="slideover-bg"
                                className={`absolute inset-0 w-full h-full bg-gray-900 transition-opacity duration-500 ${isOpen ? "opacity-50" : "opacity-0"
                                    }`}
                                onClick={toggleSlideOver}
                            ></span>
                            <div id="slideover" className={`md:w-96 w-80 bg-white h-full absolute right-0 duration-300 ease-out transition-transform overflow-scroll ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                                <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-2 bg-transparent bg-white">
                                    <div className="text-[#212121] text-lg font-semibold">Menu</div>
                                    <span className="p-2 rounded-full bg-slate-100/20" onClick={toggleSlideOver}>
                                        <svg stroke="currentColor" fill="currentColor"
                                            stroke-width="0" viewBox="0 0 16 16" className="text-[#212121]" height="24" width="24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="font-medium text-[#212121] divide-y divide-white/10">
                                    <div>
                                        <Link to="/">
                                            <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                                                <svg stroke="currentColor"
                                                    fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                                    stroke-linejoin="round" className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                </svg>
                                                <span>Home</span></div>
                                        </Link>
                                    </div>

                                        {/* <div>
                                            <Link to="/ai-development">
                                                <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                                                <svg stroke="currentColor" fill="currentColor"
                                                    stroke-width="0" viewBox="0 0 640 512" className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
                                                    </path>
                                                </svg>
                                                    <span>AI Development</span></div>
                                            </Link>
                                        </div> */}
                                        <div>
                                            <Link to="/ai-voice-agent">
                                                <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="text-[#212121]" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M96 96l0 160c0 53 43 96 96 96s96-43 96-96l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c0-53-43-96-96-96S96 43 96 96zM320 240l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24z"/>
                                                    </svg>
                                                    <span>AI Voice Agent</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="/ai-social-media">
                                                <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                                                <svg stroke="currentColor" fill="currentColor"
                                                    stroke-width="0" viewBox="0 0 640 512" className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
                                                    </path>
                                                </svg>
                                                    <span>AI Social Media</span></div>
                                            </Link>
                                        </div>

                                        <div>
                                            <Link to="/talent-solutions">
                                                <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                                                <svg stroke="currentColor" fill="currentColor"
                                                    stroke-width="0" viewBox="0 0 640 512" className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
                                                    </path>
                                                </svg>
                                                    <span>AI Talent Solutions</span></div>
                                            </Link>
                                        </div>
                                        
                                        

                                        

                                        <div className="flex justify-between p-3 items-center px-6 bg-transparent" onClick={() => toggleSection('aiDevelopment')}>
                                        <div className="flex items-center space-x-2 ">
                                            <svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 640 512" className="text-[#212121]" height="22" width="22"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
                                                </path>
                                            </svg>
                                            <span> AI Development</span>
                                        </div>
                                        <svg stroke="currentColor" fill="currentColor"
                                            stroke-width="0" viewBox="0 0 24 24" className={`rotate-0 ${openSection === 'aiDevelopment' ? 'rotate-180' : ''}`} height="30" width="30"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </div>
                                    <div
                                        className="bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in" style={{
                                            maxHeight: openSection === 'aiDevelopment' ? 'none' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.3s ease-in-out',
                                        }}>
                                        <ul className="grid grid-cols-1 gap-2">
                                            <div className="p-3 space-y-2 text-sm font-medium">

                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ai-consulting">AI Consulting</Link>
                                                </li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ai-agent-development">AI Agent Development</Link>
                                                </li>

                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/adaptive-ai-development">Adaptive AI Development</Link>
                                                </li>

                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ai-chatbot-development">AI Chatbot Development</Link>
                                                </li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ai-development">AI Development</Link>
                                                </li>

                                            </div>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex justify-between p-3 items-center px-6 bg-transparent " onClick={() => toggleSection('development')}>
                                            <div className="flex items-center space-x-2 ">
                                                <svg stroke="currentColor" fill="currentColor"
                                                    stroke-width="0" viewBox="0 0 24 24" className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18 2C18.5523 2 19 2.44772 19 3V10H17V4H7V20H12V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM18 12C19.6569 12 21 13.3431 21 15V16H22V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21V16H15V15C15 13.3431 16.3431 12 18 12ZM20 18H16V20H20V18ZM18 14C17.4919 14 17 14.45 17 15V16H19V15C19 14.4477 18.5523 14 18 14Z">
                                                    </path>
                                                </svg>
                                                <span>Services</span>
                                            </div>
                                            <svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" className={`rotate-0 ${openSection === 'development' ? 'rotate-180' : ''}`}
                                                height="30" width="30"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                            </svg>
                                        </div>
                                        <div className="bg-transparent text-[#212121] font-normal pl-4 text-sm capitalize overflow-hidden transition-[max-height] duration-300 ease-in" style={{
                                            maxHeight: openSection === 'development' ? 'none' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out',
                                        }}>
                                            <ul className="grid grid-cols-1 gap-2 p-4">
                                                <p className="flex items-center text-base font-medium text-[#212121]">
                                                    <span className="pr-1">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                            className="text-[#212121]" height="22" width="22"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                        </svg>
                                                    </span>Mobile App Development
                                                </p>
                                                <div className="space-y-2 text-sm font-medium">
                                                <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/ui-ux-design"> UI/UX</Link>
                                                    </li>
                                                    
                                                </div>
                                                <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                </svg></span>Healthcare App Development
                                                </p>
                                                <div className="space-y-2 text-sm font-medium">
                                                <li className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/health-care"> Health Care</Link>
                                                    </li>
                                                </div>
                                                <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                </svg></span>Software Development</p>
                                                <div className="space-y-2 text-sm font-medium">
                                                    
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/full-stack-development"> Full Stack Development</Link>
                                                    </li>
                                                    
                                                </div>
                                                <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                </svg></span>Hire Dedicated Developers</p>
                                                <div className="space-y-2 text-sm font-medium">
                                                    
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/hire-mobile-app-developer"> Hire Mobile App Developer</Link>
                                                    </li>
                                                    
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                  
                                    <div>
                                        <div className="flex justify-between p-3 items-center px-6 bg-transparent " onClick={() => toggleSection('OurCompany')}>
                                            <p className="flex items-center space-x-2 "><svg stroke="currentColor" fill="none" stroke-width="2"
                                                viewBox="0 0 24 24" aria-hidden="true" className="text-[#212121]" height="22" width="22"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                                </path>
                                            </svg>
                                                <span> Our Company</span>
                                            </p>
                                            <svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" className={`rotate-0 ${openSection === 'OurCompany' ? 'rotate-180' : ''}`} height="30" width="30"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in" style={{
                                                maxHeight: openSection === 'OurCompany' ? 'none' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out',
                                            }}>
                                            <ul className="grid grid-cols-1 gap-2 p-4">
                                                <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                </svg></span>Our Company</p>
                                                <div className="p-3 space-y-2 text-sm font-medium ">
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/about-us">About us</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/portfolio">Our Portfolio</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/Career-at-infotechlaunch">Career at InfoTech Launch</Link></li>
                                                    {/* <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/life-at-infotechlaunch">Life at InfoTech Launch</Link></li> */}
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/client-testimonial">Client testimonial</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/contact-us">Contact us</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/blog">Our Blog</Link></li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="flex items-center justify-center py-8 px-8 w-full">
                                        <Link className="w-full" to="/contact-us">
                                            <div
                                                className="relative inline-flex w-full items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-[#fff] rounded-full cursor-pointer bg-[#f13c3c] group">
                                                Get In Quote</div>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderNew;
