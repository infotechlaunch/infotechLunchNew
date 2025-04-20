import { useState } from 'react';
import { motion } from 'framer-motion';

import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";

const AiDemoCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    voiceHandler: '',
    industry: '',
    findUs: '',
    whatsappNumber: '',
    phoneNumber: '',
    consent: false
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
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

//   const selectStyle = {
//     ...inputStyle,
//     appearance: 'none',
//     // backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
//     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right 1rem center',
//     backgroundSize: '1em'
//   };

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
    marginTop: '0.5rem'
  };

  const smallTextStyle = {
    fontSize: '0.75rem',
    color: '#aaaaaa',
    marginBottom: '1rem'
  };

  return (
    <>
    
        <AOSProvider>
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
                required
                />
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
                required
                />
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
                required
                />
            </div>

            <div>
                <label style={labelStyle} htmlFor="voiceHandler">
                AI Voice FacilIitator? *
                </label>
                <select
                style={{
                    ...inputStyle,
                    appearance: 'none',
                    // backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                }}
                id="voiceHandler"
                name="voiceHandler"
                value={formData.voiceHandler}
                onChange={handleChange}
                required
                >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </div>

            <div>
                <label style={labelStyle} htmlFor="industry">
                Business Industry? *
                </label>
                <select
                style={{
                    ...inputStyle,
                    appearance: 'none',
                    // backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                }}
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                >
                <option value="">Select industry</option>
                <option value="tech">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="finance">Finance</option>
                <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label style={labelStyle} htmlFor="findUs">
                How Did you find us? *
                </label>
                <select
                style={{
                    ...inputStyle,
                    appearance: 'none',
                    // backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                }}
                id="findUs"
                name="findUs"
                value={formData.findUs}
                onChange={handleChange}
                required
                >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label style={labelStyle} htmlFor="whatsappNumber">
                WhatsApp Number *
                </label>
                <input
                style={inputStyle}
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                placeholder="Your WhatsApp number"
                value={formData.whatsappNumber}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label style={labelStyle} htmlFor="phoneNumber">
                Phone Number (Used For AI Demo Call) *
                </label>
                <input
                style={inputStyle}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                />
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
                <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                style={{ marginRight: '0.5rem', marginTop: '0.25rem' }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.875rem' }}>
                I'm not a robot
                </label>
                <div style={{ marginLeft: 'auto' }}>
                <img src="/api/placeholder/50/50" alt="CAPTCHA" style={{ borderRadius: '4px' }} />
                </div>
            </div>

            <motion.button
                type="submit"
                style={buttonStyle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Guarantee Your Future →
            </motion.button>
            </form>
        </div>
        </div>

        <Footer />
        </AOSProvider>
    </>
  );
};

export default AiDemoCall;