import React, {useState} from "react";
import Footer from "../components/Footer/Footer";

import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import UnlockBtn from "../pages/UnlockBtn";
// import SocialMediaMgmtImg from "../assets/Images/aiSocialMedia/New_AI PoweredSocialMediaMgmt2.png";
// import getStartedImg from "../assets/Images/aiSocialMedia/get-started3.avif";
import "./AiVoiceAgentStyle.css";
// import ConnectExperts from "../pages/ConnectExperts";
// import VoiceSelector from "../pages/VoiceSelector";
import PlayAudio from "../pages/PlayAudio";
import { Link } from "react-router-dom";
import callUsageImg from "../assets/Images/aiVoiceAgent/call-usage1.webp";
import faqImg from "../assets/Images/aiVoiceAgent/faq-voice.webp";
// import voiceheroImg from "../assets/Images/call-summary2.png";
import callSummaryImg from "../assets/Images/aiVoiceAgent/call-summary2.webp";
import updateVoiceAgentImg from "../assets/Images/aiVoiceAgent/update-voice-agent.webp";
import considerItDoneImg from "../assets/Images/aiVoiceAgent/considerItDone.webp";
import personalizedExpImg from "../assets/Images/aiVoiceAgent/personalizedExperience.webp";
import processicon1 from "../assets/Images/aiVoiceAgent/icons/process/Strategy.webp";
import processicon2 from "../assets/Images/aiVoiceAgent/icons/process/Acceleration.webp";
import processicon3 from "../assets/Images/aiVoiceAgent/icons/process/intilaization.webp";
import head_image_animation from "../assets/videos/head_image_animation.mp4";




