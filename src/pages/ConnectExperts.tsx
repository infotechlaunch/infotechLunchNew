import React, {useState, useRef, useEffect}  from "react";
// import { Link } from 'react-router-dom';
import getStartedImg from "../assets/Images/aiSocialMedia/get-started.png";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";



const ConnectExperts: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const recaptchaRef = useRef(null);
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
    
    const [formData, setFormData] = useState(EMPTY_FORM);

    const handleCaptchaChange = (token:string | null) => {

        setFormData((prev) => ({
            ...prev,
            consent: !!token,
            captchaToken: token || ""
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
    };
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        if(!formData.name) {
            alert("Please enter name");
            return;
        }

        if(!formData.email) {
            alert("Please enter email");
            return;
        }

        if(!formData.phone) {
            alert("Please enter phone");
            return;
        }

        if (formData.phone.length < 10) {
            alert("Please enter between 10-12 digits only");
            return;
          }
      
          if (formData.phone.length > 12) {
            alert("Please enter between 10-12 digits only");
            return;
          }

        if(!formData.about) {
            alert("Please enter about yourself");
            return;
        }

        if(formData.agreement !== "yes") {
            alert("Please accept agree to receive SMS");
            return;
        }

        if (!formData.captchaToken) {
            alert("Please verify you’re not a robot");
            return;
        }

        setLoading(true);
        Axios.post(`https://dishefs.com/infotech_admin/api/get-started`, formData)
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

        // console.log('Sending data:', Object.fromEntries(params));

        // Axios.post('https://script.google.com/macros/s/AKfycbyAj4IRHnj7GosxqPG3q4v3dFro_O0rzrMD2ue3DjvFw8AMcDbfW2SEd7QUMo0706UxkQ/exec', 
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

           
                <button className="btn btn-fix" onClick={onOpen}>
                Talk to an expert!
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.231"
                    height="11.738"
                    viewBox="0 0 24.231 11.738"
                >
                    <path
                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                    transform="translate(-521.511 -1346.214)"
                    fill="#fff"
                    />
                </svg>
                </button>


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
                                    required
                                />
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
                                    required
                                />
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
                                    required
                                />
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
                                    required
                                >

                                </textarea>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "5px" }}>
                                <input 
                                    type="checkbox" 
                                    name="agreement" 
                                    id="agreement" 
                                    checked={formData.agreement === 'yes'}
                                    onChange={(e) => {
                                        setFormData(prevData => ({
                                            ...prevData,
                                            agreement: e.target.checked ? 'yes' : 'no'
                                        }));
                                    }}
                                />
                                <label htmlFor="agreement" className="block text-sm font-medium text-gray-700">
                                    {/* I Agree To Receive SMS & Connect On WhatsApp */}
                                    I consent to receive SMS notifications, alerts, and occasional marketing messages from Infotech Launch.
                                </label>
                            </div>

                            <div style={checkboxContainerStyle}>
                                <ReCAPTCHA
                                    sitekey="6LesWyQrAAAAAGFv6DHeRXlsjyZhoJ9i_NoBfvmT"
                                    ref={recaptchaRef}
                                    onChange={handleCaptchaChange}   // token comes in here
                                    theme="light"             // light or "dark"
                                />
                            </div>
                            
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

export default ConnectExperts;
