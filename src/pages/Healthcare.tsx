import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import healthCareImg from "../assets/Images/hero-img/healthcare.webp";



const Healthcare: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="w-full bg-gradient-blue-red py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
      <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight">
        Empowering Healthcare With <span className="text-orange">Next-Gen</span> Digital Solutions
      </h1>
      <p className="text-lg text-white">
        Custom healthcare apps powered by clinical expertise — from telemedicine to patient portals.
      </p>
      <Link
        to="/contact-us"
        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-all shadow-md"
        style={{marginLeft: "10px"}}
      >
        Talk With Expert
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2" data-aos="fade-left">
      <img
        src={healthCareImg}
        alt="Healthcare Solutions"
        className="w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>

                <ContactForm />
                <Footer />
            </AOSProvider>
        </>

    );
};

export default Healthcare;
