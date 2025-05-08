import React, { useState } from "react";

const faqs = [
    {
        question: "How Much Does It Cost to Develop an App?",
        answer:
            "The cost to develop a mobile app in the US varies based on features, interfaces, integrations, and whether it's built using a hybrid or native model. On average, developing a custom app can start from $40,000, with costs increasing based on complexity and technology requirements.",
    },
    {
        question: "How Much Does It Cost to Hire an App Developer?",
        answer:
            "Hiring an app developer in the US depends on skill set, experience, and project complexity. Developer hourly rates range from $50 to $150. App development projects generally cost between $30,000 to $700,000, depending on whether you work with freelancers or full-service app development companies like InfoTech Launch.",
    },
    {
        question: "How Much Time Does It Take to Create an App?",
        answer:
            "The development timeline depends on app complexity and features. On average: 1) Minor App Project: 1–2 weeks 2) Midsize App Project: 3–4 weeks 3) Large-Scale App Project: 4–12 months. Choosing experienced developers accelerates delivery without compromising quality.",
    },
    {
        question: "What Mobile App Development Services Does InfoTech Launch Offer?",
        answer:
            "InfoTech Launch provides innovative native and hybrid mobile app development services across Android, iOS, Windows, and cross-platform technologies. We handle everything from idea validation, UI/UX design, development, to launch and ongoing support — delivering high-performance mobile apps for businesses across industries.",
    },
    {
        question: "How Can I Launch an App Successfully?",
        answer:
            "Partner with InfoTech Launch to build, validate, and launch your app with confidence. We offer: 1)Detailed validation of product ideas 2)Clear project objective identification 3) Competitive marketing strategies 4)Hassle-free project management 5)Pre and post-launch marketing services 6)24/7 support across all time zones",
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
