import React, { useState, useEffect } from "react";

import icon1 from "../../assets/Images/icon/ic01.svg"
import icon2 from "../../assets/Images/icon/ic02.svg"
import icon3 from "../../assets/Images/icon/ic03.svg"
import icon4 from "../../assets/Images/icon/ic04.svg"
import icon5 from "../../assets/Images/icon/ic05.svg"
import icon6 from "../../assets/Images/icon/ic06.svg"
import icon7 from "../../assets/Images/icon/ic07.svg"
import icon8 from "../../assets/Images/icon/ic08.svg"
import icon9 from "../../assets/Images/icon/ic10.svg"
import icon10 from "../../assets/Images/icon/ic10.svg"
// import icon11 from "../../assets/Images/icon/ic11.svg"
// import icon12 from "../../assets/Images/icon/ic12.svg"
// import icon13 from "../../assets/Images/icon/ic13.svg"
// import icon14 from "../../assets/Images/icon/ic14.svg"
// import icon15 from "../../assets/Images/icon/ic15.svg"

const TalentSolutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All Positions");
    useEffect(() => {
        // Dummy usage just to prevent TS error
        void setActiveTab;
    }, []);
    
    const services = [
        {
            title: "Application Development",
            image: icon1,
            items: [
                "Microsoft Technologies Architect & Developer",
                "JAVA, J2EE Developer & Architect",
                "IBM Technologies Specialist",
                "Middleware Technologies SME",
                "Data Management & Big Data Hadoop Developer"
            ]
        },
        {
            title: "Project Management & Analysis",
            image: icon2,
            items: [
                "Project & Program Managers",
                "Agile and Scrum Project Managers",
                "Business Analysts",
                "System Analysts",
                "Technical Writers",
                "Project Coordinators",
                "Content Management Expert"
            ]
        },
        {
            title: "Technical Architecture",
            image: icon3,
            items: [
                "Enterprise Architect",
                "Data Architect",
                "Systems Architect",
                "Datawarehouse Architects",
                "Information Architect"
            ]
        },
        {
            title: "Product Management",
            image: icon4,
            items: [
                "Product Manager",
                "Data Modeler",
                "Business Modeler",
                "Analytics Engineer",
                "Technical Program Product Managers"
            ]
        },
        {
            title: "Infrastructure Management & Network Engineering",
            image: icon5,
            items: [
                "Network Architecture & Integration SME",
                "Network Engineer & Analyst",
                "Network Operations Technician",
                "Systems & Test Engineer",
                "Desktop Management Analyst",
                "Quantum Computing Developer",
                "Web Infrastructure Management Architect"
            ]
        },
        {
            title: "Software Test Services",
            image: icon6,
            items: [
                "Test Management Engineer",
                "Core Testing Services SME",
                "Manual & Automated Tester",
                "Performance Tester",
                "Test Automation Engineer",
                "Functional Tester",
                "Desktop Support Level I-3",
                "Help Desk & Service Desk Support Engineer",
                "Release Manager"
            ]
        },
        {
            title: "Mobile",
            image: icon7,
            items: [
                "Mobile Software Dev. Engineer",
                "UI/UX Designer",
                "Mobile Product Manager",
                "Mobile Security Solutions Architect",
                "Mobile Design Architect",
                "Android & iOS Developer",
                "Backend Computing",
                "Modern Language Programming SME"
            ]
        },
        {
            title: "Cyber Security",
            image: icon8,
            items: [
                "Cyber Security Program Strategist",
                "Security Engineer & Data Security Analyst",
                "Penetration Tester",
                "Forensics Technology SME",
                "Forensics Investigation & Compliance Consultant",
                "RC Consultant",
            ]
        },
        {
            title: "Cloud",
            image: icon9,
            items: [
                "Cloud Computing SME",
                "Data Center Optimization & Virtualization Architect",
                "Amazon AWS Developer",
                "Google Cloud Implementer",
                "MSFT Azure Architect & Developer"
            ]
        },
        {
            title: "Niche Skill Sets",
            image: icon10,
            items: [
                "RPA Specialists",
                "AI Data Scientists",
                "Machine Learning Engineers",
                "Pega Architect",
                "Salesforce Architect",
                "Python Developer",
                "Angular Developer",
                "Django Developer",
                "Docker SME",
                "DevOps Engineer"
            ]
        },
    ];
    // const Mobileservices = [
    //     {
    //         title: "Art & Animation",
    //         image: icon11,
    //         items: [
    //             "Technical Artist",
    //             "Game Artist",
    //             "3D Game Artist",
    //             "2D Game Artist",
    //             "Environment Artist",
    //             "Concept Artist",
    //             "VFX Artist",
    //             "Gamply Animator",
    //             "Technical Animator"
    //         ]
    //     },
    //     {
    //         title: "Design",
    //         image: icon12,
    //         items: [
    //             "Game Designer",
    //             "Technical Designer",
    //             "UI Designer",
    //             "UX Designer",
    //             "Level Designer",
    //             "Product Designer"
    //         ]
    //     },
    //     {
    //         title: "Production",
    //         image: icon13,
    //         items: [
    //             "Games Producer",
    //             "Product Management",
    //             "Project Management",
    //             "Storyboarding",
    //             "Prototyping"
    //         ]
    //     },
    //     {
    //         title: "Development & Testing",
    //         image: icon14,
    //         items: [
    //             "Unity Developer",
    //             "Unreal Developer",
    //             "Gameplay Programmer",
    //             "Animation Programmer",
    //             "AI Programmer",
    //             "UI Programmer",
    //             "QA Tester",
    //             "Design Developer"
    //         ]
    //     },
    //     {
    //         title: "Engineering",
    //         image: icon15,
    //         items: [
    //             "Build Engineer",
    //             "Automation Enginner",
    //             "QA Engineer",
    //             "Gameplay Engineer",
    //         ]
    //     },
    // ];


    return (
        <>
            <section className="lg:py-16 py-10 bg-[#F7F9FC]">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold leading-[3rem] text-[#090808]" data-aos="fade-up">
                            Talent Solutions Offerings
                        </h2>
                        <p className="text-gray-600 text-lg font-semibold mt-2 mb-5 aos-init aos-animate">Industry Skill-sets and Roles</p>
                    </div>


                   

                    <div className="tab-content">
                        {activeTab === "All Positions" && (
                            <>
                                <div className="w-full relative capitalize space-y-10" data-aos="fade-left">

                                    <div className="bg-white lg:p-8 md:p-6 p-3 border border-[#5556D1]/10">
                                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                            {services.map((service, index) => (
                                                <div key={index} className="border-2 p-6 space-y-2 bg-white border-[#f13c3c]/20 rounded-[12px] hover:bg-white hover:shadow-lg">
                                                    <div className="w-16 h-16 mx-auto">
                                                        <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="ul_list">
                                                        <h4 className="text-lg font-semibold text-gray-800 text-center">{service.title}</h4>
                                                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                                                            {service.items.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/* {activeTab === "StackDeveloper"
                            && (
                                <>
                                    <div className="w-full relative capitalize space-y-10" data-aos="fade-left">
                                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                            {Stackservices.map((Stackservice, index) => (
                                                <div key={index} className="border-2 p-6 space-y-2 bg-white border-[#f13c3c]/20 rounded-[12px]">
                                                    <div className="w-16 h-16 mx-auto">
                                                        <img src={Stackservice.image} alt={Stackservice.title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="ul_list">
                                                        <h4 className="text-lg font-semibold text-gray-800 text-center">{Stackservice.title}</h4>
                                                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                                                            {Stackservice.items.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )} */}
                        {/* {activeTab === "Development"
                            && (
                                <>
                                    <div className="w-full relative capitalize space-y-10" data-aos="fade-left">

                                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                            {Developmentservices.map((Developmentservice, index) => (
                                                <div key={index} className="border-2 p-6 space-y-2 bg-white border-[#f13c3c]/20 rounded-[12px]">
                                                    <div className="w-16 h-16 mx-auto">
                                                        <img src={Developmentservice.image} alt={Developmentservice.title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="ul_list">
                                                        <h4 className="text-lg font-semibold text-gray-800 text-center">{Developmentservice.title}</h4>
                                                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                                                            {Developmentservice.items.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )} */}
                        {/* {activeTab === "MobileApp" && (
                            <>
                                <div className="w-full relative capitalize space-y-10" data-aos="fade-left">
                                    <div className="bg-white lg:p-8 md:p-6 p-3 border border-[#5556D1]/10">
                                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                            {Mobileservices.map((Mobileservice, index) => (
                                                <div key={index} className="border-2 p-6 space-y-2 bg-white border-[#f13c3c]/20 rounded-[12px] hover:bg-white hover:shadow-lg">
                                                    <div className="w-16 h-16 mx-auto">
                                                        <img src={Mobileservice.image} alt={Mobileservice.title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="ul_list">
                                                        <h4 className="text-lg font-semibold text-gray-800 text-center">{Mobileservice.title}</h4>
                                                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                                                            {Mobileservice.items.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )} */}

                    </div>
                </div>
            </section>
        </>
    );
};

export default TalentSolutions;
