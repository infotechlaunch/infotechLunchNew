import React, {useState,useRef, useEffect} from "react";
import Footer from "../components/Footer/Footer";

import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
// import SocialMediaMgmtImg from "../assets/Images/aiSocialMedia/New_AI PoweredSocialMediaMgmt2.png";
import getStartedImg from "../assets/Images/aiSocialMedia/get-started3.avif";
import "./AiVoiceAgentStyle.css";
// import ConnectExperts from "../pages/ConnectExperts";

const AiVoiceAgent: React.FC = () => {

    const [message, setMessage] = useState("Hey I would like to book an appointment. I am not feeling well. I have a headache.");

    const [openItems, setOpenItems] = useState<Record<string, boolean>>({
        'get-started': true,
        'operational-facilitators': true,
        'types-of-facilitators': false,
        'hipaa-compliance': false,
        'call-limits': false,
        'data-security': false
    });
    
    const toggleItem = (id:string) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    
    const closeItem = (id:string) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: false
        }));
    };

    const [isOpen, setIsOpen] = useState(false);
    
    // const overlayRef = useRef(null);
    // const popupBoxRef = useRef(null);

    const overlayRef = useRef<HTMLDivElement>(null);
    const popupBoxRef = useRef<HTMLDivElement>(null);

    // Open popup
    const onOpen = () => setIsOpen(true);

    // Close popup
    const onClose = () => setIsOpen(false);

    // Close on outside click
    useEffect(() => {
    const handleClickOutside = (event:any) => {
        if (
        overlayRef.current &&
        popupBoxRef.current &&
        overlayRef.current.contains(event.target) &&
        !popupBoxRef.current.contains(event.target)
        ) {
        onClose();
        }
    };

    if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };

    }, [isOpen]);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        about: ''
    });
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        // onClose();
    };

    return (
        <>
            <AOSProvider>
                <HeaderNew />

                <section className="hero-container bg-gradient-blue-red flex items-center justify-center">
                    <div className="hero-content text-center justify-center max-w-5xl text-white">
                        <p className="bg-rose-600 text-white rounded-full px-6 py-2 flex items-center text-center" style={{
                            fontSize: "16px",
                            marginBottom: "-20px"
                            }}>
                            Reimagining Business, One Call at a Time.
                        </p>

                        <h1 className="text-5xl font-bold">
                            AI Voice Facilitators That Sell, Book, and Handle Business — <span className="text-red-500">So You Don't Have To</span>
                        </h1>
                        <p className="text-lg">
                            Our custom-trained AI Voice Facilitators answer calls, qualify leads, and book appointments — 24/7, with perfect memory and zero burnout. Trusted by growth-focused businesses who want real results, not hype.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                                margin: "auto",
                            }}
                            >
                            {/* Button 1: Initiate Your Journey */}
                            <a
                                href="./contact-us"
                                className="framer-1N5PT framer-ibvdus framer-v-nj2zz1 framer-l3ha2z"
                                data-highlight="true"
                                data-border="true"
                                data-framer-name="md | no animation"
                                tabIndex={0}
                                style={{
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(2px)",
                                background:
                                    "linear-gradient(192deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%) rgba(255, 255, 255, 0.03)",
                                borderRadius: "999px",
                                opacity: 1,
                                padding: "0.75rem 1.5rem",
                                textDecoration: "none",
                                }}
                                >
                                <div
                                className="framer-17xbfdf"
                                style={{
                                    background:
                                    "linear-gradient(225deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 61.1128%)",
                                    borderRadius: "999px",
                                    opacity: 1,
                                }}
                                    >

                                </div>
                                <div
                                className="framer-1vuzv05"
                                style={{
                                    background:
                                    "linear-gradient(207deg, rgb(47, 41, 43) -70.344%, rgb(4, 1, 2) 100%)",
                                    borderRadius: "999px",
                                    opacity: 1,
                                }}
                                    >

                                </div>
                                <div
                                className="framer-1ihxhf6"
                                data-framer-name="Label"
                                style={{
                                    outline: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    flexShrink: 0,
                                    color: "black",
                                    transform: "none",
                                    opacity: 1,
                                }}
                                    >
                                <p
                                    style={{
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    color: "#fff",
                                    margin: 0,
                                    }}
                                    >
                                    Initiate Your Journey
                                </p>
                                </div>
                            </a>

                            {/* Button 2: Test The Future */}
                            <a
                                    // href="./aidemocall"
                                    href="#"
                                    className="framer-1N5PT framer-ibvdus framer-v-bv2xb3 framer-l3ha2z"
                                    data-highlight="true"
                                    data-framer-name="md | ghost"
                                    tabIndex={0}
                                    style={{
                                    border: "none",
                                    background: "transparent",
                                    borderRadius: "999px",
                                    opacity: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    textDecoration: "none",
                                    padding: "0.75rem 1.25rem"
                                }}
                                onClick={onOpen}
                                >
                                <div className="framer-1cl6w9d-container" style={{ opacity: 1 }}>
                                <div style={{ display: "contents" }}>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    focusable="false"
                                    style={{
                                        userSelect: "none",
                                        width: "16px",
                                        height: "16px",
                                        display: "inline-block",
                                        fill: "#fff",
                                        color: "#fff",
                                        flexShrink: 0,
                                    }}
                                    >
                                    <g color="black">
                                        <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
                                    </g>
                                    </svg>
                                </div>
                                </div>
                                <div
                                className="framer-1ihxhf6"
                                data-framer-name="Label"
                                style={{
                                    outline: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    flexShrink: 0,
                                    color: "#fff",
                                    transform: "none",
                                    opacity: 1,
                                }}
                                    >
                                <p
                                    style={{
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    color: "#fff",
                                    margin: 0,
                                    }}
                                >
                                    Test The Future
                                </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <div style={{
                        backgroundColor: "white",
                        height: "50px",
                        width: "100%"
                    }}>

                </div> */}


                <section className="hero-container bg-gradient-blue-red flex items-center justify-center" style={{
                        marginTop: "0px"
                    }}>
                    <div className="hero-content text-center max-w-4xl text-white justify-center">
                        <p className="bg-rose-600 text-white rounded-full px-6 py-2 flex items-center" style={{
                            fontSize: "16px",
                            marginBottom: "-20px"
                            }}>
                            Our Process
                        </p>

                        <h1 className="text-5xl font-bold">
                            HorizonTechAI as Your Revolutionary Secret To Success
                        </h1>
                        <p className="text-lg">
                            Experience the Future where no more bounds are met and no limitations are placed. You are free.
                        </p>
                        
                        <div className="workflow-features" style={{
                                flexWrap: "nowrap",
                                justifyContent: "center",
                            }}>
                            <div className="feature-card">Step 1: Strategy<br/><span>Strategy session commences in which we go top to bottom about how to actually enhance your business.</span></div>
                            <div className="feature-card">Step 2: Acceleration<br/><span>A proven plan is engineered as to how we will enhance your business and how we can guarantee you acceleration.</span></div>
                            <div className="feature-card">Step 3: Initialization<br/><span>The Future is implemented, in extraordinary fast time. Then You beat all others.</span></div>
                        </div>
                    </div>
                </section>


                {/* <div className="flex bg-black text-white min-h-screen"></div> */}
                <div className="bg-orange p-10">
                    <div
                        className="hero-content text-center max-w-2xl"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            gap: "1rem",
                        }}
                        >
                        <h1 className="text-5xl font-bold">
                            Emerging AI
                        </h1>
                        <p>
                            Powering progress with evolving AI
                        </p>
                    </div>
                </div>

                <div className="ai-section flex bg-orange text-black" style={{
                        marginTop: "0px"
                    }}>

                    {/* Left panel - Chat interface */}
                    <div className="bg-orange ai-panel ai-left pb-20">
                        <div className="border border-gray-800 rounded-lg p-6 w-full max-w-md">
                        {/* Action buttons */}
                        <div className="flex justify-between mb-8">
                            <div className="flex flex-col items-center">
                            <div className="bg-rose-600 rounded-full p-3 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <p className="text-xs text-center">Transfer call<br />to booking</p>
                            </div>
                            
                            <div className="flex flex-col items-center">
                            <div className="bg-rose-600 border border-gray-700 rounded-full p-3 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-xs text-center">Ask complex<br />questions</p>
                            </div>
                            
                            <div className="flex flex-col items-center">
                            <div className="bg-rose-600 border border-gray-700 rounded-full p-3 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <p className="text-xs text-center">Change your<br />AI's Voice</p>
                            </div>
                            
                            <div className="flex flex-col items-center">
                            <div className="bg-rose-600 border border-gray-700 rounded-full p-3 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                            <p className="text-xs text-center">Use knowledge<br />base for answer</p>
                            </div>
                        </div>
                        
                        {/* Message input */}
                        <div className="border border-gray-700 rounded-lg bg-black p-4 relative mb-4">
                            <p className="text-white">{message}</p>
                            <div className="absolute right-4 bottom-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    {/* Right panel - Content */}
                    <div className="bg-orange ai-panel ai-right  pb-20">
                        <p className="text-sm mb-2">AI Discovery Frontiers</p>
                        <h1 className="text-4xl font-bold mb-6">Emerging Frontiers in AI Exploration</h1>
                        
                        <p className="mb-8">
                        Embark on a journey into the ever-expanding world of artificial intelligence
                        exploration. Discover the latest advancements and breakthroughs shaping
                        the future.
                        </p>
                        
                        <p className="italic">
                        Fun Fact: Did you know apple has enhanced their customer support using
                        100% Voice-Driven Intelligence Facilitators
                        </p>
                    </div>
                </div>
  

                {/* <div className="bg-black text-white min-h-screen p-8"></div> */}
                <div className="bg-gradient-blue-red text-black min-h-screen p-8" style={{
                        marginTop: "0px"
                    }}>
                    {/* Demo CTA Button */}
                    <div
                        className="hero-content text-center max-w-3xl text-white"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            gap: "1rem",
                        }}
                        >
                        <h1 className="text-5xl font-bold">
                            Easy ROI Based Investment
                        </h1>
                        <p>
                            Have you incorporated HorizonTechAI yet? Well, your competitors might!
                        </p>
                    </div>

                    <div className="flex justify-center mb-8 mt-4">
                        <button className="bg-rose-600 text-white rounded-full px-6 py-2 flex items-center"
                            onClick={onOpen}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                            Experience AI Demo Call First
                        </button>
                    </div>

                    {/* Pricing Plans */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Cadet Plan */}
                        <div className="border border-gray-800 rounded-lg overflow-hidden bg-white">
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-2">Cadet - Your Perfect Start</h2>
                            <p className="mb-6">Built Custom For Your Business.</p>
                            
                            <div className="mb-6 space-y-4">
                            <h3 className="text-rose-600">Special Plan</h3>
                            
                            <div className="flex justify-between">
                                <span>Facilitators</span>
                                <span>1</span>
                            </div>
                            <div className="border-t border-gray-800"></div>
                            
                            <div className="flex justify-between">
                                <span>Extra Tools</span>
                                <span>1</span>
                            </div>
                            <div className="border-t border-gray-800"></div>
                            
                            <div className="flex justify-between">
                                <span>Customers Handled</span>
                                <span>500/Month</span>
                            </div>
                            <div className="border-t border-gray-800"></div>
                            
                            <div className="flex justify-between">
                                <span>Extra Minutes</span>
                                <span>$0.8/Minute</span>
                            </div>
                            </div>
                            
                            <button className="w-full border border-gray-600 rounded-full py-2 text-center hover:bg-gray-400 transition">
                            Unlock
                            </button>
                        </div>
                        
                        <div className="border-t border-gray-800 p-6">
                            <h3 className="mb-4">Capabilities</h3>
                            <ul className="space-y-3">
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Full Portal Access
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                All Integrations Compatible
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Model: Horizon V3.2
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                42 Languages/Accents
                            </li>
                            </ul>
                        </div>
                        </div>

                        {/* Hero Plan - Best Seller */}
                        <div className="border border-rose-900 rounded-lg overflow-hidden relative bg-white">
                        <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                            (Best Seller)
                        </div>
                        
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-2">Hero - Your Way To Scale</h2>
                            <p className="mb-6">Built Custom For Your Business.</p>
                            
                            <div className="mb-6 space-y-4">
                            <h3 className="text-rose-600">Special Plan</h3>
                            
                            <div className="flex justify-between">
                                <span>Facilitators</span>
                                <span>2</span>
                            </div>
                            <div className="border-t border-gray-700"></div>
                            
                            <div className="flex justify-between">
                                <span>Extra Tools</span>
                                <span>2+</span>
                            </div>
                            <div className="border-t border-gray-700"></div>
                            
                            <div className="flex justify-between">
                                <span>Customers Handled</span>
                                <span>1500/Month</span>
                            </div>
                            <div className="border-t border-gray-700"></div>
                            
                            <div className="flex justify-between">
                                <span>Extra Minutes</span>
                                <span>$0.5/Minute</span>
                            </div>
                            </div>
                            
                            <button className="w-full bg-rose-600 rounded-full py-2 text-center hover:bg-rose-700 transition">
                            Unlock
                            </button>
                        </div>
                        
                        <div className="border-t border-gray-700 p-6">
                            <h3 className="mb-4">Capabilities</h3>
                            <ul className="space-y-3">
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Full Portal Access
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                All Integrations Compatible
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Model: Horizon A1
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                42 Languages/Accents
                            </li>
                            </ul>
                        </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="border border-gray-800 rounded-lg overflow-hidden bg-white">
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-2">Enterprise - Your Way To Surpass</h2>
                            <p className="mb-6">Built Custom For Your Business.</p>
                            
                            <div className="mb-6 space-y-4">
                            <h3 className="text-rose-600">Special Plan</h3>
                            
                            <div className="flex justify-between">
                                <span>Facilitators</span>
                                <span>2+</span>
                            </div>
                            <div className="border-t border-gray-800"></div>
                            
                            <div className="flex justify-between">
                                <span>Extra Tools</span>
                                <span>2+</span>
                            </div>
                            <div className="border-t border-gray-800"></div>
                            
                            <div className="flex justify-between">
                                <span>Customers Handled</span>
                                <span>25000/Month</span>
                            </div>
                            <div className="border-t border-gray-800"></div>
                            
                            <div className="flex justify-between">
                                <span>Extra Minutes</span>
                                <span>$0.3/Minute</span>
                            </div>
                            </div>
                            
                            <button className="w-full border border-gray-600 rounded-full py-2 text-center hover:bg-gray-400 transition">
                            Unlock
                            </button>
                        </div>
                        
                        <div className="border-t border-gray-800 p-6">
                            <h3 className="mb-4">Capabilities</h3>
                            <ul className="space-y-3">
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Special Portal Access
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                All Integrations Compatible
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Model: Horizon A2
                            </li>
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-black-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                All Languages/Accents + Voice Cloning
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
 

  
                {/* <div className="bg-black text-white min-h-screen p-8"></div> */}
                <div className="bg-gradient-blue-red text-black p-8">
                    <div className="max-w-7xl mx-auto  border border-white-800 rounded-lg p-8 flex flex-col md:flex-row gap-8">
                        {/* Left column - Title */}
                        <div className="md:w-1/3">
                        <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
                        </div>

                        {/* Right column - FAQ items */}
                        <div className="md:w-2/3 space-y-4">
                        {/* FAQ Item 1 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">How do I get started with HorizonTechAI?</h3>
                            {openItems['get-started'] ? (
                                <button 
                                    onClick={() => closeItem('get-started')}>
                                    -
                                </button>
                            ) : (
                                <button 
                                    onClick={() => toggleItem('get-started')}>
                                    +
                                </button>
                            )}
                            </div>
                            {openItems['get-started'] && (
                            <div className="p-4 pt-0">
                                <p>To begin, please contact us using the Contact Us page above or below. Please provide your requirements in your beginning message to stand out from the thousands!</p>
                            </div>
                            )}
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">What are HorizonTechAI's Operational Voice-Driven Intelligence Facilitators?</h3>
                            {openItems['operational-facilitators'] ? (
                                <button 
                                onClick={() => closeItem('operational-facilitators')}>
                                    -
                                </button>
                            ) : (
                                <button 
                                onClick={() => toggleItem('operational-facilitators')}>
                                    +
                                </button>
                            )}
                            </div>
                            {openItems['operational-facilitators'] && (
                            <div className="p-4 pt-0">
                                <p>HorizonTechAI has developed revolutionary breathtaking AI that can integrate with all of your software to finally solve all your problems. AI that uses humanlike voices and tonality to achieve certain tasks.</p>
                            </div>
                            )}
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">What types of Operational Voice-Driven Intelligence Facilitators can you develop?</h3>
                            {openItems['types-of-facilitators'] ? (
                                <button 
                                onClick={() => closeItem('types-of-facilitators')}>
                                    -
                                </button>
                            ) : (
                                <button 
                                onClick={() => toggleItem('types-of-facilitators')}>
                                    +
                                </button>
                            )}
                            
                            </div>
                            {openItems['types-of-facilitators'] && (
                            <div className="p-4 pt-0">
                                <p>We develop tailored voice-driven AI facilitators designed to streamline operational tasks, automate workflows, and enhance efficiency across various industries.</p>
                            </div>
                            )}
                        </div>
                        {/* FAQ Item 4 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">Are you HIPAA and SOC 2 compliant?</h3>
                            {openItems['hipaa-compliance'] ? (
                                <button 
                                onClick={() => closeItem('hipaa-compliance')}>
                                    -
                                </button>
                            ) : (
                                <button 
                                onClick={() => toggleItem('hipaa-compliance')}>
                                    +
                                </button>
                            )}
                            </div>
                            {openItems['hipaa-compliance'] && (
                            <div className="p-4 pt-0">
                                <p>Yes, our AI solutions are fully HIPAA and SOC 2 compliant, ensuring that we adhere to the highest standards of data privacy, security, and confidentiality in handling sensitive information.</p>
                            </div>
                            )}
                        </div>
                        {/* FAQ Item 5 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">Is there a limit on Calls?</h3>
                            {openItems['call-limits'] ? (
                                <button 
                                onClick={() => closeItem('call-limits')}>
                                    -
                                </button>
                            ) : (
                                <button 
                                onClick={() => toggleItem('call-limits')}>
                                    +
                                </button>
                            )}
                            </div>
                            {openItems['call-limits'] && (
                            <div className="p-4 pt-0">
                                <p>Our AI solutions offer flexible call limits tailored to your business needs, allowing you to scale up or down based on your requirements without compromising performance or quality.</p>
                            </div>
                            )}
                        </div>
                        {/* FAQ Item 6 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">How does HorizonTechAI ensure the security of my data?</h3>
                            {openItems['data-security'] ? (
                                <button 
                                onClick={() => closeItem('data-security')}>
                                    -
                                </button>
                            ) : (
                                <button 
                                onClick={() => toggleItem('data-security')}>
                                    +
                                </button>
                            )}
                            </div>
                            {openItems['data-security'] && (
                            <div className="p-4 pt-0">
                                <p>HorizonTechAI employs robust encryption, secure data storage, and strict access controls to ensure your data remains protected. We follow industry best practices to maintain confidentiality and prevent unauthorized access, ensuring complete data security at every level.</p>
                            </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
 

                {isOpen && (
                    <div ref={overlayRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div ref={popupBoxRef} className="bg-gradient-to-r from-red-500 to-blue-500 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
                            <div className="bg-white m-1 rounded-lg overflow-hidden flex flex-col md:flex-row">
                                {/* Left side - Image */}
                                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
                                    <div className="relative w-full h-full min-h-64">
                                    <img 
                                        src={getStartedImg}
                                        alt="Contact us" 
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    </div>
                                </div>
                                
                                {/* Right side - Form */}
                                <div className="md:w-1/2 p-8 relative">
                                    <button 
                                        onClick={onClose}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                        aria-label="Close popup"
                                    >
                                        {/* Simple X icon using SVG */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
                                        <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            placeholder="Enter name"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter Email Id"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter phone number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself</label>
                                        <textarea
                                            id="about"
                                            name="about"
                                            value={formData.about}
                                            onChange={handleChange}
                                            placeholder="Tell us about yourself"
                                            className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >

                                        </textarea>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "5px" }}>
                                        <input type="checkbox" id="about" />
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            I Agree To Receive SMS & Connect On WhatsApp
                                        </label>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-6 rounded-md text-white font-medium text-lg mt-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity shadow-lg"
                                    >
                                        Submit
                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <Footer />
            </AOSProvider>
        </>
    );
};

export default AiVoiceAgent;
