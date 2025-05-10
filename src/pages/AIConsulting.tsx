// import React from "react";
import React, { useState } from "react";
import HeaderNew from "../components/Header/HeaderNew";
// import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AiConsultingHeroImg from "../assets/Images/aiDevelopment/aiconsulting/aiconsulting-hero-img.webp";
import Services from "../components/Services/ServicesAIConsulting";
import ConnectExperts from "../pages/ConnectExperts";
import achieveimg1 from '../assets/Images/aiDevelopment/aiconsulting/achievement/AI_Transformation_Projects_Delivered.webp';
import achieveicon1 from '../assets/Images/aiDevelopment/aiconsulting/achievement/icon/icon1.png';
import achieveimg2 from '../assets/Images/aiDevelopment/aiconsulting/achievement/AI_Consultant_Solution_Engineers.webp';
import achieveicon2 from '../assets/Images/aiDevelopment/aiconsulting/achievement/icon/icon2.png';
import achieveimg3 from '../assets/Images/aiDevelopment/aiconsulting/achievement/Client_Success_Rate_Achieved.webp';
import achieveicon3 from '../assets/Images/aiDevelopment/aiconsulting/achievement/icon/icon3.png';
import achieveimg4 from '../assets/Images/aiDevelopment/aiconsulting/achievement/Accuracy_in_Intent_Recognition_Achieved.webp';
import achieveicon4 from '../assets/Images/aiDevelopment/aiconsulting/achievement/icon/icon4.png';

import IndustriesHome from "../components/AIConsulting/Industries";
import toolimg1 from '../assets/Images/aiDevelopment/tools/1.png';
import toolimg2 from '../assets/Images/aiDevelopment/tools/2.png';
import toolimg3 from '../assets/Images/aiDevelopment/tools/3.png';
import toolimg4 from '../assets/Images/aiDevelopment/tools/4.png';
import toolimg5 from '../assets/Images/aiDevelopment/tools/5.png';
import toolimg6 from '../assets/Images/aiDevelopment/tools/6.png';
import toolimg7 from '../assets/Images/aiDevelopment/tools/7.png';
import toolimg8 from '../assets/Images/aiDevelopment/tools/8.png';
import toolimg9 from '../assets/Images/aiDevelopment/tools/9.png';
import toolimg10 from '../assets/Images/aiDevelopment/tools/10.png';
import toolimg11 from '../assets/Images/aiDevelopment/tools/11.png';
import AOSProvider from "../components/AOSProvider";
import WhyChoose from "../components/AIConsulting/WhyChoose";
const achievements = [
  {
    id: 1,
    number: "70+",
    text: "AI Transformation Projects Delivered",
    icon: achieveicon1,
    image: achieveimg1,
  },
  {
    id: 2,
    number: "40+",
    text: "AI Consultant, Solution Engineers",
    icon: achieveicon2,
    image: achieveimg2,
  },
  {
    id: 3,
    number: "15+",
    text: " Client Success Rate Achieved",
    icon: achieveicon3,
    image: achieveimg3,
  },
  {
    id: 4,
    number: "92%",
    text: "Accuracy in Intent Recognition Achieved",
    icon: achieveicon4,
    image: achieveimg4,
  },
];
const AIConsulting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <>

      <AOSProvider>
        <></>
      </AOSProvider>
      <HeaderNew />
      <section className="hero-container bg-gradient-blue-red">
        <div className="hero-content">
          <div className="hero-text">
            <div className="sticky top-40 z-40">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                AI Consulting Services
              </h1>
              <p className="text-lg md:text-xl text-white mb-3">
                We help businesses harness the power of Artificial Intelligence to automate workflows,
                gain deeper insights, and unlock new opportunities. Let’s transform your future with
                data-driven intelligence.
              </p>
              <ConnectExperts />
            </div>
          </div>
          <div className="hero-image overflow-hidden  rounded-xl" data-aos="fade-left" style={{ zIndex: "0" }}>
            <div data-aos="fade-left">
              <img src={AiConsultingHeroImg} alt="" className="object-cover max-h-[500px] features-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="achievement-wrapper">
            {achievements.map((item, index) => (
              <div data-aos="fade-up"
                key={item.id}
                className={`achievement-wrapper__item ${index === activeIndex ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="achievement-content">
                  <div className="icn"> <img src={item.icon} alt="Icon" className="img-fluid lazyloaded" />
                  </div>
                  <div className="content">
                    <h2>{item.number}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
                <div className="achievement-image"> <img alt="AI Experts" src={item.image} /> </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      <Services />
      <WhyChoose />
      <IndustriesHome />
      <section className="lg:py-16 py-10 bg-gradient-blue-red">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

          <div className="space-y-4 ">
            <div className="space-y-4 text-center">
              <h2 data-aos="fade-up" className="xl:text-4xl text-3xl text-[#fff] font-bold">Best-in-Class AI Platform</h2>
              <p className="text-base text-white">Powering success with cutting-edge AI technologies and intelligent solutions
</p>
            </div>
            <div className="grid pt-8 grid-cols-1 md:grid-cols-5 gap-4 text-center">

              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg1} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">Caffe 2</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg2} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">PyTorch</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg3} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">NVCAFF</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg4} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">Chainer</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg5} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">Theano</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg6} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">Mxnet</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg7} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">Kurento</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg8} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">3D rendering</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg9} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-base font-semibold">Deeplearning4j</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange  shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg10} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">AI</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4 bg-orange shadow-lg rounded-lg  feature-card-1">
                <div className="w-1/3">
                  <img src={toolimg11} className="tool-icon" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl font-semibold">Igniter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AIConsulting;