const AiVoiceAgent: React.FC = () => {


    const [openItems, setOpenItems] = useState<Record<string, boolean>>({
        'get-started': false,
        'operational-facilitators': false,
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

    // const [personality, setPersonality] = useState('');
    const [customerId, setCustomerId] = useState('42123');
    // const [progressPercentage, setProgressPercentage] = useState(90);
    const [message, setMessage] = useState('');

    const callData = [
        { id: 1, recording: true, booked: true, totalCalls: 4 },
        { id: 2, recording: true, booked: true, totalCalls: 2 },
    ];



    return (
        <>
            <AOSProvider>
                <HeaderNew />

                {/* section 1  */}
                <section className="hero-container bg-gradient-blue-red">
                    <div className="hero-content">
                        <div className="hero-text" data-aos="fade-right">
                        {/* <p className="bg-rose-600 text-white rounded-full px-6 py-2 flex items-center text-center">
                            One Call. Endless Possibilities for Business.
                        </p> */}

                        <h1 className="text-4xl font-bold mb-5 mt-5 text-white">
                            AI That Talks, Books, and Sells — <span className="text-red-500">While You Focus on Growth.</span>
                        </h1>
                        <p className="text-lg mb-5 text-white">
                            Custom-trained AI Voice Facilitators that never sleep. They answer, qualify, and schedule with precision — earning the trust of results-focused teams worldwide.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                margin: "auto",
                                marginBottom: "20px"
                            }}
                            >
                            <Link
                                to="/ai-contact-us"
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
                            </Link>

                            <Link
                                    to="/ai-demo-call"
                                    className="framer-1N5PT framer-ibvdus framer-v-bv2xb3 framer-l3ha2z"
                                    data-highlight="true"
                                    data-framer-name="md | ghost"
                                    tabIndex={0}
                                    style={{
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(2px)",
                                    background: "linear-gradient(192deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%) rgba(255, 255, 255, 0.03)",
                                    borderRadius: "999px",
                                    opacity: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    textDecoration: "none",
                                    padding: "0.75rem 1.25rem"
                                }}
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
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image" data-aos="fade-left" style={{ zIndex: "0" }}>
                    <video 
                        className="z-0 w-full" style={{ borderRadius: "12px" }}
                        src={head_image_animation}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    </div>
                    </div>
                </section>


                {/* section 2  */}
                <div className="bg-gradient-blue-red text-white flex items-center justify-center p-4">
                    <div className="w-full max-w-6xl bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                        {/* Top bar */}
                        <div className="bg-black p-2 flex items-center">
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        </div>
                        
                        <div className="flex h-[550px] mobile-h-full mobile-block">
                        {/* Left Sidebar */}
                        <div className="w-64 bg-black p-4 border-r border-gray-800 flex flex-col mobile-w-full">
                            <div className="mb-8">
                            <h1 className="text-2xl font-bold tracking-wider">InfoTech</h1>
                            </div>
                            
                            <button className="flex items-center space-x-2 rounded border border-gray-700 p-2 mb-4 w-full">
                            <span className="text-xl">+</span>
                            <span>New Facilitator</span>
                            </button>
                            
                            <button className="flex items-center space-x-2 text-sm mb-8 w-full">
                            <span className="flex items-center justify-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            <span>Import Knowledge Base</span>
                            </button>
                            
                            <div className="mt-auto">
                                <img src={callUsageImg} alt="callUsageImg" style={{
                                    height: "auto",
                                    width: "100%"
                                }}/>
                            
                            </div>
                        </div>
                        
                        {/* Main Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Upload Area */}
                            <div className="p-6 bg-gray-900">
                            <div className="text-center mb-4">
                                <h2 className="text-lg">Upload Knowledge Base</h2>
                            </div>
                            
                            <div className="bg-gray-800 rounded-lg p-12 flex flex-col items-center justify-center">
                                <div className="rounded-full bg-gray-700 p-3 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                </div>
                                <button className="bg-gray-700 text-sm py-1 px-3 rounded mb-2">Upload file</button>
                                <span className="text-xs text-gray-400">or Drag-n-Drop here</span>
                            </div>
                            </div>
                            
                            {/* Bottom Actions */}
                            <div className="flex-1 bg-black flex mobile-block">
                            <div className="flex-1 flex p-4">
                                <div className="mr-4 flex-1">
                                <div className="bg-gray-800 rounded p-3 h-full flex flex-col">
                                    <h3 className="text-sm mb-2">New Personality</h3>
                                    <p className="text-xs text-gray-400 mb-1">Professional • Enthusiastic</p>
                                    <button className="bg-gray-700 text-xs rounded mt-auto py-1 px-3 flex items-center justify-center max-w-xs">
                                    <span className="text-gray-400 text-xs">Select an AI-Generated Persona</span>
                                    <span className="ml-1">↓</span>
                                    </button>
                                </div>
                                </div>
                                
                                <div className="flex-1">
                                <div className="bg-gray-800 rounded p-3 h-full flex flex-col">
                                    <h3 className="text-sm mb-2">Activate Inbound Call Transfer</h3>
                                    <div className="flex items-end justify-between mt-auto">
                                    <button className="bg-gray-700 text-xs rounded mt-auto py-1 px-3 flex items-center justify-center max-w-xs">Transfer Now <span className="text-xs">↑</span></button>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="w-64 bg-gray-800 border-l border-gray-700 mobile-w-full p-3">

                            <img src={callSummaryImg} alt="" />
                            </div>
                            
                            </div>
                            
                            {/* Message Input */}
                            <div className="bg-black p-4 flex border-t border-gray-800">
                            <div className="flex-1 bg-gray-800 rounded-lg flex items-center px-4">
                                <input 
                                type="text"
                                className="bg-transparent border-none flex-1 text-sm focus:outline-none py-2"
                                placeholder="Send a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                />
                                <button className="text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* section 3  */}
                <section className="hero-container bg-gradient-blue-red flex items-center justify-center" style={{
                        marginTop: "0px"
                    }}>
                    <div className="hero-content text-center max-w-4xl text-white justify-center" data-aos="fade-up">
                        <p className="bg-rose-600 text-white rounded-full px-6 py-2 flex items-center" style={{
                            fontSize: "16px",
                            marginBottom: "-20px"
                            }}>
                            Our Process
                        </p>

                        <h1 className="text-5xl font-bold">
                            InfoTechAI as Your Revolutionary Secret To Success
                        </h1>
                        <p className="text-lg">
                            Welcome to a future with no boundaries, no limits — just pure freedom to create, grow, and lead.
                        </p>
                        
                        <div className="workflow-features" style={{
                                flexWrap: "nowrap",
                                justifyContent: "center",
                            }}>
                            <div className="feature-card"> 
                                <img src={processicon1} alt="" className="why-choose-icon mx-auto" />
                            Step 1: Strategy<br/><span>A focused strategy session where we map out exactly how to elevate your business — with clarity, intent, and results in mind.</span></div>
                            <div className="feature-card"><img src={processicon2} alt="" className="why-choose-icon mx-auto" />Step 2: Acceleration<br/><span>We craft a proven, high-impact plan tailored to your goals — built to drive momentum, boost performance, and ensure measurable acceleration.</span></div>
                            <div className="feature-card"><img src={processicon3} alt="" className="why-choose-icon mx-auto" />Step 3: Initialization<br/><span>Execution begins instantly. Your business is transformed, your systems are smarter — and you're officially ahead of the curve.</span></div>
                        </div>
                    </div>
                </section>

                {/* section 4  */}
                {/* <VoiceSelector /> */}
                <PlayAudio />
                
                

                {/* section 5  */}
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
                        data-aos="fade-up">
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
                    <div className="bg-orange ai-panel ai-left pb-20" >
                        <div className="border border-gray-800 rounded-lg p-6 w-full max-w-md" data-aos="fade-right" >
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
                            <p className="text-white">Hey I would like to book an appointment. I am not feeling well. I have a headache.</p>
                            <div className="absolute right-4 bottom-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    {/* Right panel - Content */}
                    <div className="bg-orange ai-panel ai-right  pb-20" >
                        <div data-aos="fade-left">
                        <p className="text-lg mb-2">AI Discovery Frontiers</p>
                        <h1 className="text-4xl font-bold mb-6">Emerging Frontiers in AI Exploration</h1>
                        
                        <p className="mb-2">
                        Embark on a journey into the ever-expanding world of artificial intelligence
                        exploration. Discover the latest advancements and breakthroughs shaping
                        the future.
                        </p>
                        
                        <p>
                        Fun Fact: Did you know apple has enhanced their customer support using
                        100% Voice-Driven Intelligence Facilitators
                        </p>
                        </div>
                    </div>
                </div>
  
                {/* section 6  */}
                <div className="bg-gradient-blue-red text-white flex items-center justify-center p-4">
                    <div className="flex w-full max-w-6xl gap-8 items-center mobile-block">
                        {/* Left panel content */}
                        <div className="flex-1"  data-aos="fade-right">
                            <p className="text-orange text-lg mb-3">AI’s Creative Brilliance Unleashed</p>
                            <h1 className="text-4xl font-bold mb-6">
                                Crafted by <span className="text-amber-400">AI</span> Inspired by Brilliance.
                            </h1>
                            <p className="mb-3 text-gray-300">
                                Enhance your Voice Intelligence by customizing its personality. Choose from thousands of pre-set personas tailored to your needs.
                            </p>
                            <p className="text-sm text-white mb-3">
                               <b> Fun Fact:</b> Walmart uses voice-enabled AI assistants to streamline order placement, tracking, and customer support.
                            </p>
                        </div>
                        
                        {/* Right panel content */}
                        <div className="flex-1" data-aos="fade-left">
                        <div className="bg-white rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                            <div className="flex justify-end mb-4">
                            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                                Update Your AI Voice Agent
                            </button>
                            </div>
                            <img src={updateVoiceAgentImg} alt="" />
                            
                        </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-blue-red text-white p-8 flex items-center">
                    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left side - Dashboard interface */}
                        <div className="relative" data-aos="fade-right">
                        <div className="border border-gray-800 rounded-lg p-6 bg-black/60 relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-teal-500/20 blur-md rounded-lg -z-10"></div>
                            
                            <div className="flex justify-center mb-6">
                            <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-md uppercase text-sm tracking-wider">
                                Check Calls Made with a Contact
                            </button>
                            </div>
                            
                            <div className="mb-6 relative">
                            <input
                                type="text"
                                value={customerId}
                                onChange={(e) => setCustomerId(e.target.value)}
                                className="w-full bg-black/80 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-teal-500"
                                placeholder="CustomerID"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            </div>
                            
                            <div className="bg-black/80 border border-gray-800 rounded-md overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                <tr className="border-b border-gray-800">
                                    <th className="p-3 text-gray-400 font-medium">CustomerID</th>
                                    <th className="p-3 text-gray-400 font-medium">Call Recording</th>
                                    <th className="p-3 text-gray-400 font-medium">Booked?</th>
                                    <th className="p-3 text-gray-400 font-medium">Total Calls</th>
                                </tr>
                                </thead>
                                <tbody>
                                {callData.map((call) => (
                                    <tr key={call.id} className="border-b border-gray-800">
                                    <td className="p-3">{call.id}</td>
                                    <td className="p-3">
                                        <button className="text-teal-500 hover:text-teal-400">
                                        Download
                                        </button>
                                    </td>
                                    <td className="p-3">Yes</td>
                                    <td className="p-3">{call.totalCalls}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                        
                        {/* Right side - Text content */}
                        <div className="flex flex-col justify-center" data-aos="fade-left">
                        <div className="text-orange text-lg mb-4">Creativity, Unleashed</div>
                        <h1 className="text-4xl font-bold mb-4">
                            Streamline Your Search Experience <span className="text-teal-400">InfoTech</span> Dashboard
                        </h1>
                        <p className="text-white mb-3">
                            InfoTech's Voice Intelligence Dashboard delivers complete visibility into customer interactions with call history, recordings, analytics, and more.
                        </p>
                        <p className="text-sm text-white">
                            Did You Know? CVS Health uses AI-driven voice assistants for scheduling appointments, providing customer support, and managing prescription renewals.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-blue-red text-white p-8 flex flex-col items-center">
                    <div className="text-center max-w-3xl mx-auto mb-16 mt-16" data-aos="fade-up">
                    <p className="text-lg text-orange mb-4">Get Started with a Demo Today</p>
                    <h1 className="text-3xl font-bold mb-2">
                            Bespoke Victory Solutions, Tailored Just for You
                        </h1>
                        <p className="text-sm text-white mb-4">
                            Join the AI Renaissance. Harness customized Voice Intelligence Facilitators to handle tasks with precision, tailored perfectly for your business.
                        </p>
                        
                    </div>
                    
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Panel */}
                        <div className="bg-black/40 border border-white-500 rounded-lg p-4" data-aos="fade-right">
                            <img src={personalizedExpImg} alt="" />
                        </div>
                        
                        {/* Right Panel */}
                        <div className="bg-black/40 border border-white-500 rounded-lg p-4" data-aos="fade-left">
                            <img src={considerItDoneImg} alt="" />
                        </div>

                        
                    </div>
                </div>

                <div className="bg-gradient-blue-red text-white p-6 flex flex-col items-center">
                    {/* Features Section */}
                    <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-16 mb-16">
                        {/* Feature 1 */}
                        <div className="feature-card-1  relative bg-white-rounded text-center">
                        <div className="flex justify-center">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 mt-4 text-black">Unlimited Call Capabilities</h3>
                        <p className="text-sm text-black">
                            Our AI-powered Voice Assistants are pre-trained for fluid conversations and unlimited calls. The future of communication is here!
                        </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-card-1  relative bg-white-rounded text-center">
                        <div className="flex justify-center">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg text-black font-semibold mb-2 mt-4">Highly Compliant and Fully Adherent</h3>
                        <p className="text-sm text-black">
                            Our Voice Assistants offer an exceptional level of compliance, fully adhering to regulatory laws. Check the FAQs for more information.
                        </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-card-1 relative bg-white-rounded text-center">
                        <div className="flex justify-center">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg text-black font-semibold mb-2 mt-4">Personalized Profiles</h3>
                        <p className="text-sm text-black">
                            Through established neural networks, we've designed AI personalities in various tones — from witty to assertive to professional. There's something for everyone!
                        </p>
                        </div>
                    </div>
                    </div>
                    
                    {/* Main Heading */}
                    <div className="text-center mb-8" data-aos="fade-up">
                        <div className="inline-flex items-center mb-4 mt-8">
                        <svg className="w-4 h-4 mr-2 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-lg uppercase tracking-wider text-orange">Flexible Employee Solution</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-3">Fully Scalable AI-Powered Super Employee</h1>
                        <p className="text-lg text-white max-w-3xl mx-auto">
                            Release yourself from the limits of employees. Welcome the AI Renaissance, where a boundless and secure digital future awaits, free from data breaches.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
                        {/* First Card: Update Manually */}
                        <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-4 relative">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center mb-1">
                                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                                </div>
                                <span className="text-xs text-gray-500">Draw</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center mb-1">
                                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <span className="text-xs text-gray-500">File</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center mb-1">
                                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <span className="text-xs text-gray-500">Topic</span>
                            </div>
                            </div>
                        </div>
                        
                        <div className="text-xs text-gray-400 mb-3">
                            Select your preferred update to continue...
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-sm">CustomerKnowledge.pdf</div>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-2">Manual Update</h3>
                        <p className="text-sm text-gray-400">
                            Easily update your knowledge base fields manually, even post-integration!
                        </p>
                        </div>
                        
                        {/* Second Card: Live Test */}
                        <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-4 relative">
                        <div className="flex flex-col space-y-3 mb-6">
                            <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                            </div>
                            <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                            <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-6">
                            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-teal-500">100% WORKING </span>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-2">Perform Live Testing of Operational Voice Intelligence Facilitators</h3>
                        <p className="text-sm text-gray-400">
                            Confirm your Voice Intelligence Facilitators are up and running through a live test.
                        </p>
                        </div>
                        
                        {/* Third Card: Live Personalization */}
                        <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-4 relative">
                        <div className="flex justify-between mb-6 text-xs text-gray-500">
                            <div>ENABLED</div>
                            <div>AI AGENT PICTURE</div>
                            <div>WELCOME MSG</div>
                        </div>
                        
                        <div className="h-20 bg-gray-800 rounded flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-sm">AI Voice Agent Personalization</div>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-2">Instant Personalization</h3>
                        <p className="text-sm text-gray-400">
                            Carry out quality checks on Voice Intelligence Facilitators even after deployment to ensure consistent brand experience.
                        </p>
                        </div>
                        
                        {/* Fourth Card: Multiple Languages */}
                        
                        {/* Fifth Card: Clone Your Own Voice */}
                        <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-4 relative">
                        <div className="flex justify-between mb-6">
                            <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center mb-1">
                                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-xs text-gray-500">Live</span>
                            </div>
                            <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center mb-1">
                                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-xs text-gray-500">Text</span>
                            </div>
                            <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center mb-1">
                                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-xs text-gray-500">File</span>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 rounded p-3 mb-6">
                            <p className="text-xs">Create Voice</p>
                        </div>
                        
                        <div className="flex items-center mb-6">
                            <span className="text-xs text-teal-500 mr-2">Clone Voice</span>
                            <span className="text-xs text-gray-500 mx-2">Applying To Main</span>
                            <span className="text-xs text-gray-500 mx-2">Load Configuration As Voice Agent</span>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-2">Generate a Copy of Your Own Voice</h3>
                        <p className="text-sm text-gray-400">
                            If you don’t trust our voice, simply clone your own voice and accent.
                        </p>
                        </div>
                    </div>
                    
                </div>

                {/* <div className="bg-black text-white min-h-screen p-8"></div> */}
                <div className="bg-gradient-blue-red text-black min-h-screen p-8" style={{
                        marginTop: "0px"
                    }}>
                    {/* Demo CTA Button */}
                    <div
                        className="hero-content text-center max-w-3xl text-white" data-aos="fade-up"
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
                            Have you incorporated InfoTechAI yet? Well, your competitors might!
                        </p>
                    </div>

                    <div className="flex justify-center mb-8 mt-4" data-aos="fade-up">
                        <Link className="bg-rose-600 text-white rounded-full px-6 py-2 flex items-center"
                            // onClick={onOpen}
                            to="/ai-demo-call"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                            Experience AI Demo Call First
                        </Link>
                    </div>

                    {/* Pricing Plans */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
                        {/* Cadet Plan */}
                        <div className="border border-gray-800 rounded-lg overflow-hidden bg-white">
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-2">Basic - Your Perfect Start</h2>
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
                                <UnlockBtn />
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
                                Model: ITL V1.2
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
                            <h2 className="text-lg font-semibold mb-2">Standard - Your Way To Scale</h2>
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
                                <UnlockBtn />
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
                                Model: ITL A1
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
                                <UnlockBtn />
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
                                Model: InfoTech Launch A2
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
                        <div className="md:w-1/3" data-aos="fade-right">
                        {/* <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1> */}
                        <img src={faqImg} alt="" />
                        </div>

                        {/* Right column - FAQ items */}
                        <div className="md:w-2/3 space-y-4" data-aos="fade-left">
                        {/* FAQ Item 1 */}
                        <div className="bg-white rounded">
                            <div className="flex justify-between items-center p-4">
                            <h3 className="font-medium">How do I get started with InfoTechAI?</h3>
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
                            <h3 className="font-medium">What are InfoTechAI's Operational Voice-Driven Intelligence Facilitators?</h3>
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
                                <p>InfoTechAI has developed revolutionary breathtaking AI that can integrate with all of your software to finally solve all your problems. AI that uses humanlike voices and tonality to achieve certain tasks.</p>
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
                            <h3 className="font-medium">How does InfoTechAI ensure the security of my data?</h3>
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
                                <p>InfoTechAI employs robust encryption, secure data storage, and strict access controls to ensure your data remains protected. We follow industry best practices to maintain confidentiality and prevent unauthorized access, ensuring complete data security at every level.</p>
                            </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
 


                <Footer />
            </AOSProvider>
        </>
    );
};

export default AiVoiceAgent;
