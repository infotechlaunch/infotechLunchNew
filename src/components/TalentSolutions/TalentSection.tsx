import React, { useState } from "react";

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
                        <p className="text-gray-600 text-lg font-semibold mt-2 aos-init aos-animate">Industry Skill-sets and Roles</p>
                    </div>


                    <div className="tab-list pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden overflow-x-auto">
                        <div className={`px-7 py-7 item  cursor-pointer ${activeTab === "All Positions" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-b-2 border-[#f13c3c]" : "text-[#253A67]"}`} onClick={() => setActiveTab("All Positions")}>
                            <svg className={`w-[56px] mx-auto ${activeTab === "All Positions" ? "active" : "noactive"}`}
                                xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 74.42 74.69">
                                <defs>

                                </defs>
                                <path className="cls-1" d="M64.81,53.1v-4.81c0-3.31-2.69-6-6-6h-10.1c1.11-2.05,2.01-4.21,2.67-6.44l4.56-3.65c1.91-1.53,2.23-4.32,.7-6.23-.81-1.02-2.03-1.62-3.32-1.67l2.67-7.35c2.34-6.45-.98-13.58-7.43-15.92-1.36-.49-2.8-.75-4.24-.75h-10.19c-7.63,0-15.1,2.14-21.56,6.18-.56,.35-.74,1.09-.39,1.65,.15,.24,.38,.42,.65,.51l2.89,.96c1.61,.54,2.49,2.28,1.95,3.9-.02,.06-.04,.11-.06,.17-.58,1.45-.51,3.09,.19,4.49l3.09,6.18c-2.44,.19-4.26,2.33-4.06,4.77,.1,1.22,.7,2.35,1.65,3.11l4.56,3.65c.67,2.23,1.56,4.39,2.67,6.44H15.6c-3.31,0-6,2.69-6,6v4.81C3.79,55.52,0,61.2,0,67.49v6c0,.66,.54,1.2,1.2,1.2H73.22c.66,0,1.2-.54,1.2-1.2v-6c0-6.29-3.79-11.97-9.6-14.4Zm-18-28.81h-7.2c-.66,0-1.2,.54-1.2,1.2v1.2h-2.4v-1.2c0-.66-.54-1.2-1.2-1.2h-10.8v-1.76l7.49-4.99c1.61-1.08,3.51-1.65,5.45-1.65,2.77,0,5.46-.95,7.63-2.68l1.96-1.57,2.06,3.09c1.19,1.77,1.82,3.86,1.81,5.99v3.57h-3.6Zm-1.2,2.4v3.6c0,.66-.54,1.2-1.2,1.2h-2.4c-.66,0-1.2-.54-1.2-1.2v-3.6h4.8Zm-12,0v3.6c0,.66-.54,1.2-1.2,1.2h-2.4c-.66,0-1.2-.54-1.2-1.2v-3.6h4.8Zm21.6,2.04c0,.62-.28,1.21-.77,1.59l-2.18,1.74c.32-1.77,.49-3.57,.52-5.37h.38c1.13,0,2.04,.91,2.04,2.04h0ZM19.83,14.54c1.12-2.81-.24-6-3.06-7.13-.1-.04-.2-.08-.3-.11l-.37-.12c5.54-2.96,11.73-4.51,18.02-4.51h10.19c5.54,0,10.02,4.49,10.02,10.02,0,1.17-.2,2.32-.6,3.42l-1.04,2.87c-.26-2-.98-3.92-2.1-5.6l-2.78-4.18c-.19-.28-.48-.47-.81-.52-.33-.05-.67,.04-.93,.25l-2.98,2.39c-1.74,1.39-3.9,2.15-6.13,2.15-2.41,0-4.77,.71-6.78,2.05l-8.03,5.35c-.07,.05-.14,.11-.2,.18l-2-4c-.39-.79-.43-1.7-.11-2.52Zm.14,15.78c-.88-.7-1.03-1.99-.33-2.87,.39-.49,.98-.77,1.6-.77h.38c.03,1.8,.2,3.6,.52,5.38l-2.17-1.74Zm4.05-3.64h2.38v3.6c0,1.99,1.61,3.6,3.6,3.6h2.4c1.99,0,3.6-1.61,3.6-3.6v-1.2h2.4v1.2c0,1.99,1.61,3.6,3.6,3.6h2.4c1.99,0,3.6-1.61,3.6-3.6v-3.6h2.38c-.09,5.5-1.63,10.88-4.45,15.6H28.48c-2.83-4.72-4.36-10.1-4.45-15.6Zm-8.42,18H58.81c1.99,0,3.6,1.61,3.6,3.6v24.01H12v-24.01c0-1.99,1.61-3.6,3.6-3.6ZM2.4,67.49c0-4.96,2.79-9.5,7.2-11.75v16.56H2.4v-4.8Zm69.62,4.8h-7.2v-16.56c4.41,2.26,7.19,6.8,7.2,11.75v4.8Z"></path>
                                <path className="cls-1" d="M37.21,68.69c2.65,0,4.8-2.15,4.8-4.8s-2.15-4.8-4.8-4.8-4.8,2.15-4.8,4.8,2.15,4.8,4.8,4.8Zm0-7.2c1.33,0,2.4,1.07,2.4,2.4s-1.07,2.4-2.4,2.4-2.4-1.07-2.4-2.4,1.07-2.4,2.4-2.4Z"></path>
                                <path className="cls-1" d="M29.16,57.54l1.7-1.7-3.95-3.95,3.95-3.95-1.7-1.7-4.8,4.8c-.47,.47-.47,1.23,0,1.7l4.8,4.8Z"></path>
                                <path className="cls-1" d="M45.26,57.54l4.8-4.8c.47-.47,.47-1.23,0-1.7l-4.8-4.8-1.7,1.7,3.95,3.95-3.95,3.95,1.7,1.7Z"></path>
                                <rect className="cls-1" x="31.21" y="50.69" width="12" height="2.4" transform="translate(-26.63 50.51) rotate(-53.12)"></rect>
                            </svg>
                            <p className={`text-center text-lg  font-normal capitalize mt-3 ${activeTab === "All Positions" ? "text-[#f13c3c]" : ""}`}  > Technology Professionals</p>
                        </div>
                        {/* <div
                            className={`px-7 py-7 item cursor-pointer ${activeTab === "StackDeveloper" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-b-2 border-[#f13c3c]" : "text-[#253A67]"}`}
                            onClick={() => setActiveTab("StackDeveloper")}>

                            <svg className={`w-[56px] mx-auto ${activeTab === "StackDeveloper" ? "active" : "noactive"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                                <defs>
                                </defs>
                                <path className="cls-1" d="M13.53,49.4l14.92-5.38c.36-.12,.76-.1,1.08,.07,.34,.18,.59,.48,.7,.84l4.49,15.32,1.73-8.81-2.51-5.55c-.19-.43-.15-.92,.1-1.32,.25-.38,.69-.63,1.15-.63h8.92c.47,0,.89,.25,1.15,.63,.25,.4,.29,.89,.1,1.32l-2.51,5.55,1.73,8.81,4.49-15.32c.1-.36,.36-.66,.69-.84,.34-.16,.74-.19,1.1-.07l14.92,5.38c.36,.14,.65,.41,.8,.77,.12,.3,.27,.81,.44,1.5-.37,.32-.55,.82-.44,1.32,.84,3.8,2.09,10.89,3.71,21.06l.12,.74c.03,.21,.11,.38,.22,.55-.15,.14-.33,.25-.54,.32-.43,.14-10.65,3.35-30.44,3.35-14.79,0-30.16-3.28-30.31-3.31-.26-.05-.48-.18-.66-.34,.12-.16,.21-.36,.23-.56l.08-.54c.55-3.54,2.46-15.53,3.73-21.27,.11-.51-.07-1.02-.44-1.33,.16-.67,.32-1.18,.44-1.48,.14-.36,.44-.63,.8-.77Z" /><path className="cls-2" d="M70.28,73.77c-1.62-10.17-2.87-17.26-3.71-21.06-.11-.49,.07-1,.44-1.32,1.3,5.29,3.72,20.54,4.02,22.46,.07,.45-.1,.91-.41,1.21-.11-.16-.19-.34-.22-.55l-.12-.74Z" /><path className="cls-2" d="M27.3,8.23c.54-.38,1.11-.56,1.61-.63,.29-.96,.89-2.25,2.24-3.3,2.31-1.8,5.85-2.16,10.54-1.07,2.4,.56,6.67,1.54,8.8,4.79,.91,.29,2.06,1.03,2.73,2.88,.88,2.42,.67,6.3,.52,8.09,.67,.38,1.19,.91,1.57,1.57,.71,1.32,.71,3.08,.03,5.34-1.08,3.51-2.59,4.79-3.93,5.15-2.98,7.95-8,9.65-11.75,9.65s-8.77-1.7-11.75-9.67c-1.33-.34-2.84-1.62-3.93-5.13-.7-2.27-.69-4.02,.03-5.34,.37-.67,.91-1.19,1.61-1.58-.1-1.67-.23-5.27,.04-7.69,.21-1.72,1-2.61,1.65-3.06Zm1.57,2.25c-.32,.23-.44,.74-.48,1.14-.32,2.65-.04,7.11,.01,7.94,0,.05,.01,.11,.01,.16v.15c0,.62-.4,1.15-.99,1.32-.67,.19-.89,.48-1,.69-.33,.6-.26,1.76,.19,3.23,.63,2.09,1.51,3.36,2.2,3.3h.1c.59,0,1.11,.37,1.3,.93,1.94,5.73,5.11,8.62,9.45,8.62s7.48-2.81,9.45-8.62c.21-.6,.78-.99,1.41-.93,.7,.04,1.55-1.24,2.18-3.3,.45-1.47,.52-2.62,.19-3.23-.11-.21-.33-.49-1-.69-.62-.16-1.03-.74-1-1.37,.01-.07,.01-.14,.03-.21,.1-.74,.22-2.2,.22-3.73s-.12-3.01-.49-4.04c-.43-1.15-.97-1.22-1.19-1.24-.44-.05-.82-.33-1.04-.71-1.4-2.61-5.22-3.5-7.26-3.97-3.83-.89-6.67-.7-8.28,.52-1.19,.91-1.4,2.17-1.43,2.5v.04c0,.88-.91,1.54-1.72,1.33-.14-.01-.55-.05-.85,.16Z" /><path className="cls-2" d="M11.19,72.98c3.94,.77,16.41,2.99,28.46,2.99,15.65,0,25.33-2.1,28.48-2.91-1.24-7.77-3.09-18.66-3.91-21.58l-12.92-4.67-5.67,19.33c-.18,.62-.76,1.03-1.37,.99-.63-.03-1.17-.48-1.29-1.11l-2.88-14.77c-.05-.27-.03-.58,.1-.82l1.81-4.02h-4.67l1.81,4.02c.12,.25,.15,.55,.1,.82l-2.9,14.77c-.11,.63-.65,1.08-1.28,1.11-.63,.04-1.21-.37-1.39-.99l-5.66-19.33-12.92,4.67c-.82,2.91-2.66,13.73-3.9,21.5Zm2.33-23.86l14.92-5.38c.36-.12,.76-.1,1.08,.07,.34,.18,.59,.48,.7,.84l4.49,15.32,1.73-8.81-2.51-5.55c-.19-.43-.15-.92,.1-1.32,.25-.38,.69-.63,1.15-.63h8.92c.47,0,.89,.25,1.15,.63,.25,.4,.29,.89,.1,1.32l-2.51,5.55,1.73,8.81,4.49-15.32c.1-.36,.36-.66,.69-.84,.34-.16,.74-.19,1.1-.07l14.92,5.38c.36,.14,.65,.41,.8,.77,.12,.3,.27,.81,.44,1.5-.37,.32-.55,.82-.44,1.32,.84,3.8,2.09,10.89,3.71,21.06l.12,.74c.03,.21,.11,.38,.22,.55-.15,.14-.33,.25-.54,.32-.43,.14-10.65,3.35-30.44,3.35-14.79,0-30.16-3.28-30.31-3.31-.26-.05-.48-.18-.66-.34,.12-.16,.21-.36,.23-.56l.08-.54c.55-3.54,2.46-15.53,3.73-21.27,.11-.51-.07-1.02-.44-1.33,.16-.67,.32-1.18,.44-1.48,.14-.36,.44-.63,.8-.77Z" /><path className="cls-2" d="M12.73,52.7c-1.28,5.74-3.19,17.72-3.73,21.27l-.08,.54c-.03,.21-.11,.4-.23,.56-.32-.3-.48-.76-.41-1.22,.3-1.92,2.72-17.2,4.02-22.48,.37,.32,.55,.82,.44,1.33Z" />
                            </svg>
                            <p className={`text-center text-lg  font-normal capitalize mt-3 ${activeTab === "StackDeveloper" ? "text-[#f13c3c]" : ""}`}  > Business Professionals</p>

                        // </div> */}
                        {/* <div
                            className={`px-7 py-7 item cursor-pointer
                                    ${activeTab === "Development" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-b-2 border-[#f13c3c]" : "text-[#253A67]"}`}
                            onClick={() => setActiveTab("Development")}
                        >

                            <svg className={`w-[56px] mx-auto ${activeTab === "Development" ? "active" : "noactive"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs></defs><path className="cls-1" d="M32,2.98h18.45c.04,.09,.13,.06,.2,.07,3.1,.44,5.5,2.62,6.23,5.66,.21,.89,.2,1.8,.32,2.7,.16,1.29,.25,2.59,.37,3.88,.13,1.34,.25,2.68,.38,4.02,.02,.25,.09,.48,.27,.69,1.31,1.55,2.39,3.26,3.27,5.08,1.16,2.4,1.99,4.9,2.4,7.55,.18,1.16,.34,2.32,.33,3.5-.01,1.05-.16,2.08-.6,3.05-.67,1.49-1.86,2.38-3.36,2.91-1.61,.58-3.29,.72-4.98,.79-1.18,.05-2.35,.04-3.53,.02-.13,0-.25-.02-.37,.1-.8,.77-1.67,1.46-2.61,2.06-.11,.07-.15,.15-.15,.28,0,.92,0,1.84,0,2.76,0,.14,.05,.2,.18,.23,.36,.07,.72,.16,1.08,.25,3.86,.89,7.72,1.79,11.58,2.67,2.47,.57,4.68,1.66,6.6,3.3,2.79,2.39,4.53,5.41,5.24,9.02,.07,.36,.05,.73,.21,1.07v11.56c-.15,.4-.47,.63-.85,.79-.06,0-.11,.01-.17,.01-1.6,0-3.2,0-4.81,0-.78,0-1.55-.01-2.33-.02,0-.47-.02-.95,0-1.42,0-.16-.05-.21-.21-.21-.16,0-.21,.05-.21,.21,0,.47,0,.95,0,1.42-.51,.05-1.02,.01-1.54,.02-4.85,0-9.7,0-14.55,0-5.33,0-10.67,0-16,0-4.5,0-9,0-13.49,0-.11,0-.23,0-.34-.01,0-.32-.02-.64-.01-.96,0-.16-.05-.21-.21-.21-.16,0-.21,.05-.21,.21,0,.32,0,.64,0,.96-.12,0-.25,.02-.37,.02-1.51,0-3.01,0-4.52,0-1.3,0-2.6-.01-3.9-.02-.45-.18-.77-.48-.9-.96v-10.65c.09-.07,.05-.18,.06-.26,.05-.39,.08-.79,.15-1.19,.52-3.04,1.79-5.72,3.87-8,1.95-2.14,4.31-3.64,7.1-4.43,2.14-.61,4.33-1.03,6.5-1.54,2.33-.55,4.67-1.08,7.01-1.61,.15-.03,.28-.05,.27-.27-.02-.92,0-1.84,0-2.76,0-.13-.04-.21-.15-.28-.9-.58-1.74-1.25-2.52-1.99-.11-.1-.22-.15-.38-.15-1.02,0-2.05,.02-3.07,0-1.68-.03-3.35-.15-4.98-.63-1.41-.41-2.65-1.09-3.49-2.35-.71-1.06-.95-2.26-1-3.51-.07-1.78,.21-3.53,.59-5.26,.94-4.2,2.73-8,5.51-11.31,.09-.11,.13-.22,.14-.36,.07-.87,.16-1.74,.24-2.61,.22-2.33,.47-4.66,.66-6.99,.27-3.35,2.65-6.09,5.94-6.76,.23-.05,.46-.04,.67-.15Zm-6.6,19.42c-.12-.02-.13,.09-.18,.15-.35,.46-.67,.94-.98,1.43-.11,.17-.18,.37-.42,.44-.09,.03-.14,.14-.12,.24,.04,.18-.05,.31-.12,.45-1.1,2.03-1.92,4.16-2.44,6.41-.39,1.71-.65,3.43-.53,5.19,.08,1.19,.5,2.2,1.59,2.82,.78,.45,1.63,.69,2.52,.8,1.25,.16,2.51,.24,3.77,.24,.12,0,.25,.03,.39-.04-.05-.07-.08-.11-.11-.16-1.98-2.7-3.35-5.67-3.97-8.97-.43-2.25-.44-4.5,.02-6.75,.15-.76,.39-1.5,.58-2.25,.01-.02,.03-.04,.04-.06-.01,0-.02-.01-.04-.02,0,.03,0,.05,0,.08Zm25.96,52.26c2.86,0,5.71,0,8.57,0,.45,0,.38,.04,.38-.37,0-2.54,0-5.09,0-7.63,0-.34,.05-.66,.28-.93,.32-.37,.84-.51,1.29-.35,.48,.18,.76,.57,.77,1.12,0,2.63,0,5.26,0,7.89,0,.23,.07,.28,.29,.28,2.66,0,5.31,0,7.97,0,.26,0,.33-.07,.33-.33,0-2.49,0-4.97,0-7.46,0-.64-.02-1.27-.09-1.9-.28-2.49-1.18-4.72-2.72-6.68-1.76-2.26-4.03-3.81-6.8-4.57-1.75-.48-3.52-.84-5.28-1.26-.21-.05-.26,.04-.3,.21-.22,1.03-.57,2.03-1.01,2.98-1.16,2.53-2.87,4.6-5.19,6.16-.64,.43-1.28,.85-1.97,1.18-1.65,.8-3.38,1.28-5.2,1.46-.23,.02-.27,.11-.27,.31,0,3.19,0,6.38,0,9.57,0,.26,.08,.33,.33,.33,2.88,0,5.75,0,8.63,0Zm-11.31-5.11c0-1.6,0-3.21,0-4.81,0-.18-.03-.26-.24-.28-2.85-.28-5.42-1.28-7.71-2.99-1.22-.92-2.28-1.99-3.18-3.23-1.2-1.67-2.03-3.5-2.49-5.51-.06-.25-.15-.31-.4-.25-1.29,.31-2.58,.62-3.88,.89-2.06,.43-3.98,1.19-5.65,2.49-3.34,2.6-5.12,6.03-5.25,10.25-.09,2.75-.02,5.5-.03,8.26,0,.24,.07,.3,.31,.3,2.66,0,5.31,0,7.97,0,.26,0,.31-.08,.31-.32-.01-1.5,0-3,0-4.5,0-1.13,0-2.26,0-3.39,0-.61,.46-1.09,1.02-1.13,.66-.05,1.16,.31,1.28,.95,.03,.14,.03,.28,.03,.42,0,2.56,0,5.12,0,7.69,0,.23,.06,.29,.29,.28,1.11-.01,2.22-.01,3.33,0,.23,0,.28-.07,.28-.29,0-1.54,0-3.07,0-4.61,0-.89,.46-1.34,1.36-1.34,2.48,0,4.95,0,7.43,0,.89,0,1.35,.45,1.35,1.35,0,1.54,0,3.07,0,4.61,0,.23,.07,.29,.29,.28,1.1-.01,2.2-.01,3.3,0,.24,0,.31-.06,.3-.3,0-1.6,0-3.21,0-4.81Zm1.15-24.49c.99-.02,1.94-.14,2.86-.4,2.21-.63,4.09-1.83,5.73-3.42,1.8-1.73,3.18-3.76,4.21-6.02,.65-1.43,1.12-2.92,1.39-4.47,.04-.23,.03-.41-.19-.57-.25-.17-.47-.39-.71-.57-2.76-2.15-5.86-2.96-9.32-2.45-1.67,.25-3.28,.7-4.87,1.23-2.18,.72-4.31,1.57-6.52,2.19-2.08,.59-4.18,1.02-6.36,.88-.21-.01-.21,.07-.17,.23,1.14,4.55,3.42,8.36,7.28,11.13,2,1.43,4.22,2.2,6.66,2.24Zm.04-26.48c4.67,0,9.34,0,14,0,.25,0,.29-.07,.27-.31-.21-2.14-.4-4.28-.61-6.43-.08-.82-.09-1.65-.26-2.46-.51-2.43-2.53-4.06-5.04-4.06-5.52,0-11.04,0-16.57,0-.26,0-.51,.02-.77,.04-2.16,.2-4.02,1.84-4.42,3.98-.27,1.45-.31,2.94-.46,4.41-.15,1.5-.28,3-.43,4.5-.03,.27,.04,.33,.3,.33,4.66,0,9.32,0,13.98,0Zm14.37,8.9c.05-.19,0-.36-.02-.52-.15-2.02-.67-3.94-1.57-5.75-.11-.22-.23-.29-.47-.29-8.24,0-16.47,0-24.71,0-.19,0-.29,.06-.37,.23-.33,.67-.62,1.36-.86,2.07-.6,1.83-.84,3.71-.78,5.63,0,.19,.07,.26,.27,.27,.53,.02,1.06,.03,1.59,0,2.02-.1,3.95-.61,5.86-1.22,2.38-.76,4.71-1.69,7.12-2.37,1.59-.45,3.21-.77,4.87-.84,2.78-.12,5.38,.53,7.77,1.97,.44,.26,.86,.54,1.3,.82Zm-14.06,34.72c2.58-.05,5.2-.9,7.49-2.67,2.47-1.91,4.05-4.4,4.74-7.45,.03-.14,.02-.2-.13-.24-1.64-.37-3.29-.75-4.93-1.14-.17-.04-.24,0-.29,.18-.25,1.08-.7,2.09-1.4,2.96-1.92,2.35-4.38,3.37-7.37,2.7-2.98-.67-4.8-2.65-5.6-5.57-.07-.27-.16-.32-.42-.25-.44,.12-.88,.21-1.33,.31-1.14,.26-2.29,.53-3.44,.79-.2,.04-.25,.11-.18,.3,.07,.22,.11,.44,.17,.66,1.52,5.53,6.64,9.41,12.68,9.4Zm12.1-21.65c.09,.06,.19,.03,.28,.03,.67-.02,1.35-.02,2.02-.07,1.1-.08,2.21-.15,3.27-.51,1.01-.34,1.87-.84,2.31-1.86,.28-.64,.35-1.32,.36-2,.01-1.46-.18-2.89-.5-4.31-.7-3.16-1.94-6.09-3.78-8.76-.16-.23-.33-.45-.49-.67,2.05,6.68,.4,12.62-3.46,18.16Zm-7.35,7.45c0-.43,0-.85,0-1.28,0-.35,0-.35-.33-.22-1.41,.54-2.87,.85-4.38,.9-1.78,.06-3.49-.29-5.14-.93-.22-.09-.29-.07-.28,.19,.02,.8,0,1.59,0,2.39,0,.73,.13,1.43,.4,2.11,.76,1.94,2.83,3.55,5.33,3.22,1.91-.25,3.64-1.78,4.18-3.72,.25-.87,.22-1.76,.22-2.65Zm-15.2,26.67h0c.82,0,1.63-.01,2.45,0,.22,0,.29-.05,.29-.28-.01-1.12-.01-2.24,0-3.36,0-.21-.06-.27-.27-.27-1.64,0-3.28,0-4.92,0-.21,0-.28,.05-.28,.27,0,1.13,0,2.26,0,3.38,0,.21,.07,.25,.26,.25,.82,0,1.65,0,2.47,0ZM56.7,9.97c0-.34,0-.68,0-1.02,0-.17-.06-.2-.21-.2-.17,0-.21,.06-.2,.21,0,.66,0,1.33,0,1.99,0,.15,.03,.22,.2,.22,.18,0,.23-.06,.22-.23-.01-.32,0-.64,0-.97Zm.35,12.35s0-.01-.01-.02c0,0-.01,0-.02,.02,0,0,0,.01,.01,.02,0,0,.01-.01,.02-.02Z" /><path className="cls-1" d="M9.79,77c-.3,0-.6,0-.9,0,0-.32,0-.65,0-.97,.13,.48,.46,.78,.9,.96Z" /><path className="cls-1" d="M73.52,77.01h-.85c.38-.17,.7-.39,.85-.8v.8Z" /><path className="cls-1" d="M56.7,9.97c0,.32,0,.64,0,.97,0,.17-.04,.23-.22,.23-.17,0-.2-.07-.2-.22,0-.66,0-1.33,0-1.99,0-.16,.04-.22,.2-.21,.15,0,.22,.04,.21,.2-.01,.34,0,.68,0,1.02Z" /><path className="cls-1" d="M65.36,77c-.15,0-.29,0-.44,0,0-.47,.02-.95,0-1.42,0-.16,.05-.21,.21-.21,.16,0,.21,.05,.21,.21,0,.47,0,.95,0,1.42Z" /><path className="cls-1" d="M19.01,77h-.44c0-.32,.02-.64,0-.96,0-.16,.05-.21,.21-.21,.16,0,.21,.05,.21,.21,0,.32,0,.64,.01,.96Z" /><path className="cls-1" d="M25.4,22.4s0-.05,0-.08c.01,0,.02,.01,.04,.02-.01,.02-.03,.04-.04,.06h0Z" /><path className="cls-1" d="M57.05,22.32s-.01,.01-.02,.02c0,0-.01-.01-.01-.02,0,0,.01-.01,.02-.02,0,0,0,.01,.01,.02Z" /><path className="cls-1" d="M43.51,13.12c-.27,0-.55,.02-.82,0-.23-.02-.28,.07-.28,.29,.01,.52,0,1.04,0,1.56,0,.73-.5,1.27-1.17,1.27-.68,0-1.18-.53-1.18-1.26,0-.54-.01-1.08,0-1.62,0-.19-.05-.25-.24-.24-.55,.01-1.1,0-1.65,0-.67,0-1.22-.53-1.22-1.17,0-.64,.54-1.16,1.22-1.17,.54,0,1.08-.01,1.62,0,.22,0,.27-.07,.27-.28-.01-.56-.02-1.12,0-1.68,.02-.55,.32-.95,.79-1.1,.75-.25,1.51,.26,1.54,1.07,.02,.56,.02,1.12,0,1.68,0,.26,.08,.32,.32,.31,.52-.02,1.04,0,1.56,0,.69,0,1.23,.53,1.22,1.19,0,.64-.55,1.14-1.24,1.15-.26,0-.51,0-.77,0Z" /></svg>
                            <p className={`text-center text-lg  font-normal capitalize mt-3 ${activeTab === "Development" ? "text-[#f13c3c]" : ""}`}  > Life Science Professionals</p>
                        </div> */}
                        {/* <div
                            className={`px-7 py-7 item cursor-pointer
                                    ${activeTab === "MobileApp" ? "bg-[#f13c3c1a] lg:rounded-none lg:border-b-2 border-[#f13c3c]" : "text-[#253A67]"}`}
                            onClick={() => setActiveTab("MobileApp")}
                        >

                            <svg className={`w-[56px] mx-auto ${activeTab === "MobileApp" ? "active" : "noactive"}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 77.5 77.5">
                                <g id="Page-1">
                                    <g id="_011---Cloud-Gaming">
                                        <path className="cls-1" fill="#999999" d="M63.3,77.5c-5.6,0-8.9-8.4-10.3-13.4c-0.2-0.7,0.2-1.4,0.9-1.6s1.4,0.2,1.6,0.9    c2.1,7.2,5,11.6,7.9,11.6c3.8,0,4.8-4.2,5-6.8c0.2-3.4-0.1-6.8-0.8-10.2l-0.3-1.6c-0.5-2.7-1.1-5.5-1.8-8.2    c-0.3-0.9-0.6-1.8-0.9-2.6c-1.2-3-2.5-4.6-4.3-5.2c-2.2-0.7-4.6,0-6.8,0.9c-0.2,0.1-0.3,0.1-0.5,0.1H25.1c-0.2,0-0.3,0-0.5-0.1    c-1.7-0.7-4.9-1.7-7.3-0.9c-1.8,0.6-3.1,2.2-4.3,5.2c-0.3,0.9-0.6,1.7-0.9,2.6c-0.8,2.7-1.3,5.5-1.8,8.2L10,57.9    c-0.7,3.3-1,6.8-0.9,10.2c0.2,2.5,1.1,6.8,5,6.8c2.8,0,5.8-4.3,7.9-11.5c0.2-0.7,0.9-1.1,1.6-0.9s1.1,0.9,0.9,1.6    c-1.5,5-4.7,13.4-10.3,13.4c-4.3,0-7.1-3.4-7.6-9.2C6.3,64.7,6.6,61,7.4,57.4l0.3-1.6c0.5-2.8,1.1-5.7,1.9-8.4    c0.3-1,0.6-1.9,0.9-2.8c0.9-2.3,2.5-5.6,5.9-6.7c3-1,6.4-0.1,8.9,0.8h27.3c2.6-1.3,5.5-1.6,8.3-0.8c3.4,1.1,5,4.3,5.9,6.7    c0.4,0.9,0.7,1.9,0.9,2.8c0.8,2.8,1.3,5.7,1.9,8.4l0.3,1.6c0.8,3.6,1.1,7.2,0.9,10.9C70.4,74,67.6,77.4,63.3,77.5L63.3,77.5    L63.3,77.5z"></path>
                                        <path className="cls-1" fill="#999999" d="M43.9,63.3H33.5c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h10.3c0.7,0,1.3,0.6,1.3,1.3    S44.6,63.3,43.9,63.3z"></path>
                                        <path className="cls-1" fill="#999999" d="M28.4,68.4c-2.6,0-5-1.6-6-4s-0.5-5.2,1.4-7s4.6-2.4,7-1.4s4,3.3,4,6    C34.9,65.5,32,68.4,28.4,68.4L28.4,68.4z M28.4,58.1c-1.6,0-3,0.9-3.6,2.4s-0.3,3.1,0.8,4.2s2.8,1.4,4.2,0.8    c1.5-0.6,2.4-2,2.4-3.6C32.3,59.8,30.5,58.1,28.4,58.1z"></path>
                                        <path className="cls-1" fill="#999999" d="M49,68.4c-2.6,0-5-1.6-6-4s-0.5-5.2,1.4-7s4.6-2.4,7-1.4s4,3.3,4,6    C55.5,65.5,52.6,68.4,49,68.4L49,68.4z M49,58.1c-1.6,0-3,0.9-3.6,2.4s-0.3,3.1,0.8,4.2s2.8,1.4,4.2,0.8s2.4-2,2.4-3.6    C52.9,59.8,51.2,58.1,49,58.1C49.1,58.1,49.1,58.1,49,58.1z"></path>
                                        <path className="cls-1" fill="#999999" d="M34.9,51.6h-2.6c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h2.6c0.7,0,1.3,0.6,1.3,1.3    S35.6,51.6,34.9,51.6z"></path>
                                        <path className="cls-1" fill="#999999" d="M45.2,51.6h-2.6c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h2.6c0.7,0,1.3,0.6,1.3,1.3    S45.9,51.6,45.2,51.6z"></path>
                                        <circle className="cls-1" fill="#999999" cx="58.1" cy="54.2" r="1.3"></circle>
                                        <circle className="cls-1" fill="#999999" cx="58.1" cy="46.5" r="1.3"></circle>
                                        <circle className="cls-1" fill="#999999" cx="62" cy="50.3" r="1.3"></circle>
                                        <circle className="cls-1" fill="#999999" cx="54.2" cy="50.3" r="1.3"></circle>
                                        <path className="cls-1" fill="#999999" d="M19.4,55.5c-0.7,0-1.3-0.6-1.3-1.3v-1.3c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v1.3    C20.7,54.9,20.1,55.5,19.4,55.5z"></path>
                                        <path className="cls-1" fill="#999999" d="M23.2,51.6H22c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h1.3c0.7,0,1.3,0.6,1.3,1.3    S24,51.6,23.2,51.6z"></path>
                                        <path className="cls-1" fill="#999999" d="M16.8,51.6h-1.3c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h1.3c0.7,0,1.3,0.6,1.3,1.3    S17.5,51.6,16.8,51.6z"></path>
                                        <path className="cls-1" fill="#999999" d="M19.4,49.1c-0.7,0-1.3-0.6-1.3-1.3v-1.3c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v1.3    C20.7,48.5,20.1,49.1,19.4,49.1z"></path>
                                        <path className="cls-1" fill="#999999" d="M65.2,45.2c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3c5.3,0,9.7-4.3,9.7-9.7s-4.3-9.7-9.7-9.7    h-0.1c-0.6,0-1-0.4-1.2-0.9c-1.7-4.9-6.4-8.2-11.6-8.2c-0.1,0-0.2,0-0.4,0c-0.6,0-1.1-0.3-1.3-0.8C48,6.9,41.8,2.6,34.8,2.6    S21.6,6.9,19.2,13.4c-0.2,0.6-0.8,0.9-1.3,0.8c-0.4,0-0.7-0.1-1-0.1c-7.1,0-13.1,5.2-14.1,12.2S6.1,40.1,12.9,42    c0.4,0.1,0.8,0.5,0.9,0.9s0,0.9-0.4,1.2s-0.8,0.4-1.3,0.3c-8-2.3-13.2-10.1-12-18.4s8.2-14.5,16.6-14.5c0.1,0,0.2,0,0.3,0    C20.2,4.6,27.2,0,34.9,0s14.7,4.6,17.8,11.6c5.8,0.1,11.1,3.7,13.3,9.1c6.6,0.4,11.7,6,11.5,12.6S71.8,45.2,65.2,45.2L65.2,45.2z"></path>
                                        <path className="cls-1" fill="#999999" d="M54.2,28.4c-0.5,0-1-0.3-1.2-0.8c-2.4-5.8-8-9.6-14.3-9.6s-11.9,3.8-14.3,9.5    c-0.2,0.4-0.6,0.7-1,0.8s-0.9-0.1-1.2-0.5S21.9,27,22,26.6c2.8-6.7,9.4-11.1,16.7-11.1s13.9,4.4,16.7,11.1    c0.2,0.4,0.1,0.9-0.1,1.2S54.6,28.4,54.2,28.4L54.2,28.4L54.2,28.4z"></path>
                                        <path className="cls-1" fill="#999999" d="M48.6,31c-0.5,0-1-0.3-1.2-0.8c-1.5-3.5-4.9-5.8-8.7-5.8s-7.2,2.3-8.7,5.8    c-0.2,0.4-0.6,0.7-1,0.8s-0.9-0.1-1.2-0.5s-0.3-0.9-0.2-1.3c1.9-4.5,6.2-7.4,11-7.4s9.2,2.9,11,7.4c0.2,0.4,0.1,0.9-0.1,1.2    S49,31,48.6,31L48.6,31z"></path>
                                        <path className="cls-1" fill="#999999" d="M43,33.6c-0.5,0-1-0.3-1.2-0.8c-0.5-1.2-1.7-2-3-2s-2.5,0.8-3,2c-0.2,0.4-0.6,0.7-1,0.8    c-0.5,0.1-0.9-0.1-1.2-0.5s-0.3-0.9-0.2-1.3c0.9-2.2,3-3.6,5.4-3.6s4.5,1.4,5.4,3.6c0.2,0.4,0.1,0.9-0.1,1.2S43.4,33.6,43,33.6    L43,33.6L43,33.6z"></path>
                                        <circle className="cls-1" fill="#999999" cx="38.7" cy="34.9" r="1.3"></circle>
                                    </g>
                                </g>
                            </svg>

                            <p className={`text-center text-lg  font-normal capitalize mt-3 ${activeTab === "MobileApp" ? "text-[#f13c3c]" : ""}`}  > Gaming and VR</p>

                        </div> */}
                    </div>

                    <div className="tab-content">
                        {activeTab === "All Positions" && (
                            <>
                                <div className="w-full relative capitalize space-y-10" data-aos="fade-left">

                                    <div className="bg-white lg:p-8 md:p-6 p-3 border border-[#5556D1]/10">
                                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
