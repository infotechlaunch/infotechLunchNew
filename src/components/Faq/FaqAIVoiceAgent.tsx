import React, { useState } from "react";

const faqs = [
    {
        question: "How do I get started with InfoTechAI?",
        answer:
            "To begin, please contact us using the Contact Us page above or below. Please provide your requirements in your beginning message to stand out from the thousands!",
    },
    {
        question: "What are InfoTechAI's Operational Voice-Driven Intelligence Facilitators?",
        answer:
            "InfoTechAI has developed revolutionary breathtaking AI that can integrate with all of your software to finally solve all your problems. AI that uses humanlike voices and tonality to achieve certain tasks.",
    },
    {
        question: "What types of Operational Voice-Driven Intelligence Facilitators can you develop?",
        answer:
            "We develop tailored voice-driven AI facilitators designed to streamline operational tasks, automate workflows, and enhance efficiency across various industries.",
    },
    {
        question: "Are you HIPAA and SOC 2 compliant?",
        answer:
            "Yes, our AI solutions are fully HIPAA and SOC 2 compliant, ensuring that we adhere to the highest standards of data privacy, security, and confidentiality in handling sensitive information.",
    },
    {
        question: "Is there a limit on Calls?",
        answer:
            "Our AI solutions offer flexible call limits tailored to your business needs, allowing you to scale up or down based on your requirements without compromising performance or quality.",
    },
    {
        question: "How does InfoTechAI ensure the security of my data?",
        answer:
            "InfoTechAI employs robust encryption, secure data storage, and strict access controls to ensure your data remains protected. We follow industry best practices to maintain confidentiality and prevent unauthorized access, ensuring complete data security at every level.",
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
