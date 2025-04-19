import React from "react";
import lunch from "../../assets/Images/infotech-web-dev-laptop.png";
// import health from "../../assets/Images/portfoli/5.png";
import health from "../../assets/Images/portfoli/ecom.png";
// import Careem from "../../assets/Images/portfoli/7.png";
import Careem from "../../assets/Images/adaptive-ai-development.jpg";
import { Link } from 'react-router-dom';
interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "AI-Powered Parking Assistance App Development: Cost & Features",
        category: "Technology",
        date: "4 Aug 2024",
        description:
            "Based on studies, 30% of traffic congestion happens due to vehicles looking for parking spaces. AI-powered parking assistance apps improve operational efficiency and maximize space utilization.",
        imageUrl: lunch,
        link: "/BlogDeatils",
    },
    {
        id: 2,
        title: "Seamless Shopping. Smarter Wellness.",
        category: "Blockchain",
        date: "10 Sep 2024",
        description:
            "Shop premium fitness products, track progress, and get personalized health insights—all in one app. Achieve your wellness goals with ease and convenience.",
        imageUrl: health,
        link: "/BlogDeatils",
    },
    {
        id: 3,
        title: "Future of AI in Web Development: Trends & Innovations",
        category: "Artificial Intelligence",
        date: "15 Oct 2024",
        description:
            "AI is reshaping web development with automation, personalization, and advanced analytics. Explore the latest AI trends and how they impact the future of web development.",
        imageUrl: Careem,
        link: "/BlogDeatils",
    },
];

const Blog: React.FC = () => {
    return (
        <div className="w-full bg-gradient-blue-red py-16">
            <section className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="flex items-center justify-center">
                    <div className="space-y-3">
                        <h2 className="xl:text-4xl text-3xl text-white text-center font-bold"  data-aos="fade-up">Our Latest Blog</h2>
                        <p className="text-base text-white font-normal text-center"  data-aos="fade-up">
                            Get insights about the tech revolutions and their significance through our updated blogs.
                        </p>
                    </div>
                </div>
                <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2  grid-cols-1 xl:gap-14 cursor-pointer mt-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} to={post.link} className="block">
                            <div className="p-6 h-[520px] flex flex-col justify-between space-y-4 overflow-hidden text-left transition duration-150 bg-[#fff] border border-[#000000]/10 rounded-xl group">
                                <div className="object-cover w-full overflow-hidden"  data-aos="fade-up">
                                    <img
                                        alt={post.title}
                                        loading="lazy"
                                        width="1280"
                                        height="720"
                                        decoding="async"
                                        className="rounded-xl"
                                        src={post.imageUrl}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button  data-aos="fade-right" className="text-[#000] text-base rounded-full border border-[#000] py-1.5 px-5">
                                        {post.category}
                                    </button>
                                    <button  data-aos="fade-left" className="text-[#000] text-base flex items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                        </svg>{" "}
                                        {post.date}
                                    </button>
                                </div>
                                <div className="flex flex-col justify-between space-y-3">
                                    <h3  data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                                        {post.title}
                                    </h3>
                                    <p  data-aos="fade-up" className="text-black line-clamp-3">{post.description}</p>
                                    <button  data-aos="fade-up" className="text-lg text-[#000000] flex items-center group-hover:text-[#f13c3c]">
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


                  <div className="mt-8 flex justify-center">
                    <Link to="/blog"  data-aos="fade-up" data-discover="true">
                        <button className="btn btn-fix lazyloaded">View More<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                            <path id="Path_1487529" data-name="Path 1487529"
                                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                        </svg>
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Blog;
