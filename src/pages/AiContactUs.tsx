import { useState } from 'react';
// import { motion } from 'framer-motion';

import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";

const AiContactUs = () => {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');


  return (
    <>
    
        <AOSProvider>
        <HeaderNew />
        
        <div className="bg-gradient-blue-red text-white min-h-screen flex items-center justify-center p-8">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left Section - Headline */}
                <div className="flex-1">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Get Ahead of Your Competitors</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-teal-400">Protect Your </span>
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Business</span>
                        <br />
                        <span className="text-teal-400">Now,</span>
                        <span className="text-white">Not </span>
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Later.</span>
                    </h1>
                </div>
                
                {/* Right Section - Features */}
                <div className="flex-1 space-y-6">
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        Missed calls, lost clients, poor customer experience, and wasted time 
                        <br />– all come to an end now.
                    </h2>
                </div>
                
                <div>
                    <p className="mb-2">
                    Introducing
                    <span className="font-bold">AI Voice Facilitators</span>
                    — your
                    <span className="font-bold">your automated solution </span>.
                        for handling calls, booking clients, managing customer support, and operating 24/7 with zero effort on your part.
                    </p>
                </div>
                
                <div>
                    <p className="mb-2">
                    No setup headaches. No tech confusion. Just fast
                    <span className="font-bold"> effortless execution.</span>.
                    </p>
                </div>
                
                <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Guaranteed Simplicity in Customer Management.</span>
                </div>
                
                <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                    <span className="font-medium">
                        Get in touch now—delaying is what your competitors want. 
                    </span>
                </div>
                
                <div>
                    <p className="font-medium">The future isn't arriving; it's already here.</p>
                </div>
                
                <div className="flex items-center">
                    <span className="font-bold">Claim it today.</span>
                    <span className="ml-2">🚀</span>
                </div>
                </div>
            </div>
        </div>

        <div className="min-h-screen bg-gradient-blue-red text-white p-6 flex justify-center">
            <div className="w-full max-w-md">
                <form className="space-y-4">
                {/* Question 1 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Are you exploring AI voice automation solutions for your business? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select 
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none" required>
                            <option value="" disabled selected></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Question 2 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        What industry is your business part of? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select 
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none" required>
                            <option value="" disabled selected></option>
                            <option value="healthcare">Healthcare</option>
                            <option value="retail">Retail</option>
                            <option value="finance">Finance</option>
                            <option value="technology">Technology</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Question 3 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Please specify your yearly company revenue in USD. <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select 
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none" required>
                            <option value="" disabled selected></option>
                            <option value="0-100k">$0 - $100,000</option>
                            <option value="100k-500k">$100,001 - $500,000</option>
                            <option value="500k-1m">$500,001 - $1,000,000</option>
                            <option value="1m-5m">$1,000,001 - $5,000,000</option>
                            <option value="5m+">$5,000,001+</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Question 4 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Which country do you operate from? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select 
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none" required>
                            <option value="" disabled selected></option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Question 5 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Which transformative solution are you excited to explore? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select 
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none" required>
                            <option value="" disabled selected></option>
                            <option value="voice-ai">Voice AI</option>
                            <option value="customer-support">Customer Support Automation</option>
                            <option value="sales-automation">Sales Process Automation</option>
                            <option value="appointment-booking">Appointment Booking</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Question 6 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Estimated monthly usage (in minutes): <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                    <select 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none" required>
                        <option value="" disabled selected></option>
                        <option value="0-100">0-100 minutes</option>
                        <option value="101-500">101-500 minutes</option>
                        <option value="501-1000">501-1000 minutes</option>
                        <option value="1001-5000">1001-5000 minutes</option>
                        <option value="5000+">5000+ minutes</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    </div>
                </div>
                
                {/* WhatsApp Number */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        WhatsApp Number (with country code) <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        required
                    />
                    <p className="text-xs text-gray-400 mt-1">Note: We will confirm on WhatsApp before continuing.</p>
                </div>
                
                {/* Website */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Enter your website link
                    </label>
                    <input 
                        type="url" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5"
                        value={websiteLink}
                        onChange={(e) => setWebsiteLink(e.target.value)}
                    />
                </div>
                
                {/* Qualification warning */}
                <div className="text-sm text-gray-300">
                    Submit button not showing? It means the form requirements haven’t been met. Please check your responses and try again.
                    <p className="text-xs text-gray-400">Only 3 Slots Remaining.</p>
                </div>
                
                {/* reCAPTCHA */}
                <div className="flex items-center">
                    <div className="g-recaptcha bg-gray-800 border border-gray-700 rounded p-2 flex items-center">
                        <input type="checkbox" className="h-4 w-4 mr-2" />
                        <span className="text-xs text-gray-300">I'm not a robot</span>
                        <div className="ml-4">
                            <div className="flex flex-col items-center">
                                <img src="/api/placeholder/24/24" alt="reCAPTCHA logo" className="h-6 w-6" />
                                <span className="text-xxs text-gray-400">reCAPTCHA</span>
                                <span className="text-xxs text-gray-400">Privacy - Terms</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 text-white font-medium rounded py-2 px-4 flex items-center"
                >
                    Start Your Journey
                    <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
                </form>
            </div>
        </div>
        

        <Footer />
        </AOSProvider>
    </>
  );
};

export default AiContactUs;