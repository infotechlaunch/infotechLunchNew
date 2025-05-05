import { useRef, useState } from 'react';
// import { motion } from 'framer-motion';

import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";

import Axios from "axios";


const AiContactUs = () => {
    // const [whatsappNumber, setWhatsappNumber] = useState('');
    // const [websiteLink, setWebsiteLink] = useState('');
    // const recaptchaRef = useRef(null);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    
    

    const EMPTY_FORM = {
        voice_automation: "",
        industry_type: "",
        yearly_revenue: "",
        country: "",
        transformative_for: "",
        monthly_usage: "",
        whatsappNo: "",
        website_link: "",
        consent: false,
        captchaToken: ""
    };

    const EMPTY_ERRORS = {
        voice_automation: "",
        industry_type: "",
        yearly_revenue: "",
        country: "",
        transformative_for: "",
        monthly_usage: "",
        whatsappNo: "",
        website_link: "",
        consent: "",
        captchaToken: ""
    };

    const [formData, setFormData] = useState(EMPTY_FORM);
    const [formErrors, setFormErrors] = useState(EMPTY_ERRORS);
    const [loading, setLoading]   = useState(false);
    const [showThanks, setShowThanks] = useState(false);

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));

        setFormErrors(prev => ({
          ...prev,
          [name]: ""
        }));
    };

    const handleCaptchaChange = (token:string | null) => {
      setFormData((prev) => ({
        ...prev,
        consent: !!token,
        captchaToken: token || ""
      }));
  
      setFormErrors(prev => ({
        ...prev,
        captchaToken: ""
      }));
    };


    const handleSubmit = (e:any) => {
        e.preventDefault();
    
        const errors: typeof formErrors = { ...EMPTY_ERRORS };
        let hasError = false;
        console.log('Form submitted:', formData);
    
        if (!formData.voice_automation.trim()) {
          errors.voice_automation = "This field is required";
          if (!hasError) {
            document.getElementById("voice_automation")?.focus();
          }
          hasError = true;
        }
        
    
        if (!formData.industry_type.trim()) {
            errors.industry_type = "This field is required";
            if (!hasError) {
              document.getElementById("industry_type")?.focus();
            }
            hasError = true;
        }
    
        if (!formData.yearly_revenue.trim()) {
          errors.yearly_revenue = "This field is required";
          if (!hasError) {
            document.getElementById("yearly_revenue")?.focus();
          }
          hasError = true;
        }
    
        if (!formData.country) {
          errors.country = "This field is required";
          if (!hasError) {
            document.getElementById("country")?.focus();
          }
          hasError = true;
        }
    
        if (!formData.transformative_for) {
          errors.transformative_for = "This field is required";
          if (!hasError) {
            document.getElementById("transformative_for")?.focus();
          }
          hasError = true;
        }
    
        if (!formData.monthly_usage.trim()) {
          errors.monthly_usage = "WhatsApp number is required";
          if (!hasError) {
            document.getElementById("monthly_usage")?.focus();
          }
          hasError = true;
        }
    
        if (!formData.whatsappNo.trim()) {
          errors.whatsappNo = "whatsapp number is required";
          if (!hasError) {
            document.getElementById("whatsappNo")?.focus();
          }
          hasError = true;
        } else if (
          formData.whatsappNo.length < 10 ||
          formData.whatsappNo.length > 12
        ) {
          errors.whatsappNo = "Please enter between 10-12 digits only";
          if (!hasError) {
            document.getElementById("whatsappNo")?.focus();
          }
          hasError = true;
        }

        if (!formData.website_link.trim()) {
          errors.website_link = "This field is required";
          if (!hasError) {
            document.getElementById("website_link")?.focus();
          }
          hasError = true;
        }

        // if (!formData.captchaToken) {
        //   errors.captchaToken = "Please confirm you're not a robot";
        //   hasError = true;
        // }
    
        if (hasError) {
          setFormErrors(errors);
          return;
        }
    
        setLoading(true);
        // Axios.post(`https://infotechlaunch.com/infotech-admin/public/api/ai-demo-call`, formData)
        //   .then(response => {
        //     // console.log('response=====>>>>>', response.data);
        //     if(response.data.status === true) {
        //       setShowThanks(true);
        //       setFormData(EMPTY_FORM); 
        //       setTimeout(() => {
        //         setShowThanks(false);
        //       }, 3000);
              
        //     } else {
        //       setShowThanks(false);
        //     }
        //   }).catch((error) => {
        //     setShowThanks(false);
        //     console.log('error occurs while submiting form =====>>>>>', error);
        //   }).finally(() => {
        //     setLoading(false);
        //   });
    
        const params = new URLSearchParams();
    
        (Object.keys(formData) as (keyof typeof formData)[]).forEach(key => {
          const value = formData[key];
          if (typeof value === 'boolean') {
            params.append(key, value ? 'true' : 'false');
          } else {
            params.append(key, value || '');
          }
        });
    
        console.log('Sending data:', Object.fromEntries(params));
    
        // Axios.post('https://script.google.com/macros/s/AKfycbxHGePL6cuC013KzD-tq2e9oMO1oOM48XrDWZLTbt17cJTRfERpj1Yhht9J18W5jc1r/exec', 
        Axios.post('https://script.google.com/macros/s/AKfycbzpKZRG5Arri8URHSzle5ZeQeqx7IMm0UHblDnzGeiJy_zGvsVk-W74QUNMwcqKX34P8A/exec', 
          params.toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(response => {
            console.log('response =====>>>>>', response.data);
            if (response.data.result === "success") {
              
              setShowThanks(true);
              setFormData(EMPTY_FORM);
              setTimeout(() => {
                setShowThanks(false);
              }, 3000);
            } else {
              setShowThanks(false);
            }
          })
          .catch(error => {
            setShowThanks(true);
            // setShowThanks(false);
            setFormData(EMPTY_FORM);
            setTimeout(() => {
              setShowThanks(false);
            }, 3000);
            recaptchaRef.current?.reset();
            console.log('error occurs while submitting form =====>>>>>', error);
          })
          .finally(() => {
            setLoading(false);
          });
          
          
      };

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  };


  return (
    <>
    
        <AOSProvider>
        <HeaderNew />
        
        <div className="bg-gradient-blue-red text-white flex items-center justify-center p-8">
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

        {showThanks && (
          <div
            className="
              fixed inset-0 z-50 flex items-center justify-center
              bg-black/40 backdrop-blur-sm
            "
          >
            <div
              className="
                rounded-2xl bg-white px-6 py-8 text-center shadow-xl
                animate-fade-in
              "
            >
              <h2 className="mb-2 text-xl font-semibold text-green-600">
                Thank you!
              </h2>
              <p className="text-gray-700">
                Your message has been sent successfully.
              </p>
            </div>
          </div>
        )}

        <div className="min-h-screen bg-gradient-blue-red text-white p-6 flex justify-center">
            <div className="w-full max-w-md">

                <form onSubmit={handleSubmit} className="space-y-4">
                {/* Question 1 */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Are you exploring AI voice automation solutions for your business? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select 
                            name="voice_automation"
                            id="voice_automation"
                            onChange={handleChange}
                            value={formData.voice_automation}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none"
                            >
                            <option value="" disabled></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {formErrors.voice_automation && <div style={{ color: 'red' }}>{formErrors.voice_automation}</div>}
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
                            name="industry_type"
                            id="industry_type"
                            onChange={handleChange}
                            value={formData.industry_type}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none"
                            >
                            <option value="" disabled></option>
                            <option value="healthcare">Healthcare</option>
                            <option value="retail">Retail</option>
                            <option value="finance">Finance</option>
                            <option value="technology">Technology</option>
                            <option value="other">Other</option>
                        </select>
                        {formErrors.industry_type && <div style={{ color: 'red' }}>{formErrors.industry_type}</div>}
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
                            name="yearly_revenue"
                            id="yearly_revenue"
                            onChange={handleChange}
                            value={formData.yearly_revenue}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none"
                            >
                            <option value="" disabled selected></option>
                            <option value="0-100k">$0 - $100,000</option>
                            <option value="100k-500k">$100,001 - $500,000</option>
                            <option value="500k-1m">$500,001 - $1,000,000</option>
                            <option value="1m-5m">$1,000,001 - $5,000,000</option>
                            <option value="5m+">$5,000,001+</option>
                        </select>
                        {formErrors.yearly_revenue && <div style={{ color: 'red' }}>{formErrors.yearly_revenue}</div>}
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
                            name="country"
                            id="country"
                            onChange={handleChange}
                            value={formData.country}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none"
                            >
                            <option value="" disabled></option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="other">Other</option>
                        </select>
                        {formErrors.country && <div style={{ color: 'red' }}>{formErrors.country}</div>}
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
                            name="transformative_for"
                            id="transformative_for"
                            onChange={handleChange}
                            value={formData.transformative_for}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none"
                            >
                            <option value="" disabled></option>
                            <option value="voice-ai">Voice AI</option>
                            <option value="customer-support">Customer Support Automation</option>
                            <option value="sales-automation">Sales Process Automation</option>
                            <option value="appointment-booking">Appointment Booking</option>
                            <option value="other">Other</option>
                        </select>
                        {formErrors.transformative_for && <div style={{ color: 'red' }}>{formErrors.transformative_for}</div>}
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
                        name="monthly_usage"
                        id="monthly_usage"
                        onChange={handleChange}
                        value={formData.monthly_usage}
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5 appearance-none"
                        >
                        <option value="" disabled selected></option>
                        <option value="0-100">0-100 minutes</option>
                        <option value="101-500">101-500 minutes</option>
                        <option value="501-1000">501-1000 minutes</option>
                        <option value="1001-5000">1001-5000 minutes</option>
                        <option value="5000+">5000+ minutes</option>
                    </select>
                    {formErrors.monthly_usage && <div style={{ color: 'red' }}>{formErrors.monthly_usage}</div>}
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
                        name="whatsappNo"
                        id="whatsappNo"
                        type="number" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5"
                        value={formData.whatsappNo}
                        onChange={handleChange}
                    />
                    {formErrors.whatsappNo && <div style={{ color: 'red' }}>{formErrors.whatsappNo}</div>}
                    <p className="text-xs text-gray-400 mt-1">Note: We will confirm on WhatsApp before continuing.</p>
                </div>
                
                {/* Website */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Enter your website link
                    </label>
                    <input 
                        name="website_link"
                        id="website_link"
                        type="text" 
                        className="bg-gray-900 border border-gray-800 text-white text-sm rounded block w-full p-2.5"
                        value={formData.website_link}
                        onChange={handleChange}
                    />
                    {formErrors.website_link && <div style={{ color: 'red' }}>{formErrors.website_link}</div>}
                </div>
                
               
                
                {/* reCAPTCHA */}

                <div style={checkboxContainerStyle}>
                  <ReCAPTCHA
                    // sitekey="6Leb8wErAAAAAK5cpMG6VAupj72TZTuCPSWmQe6c"
                    sitekey="6LdquS0rAAAAAOr9JV8Ar2rNxUx70q5pRzyGR6yH"
                    ref={recaptchaRef}
                    onChange={handleCaptchaChange}   // token comes in here
                    theme="dark"             // light or "dark"
                  />
                </div>
                {formErrors.captchaToken && <div style={{ color: 'red' }}>{formErrors.captchaToken}</div>}
                
                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 text-white font-medium rounded py-2 px-4 flex items-center"
                >
                  {loading && (
                      <svg
                        className="left-3 h-5 w-5 animate-spin mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    )}
                    Initiate your Journey
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