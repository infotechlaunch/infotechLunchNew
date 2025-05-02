import React, { useState } from "react";

const faqs = [
    {
        question: "What is AI Chatbot Development?",
        answer:
            "AI chatbot development involves creating intelligent software that uses AI, NLP, and ML to simulate human-like conversations via text or voice across digital platforms.",
    },
    {
        question: "How Much Does It Cost to Develop an AI Chatbot?",
        answer:
            "AI chatbot development costs range from $5,000 to $150,000+, depending on complexity, features, AI capabilities, platform integrations, and customization requirements.",
    },
    {
        question: "How Long Does It Take to Build an AI Chatbot?",
        answer:
            "Building an AI chatbot typically takes 4 to 12 weeks, based on its complexity, features, and development resources.",
    },
    {
        question: "Why You Should Hire AI Chatbot Developers?",
        answer:
            "Hiring AI chatbot developers enables businesses to automate customer support, boost user engagement, provide instant assistance, and reduce operational costs effectively.",
    },
    {
        question: "Why Choose Code Brew Labs for AI Chatbot Development Services?",
        answer:
            "Code Brew Labs delivers custom AI chatbot solutions designed for intelligent automation, real-time engagement, 24/7 support, and faster query resolution.",
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
                        {/* <p className="text-base font-normal mt-2 text-center" data-aos="fade-up">
                            Some answers to common queries during web and mobile app development.
                        </p> */}
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
