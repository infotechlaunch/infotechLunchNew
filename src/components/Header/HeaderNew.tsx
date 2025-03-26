import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Images/logo.png';
import iconsev from '../../assets/Images/icon/mobile-app-development-header-icon.svg';
import iconsev01 from '../../assets/Images/icon/ai-development-icon.svg';
import iconsev02 from '../../assets/Images/icon/blockchain-app-dev-header-icon.svg';
import iconsev03 from '../../assets/Images/icon/coin-and-tokens-dev-header-icon.svg';
import iconsev04 from '../../assets/Images/icon/healthcare-app-dev-header-icon.svg';
import iconsev05 from '../../assets/Images/icon/full-stack-dev-header-icon.svg';
import iconsev06 from '../../assets/Images/icon/hire-dedicated-dev-header-icon.svg';


import iconsev07 from '../../assets/Images/icon/about-us-header-icon.svg';
import iconsev08 from '../../assets/Images/icon/hire-dedicated-dev-header-icon.svg';
import iconsev09 from '../../assets/Images/icon/our-portfolio-header-icon.svg';
import iconsev10 from '../../assets/Images/icon/career-at-comfygen-header-icon.svg';
import iconsev11 from '../../assets/Images/icon/life-at-comfygen-header-icon.svg';
import iconsev12 from '../../assets/Images/icon/contact-us-img.svg';
import iconsev13 from '../../assets/Images/icon/our-blog-img.svg';

import bg from '../../assets/Images/mobile-app-development-services-img.webp';

