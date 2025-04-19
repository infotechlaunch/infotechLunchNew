import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import { Link } from 'react-router-dom';

import logo from "../../assets/Images/cl01.png";
import logo1 from "../../assets/Images/cl02.png";
import logo2 from "../../assets/Images/cl03.png";
import logo3 from "../../assets/Images/cl04.png";
import logo4 from "../../assets/Images/cl05.png";
import logo5 from "../../assets/Images/cl06.png";

import web from "../../assets/Images/portfoli/1.png";
import web1 from "../../assets/Images/portfoli/3.png";
import web2 from "../../assets/Images/portfoli/5.png";
import web3 from "../../assets/Images/portfoli/8.png";
import web4 from "../../assets/Images/portfoli/ecom.png";
import web5 from "../../assets/Images/portfoli/6.png";



const caseStudies = [
  { title: "Food & Beverage",downloadLink:"#", mainImage:web, sorttitle:"for Food Delivery",  p1: "80%", p1desc: "User Retention Rate", p2: "20K+", p2desc: "Meal Plans Generated", desc: "Personalized nutrition and workout recommendations, backed by advanced AI algorithms, machine learning, and predictive analytics.", img: logo, },
  { title: "Travel & Transport",downloadLink:"#", mainImage:web1, sorttitle:"for Travel & Transport",  p1: "20%", p1desc: "Cryptocurrencies Supported", p2: "$100 K+", p2desc: "Daily Transaction Volume", desc: "Developed a secure multi-chain crypto wallet with institutional-grade security protocols and smart contract integration.", img: logo1, },
  { title: "Logistics & Delivery",downloadLink:"#", mainImage:web2, sorttitle:"food industry",  p1: "1000+", p1desc: "Cryptocurrencies Supported", p2: "45%", p2desc: "Increase in Property Views", desc: "Created an immersive metaverse experience using AR/VR technology and blockchain integration for Dubai's premier real estate market.", img: logo2, },
  { title: "Gaming",mainImage:web3,downloadLink:"#", sorttitle:"for Gaming",  p1: "1000+", p1desc: "Dishefs revolutionizes the food industry by seamlessly connecting food establishments with idle kitchen hours to chefs, food trucks, and entrepreneurs through our innovative two-way marketplace for kitchen rental solutions.", img: logo3, },
  { title: "Artificial Intelligence",mainImage:web4,downloadLink:"#", sorttitle:"for Artificial Intelligence",  p1: "85%", p1desc: "Faster Analysis Time", p2: "60%",p2desc:"Faster Decision Making", desc: "Streamlining logistics operations through real-time tracking, automated inventory management, and AI-powered delivery optimization.", img: logo4, },
  { title: "E-commerce",mainImage:web5,downloadLink:"#", sorttitle:"for E-commerce",  p1: "1M+", p1desc: "User Downloads", p2: "90%", p2desc: "User Engagement", desc: "Unique gaming platform with social features, enabling live tournaments, player statistics, and community engagement.", img: logo5, },
];

const CaseStudy: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  useEffect(() => {
    if (thumbsSwiper && mainSwiper) {
      mainSwiper.thumbs.swiper = thumbsSwiper;
      mainSwiper.thumbs.init();
    }
  }, [thumbsSwiper, mainSwiper]);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="challenges bg-[#F5F5F9] py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-[#f13c3c] text-lg font-semibold mb-3" data-aos="fade-up" >Case Studies</span>
          <h2 className="text-3xl lg:text-4xl font-semibold  mb-2" data-aos="fade-up" >Catch Innovation in Action With Us</h2>
          <p className="text-gray-600 text-lg font-semibold mt-2" data-aos="fade-up" >
            Peek into the future with our cutting-edge projects that are redefining industries.
          </p>
        </div>

        <div className="md:flex gap-8">
          {/* Vertical Thumbnail Swiper */}
          <div className="w-full  md:w-[20%]">
            <Swiper
              direction={isMobile ? "horizontal" : "vertical"}
              
              spaceBetween={10}
              freeMode={true}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              breakpoints={{
                0: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1024: { slidesPerView: 6},
            }}
              className="thumb-slider md:h-[600px]"
            >
              {caseStudies.map((study, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => mainSwiper?.slideTo(index)}
                  className="cursor-pointer flex items-center justify-center"
                >
                  <div className="w-full bg-white shadow rounded-md overflow-hidden p-4 text-center">
                    <h3 className="text-lg font-semibold " >{study.title}</h3>
                    <p className="text-gray-500 text-sm">{study.sorttitle}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Main Swiper */}
          <div className="w-full  md:w-[80%] md:mt-0 mt-[20px]">
            <Swiper
              modules={[Autoplay, Thumbs]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
              allowTouchMove={false}
              className="main-slider"
            >
              {caseStudies.map((study, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <div className="w-full bg-white p-6 rounded-lg shadow md:h-[600px]">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-5/12 flex flex-col justify-between md:h-[530px]">
                        <div className="pr-4">
                          <div className="flex justify-left mb-4" data-aos="fade-right" data-aos-delay="100">
                            <img src={study.img} alt={study.title} className="w-40 h-auto" />
                          </div>
                          <p className="text-gray-600  text-lg font-semibold mb-4" data-aos="fade-right" data-aos-delay="100">
                            {study.desc}
                          </p>
                          <div className="flex justify-between mt-6 text-left" data-aos="fade-right" data-aos-delay="100">
                            <div>
                              <h3 className="text-[32px] text-black/80 font-semibold"> {study.p1}</h3>
                              <span className="text-gray-500 text-sm"> {study.p1desc}</span>
                            </div>
                            <div>
                              <h3 className="text-[32px] text-black/80 font-semibold"> {study.p2}</h3>
                              <span className="text-gray-500 text-sm"> {study.p2desc}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6" data-aos="fade-right" data-aos-delay="100">
                          <Link to={study.downloadLink} data-discover="true">
                          <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]" >Download Case Study
                            <svg xmlns="http://www.w3.org/2000/svg" className="!bg-[#fff]"  width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                            <path id="Path_1487529" data-name="Path 1487529"
                              d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                              transform="translate(-521.511 -1346.214)" fill="#f13c3c"></path>
                          </svg>
                          </button>
                          </Link>
                        </div>
                      </div>
                      <div className="md:w-7/12 w-full mt-[30px] md:mt-0">
                        <div data-aos="fade-left"  className="flex justify-center items-center relative md:h-[530px] overflow-hidden rounded-[24px]">
                          <img
                            className="rounded-lg"
                            alt={study.title}
                            src={study.mainImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
