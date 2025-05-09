import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import ContactForm from "../components/ContactUs/ContactForm";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";
import uiUxDesignImg from "../assets/Images/ui-ux-design.jpg";
import addser1 from "../assets/Images/services/softwaredevelopment/additional/1.webp";
import addser2 from "../assets/Images/services/softwaredevelopment/additional/2.webp";
import addser3 from "../assets/Images/services/softwaredevelopment/additional/3.webp";
import addser4 from "../assets/Images/services/softwaredevelopment/additional/4.webp";
import FAQ from "../components/MobileDevelopment/Faq";
import WhyChoose from "../components/MobileDevelopment/services";
import Solutions from "../components/MobileDevelopment/Solutions";
import Industries from "../components/MobileDevelopment/Industries";


const UiUxDesign: React.FC = () => {

  return (
    <>
      <AOSProvider>
        <HeaderNew />
        <div className="bg-gradient-blue-red py-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left - Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Crafting Intuitive Designs That Delight and Convert
              </h1>
              <p className="text-lg text-white leading-relaxed">
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
            <div className="w-full lg:w-1/2 overflow-hidden">
              <img
                src={uiUxDesignImg}
                alt="UI/UX Design"
                className="w-full rounded-xl shadow-xl object-cover max-h-[500px] features-img"
              />
            </div>
          </div>
        </div>
        <Industries />
        <div className="w-full bg-purple-700 py-16">
          <section className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="flex items-center justify-center">
              <div className="space-y-3">
                <h2 className="xl:text-4xl text-3xl text-[#fff] text-center font-bold" data-aos="fade-up">These Additional Development Services Make Us the #1 Mobile App Development Company
                </h2>
                <p className="text-base text-[#fff] font-normal text-center" data-aos="fade-up">
                  Our wide range of value-added services — from UI/UX design and app testing to maintenance, upgrades, and marketing support — sets us apart and ensures a complete solution for your mobile app success. </p>
              </div>
            </div>
            <div className="grid gap-4 mx-auto lg:grid-cols-4 md:grid-cols-2  grid-cols-1 xl:gap-10 cursor-pointer mt-8">

              <div className="feature-card-1 block p-3 w-full h-full bg-[#fff] border border-[#000000]/10 rounded-xl">
                <div className="space-y-4 overflow-hidden text-left transition duration-150 group">
                  <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                    <img
                      alt="ApI Devel"
                      loading="lazy"
                      width="1280"
                      height="720"
                      decoding="async"
                      className="rounded-xl"
                      src={addser1}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-3">
                    <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                      API Development & Integration
                    </h3>
                    <p data-aos="fade-up" className="text-sm text-black">
                      Whether it's a social networking API, payment gateway, or any third-party service, we have the expertise to integrate it seamlessly into your app — ensuring smooth functionality and enhanced user experience.
                    </p>

                  </div>
                </div>
              </div>
              <div className="feature-card-1  block p-3 w-full h-full bg-[#fff] border border-[#000000]/10 rounded-xl">
                <div className="space-y-4 overflow-hidden text-left transition duration-150 group">
                  <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                    <img
                      alt={uiUxDesignImg}
                      loading="lazy"
                      width="1280"
                      height="720"
                      decoding="async"
                      className="rounded-xl"
                      src={addser2}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-3 w-full h-full">
                    <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                      App Analytics
                    </h3>
                    <p data-aos="fade-up" className="text-sm text-black">
                      We provide in-depth mobile app analytics to track performance and user behavior using advanced tools — helping you make data-driven decisions for app improvements and growth.
                    </p>

                  </div>
                </div>
              </div>
              <div className="feature-card-1  block p-3 w-full h-full bg-[#fff] border border-[#000000]/10 rounded-xl">
                <div className="space-y-4 overflow-hidden text-left transition duration-150 group">
                  <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                    <img
                      alt={addser3}
                      loading="lazy"
                      width="1280"
                      height="720"
                      decoding="async"
                      className="rounded-xl"
                      src={addser3}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-3 w-full h-full">
                    <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                      Quality Assurance
                    </h3>
                    <p data-aos="fade-up" className="text-sm text-black">
                      Our certified quality assurance experts design test plans, create procedures, and run detailed scripts to identify and fix any software bugs — ensuring a flawless and reliable app experience.
                    </p>

                  </div>
                </div>
              </div>
              <div className="feature-card-1 block p-3 w-full h-full bg-[#fff] border border-[#000000]/10 rounded-xl">
                <div className="space-y-4 overflow-hidden text-left transition duration-150   group">
                  <div className="object-cover w-full overflow-hidden" data-aos="fade-up">
                    <img
                      alt={addser4}
                      loading="lazy"
                      width="1280"
                      height="720"
                      decoding="async"
                      className="rounded-xl"
                      src={addser4}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-3 w-full h-full">
                    <h3 data-aos="fade-up" className="line-clamp-2 group-hover:text-[#f13c3c] font-semibold text-black text-xl md:text-2xl">
                      App Iterations
                    </h3>
                    <p data-aos="fade-up" className="text-sm text-black">

                      Whether it’s integrating third-party services or modifying custom features, we closely monitor every detail of your app project to ensure continuous improvements and deliver a flawless final product.
                    </p>

                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
        <Solutions />
        <WhyChoose />
        <FAQ />
        <ContactForm />

        <Footer />
      </AOSProvider>
    </>

  );
};

export default UiUxDesign;
