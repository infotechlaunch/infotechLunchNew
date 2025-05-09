import React, {useState, useRef, useEffect}  from "react";
// import { Link } from 'react-router-dom';
import getStartedImg from "../assets/Images/aiSocialMedia/get-started.webp";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";



const ContactUsBtn: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    // const recaptchaRef = useRef(null);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [loading, setLoading]   = useState(false);
    const [showThanks, setShowThanks] = useState(false);


    const EMPTY_FORM = {
        name: '',
        email: '',
        phone: '',
        about: '',
        agreement: '',
        captchaToken: ''
    };

    const EMPTY_ERRORS = {
        name: "",
        email: "",
        phone: "",
        about: "",
        agreement: "",
        captchaToken: ""
    };
    
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [formErrors, setFormErrors] = useState(EMPTY_ERRORS);

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
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));

        setFormErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const errors: typeof formErrors = { ...EMPTY_ERRORS };
        let hasError = false;
        console.log('Form submitted:', formData);

        if(!formData.name.trim()) {
            errors.name = "Name is required";
            if (!hasError) {
                document.getElementById("name")?.focus();
            }
            hasError = true;
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
            if (!hasError) {
              document.getElementById("email")?.focus();
            }
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format";
            if (!hasError) {
              document.getElementById("email")?.focus();
            }
            hasError = true;
        }

        if (!formData.phone.trim()) {
            errors.phone = "Phone number is required";
            if (!hasError) {
              document.getElementById("phone")?.focus();
            }
            hasError = true;
        } else if (
            formData.phone.length < 10 ||
            formData.phone.length > 12
          ) {
            errors.phone = "Please enter between 10-12 digits only";
            if (!hasError) {
              document.getElementById("phone")?.focus();
            }
            hasError = true;
        }

        if(!formData.about) {
            errors.about = "About us is required";
            if (!hasError) {
                document.getElementById("about")?.focus();
            }
            hasError = true;
        }

        if(formData.agreement !== "yes") {
            errors.agreement = "Consent is required";
            hasError = true;
        }

        if (!formData.captchaToken) {
            errors.captchaToken = "Please confirm you're not a robot";
            hasError = true;
        }

        if (hasError) {
            setFormErrors(errors);
            return;
        }

        setLoading(true);
        // Axios.post(`https://dishefs.com/infotech_admin/api/get-started`, formData)
        Axios.post(`https://infotechlaunch.com/infotech-admin/public/api/get-started`, formData)
            .then(response => {
                console.log('response=====>>>>>', response.data);
                if(response.data.status === true) {
                setShowThanks(true);
                setFormData(EMPTY_FORM); 
                setTimeout(() => {
                    setShowThanks(false);
                    setIsOpen(false);
                }, 3000);
                } else {
                    setShowThanks(false);
                }
            }).catch((error) => {
                setShowThanks(false);
                console.log('error occurs while submiting form =====>>>>>', error);
            }).finally(() => {
                setLoading(false);
            });


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

        Axios.post('https://script.google.com/macros/s/AKfycbyvOFpFgeyIaPcC8K2aInGpn7_u8ZGhUiOgF9t5SwcFIwQcjQVz9oBI-v0IOKG3QcJk/exec', 
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
            setShowThanks(false);
            console.log('error occurs while submitting form =====>>>>>', error);
            setTimeout(() => {
                recaptchaRef.current?.reset();
            }, 3000);
        })
        .finally(() => {
            setLoading(false);
        });

        // Add your form submission logic here
        // onClose();
    };

    const checkboxContainerStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '1rem'
    };

    return (
        <>

           
            <span onClick={onOpen} className="cursor-pointer text-blue-600 bg-blue-300 hover:bg-blue-400 text-sm font-medium rounded px-4 py-1 transition">
                Contact us!
            </span>


            {isOpen && (
            <div ref={overlayRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div ref={popupBoxRef} className="bg-gradient-to-r from-red-500 to-blue-500 rounded-lg shadow-xl overflow-hidden w-full max-w-3xl get-started-box">
                    <div className="bg-white m-1 rounded-lg overflow-hidden flex flex-col md:flex-row">
                        
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
                        <div className="md:w-1/2 p-4 relative">
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
                                {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label> */}
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    placeholder="Enter name"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {formErrors.name && <div style={{ color: 'red', textAlign: "left" }}>{formErrors.name}</div>}
                            </div>
                            
                            <div>
                                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label> */}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email Id"
                                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {formErrors.email && <div style={{ color: 'red', textAlign: "left" }}>{formErrors.email}</div>}
                            </div>
                            
                            <div>
                                {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label> */}
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {formErrors.phone && <div style={{ color: 'red', textAlign: "left" }}>{formErrors.phone}</div>}
                            </div>
                            
                            <div>
                                {/* <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself</label> */}
                                <textarea
                                    id="about"
                                    name="about"
                                    value={formData.about}
                                    onChange={handleChange}
                                    placeholder="Tell us about yourself"
                                    className="w-full px-4 py-4 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >

                                </textarea>
                                {formErrors.about && <div style={{ color: 'red', textAlign: "left" }}>{formErrors.about}</div>}
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "5px" }}>
                                <input 
                                    type="checkbox" 
                                    name="agreement" 
                                    id="agreement" 
                                    checked={formData.agreement === 'yes'}
                                    onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        setFormData(prevData => ({
                                            ...prevData,
                                            agreement: isChecked ? 'yes' : 'no'
                                        }));

                                        setFormErrors(prev => ({
                                            ...prev,
                                            agreement: ""
                                        }));
                                    }}
                                />
                                <label htmlFor="agreement" className="block text-sm font-medium text-gray-700">
                                    {/* I Agree To Receive SMS & Connect On WhatsApp */}
                                    I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from Flux Fortify.
                                </label>
                            </div>
                            {formErrors.agreement && <div style={{ color: 'red', textAlign: "left" }}>{formErrors.agreement}</div>}

                            <div style={checkboxContainerStyle}>
                                <ReCAPTCHA
                                    sitekey="6LdquS0rAAAAAOr9JV8Ar2rNxUx70q5pRzyGR6yH"
                                    // sitekey="6Leb8wErAAAAAK5cpMG6VAupj72TZTuCPSWmQe6c"
                                    ref={recaptchaRef}
                                    onChange={handleCaptchaChange}   // token comes in here
                                    theme="light"             // light or "dark"
                                />
                            </div>
                            {formErrors.captchaToken && <div style={{ color: 'red', textAlign: "left" }}>{formErrors.captchaToken}</div>}
                            
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-md text-white font-medium text-lg mt-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity shadow-lg flex justify-center"
                            >
                                {loading && (
                                    <svg
                                        className="left-3 h-5 w-5 animate-spin mr-2 mt-1"
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
                                Submit
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>

    );
};

export default ContactUsBtn;
