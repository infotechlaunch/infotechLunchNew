import React from "react";
import lunch from "../../assets/Images/Project.png";
import health from "../../assets/Images/ManagedSolutions.png";
import Careem from "../../assets/Images/hire.png";
interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
   
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Project Staffing",
        category: "Staffing",
        date: "4 Aug 2024",
        description:
            "Project staffing ensures the right talent is deployed for specific projects, providing skilled professionals to meet deadlines and achieve business goals efficiently.",
        imageUrl: lunch,
       
    },
    {
        id: 2,
        title: "Managed Solutions",
        category: "Managed",
        date: "10 Sep 2024",
        description:
            "Managed solutions provide end-to-end support, optimizing operations with expert oversight, technology, and strategic management for seamless business efficiency.",
        imageUrl: health,
    },
    {
        id: 3,
        title: "Direct Hire",
        category: "Direct Hire",
        date: "15 Oct 2024",
        description:
            "Direct hire services connect businesses with top talent for full-time roles, ensuring long-term success with expertly vetted professionals. This streamlined process saves time and resources while building strong, dedicated teams.",
        imageUrl: Careem,
       
    },
];

const Blog: React.FC = () => {
    return (
        <div className="w-full bg-gradient-blue-red py-16">
            <section className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="flex items-center justify-center">
                    <div className="space-y-3">
                        <h2 className="xl:text-4xl text-3xl text-[#fff] text-center font-bold"  data-aos="fade-up">Our Delivery Models</h2>
                        <p className="text-base text-[#fff] font-normal text-center"  data-aos="fade-up">
                        Our delivery models offer flexible engagement options, including on-site, offshore, and hybrid approaches, tailored to meet unique business needs efficiently.
                        </p>
                    </div>
                </div>
                <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2  grid-cols-1 xl:gap-10 cursor-pointer mt-8">
                    {blogPosts.map((post) => (
                        <div key={post.id}  className="block">
                            <div className="p-6 space-y-4 overflow-hidden text-left transition duration-150 bg-[#fff] border border-[#000000]/10 rounded-xl group">
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
                                <div className="flex flex-col justify-between space-y-3">
                                    <h3  data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                                        {post.title}
                                    </h3>
                                    <p  data-aos="fade-up" className="text-base text-black line-clamp-3">{post.description}</p>
                                 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
              
            </section>
        </div>
    );
};

export default Blog;
