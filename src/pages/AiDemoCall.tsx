import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";

const AiDemoCall = () => {

  const recaptchaRef = useRef(null);
  const [loading, setLoading]   = useState(false);
  const [showThanks, setShowThanks] = useState(false);


  const EMPTY_FORM = {
    name: "",
    email: "",
    companyName: "",
    industry: "",
    findUs: "",
    whatsappNumber: "",
    phoneNumber: "",
    consent: false,
    captchaToken: ""
  };

  const EMPTY_ERRORS = {
    name: "",
    email: "",
    companyName: "",
    industry: "",
    findUs: "",
    whatsappNumber: "",
    phoneNumber: "",
    consent: "",
    captchaToken: ""
  };

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState(EMPTY_ERRORS);

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

    if (!formData.name.trim()) {
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

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
      if (!hasError) {
        document.getElementById("companyName")?.focus();
      }
      hasError = true;
    }

    if (!formData.industry) {
      errors.industry = "Industry is required";
      if (!hasError) {
        document.getElementById("industry")?.focus();
      }
      hasError = true;
    }

    if (!formData.findUs) {
      errors.findUs = "Find us is required";
      if (!hasError) {
        document.getElementById("findUs")?.focus();
      }
      hasError = true;
    }

    if (!formData.whatsappNumber.trim()) {
      errors.whatsappNumber = "WhatsApp number is required";
      if (!hasError) {
        document.getElementById("whatsappNumber")?.focus();
      }
      hasError = true;
    } else if (
      formData.whatsappNumber.length < 10 ||
      formData.whatsappNumber.length > 12
    ) {
      errors.whatsappNumber = "Please enter between 10-12 digits only";
      if (!hasError) {
        document.getElementById("whatsappNumber")?.focus();
      }
      hasError = true;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      if (!hasError) {
        document.getElementById("phoneNumber")?.focus();
      }
      hasError = true;
    } else if (
      formData.phoneNumber.length < 10 ||
      formData.phoneNumber.length > 12
    ) {
      errors.phoneNumber = "Please enter between 10-12 digits only";
      if (!hasError) {
        document.getElementById("phoneNumber")?.focus();
      }
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
    Axios.post(`https://dishefs.com/infotech_admin/api/ai-demo-call`, formData)
      .then(response => {
        // console.log('response=====>>>>>', response.data);
        if(response.data.status === true) {
          setShowThanks(true);
          setFormData(EMPTY_FORM); 
          setTimeout(() => {
            setShowThanks(false);
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

    // Axios.post('https://script.google.com/macros/s/AKfycbxHGePL6cuC013KzD-tq2e9oMO1oOM48XrDWZLTbt17cJTRfERpj1Yhht9J18W5jc1r/exec', 
    Axios.post('https://script.google.com/macros/s/AKfycbx_sIfqlsGNMMkrzqeuOb6YpZd_Abzp5Qgc78pxzdokuH-gzwRXaIGaB8ojWec-9mAk/exec', 
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
      
      
  };
  

  const formContainerStyle = {
    maxWidth: '500px',
    width: '100%'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#1e1e1e',
    border: 'none',
    borderRadius: '0.25rem',
    color: 'white',
    marginBottom: '1rem'
  };


  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#ff3366',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '0.5rem',
    display: "flex"
  };

  const smallTextStyle = {
    fontSize: '0.75rem',
    color: '#aaaaaa',
    marginBottom: '1rem'
  };


  return (
    <>
    
    <AOSProvider>
        <></>
      </AOSProvider>
        <HeaderNew />

        <div style={{
            background: 'linear-gradient(to top right, blue, red)',
            color: 'white',
            minHeight: '100vh',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

          <div style={formContainerStyle}>
            
            <div style={{
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
              <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                  <span>✨ InstantCall</span>
              </div>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                Turn every call into revenue — no missed opportunities.
              </h1>
              <p style={{ color: '#aaaaaa', fontSize: '0.875rem' }}>
                Manage your call center, incoming calls, and texts seamlessly from one AI-powered dashboard with predictive call handling and more.
              </p>
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

            <form onSubmit={handleSubmit}>
            <div>
              <label style={labelStyle} htmlFor="name">
                Name *
              </label>
              <input
                style={inputStyle}
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <div style={{ color: 'red' }}>{formErrors.name}</div>}
            </div>

            <div>
              <label style={labelStyle} htmlFor="email">
                Email *
              </label>
              <input
                style={inputStyle}
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
            </div>

            <div>
              <label style={labelStyle} htmlFor="companyName">
                Company Name *
              </label>
              <input
                style={inputStyle}
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company name"
                value={formData.companyName}
                onChange={handleChange}
              />
              {formErrors.companyName && <div style={{ color: 'red' }}>{formErrors.companyName}</div>}
            </div>

            <div>
              <label style={labelStyle} htmlFor="industry">
              Business Industry? *
              </label>
              <select
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1em'
                }}
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                >
                <option value="">Select industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="finance">Finance</option>
                <option value="other">Other</option>
              </select>
              {formErrors.industry && <div style={{ color: 'red' }}>{formErrors.industry}</div>}
            </div>

            <div>
                <label style={labelStyle} htmlFor="findUs">
                How Did you find us? *
                </label>
                <select
                style={{
                    ...inputStyle,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                }}
                id="findUs"
                name="findUs"
                value={formData.findUs}
                onChange={handleChange}
                >
                <option value="">Select an option</option>
                <option value="search-engine">Search Engine</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
                </select>
                {formErrors.findUs && <div style={{ color: 'red' }}>{formErrors.findUs}</div>}
            </div>

            <div>
                <label style={labelStyle} htmlFor="whatsappNumber">
                WhatsApp Number *
                </label>
                <input
                style={inputStyle}
                  type="number"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  placeholder="Your WhatsApp number"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                />
                {formErrors.whatsappNumber && <div style={{ color: 'red' }}>{formErrors.whatsappNumber}</div>}
            </div>

            <div>
                <label style={labelStyle} htmlFor="phoneNumber">
                Phone Number (Used For AI Demo Call) *
                </label>
                <input
                  style={inputStyle}
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {formErrors.phoneNumber && <div style={{ color: 'red' }}>{formErrors.phoneNumber}</div>}
            </div>

            <p style={smallTextStyle}>
                By submitting, you consent to receive follow-ups via call or email from ReactToCall.
            </p>

            <p style={smallTextStyle}>
                Please speak to our live chat representative should you have any questions. Please read our{' '}
                <a href="#" style={{ color: '#ff3366', textDecoration: 'underline' }}>
                Privacy Policy
                </a>
                .
            </p>

            <div style={checkboxContainerStyle}>
              <ReCAPTCHA
                sitekey="6LesWyQrAAAAAGFv6DHeRXlsjyZhoJ9i_NoBfvmT"
                ref={recaptchaRef}
                onChange={handleCaptchaChange}   // token comes in here
                theme="light"             // light or "dark"
              />
            </div>
            {formErrors.captchaToken && <div style={{ color: 'red' }}>{formErrors.captchaToken}</div>}

            <motion.button
              type="submit"
              style={buttonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              Guarantee Your Future →
            </motion.button>
            </form>
        </div>
        </div>

        <Footer />
    </>
  );
};

export default AiDemoCall;