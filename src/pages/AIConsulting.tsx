// import React from "react";
import React, { useState } from "react";
import HeaderNew from "../components/Header/HeaderNew";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AiConsultingHeroImg from "../assets/Images/aiDevelopment/aiconsulting-hero-img.jpg";
import Services from "../components/Services/ServicesAIConsulting";
import ConnectExperts from "../pages/ConnectExperts";
import achieveimg1 from '../assets/Images/aiDevelopment/aiconsulting/AI_Transformation_Projects_Delivered.webp';
import achieveicon1 from '../assets/Images/aiDevelopment/icon1.png';
import achieveimg2 from '../assets/Images/aiDevelopment/aiconsulting/AI_Consultant_Solution_Engineers.webp';
import achieveicon2 from '../assets/Images/aiDevelopment/icon2.png';
import achieveimg3 from '../assets/Images/aiDevelopment/aiconsulting/Client_Success_Rate_Achieved.webp';
import achieveicon3 from '../assets/Images/aiDevelopment/icon3.png';
import achieveimg4 from '../assets/Images/aiDevelopment/aiconsulting/Accuracy_in_Intent_Recognition_Achieved.webp';
import achieveicon4 from '../assets/Images/aiDevelopment/icon4.png';
import whychooseicon1 from '../assets/Images/aiDevelopment/why-choose-1.png';
import whychooseicon2 from '../assets/Images/aiDevelopment/why-choose-2.png';
import whychooseicon3 from '../assets/Images/aiDevelopment/why-choose-3.png';
import whychooseicon4 from '../assets/Images/aiDevelopment/why-choose-4.png';
import whychooseicon5 from '../assets/Images/aiDevelopment/why-choose-5.png';
import whychooseicon6 from '../assets/Images/aiDevelopment/why-choose-6.png';
import IndustriesHome from "../components/AIConsulting/Industries";
import toolimg1 from '../assets/Images/aiDevelopment/aiAdaptive/tools/1.png';
import toolimg2 from '../assets/Images/aiDevelopment/aiAdaptive/tools/2.png';
import toolimg3 from '../assets/Images/aiDevelopment/aiAdaptive/tools/3.png';
import toolimg4 from '../assets/Images/aiDevelopment/aiAdaptive/tools/4.png';
import toolimg5 from '../assets/Images/aiDevelopment/aiAdaptive/tools/5.png';
import toolimg6 from '../assets/Images/aiDevelopment/aiAdaptive/tools/6.png';
import toolimg7 from '../assets/Images/aiDevelopment/aiAdaptive/tools/7.png';
import toolimg8 from '../assets/Images/aiDevelopment/aiAdaptive/tools/8.png';
import toolimg9 from '../assets/Images/aiDevelopment/aiAdaptive/tools/9.png';
import toolimg10 from '../assets/Images/aiDevelopment/aiAdaptive/tools/10.png';
import toolimg11 from '../assets/Images/aiDevelopment/aiAdaptive/tools/11.png';
import AOSProvider from "../components/AOSProvider";
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
      <div className="w-full bg-gradient-blue-red py-16">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="lg:flex space-y-3 items-center justify-between gap-10">
            <div>
              <h2 className="xl:text-4xl text-3xl text-[#fff] font-bold" data-aos="fade-up">Why Choose Our Generative AI Software Development Company?
              </h2>
            </div>
            <div>
              <Link to="/contact-us" data-discover="true" data-aos="fade-up">
                <button className="btn btn-fix lazyloaded">Connect
                  to expert<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                    <path id="Path_1487529" data-name="Path 1487529"
                      d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                      transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                  </svg>
                </button>
              </Link>
            </div>

          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 mt-10">
            <div className="lg:bg-center lg:flex hidden justify-end items-end  bg-no-repeat bg-cover bg-left whychoose  px-6 py-8 rounded-lg">
              <div className="feature-card-1 relative z-[1]" >

                <h2 className="xl:text-2xl text-xl text-[#fff] font-semibold">Optimum Outcome Focused</h2>
                <p className="text-base font-normal text-white">Our developers are focused to bring optimum outcomes
                  through our competitive web and app.
                </p>
                <div className="mt-4"><a href="/contact-us"><button
                  className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 text-center cursor-pointer transition duration-300 flex items-center hover:bg-white hover:text-black ">Get
                  in Touch</button></a>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4" data-aos="fade-left">
                <div className="feature-card-1 border  bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                  <div className="">
                    <img src={whychooseicon1} alt="" className="why-choose-icon object-contain-1" />
                    <h3 className="text-xl font-semibold mb-2">Holistic AI Ecosystem Approach</h3>
                    <p className="text-sm font-normal">We seamlessly blend advanced AI solutions into your current systems, ensuring smooth integration, accelerated adoption, and maximum return on investment — from initial strategy through full implementation.

                    </p>
                  </div>
                </div>
                <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                  <div>
                    <img src={whychooseicon2} alt="" className="why-choose-icon object-contain-1" />
                    <h3 className="text-xl font-semibold mb-2">Top 5% AI Talent</h3>
                    <p className="text-sm font-normal">Our team is made up of rigorously selected, seasoned AI experts who deliver responsible, high-quality solutions aligned with global standards and best practices.
                    </p>
                  </div>
                </div>
                <div className="feature-card-1 feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                  <div>
                    <img src={whychooseicon3} alt="" className="why-choose-icon object-contain-1" />
                    <h3 className="text-xl font-semibold mb-2">Rapid Prototyping & Proof of Concept</h3>
                    <p className="text-sm font-normal">Quickly turn ideas into reality. Our rapid prototyping approach delivers working AI models within weeks, helping you validate concepts and make informed decisions before committing to full deployment.
                    </p>
                  </div>
                </div>
                <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                  <div>
                    <img src={whychooseicon4} alt="" className="why-choose-icon object-contain-1" />
                    <h3 className="text-xl font-semibold mb-2">Cross-Industry Expertise</h3>
                    <p className="text-sm font-normal">With deep experience across finance, healthcare, retail, manufacturing, and beyond, we deliver innovative AI solutions tailored to diverse industry needs.
                    </p>
                  </div>
                </div>
                <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                  <div>
                    <img src={whychooseicon5} alt="" className="why-choose-icon object-contain-1" />
                    <h3 className="text-xl font-semibold mb-2">Human–AI Collaboration</h3>
                    <p className="text-sm font-normal">We leverage the latest AI tools and frameworks to build scalable, future-ready solutions that grow with your business.</p>
                  </div>
                </div>
                <div className="feature-card-1 border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2" >
                  <div>
                    <img src={whychooseicon6} alt="" className="why-choose-icon object-contain-1" />
                    <h3 className="text-xl font-semibold mb-2">Continuous AI Support</h3>
                    <p className="text-sm font-normal">Receive ongoing support to ensure your AI solutions adapt with your business needs, staying ahead of technological trends and driving continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
