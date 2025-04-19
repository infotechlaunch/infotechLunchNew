import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import uiUxDesignImg from "../assets/Images/ui-ux-design.jpg";



const UiUxDesign: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="bg-white py-20 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* Left - Text Content */}
    <div className="w-full lg:w-1/2 space-y-6">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Crafting Intuitive Designs That Delight and Convert
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        We blend creativity with usability to design seamless user experiences that drive engagement and elevate your brand identity. 
      </p>
      <div>
        <Link
          to="/contact-us"
          className="inline-flex items-center px-6 py-3 bg-black text-white text-base font-medium rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
        >
          Talk With Expert
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="10"
            fill="none"
            viewBox="0 0 24 12"
            className="ml-3"
          >
            <path
              fill="currentColor"
              d="M0 5.5h19.17l-4.59-4.59L16 0l7 7-7 7-1.41-1.41L19.17 8H0V5.5z"
            />
          </svg>
        </Link>
      </div>
    </div>

    {/* Right - Image */}
    <div className="w-full lg:w-1/2">
      <img
        src={uiUxDesignImg}
        alt="UI/UX Design"
        className="w-full rounded-xl shadow-xl object-cover max-h-[500px]"
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

export default UiUxDesign;
