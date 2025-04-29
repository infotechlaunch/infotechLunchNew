import React, { useState } from "react";

const faqs = [
    {
        question: "What is AI Social Media Management?",
        answer:
            "AI social media management uses artificial intelligence to automate content creation, scheduling, audience engagement, and performance tracking, helping brands grow smarter, faster, and more efficiently.",
    },
    {
        question: "How Can AI Improve My Social Media Strategy?",
        answer:
            "AI tools optimize your strategy by analyzing data trends, personalizing content, identifying ideal posting times, and enhancing engagement — boosting reach, consistency, and return on investment.",
    },
    {
        question: "How Much Does AI Social Media Management Cost?",
        answer:
            "Costs vary based on features and services. Basic AI scheduling starts around $50/month, while full-service AI concierge plans with custom strategy and automation can range from $250 to $1000+ monthly.",
    },
    {
        question: "What Platforms Can AI Manage for Me?",
        answer:
            "AI can automate management on Facebook, Instagram, LinkedIn, X (Twitter), Pinterest, Google Business Profiles, and newer channels like TikTok, helping you maintain a strong multi-channel presence.",
    },
    {
        question: "Why Choose InfoTech Launch for AI Social Media Management?",
        answer:
            "InfoTech Launch blends powerful AI automation with expert human strategy to deliver consistent, high-quality content, proactive audience engagement, and real-time performance optimization — driving measurable growth across all your social media platforms.",
    },
    {
        question: "What is Reputation Management AI Replier and How Does It Work?",
        answer:
            "AI Replier automates social media engagement by generating smart replies and managing customer conversations.",
    },
    {
        question: "How Can a Reputation Management AI Replier Help My Business Grow?",
        answer:
            "It boosts engagement, strengthens brand reputation, and frees your team to focus on growth.",
    },
    {
        question: "What Platforms Does Reputation Management AI Replier Support?",
        answer:
            "Supports Facebook, Instagram, LinkedIn, X (Twitter), and more for centralized social media management.",
    },

    

];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-blue-red lg:py-16 py-10">
            <div className="container mx-auto px-6">
                <div className="md:space-y-10 space-y-6 w-full">
                    <div className="text-center text-white">
                        <span className="text-gradient text-3xl text-center font-semibold mb-6" data-aos="fade-up">FAQ</span>
                        <h2 className="xl:text-4xl text-3xl text-center font-bold" data-aos="fade-up" data-aos-delay="100">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base font-normal mt-2 text-center" data-aos="fade-up">
                            Some answers to common queries during web and mobile app development.
                        </p>
                    </div>
                    <div className="w-full py-4 space-y-4 relative">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white border cursor-pointer w-full rounded-[14px]">
                                <div
                                    className={`flex items-start gap-4 justify-between w-full px-4 py-4 md:px-6 text-lg font-medium text-left text-[#212121] 
    ${openIndex === index ? "rounded-tr-[14px] rounded-tl-[14px] bg-[#f13c3c1a] md:items-center md:text-lg" : ""}`}
                                    onClick={() => toggleFAQ(index)}>

                                    <h3 className="w-full text-[14px] font-semibold md:text-lg">{faq.question}</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className={`transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                                        width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                    </svg>
                                </div>
                                <div className={`px-6 text-black space-y-3 text-sm duration-300 overflow-hidden ${openIndex === index ? "max-h-40 py-4" : "max-h-0"}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
