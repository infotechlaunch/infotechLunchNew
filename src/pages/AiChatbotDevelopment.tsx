// import React from "react";
import AOSProvider from "../components/AOSProvider";
import HeaderNew from "../components/Header/HeaderNew";
import Footer from "../components/Footer/Footer";
import aiChatbotHeroImg from "../assets/Images/aiDevelopment/aichatdevelopment-hero-img.jpg";
import Services from "../components/Services/ServicesAIChatbot";
// import CreationProcess from "../components/AIChatbot/Process";
import Industries from "../components/AIChatbot/Industries";
import ConnectExperts from "../pages/ConnectExperts";
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
import creationprocess from '../assets/Images/aiDevelopment/aiChatbot/Chatbot_Creation_Process.webp';
import FAQ from "../components/Faq/FaqAIChatbot";
import Solution from "../components/AIChatbot/solution";

const AdaptiveAiDevelopment = () => {
  return (
    <>
      {/* <AOSProvider /> */}

      <AOSProvider>
        <></>
      </AOSProvider>
      <HeaderNew />
      <section className="hero-container bg-gradient-blue-red">
        <div className="hero-content">
          <div className="hero-text">
            <div className="sticky top-40 z-40">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white" data-aos="fade-right">
                Top AI Chatbot Development Company
              </h1>
              <h3 className="text-2xl  text-white mb-3 font-semibold">for Intelligent Customer Engagement</h3>
              <p className="text-lg md:text-xl text-white" data-aos="fade-right">
                Streamline operations and boost customer satisfaction with InfoTech Launch’s intelligent AI chatbot solutions.    </p>
              <ConnectExperts />

            </div>
          </div>
          <div className="hero-image overflow-hidden" data-aos="fade-left" style={{ zIndex: "0" }}>
            <div>
              <img src={aiChatbotHeroImg} alt="" className="feature-img" style={{
                height: "350px",
                width: "auto",
                objectFit: "cover",

              }} />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Solution />


      <div className="challenges bg-black py-12 sticky w-full lg:py-16 py-10">
        <div className="container mx-auto px-6">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Section */}
              <div className="chalnges-left sticky ">
                <div className="sticky top-32 text-white">


                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-4" data-aos="fade-right" data-aos-delay="100">
                    Our Proven Chatbot Development Process
                  </h2>
                  <span className="text-base font-medium" style={{ lineHeight: "1.5rem", marginBottom: "20px", display: "block" }}>From initial needs analysis to deployment and support, we build intelligent, future-ready AI chatbots.</span>

                  <img src={creationprocess} alt="creation process" />
                </div>
              </div>

              {/* Right Section */}
              <div className="chalnges-right" style={{ zIndex: "-1" }}>
                <div className="md_challenges_box space-y-7">

                  <div className={`flex items-center justify-center mb-7 text-white`}>
                    <div className="process_left">
                      <span className="bg-orange">01</span>
                    </div>
                    <div className="process_right  flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                      <div className="process_right_content">
                        <h4 className="text-lg font-semibold">Needs Analysis</h4>
                        <p className="text-sm">We dive deep into your business goals to define clear objectives and lay the foundation for a tailored AI chatbot solution.</p>

                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center mb-7 text-white`}>
                    <div className="process_left">
                      <span className="bg-orange">02</span>
                    </div>
                    <div className="process_right  flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                      <div className="process_right_content">
                        <h4 className="text-lg font-semibold">Strategy Development</h4>
                        <p className="text-sm">
                          We craft a customized strategy aligning the chatbot’s capabilities with your operational workflows and customer engagement goals.
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center mb-7 text-white`}>
                    <div className="process_left">
                      <span className="bg-orange">03</span>
                    </div>
                    <div className="process_right  flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                      <div className="process_right_content">
                        <h4 className="text-lg font-semibold">Design and Development</h4>
                        <p className="text-sm">Our expert team designs and develops the chatbot, integrating AI, NLP, and UX principles for smart, natural conversations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center mb-7 text-white`}>
                    <div className="process_left">
                      <span className="bg-orange">04</span>
                    </div>
                    <div className="process_right  flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                      <div className="process_right_content">
                        <h4 className="text-lg font-semibold">Rigorous Testing</h4>
                        <p className="text-sm">Comprehensive performance testing ensures seamless interactions, accurate responses, and a smooth user experience across platforms.
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center mb-7 text-white`}>
                    <div className="process_left">
                      <span className="bg-orange">05</span>
                    </div>
                    <div className="process_right  flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                      <div className="process_right_content">
                        <h4 className="text-lg font-semibold">Deployment</h4>
                        <p className="text-sm">After successful testing, we deploy the chatbot into your chosen communication channels, ensuring a hassle-free launch.</p>

                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center mb-3 text-white`}>
                    <div className="process_left">
                      <span className="bg-orange">06</span>
                    </div>
                    <div className="process_right  flex items-center justify-center max-w-xs w-full rounded-r-2xl p-4">
                      <div className="process_right_content">
                        <h4 className="text-lg font-semibold">Ongoing Support</h4>
                        <p className="text-sm">We provide continuous monitoring, updates, and enhancements to keep your chatbot evolving with your business and technology trends.
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <CreationProcess /> */}
      <Industries />
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
      <FAQ />
      <Footer />
    </>
  );
};

export default AdaptiveAiDevelopment;
