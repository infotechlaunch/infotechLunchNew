import React from "react";
import solimg1 from "../../assets/Images/aiDevelopment/aiChatbot/solution/1.webp";
import solimg2 from "../../assets/Images/aiDevelopment/aiChatbot/solution/2.webp";
import solimg3 from "../../assets/Images/aiDevelopment/aiChatbot/solution/3.webp";
import solimg4 from "../../assets/Images/aiDevelopment/aiChatbot/solution/4.webp";
import solimg5 from "../../assets/Images/aiDevelopment/aiChatbot/solution/5.webp";
import solimg6 from "../../assets/Images/aiDevelopment/aiChatbot/solution/6.webp";
import solimg7 from "../../assets/Images/aiDevelopment/aiChatbot/solution/7.webp";
import solimg8 from "../../assets/Images/aiDevelopment/aiChatbot/solution/8.webp";
interface BlogPost {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
   
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "GPT-powered Chatbots",
        description:
            "Leverage advanced NLP for enhanced engagement, intelligent task automation, and superior customer support.",
        imageUrl: solimg1,
       
    },
    {
        id: 2,
        title: "Custom Voice Assistants",
        description:
            "Create AI-driven voice interfaces for intuitive, natural client and employee interactions..",
        imageUrl: solimg2,
    },
    {
        id: 3,
        title: "CRM / ERP / CM Bots",
        description:
            "Integrate smart bots with your internal systems for real-time automation, insights, and improved workflows.",
        imageUrl: solimg3,
       
    },
    {
        id: 4,
        title: "Transactional Chatbots",
        description:
            "Simplify orders, reservations, and payment processes with user-friendly, automated conversational agents.",
        imageUrl: solimg4,
       
    },
    {
        id: 5,
        title: "Intent-based Chatbots",
        description:
            "Use NLP to understand user intent, identify context, and deliver highly accurate, responsive answers.",
        imageUrl: solimg5,
       
    },
    {
        id: 6,
        title: "Multilingual Chatbots",
        description:
            "Engage global audiences with AI chatbots fluent in multiple languages for broader reach and inclusivity.",
        imageUrl: solimg6,
       
    },
    {
        id: 7,
        title: "Lead Generation Chatbots",
        description:
            "Automate lead qualification, data capture, and nurturing processes to strengthen your sales pipeline.",
        imageUrl: solimg7,
       
    },
    {
        id: 8,
        title: "Omnichannel Chatbots",
        description:
            "Seamlessly deploy chatbots across web, mobile apps, and social media platforms for unified engagement",
        imageUrl: solimg8,
       
    },
    

    

];

const Blog: React.FC = () => {
    return (
        <div className="w-full bg-gradient-blue-red py-16">
            <section className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="flex items-center justify-center">
                    <div className="space-y-3">
                        <h2 className="xl:text-4xl text-3xl text-[#fff] text-center font-bold"  data-aos="fade-up">Diverse AI Chatbot Solutions Tailored <br />for Every Business Need
                        </h2>
                        <p className="text-base text-[#fff] font-normal text-center"  data-aos="fade-up">
                        Unlock new possibilities with AI chatbot solutions built to streamline operations and boost engagement.
                        </p>
                    </div>
                </div>
                <div className="grid gap-4 mx-auto lg:grid-cols-4 md:grid-cols-2  grid-cols-1 xl:gap-5 cursor-pointer mt-8">
                    {blogPosts.map((post) => (
                        <div key={post.id}  className="block feature-card-1 w-full h-full bg-[#fff] border border-[#000000]/10 rounded-xl">
                            <div className=" p-5 space-y-4 overflow-hidden text-left transition duration-150  group">
                                <div className="object-cover w-full overflow-hidden rounded-xl">
                                    <img
                                        alt={post.title}
                                        loading="lazy"
                                        width="1000"
                                        height="400"
                                        decoding="async"
                                        className=" feature-img-2"
                                        src={post.imageUrl}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="flex flex-col justify-between space-y-2 w-full h-full">
                                    <h3  data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                                        {post.title}
                                    </h3>
                                    <p  data-aos="fade-up" className="text-sm text-black">{post.description}</p>
                                 
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