const tabs = [
    // {
    //     id: "ai-development",
    //     title: "AI Development",
    //     description: "Best AI Development Service",
    //     icon: iconsev01,
    //     links: [
    //         { name: "AI Development", path: "/ai-development" },
    //         { name: "AI Agent Development", path: "/ai-agent-development" },
    //     ]

    // },
    {
        id: "mobile-app",
        title: "Mobile App Development",
        description: "Innovative Solutions for Every Platform",
        icon: iconsev, // Replace with actual path
        links: [
            { name: "Android App Development", path: "/mobile-app-development" },
            { name: "Ios App Development", path: "/application-consulting" },
            { name: "Flutter App Development", path: "/application-consulting" },
            { name: "Cross Platform App Development", path: "/application-consulting" },
        ],
    },
 
    {
        id: "blockchain",
        title: "Blockchain Services",
        description: "Secure Blockchain-Based App Solutions",
        icon: iconsev02,
        links: [
            { name: "ICO Development", path: "/mobile-app-development" },
            { name: "Wallet Development", path: "/application-consulting" },
            { name: "Smart Contract", path: "/application-consulting" },
            { name: "NFT Development", path: "/application-consulting" },
            { name: "DEFI Development", path: "/application-consulting" },
            { name: "Telegram Mini Apps", path: "/application-consulting" },
            { name: "Asset Tokenization", path: "/application-consulting" },
            { name: "Real Estate Tokenization", path: "/application-consulting" },
        ]
    },
    {
        id: "crypto",
        title: "Coin And Tokens Development",
        description: "Custom Cryptocurrency Creation Made Easy",
        icon: iconsev03,
        links: [
            { name: "Crypto Token Development", path: "/crypto-token-development-company" },
            { name: "ERC-20 Token Development", path: "/erc20-token-development" },
            { name: "Ethereum Token Development", path: "/ethereum-token-development" },
            { name: "Solana Token Development", path: "/solana-token-development" },
            { name: "Tron Token Development", path: "/tron-token-development" },
            { name: "NFT Token Development", path: "/nft-token-development-company" },
            { name: "Altcoin Development Services", path: "/altcoin-development-services" },

        ],
    },
    {
        id: "healthcare",
        title: "Healthcare App Development",
        description: "Transforming Healthcare with Smart Apps",
        icon: iconsev04,
        links: [
            { name: "Doctor Appointment App Development", path: "/doctor-appointment-app-development" },
            { name: "Medicine Delivery App Development", path: "/medicine-delivery-app-development" },
            { name: "Medicine Ordering App Development", path: "/medicine-ordering-app-development" },
            { name: "Clinical App Development", path: "/clinical-app-development" },
            { name: "Pharmacy App Development", path: "/pharmacy-app-development" },
            { name: "Telemedicine App Development", path: "/telemedicine-app-development" },
            { name: "Laboratory App Development", path: "/laboratory-app-development" },
        ],
    },



    {
        id: "full-stack",
        title: "Full Stack Development",
        description: "In-depth End-to-End Development Services",
        icon: iconsev05,
        links: [
            { name: "ICO Development", path: "/mobile-app-development" },
            { name: "Wallet Development", path: "/application-consulting" },
            { name: "Smart Contract", path: "/application-consulting" },
            { name: "NFT Development", path: "/application-consulting" },
            { name: "DEFI Development", path: "/application-consulting" },
            { name: "Telegram Mini Apps", path: "/application-consulting" },
            { name: "Asset Tokenization", path: "/application-consulting" },
            { name: "Real Estate Tokenization", path: "/application-consulting" },
        ],
    },
    {
        id: "ideation",
        title: "Hire Dedicated Developers",
        description: "Skilled Developers for Your Projects",
        icon: iconsev06,
        links: [
            { name: "Hire Mobile App Developer", path: "/hire-mobile-app-developer" },
            // { name: "Hire .Net Developer", path: "/hire-dot-net-developer" },
            // { name: "Hire Blockchain Developer", path: "/hire-blockchain-developer" },
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
    {
        id: "Life",
        title: "Life at InInfoTech Launch",
        description: "Experience Our Collaborative Work Culture",
        icon: iconsev11,
        path: "/life-at-infotechlaunch",

    },
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
// const Resources = [
//     {
//         id: "Videos",
//         title: "Videos",
//         description: "Visual stories that inspire and educate.",
//         icon: iconsev07,
//         path: "/Videos",

//     },
//     {
//         id: "Infographics",
//         title: "Infographics",
//         description: "Simplifying data with stunning visuals.",
//         icon: iconsev08,
//         path: "/infographics",

//     },
//     {
//         id: "industry",
//         title: "Industry Reports",
//         description: "Insights for smarter business decisions.",
//         icon: iconsev09,
//         path: "/portfolio",

//     },
//     {
//         id: "books",
//         title: "Feature books",
//         description: "Discover ideas through expert books.",
//         icon: iconsev10,
//         path: "/feature-books",

//     },
//     {
//         id: "books",
//         title: "Talent Solutions",
//         description: "Dive into a world of limitless possibilities",
//         icon: iconsev10,
//         path: "/talent-solutions",

//     },
// ];
const Industries = [
    {
        id: "food",
        title: "Food & Beverage",
        description: "Food Delivery & Grocery Delivery",
        icon: iconsev07,
        path: "/food-beverageeos",

    },
    {
        id: "InfoLogistics",
        title: "Logistics & Delivery",
        description: "Pickup & Delivery & On Demand Delivery",
        icon: iconsev08,
        path: "/infographics",

    },
    {
        id: "Entertainment",
        title: "Entertainment",
        description: "OTT & Video Streaming ",
        icon: iconsev09,
        path: "/entertainment",

    },
    {
        id: "Enterprise",
        title: "Enterprise",
        description: "CRM & ERP",
        icon: iconsev10,
        path: "/enterprise",

    },
    {
        id: "Travel",
        title: "Travel & Transport",
        description: "Travel & Transport",
        icon: iconsev10,
        path: "/travel-transport",

    },
    {
        id: "E-commerce",
        title: "E-commerce",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/ecommerce",

    },
    {
        id: "Education",
        title: "Education",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/education",

    },
    {
        id: "RealEstate",
        title: "Real Estate",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/real-estate",

    },
    {
        id: "Fantasy",
        title: "Fantasy & Betting",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/fantasy",

    },
    {
        id: "Healthcare",
        title: "Healthcare",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/healthcare",

    },
    {
        id: "On-Demand",
        title: "On-Demand",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/on-demand",

    },
    {
        id: "FinTech",
        title: "FinTech",
        description: "Fitness App & Nutrition app & Yoga",
        icon: iconsev10,
        path: "/fintech",

    },
];
const HeaderNew: React.FC = () => {
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
                                <span className="w-[60px] h-[60px] bg-[#297ea3] rounded-full mr-[15px]"> <img src={Logo} alt="" width="100" height="51" /></span>
                                <span className="xl:text-3xl md:text-2xl text-2xl text-xl font-bold text-[#212121]">InfoTech Launch</span>                                 {/* <span className="xl:text-3xl md:text-2xl text-2xl text-xl font-bold text-[#212121]">Vivek Gupta</span> */}
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
                                <div>
                                    <Link to="/">
                                        <span
                                            className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer px-2  py-9 hover:text-[#f13c3c] text-black/80 ">Home</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ai-development">
                                        <span
                                            className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer px-2  py-9 hover:text-[#f13c3c] text-black/80 ">AI Development</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/talent-solutions">
                                        <span
                                            className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer px-2  py-9 hover:text-[#f13c3c] text-black/80 ">AI Talent Solutions</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ai-social-media/">
                                        <span
                                            className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer px-2  py-9 hover:text-[#f13c3c] text-black/80 ">AI Social Media </span>
                                    </Link>
                                </div>
                                <div className="group">
                                    <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80"><span
                                        className=" font-medium ">Services</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl  capitalize text-gray-700 lg:absolute top-20  lg:drop-shadow-xl lg:border whitespace-nowrap  left-0  transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-full">
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
                                    <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80">
                                        <span className="font-medium">Industries</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>

                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap left-0 transform hidden group-hover:block transition duration-200 ease-in-out origin-top w-full">
                                        <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                                            <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">

                                                <div className="col-span-3">
                                                    <ul className="tab_list grid grid-cols-3 2xl:gap-[15px] gap-[20px]">
                                                        {Industries.map((Industrie) => (
                                                            <Link to={Industrie.path} className="flex items-start gap-2 p-2 py-3 rounded-md cursor-pointer hover:bg-[#f13c3c]/10">
                                                                <img alt={Industrie.title} loading="lazy" width="40" height="40" src={Industrie.icon} />
                                                                <div>
                                                                    <p className="2xl:text-lg xl:text-base font-medium text-[#212121]">
                                                                        {Industrie.title}
                                                                    </p>
                                                                    <span className="text-[#212121]/80 text-sm font-normal">{Industrie.description}</span>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                               {/* <div className="group">
                                    <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80">
                                        <span className="font-medium">Resources</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>

                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap left-0 transform hidden group-hover:block transition duration-200 ease-in-out origin-top w-full">
                                        <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                                            <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">

                                                <div>
                                                    <ul className="tab_list">
                                                        {Resources.map((Resource) => (
                                                            <Link to={Resource.path} className="flex items-start gap-2 p-2 py-3 rounded-md cursor-pointer hover:bg-[#f13c3c]/10">
                                                                <img alt={Resource.title} loading="lazy" width="40" height="40" src={Resource.icon} />
                                                                <div>
                                                                    <p className="2xl:text-lg xl:text-base font-medium text-[#212121]">
                                                                        {Resource.title}
                                                                    </p>
                                                                    <span className="text-[#212121]/80 text-sm font-normal">{Resource.description}</span>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div></div>
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
                                </div>*/}
                                <div className="group">
                                    <button className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-[#f13c3c] text-black/80">
                                        <span className="font-medium">Company</span>
                                        <svg stroke="currentColor"
                                            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="hover:text-[#f13c3c] text-black/80" height="18" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </button>

                                    <div className="z-50 relative lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap left-0 transform hidden group-hover:block transition duration-200 ease-in-out origin-top w-full">
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
                        {/* <div className="xl:block hidden">
                            <Link to='/Contact-us' className="btn-comn">
                                <div className="btn-left-sec">
                                    <span>Get a Quote</span>
                                </div>
                                <div className="btn-rund-sec">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="#fff" d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div> */}
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
                                        <div>
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
                                        <div>
                                        <Link to="/ai-social-media/">
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
                                        <ul className="grid grid-cols-1 gap-2 p-4">
                                            <div className="p-3 space-y-2 text-sm font-medium">
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ai-development">Ai Development</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ai-agent-development">AI Agent Development</Link></li>
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
                                                <span>Development</span>
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
                                                <div className="p-2 space-y-2 text-sm font-medium">
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/mobile-app-development"> Mobile app Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/ca/application-consulting-services"> Application Consulting Service</Link>
                                                    </li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/hybrid-mobile-app-development"> Hybrid Mobile App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/ios-app-development"> iOS App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/android-app-development"> Android App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/flutter-development-company"> Flutter Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/news-application-development"> News &amp; Web App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/live-line-cricket-mobile-app-development"> Cricket Fast Line App
                                                            Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/e-commerce-app-development"> E-Commerce App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/taxi-app-development-company"> Taxi App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/food-delivery-app-development"> Food Delivery App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/ca/startup-app-development"> Startup App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/dating-app-development"> Dating App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/doctor-appointment-app-development"> Doctor Appointment App Development
                                                        </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/clinical-application-development"> Clinical App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/pharmacy-app-development"> Pharmacy App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/telemedicine-app-development"> Telemedicine App Development </Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/medicine-delivery-app-development"> Medicine Delivery App Development</Link>
                                                    </li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/medicine-app-development"> Medicine Ordering App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/laboratory-app-development"> Laboratory App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/news-application-development"> News Application Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/ca/education-app-development-company"> Education App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/ca/magazine-app-development-company"> Magazine App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/e-learning-app-development"> E-Learning App Development</Link></li>
                                                </div>
                                                <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                </svg></span>Web Development
                                                </p>
                                                <div className="space-y-2 text-sm font-medium">
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/web-development"> Website Development</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/web-design"> Website Design</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/mern-stack-development"> MERN stack development</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/node-js-development"> Node JS Development</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/react-js-development"> React JS Development</Link></li>
                                                    <li
                                                        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/next-js-development"> Next JS Development</Link></li>
                                                </div>
                                                <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    className="text-[#212121]" height="22" width="22"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                </svg></span>Stack Development</p>
                                                <div className="space-y-2 text-sm font-medium">
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/react-native-development"> React Native Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/python-development"> Python Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/iot-development-company"> IoT Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/hire-mobile-app-developer"> Hire Mobile App Developer</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/social-media-app-development"> Social Media App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/finance-app-development"> Finance App Developer</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/healthcare-app-development"> Healthcare App Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/mobile-game-development-company"> Mobile game Development</Link></li>
                                                    <li
                                                        className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/hire-dot-net-developer"> Hire .Net Developer</Link></li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-between p-3 items-center px-6 bg-transparent" onClick={() => toggleSection('blockchain')}>
                                        <div className="flex items-center space-x-2">
                                            <svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" className="text-[#212121]" height="22" width="22"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 16.4212 7.5866 20.0029 12.0049 20.0029ZM11.0049 16.0029H8.00488V8.00293H11.0049V6.00293H13.0049V8.00293H14.0049C15.3856 8.00293 16.5049 9.12222 16.5049 10.5029C16.5049 11.0657 16.3189 11.5851 16.0051 12.0029C16.3189 12.4208 16.5049 12.9401 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029ZM10.0049 13.0029V14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049ZM10.0049 10.0029V11.0029H14.0049C14.281 11.0029 14.5049 10.7791 14.5049 10.5029C14.5049 10.2268 14.281 10.0029 14.0049 10.0029H10.0049Z">
                                                </path>
                                            </svg>
                                            <span> Blockchain </span>
                                        </div>
                                        <svg stroke="currentColor" fill="currentColor"
                                            stroke-width="0" viewBox="0 0 24 24" className={`rotate-0 ${openSection === 'blockchain' ? 'rotate-180' : ''}`} height="30" width="30"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </div>
                                    <div className="bg-transparent text-[#212121] font-normal pl-4 text-sm capitalize overflow-hidden transition-[max-height] duration-300 ease-in" style={{ maxHeight: openSection === 'blockchain' ? 'none' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out', }}>
                                        <ul className="grid grid-cols-1 gap-2 p-4">
                                            <p className="flex items-center text-base font-medium text-[#212121]">
                                                <span className="pr-1">
                                                    <svg
                                                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                        className="text-[#212121]" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                    </svg>
                                                </span>Blockchain Development
                                            </p>
                                            <div className="p-3 space-y-2 text-sm font-medium">
                                                <li className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/blockchain-development">Blockchain Development company</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/blockchain-consulting-services">Blockchain Consulting Service</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/substrate-development-company">Substrate Development Company</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/polygon-blockchain-development">polygon Blockchain development</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/hyperledger-blockchain-development">Hyperledger Blockchain Development</Link>
                                                </li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/multichain-blockchain-development">Multichain Blockchain</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/solana-blockchain-development-company">Solana Blockchain Development</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/stellar-blockchain-development-company">Stellar Blockchain Development</Link>
                                                </li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/cardano-blockchain-development-company">Cardano Blockchain Development</Link>
                                                </li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ethereum-blockchain-development-company">Ethereum Blockchain Development</Link>
                                                </li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/hire-blockchain-developer">Hire Blockchain Developer</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/pow-blockchain-development-company">POW Blockchain Development</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/poa-blockchain-development-company">POA Blockchain Development</Link></li>
                                                <li
                                                    className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ca/dpos-blockchain-development-company">DPOS Blockchain Development</Link></li>
                                            </div>
                                            <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                className="text-[#212121]" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                            </svg></span>Token Development</p>
                                            <div className="p-3 space-y-2 text-sm font-medium">
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/crypto-token-development-company">Crypto Token Development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/erc20-token-development">ERC-20 Token Development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/ethereum-token-development">Ethereum token development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/solana-token-development">Solana token development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/tron-token-development">Tron token development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/nft-token-development-company">NFT token development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/altcoin-development-services">Altcoin Development services</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/nft-marketplace-development-company">NFT Marketplace Development</Link></li>
                                            </div>
                                            <p className="flex items-center text-base font-medium text-[#212121]"><span className="pr-1"><svg
                                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                className="text-[#212121]" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                            </svg></span>Other Development</p>
                                            <div className="p-3 space-y-2 text-sm font-medium">
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/crypto-wallet-development">Crypto wallet development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/cryptocurrency-exchange-development">Crypto exchange services</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/cryptocurrency-mlm-software-development">Crypto MLM Software development</Link>
                                                </li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/crypto-white-paper-development">Crypto White Paper Development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/metaverse-development">Metaverse Development Company</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/decentralized-exchange-development">Decentralized Exchange Development</Link>
                                                </li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/dapp-development-company">dApp Development Company</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/defi-development-company">DeFi Development Company</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/defi-smart-contract-development">DeFi Smart Contract Development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/smart-contract-development">Smart Contract Development</Link></li>
                                                <li
                                                    className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                    <Link to="/smart-contract-mlm-software">Smart Contract MLM Software</Link></li>
                                            </div>
                                        </ul>
                                    </div> */}
                                  
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
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/about-us">About us</Link></li>
                                                    <li
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/portfolio">Our Portfolio</Link></li>
                                                    <li
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/career">Career at InfoTech Launch</Link></li>
                                                    <li
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="//life-at-infotechlaunch">Life at InfoTech Launch</Link></li>
                                                    <li
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/client-testimonials">Client testimonial</Link></li>
                                                    <li
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                                                        <Link to="/contact-us">Contact us</Link></li>
                                                    <li
                                                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
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
