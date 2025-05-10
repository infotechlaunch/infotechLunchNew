import React from "react";
import { Link } from 'react-router-dom';
import whychooseicon1 from '../../assets/Images/aiDevelopment/aiconsulting/whychooseus/Holistic-AI-Ecosystem-Approach.webp';
import whychooseicon2 from '../../assets/Images/aiDevelopment/aiconsulting/whychooseus/Top-5-AI-Talent.webp';
import whychooseicon3 from '../../assets/Images/aiDevelopment/aiconsulting/whychooseus/Rapid-Prototyping-&-Proof-of-Concept.webp';
import whychooseicon4 from '../../assets/Images/aiDevelopment/aiconsulting/whychooseus/Cross-Industry-Expertise.webp';
import whychooseicon5 from '../../assets/Images/aiDevelopment/aiconsulting/whychooseus/Human–AI-Collaboration.webp';
import whychooseicon6 from '../../assets/Images/aiDevelopment/aiconsulting/whychooseus/Continuous-AI-Support.webp';
const WhyChoose: React.FC = () => {

    return (
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
            <div className="lg:bg-center lg:flex hidden justify-end items-end  bg-no-repeat bg-cover bg-left whychoose whychoose1  px-6 py-8 rounded-lg">
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

    );
};

export default WhyChoose;
