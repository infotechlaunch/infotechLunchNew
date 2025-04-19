import React, { useState } from "react";

const faqs = [
    {
        question: "How much does it cost to build an app?",
        answer:
            "Our IT Services start at an average of $1000, but the cost can fluctuate depending on the client's requirements. More features, data, and complex functions can increase costs to $30,000 or more.",
    },
    {
        question: "How much time will it take to build a mobile app?",
        answer:
            "A basic application takes around 2 weeks, but the exact timeframe depends on the client's requirements and complexity of the project.",
    },
    {
        question: "What technologies do you use for app development?",
        answer:
            "We use React, Angular, Laravel, PHP, MySQL, and various modern front-end and back-end frameworks to ensure scalable and high-performance applications.",
    },
    {
        question: "Does InfoTech Launch provide custom software development?",
        answer:
            "Yes, we do provide custom software development services; where we work on your idea and turn it into realistic software. Whether it’s custom designs, development, or any other factor; our expert team of developers works on all.",
    },
    {
        question: "Do you offer support and maintenance?",
        answer:
            "We are the leading custom mobile app development company; that ensures for app’s post-deployment support and maintenance. The service includes issue management and response, automated backups, regular performance, security enhancement, comprehensive support post-deployment, etc. Our team takes full responsibility for the ongoing performance maintenance of the application.",
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
                        <span className="text-orange text-center text-lg font-semibold mb-3" data-aos="fade-up">FAQ</span>
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
