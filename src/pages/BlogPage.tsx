import React, { useState, useEffect } from "react";
import heroimg from "../assets/Images/hero-img/blog-hero-img.webp";

import { Link } from 'react-router-dom';
import HeaderNew from "../components/Header/HeaderNew";
import TawkChat from "./TawkChat";
import Footer from "../components/Footer/Footer";
import AOSProvider from "../components/AOSProvider";
import Axios from "axios";


const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};

const BlogPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("All");
    const [blogs, setBlogs] = useState([]);

    const tabs = ["All", "Mobile App", "AI Development"];

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        // Axios.get(`https://dishefs.com/infotech_admin/api/get-blogs`)
        Axios.get(`https://infotechlaunch.com/infotech-admin/public/api/get-blogs`)
        .then((response) => {
            // console.log('response data status =======>>>>', response.data.status);
            console.log('response data data =======>>>>', response.data.data);
            if(response.data.status === true) {
                setBlogs(response.data.data);
            }
        });
    }, []);

    

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <section className="bg-gradient-blue-red">
                    <div className="flex items-end justify-between  py-0  relative xl:container 2xl:px-0 md:px-6 px-4 w-full mx-auto flex lg:flex-row flex-col lg:gap-8 gap-0">
                        <div className="w-full space-y-4 lg:py-16 py-10 flex flex-col lg:items-start items-center lg:text-left text-center">
                            <h1 data-aos="fade-right" data-aos-delay="100" className="text-4xl font-semibold text-white leading-[3rem]">
                                Insights, Ideas, and Innovations
                            </h1>
                            <p data-aos="fade-right" data-aos-delay="100" className="text-base text-white lg:text-left text-center">Explore expert opinions, industry trends, and
                                inspiring stories that fuel your journey in the
                                ever-evolving tech world.</p>
                            <div data-aos="fade-right" data-aos-delay="100" className="mt-2">
                                <button className="btn btn-fix lazyloaded">Explorer blog
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"><path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#fff">
                                    </path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="100" className="flex flex-col justify-end w-full">
                        <img alt="[object Object]" loading="lazy" width="754" height="382" decoding="async" data-nimg="1" src={heroimg} />
                        </div>

                    </div>
                </section>
                <div className="bg-orange w-full py-16">
                    <section className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="flex items-center justify-center">
                            <div className="space-y-3">
                                <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Latest blog</h2>
                                <p data-aos="fade-up" className="text-base text-[#212121] font-normal text-center">
                                    Get insights about the tech revolutions and their significance through our updated blogs.
                                </p>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <form method="get" action="#">
                                <div className="bg-white border max-w-4xl min-w-4xl mx-auto flex items-center justify-between divide-x divide-gray-400 px-6 shadow-xl ">
                                    <div className="flex items-center space-x-2 clearable">
                                        <button aria-label="search button" type="submit">
                                            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_189)">
                                                    <path d="M3.5 10C3.5 10.9193 3.68106 11.8295 4.03284 12.6788C4.38463 13.5281 4.90024 14.2997 5.55025 14.9497C6.20026 15.5998 6.97194 16.1154 7.82122 16.4672C8.6705 16.8189 9.58075 17 10.5 17C11.4193 17 12.3295 16.8189 13.1788 16.4672C14.0281 16.1154 14.7997 15.5998 15.4497 14.9497C16.0998 14.2997 16.6154 13.5281 16.9672 12.6788C17.3189 11.8295 17.5 10.9193 17.5 10C17.5 9.08075 17.3189 8.1705 16.9672 7.32122C16.6154 6.47194 16.0998 5.70026 15.4497 5.05025C14.7997 4.40024 14.0281 3.88463 13.1788 3.53284C12.3295 3.18106 11.4193 3 10.5 3C9.58075 3 8.6705 3.18106 7.82122 3.53284C6.97194 3.88463 6.20026 4.40024 5.55025 5.05025C4.90024 5.70026 4.38463 6.47194 4.03284 7.32122C3.68106 8.1705 3.5 9.08075 3.5 10Z" stroke="#f13c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                    <path d="M19.8047 19L15.8047 15" stroke="#f13c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_189">
                                                        <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>

                                        <input type="text" name="s" placeholder="Search blog here..." className="focus:outline-none w-full py-4" />

                                    </div>

                                    <div className="space-x-4 flex-shrink-0 pl-6 cat-derop">
                                        <div className="categoty-dropdoen">
                                            <select name="cat" className="select wide focus:outline-none bg-[#fff] w-full py-4">
                                            <option value="">Select Category</option>
                                                <option value="845">AI Development</option>
                                                <option value="299">AI Integration</option>
                                                <option value="61">Altcoin Development</option>
                                                <option value="82">API Development</option>
                                                {/* <option value="349">Blackjack Game Development</option> */}
                                                {/* <option value="117">Blockchain Development</option> */}
                                                <option value="49">Cricket Live Line API</option>
                                                {/* <option value="5">Crypto MLM Software</option> */}
                                                {/* <option value="4">Crypto Token Development</option> */}
                                                {/* <option value="6">Crypto Wallet Development</option> */}
                                                {/* <option value="79">Cryptocurrency Development</option> */}
                                                {/* <option value="312">Cryptocurrency Exchange Development</option> */}
                                                {/* <option value="341">DApp Development</option> */}
                                                <option value="468">Dating App Development</option>
                                                {/* <option value="355">DeFi Development</option> */}
                                                {/* <option value="129">DEX Development</option> */}
                                                <option value="292">Doctor Appointment App Development</option>
                                                <option value="333">E-commerce App Development</option>
                                                {/* <option value="57">Ethereum Blockchain Development</option> */}
                                                <option value="336">Fantasy Cricket App Development</option>
                                                <option value="342">Fantasy Sports Software Development</option>
                                                <option value="427">Fitness App Development</option>
                                                <option value="821">Food Delivery App Development</option>
                                                <option value="38">Game Development</option>
                                                <option value="40">General</option>
                                                <option value="827">Grocery App Development</option>
                                                <option value="313">Healthcare App Development</option>
                                                <option value="352">Hyperledger Blockchain</option>
                                                <option value="540">Medicine Delivery App Development</option>
                                                {/* <option value="147">Metaverse</option> */}
                                                <option value="229">Mobile App Development</option>
                                                {/* <option value="146">Multicurrency wallet</option> */}
                                                {/* <option value="356">NFT Development</option> */}
                                                <option value="370">Pharmacy App Development</option>
                                                {/* <option value="340">Smart Contract</option> */}
                                                {/* <option value="272">Solana Token</option> */}
                                                <option value="675">Startup App Development</option>
                                                <option value="867">Taxi App Development</option>
                                                <option value="318">Telemedicine App Development</option>
                                                <option value="332">Website Development</option>
                                            </select>
                                        </div>

                                    </div>


                                </div>
                            </form>

                        </div>
                        <div className="tabs mt-[50px]">
                            {/* Tab Navigation */}
                            <ul className="flex justify-center text-center mb-5 space-x-4">
                                {tabs.map((tab) => (
                                    <li
                                        key={tab}
                                        className={`cursor-pointer px-6 py-2 text-base font-medium rounded-md ${activeTab === tab ? "bg-red-500 text-white" : "bg-gray-200 text-black"
                                            }`}
                                        onClick={() => handleTabClick(tab)}
                                    >
                                        {tab}
                                    </li>
                                ))}
                            </ul>

                            {/* Tab Content */}
                            <div className="mt-4">
                                {activeTab === "All" && <div className="tab-content">

                                    <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2  grid-cols-1 xl:gap-14 cursor-pointer mt-8">
                                        {(blogs as { id: string; web_category: string; title: string; image: string; category: string; description: string; created_at: string; }[])
                                        .filter((post) => post.web_category === "all")
                                        .map((post) => (
                                            <Link key={post.id} to={`/BlogDeatils/${post.id}`} className="block">
                                                <div className="p-6 space-y-4 overflow-hidden text-left transition duration-150 bg-[#fff] border border-[#000000]/10 rounded-xl group">
                                                    <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                                                        <img
                                                            alt={post.title}
                                                            loading="lazy"
                                                            width="1280"
                                                            height="720"
                                                            decoding="async"
                                                            className="rounded-xl"
                                                            src={post.image}
                                                            style={{ color: "transparent" }}
                                                        />
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button data-aos="fade-right" className="text-[#000] text-sm rounded-full border border-[#000] py-1.5 px-5">
                                                            {post.category}
                                                        </button>
                                                        <button data-aos="fade-left" className="text-[#000] text-sm flex items-center gap-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                                            </svg>{" "}
                                                            {formatDate(post.created_at)}
                                                        </button>
                                                    </div>
                                                    <div className="flex flex-col justify-between space-y-3">
                                                        <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-xl">
                                                            {post.title}
                                                        </h3>
                                                        <p data-aos="fade-up" className="text-sm text-black line-clamp-3">{post.description}</p>
                                                        <button data-aos="fade-up" className="text-sm text-blue-400 flex items-center group-hover:text-[#f13c3c]">
                                                            Learn More
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                </div>}
                                {activeTab === "Mobile App" && <div className="tab-content">
                                    <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2  grid-cols-1 xl:gap-14 cursor-pointer mt-8">
                                    {(blogs as { id: string; web_category: string; title: string; image: string; category: string; description: string; created_at: string; }[])
                                        .filter((post) => post.web_category === "mobile_app")
                                        .map((post) => (
                                            <Link key={post.id} to={`/BlogDeatils/${post.id}`} className="block">
                                                <div className="p-6 space-y-4 overflow-hidden text-left transition duration-150 bg-[#fff] border border-[#000000]/10 rounded-xl group">
                                                    <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                                                        <img
                                                            alt={post.title}
                                                            loading="lazy"
                                                            width="1280"
                                                            height="720"
                                                            decoding="async"
                                                            className="rounded-xl"
                                                            src={post.image}
                                                            style={{ color: "transparent" }}
                                                        />
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button data-aos="fade-right" className="text-[#000] text-sm rounded-full border border-[#000] py-1.5 px-5">
                                                            {post.category}
                                                        </button>
                                                        <button data-aos="fade-left" className="text-[#000] text-sm flex items-center gap-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                                            </svg>{" "}
                                                            {formatDate(post.created_at)}
                                                        </button>
                                                    </div>
                                                    <div className="flex flex-col justify-between space-y-3">
                                                        <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-xl">
                                                            {post.title}
                                                        </h3>
                                                        <p data-aos="fade-up" className="text-sm text-black line-clamp-3">{post.description}</p>
                                                        <button data-aos="fade-up" className="text-sm text-blue-400 flex items-center group-hover:text-[#f13c3c]">
                                                            Learn More
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>}
                                {activeTab === "AI Development" && <div className="tab-content">
                                    <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2  grid-cols-1 xl:gap-14 cursor-pointer mt-8">
                                    {(blogs as { id: string; web_category: string; title: string; image: string; category: string; description: string; created_at: string; }[])
                                        .filter((post) => post.web_category === "ai_development")
                                        .map((post) => (
                                            <Link key={post.id} to={`/BlogDeatils/${post.id}`} className="block">
                                                <div className="p-6 space-y-4 overflow-hidden text-left transition duration-150 bg-[#fff] border border-[#000000]/10 rounded-xl group">
                                                    <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                                                        <img
                                                            alt={post.title}
                                                            loading="lazy"
                                                            width="1280"
                                                            height="720"
                                                            decoding="async"
                                                            className="rounded-xl"
                                                            src={post.image}
                                                            style={{ color: "transparent" }}
                                                        />
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button data-aos="fade-right" className="text-[#000] text-sm rounded-full border border-[#000] py-1.5 px-5">
                                                            {post.category}
                                                        </button>
                                                        <button data-aos="fade-left" className="text-[#000] text-sm flex items-center gap-2">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                                            </svg>{" "}
                                                            {formatDate(post.created_at)}
                                                        </button>
                                                    </div>
                                                    <div className="flex flex-col justify-between space-y-3">
                                                        <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-xl">
                                                            {post.title}
                                                        </h3>
                                                        <p data-aos="fade-up" className="text-sm text-black line-clamp-3">{post.description}</p>
                                                        <button data-aos="fade-up" className="text-sm text-blue-400 flex items-center group-hover:text-[#f13c3c]">
                                                            Learn More
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>}
                            </div>
                        </div>


                    </section>
                </div>
                <Footer />
                <TawkChat />
            </AOSProvider>
        </>
    );
};

export default BlogPage;
