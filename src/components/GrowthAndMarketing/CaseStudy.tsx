import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import { Link } from 'react-router-dom';

// import logo from "../../assets/Images/logo.gif";
// import logo from "../../assets/Images/cl01.png";
// import logo1 from "../../assets/Images/cl02.png";
// import logo2 from "../../assets/Images/cl03.png";
// import logo3 from "../../assets/Images/cl04.png";
// import logo4 from "../../assets/Images/cl05.png";
// import logo5 from "../../assets/Images/cl06.png";

// import web from "../../assets/Images/portfolio/1.webp";
import web from "../../assets/Images/GrowthandMarketing/beyondmarketing/images/1.png";
import web1 from "../../assets/Images/GrowthandMarketing/beyondmarketing/images/2.png";
// import web1 from "../../assets/Images/portfolio/3.webp";
import web2 from "../../assets/Images/GrowthandMarketing/beyondmarketing/images/3.png";
// import web2 from "../../assets/Images/portfolio/5.webp";
// import web3 from "../../assets/Images/portfolio/8.webp";
// import web4 from "../../assets/Images/portfolio/ecom.webp";
import web4 from "../../assets/Images/GrowthandMarketing/beyondmarketing/images/5.png";
import web5 from "../../assets/Images/GrowthandMarketing/beyondmarketing/images/5.png";
import web6 from "../../assets/Images/GrowthandMarketing/beyondmarketing/images/6.png";
import beyondicon1 from "../../assets/Images/GrowthandMarketing/beyondmarketing/1.png"
import beyondicon2 from "../../assets/Images/GrowthandMarketing/beyondmarketing/2.png"
import beyondicon3 from "../../assets/Images/GrowthandMarketing/beyondmarketing/3.png"
import beyondicon4 from "../../assets/Images/GrowthandMarketing/beyondmarketing/4.png"
import beyondicon5 from "../../assets/Images/GrowthandMarketing/beyondmarketing/5.png"
import beyondicon6 from "../../assets/Images/GrowthandMarketing/beyondmarketing/6.png"

// import ConnectExperts from "../../pages/ConnectExperts";




const caseStudies = [
  { title: "Web Design", downloadLink: "#", mainImage: web, icon: beyondicon1,  p1desc: "Communicate your brand message and boost visibility with intuitive UI/UX designs expertly crafted by our in-house studio, Allurive.",  p2desc: "Deliver a smooth customer experience through internet marketing services that boost engagement and create more sales opportunities.", desc: "Designing Experiences That Deliver Impactful Results"  },
  { title: "SEO", downloadLink: "#", mainImage: web1, icon: beyondicon2, p1desc: "Improve click-through rates by optimizing meta tags, images, content, and more for your website.",  p2desc: "We help you generate high-quality traffic through relevant backlinks, a time-intensive process that delivers excellent results.", desc: "Boosting Traffic Through Organic Methods." },
  { title: "SEM", downloadLink: "#", mainImage: web2, icon: beyondicon3, p1desc: "Engage the right audience at the right moment with targeted marketing services on the most effective platforms.", p2desc: "Enhance your online presence quickly with powerful search engine marketing campaigns", desc: "Connect with Your Audience More Quickly Than Ever Before."},
  { title: "SMM", mainImage: web4, downloadLink: "#", icon: beyondicon4,  p1desc: "Amplify your brand's voice and reach with a social media strategy crafted through a thorough analysis of your business goals.", p2desc: "Increase customer engagement and satisfaction by providing content they’ll be eager to share.", desc: "Expand Your Brand Through Social Media." },
  { title: "Content Marketing", mainImage: web5, downloadLink: "#", icon: beyondicon5, p1desc: "Keep your customers engaged and informed with relevant content such as blogs, videos, infographics, whitepapers, and creatives.", p2desc: "We strike the perfect balance of quality and quantity, customizing content creation and distribution to boost visibility and lead conversions.", desc: "Inform, Engage, and Drive Conversions."},
  { title: "Mobile APP Marketing", mainImage: web6, downloadLink: "#", icon: beyondicon6, p1desc: "Get access to the right metrics with the help of Retainlytics & use them to build impactful engagement strategies that cause conversions & reduce churn rate. .",  p2desc: "Improve conversions through powerful engagement strategies, grouping your customers by their interests, habits, lifestyle & personality traits", desc: "Boost Your App Visibility & Engagement To Drive Revenue Growth" },
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
    <div className="challenges bg-gradient-blue-red py-16" style={{
      marginBottom: "-100px"
    }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#fff] mb-4 mt-6" data-aos="fade-up" >Beyond Marketing — We Create Meaningful Connections</h2>

        </div>

        <div className="md:flex gap-8">
          {/* Vertical Thumbnail Swiper */}
          <div className="w-full  md:w-[20%]">
            <Swiper
              direction={isMobile ? "horizontal" : "vertical"}

              spaceBetween={8}
              freeMode={true}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              breakpoints={{
                0: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
              className="thumb-slider md:h-[600px]"
            >
              {caseStudies.map((study, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => mainSwiper?.slideTo(index)}
                  className="cursor-pointer flex items-center justify-center"
                >
                  <div className="flex items-center justify-center bg-white shadow rounded-md overflow-hidden p-3 text-center tab-case-study">
                    <div className="w-1/3"><img src={study.icon} className="case-icon" /></div>
                    <div className="w-2/3"><h3 className="text-lg font-semibold " >{study.title}</h3></div>
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
                  <div className="w-full bg-white p-6 rounded-lg shadow md:h-[500px]">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-5/12 flex flex-col justify-between md:h-[430px]">
                        <div className="pr-4">
                          {/* <div className="flex justify-left mb-4" data-aos="fade-right" data-aos-delay="100">
                            <img src={study.icon} alt={study.title} className="w-20 h-auto" />
                          </div> */}
                          <h2 className="text-4xl font-bold mb-6">
                            {study.title}
                          </h2>
                          <p className="text-1xl mb-4 font-semibold" data-aos="fade-right" data-aos-delay="100">
                            {study.desc}
                          </p>
                          <div className="mt-6 text-left" data-aos="fade-right" data-aos-delay="100">
                            <ul className="list-point-1">
                              <li><span className="text-sm"> {study.p1desc}</span></li>
                              <li><span className="text-sm"> {study.p2desc}</span></li>
                              </ul>
                              
                            </div>
                        </div>
                        {/* <div className="mt-6" data-aos="fade-right" data-aos-delay="100">
                          <Link to={study.downloadLink} data-discover="true">
                          <button className="btn btn-fix lazyloaded !bg-[#f13c3c] !text-[#fff]" >Download Case Study
                            <svg xmlns="http://www.w3.org/2000/svg" className="!bg-[#fff]"  width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                            <path id="Path_1487529" data-name="Path 1487529"
                              d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                              transform="translate(-521.511 -1346.214)" fill="#f13c3c"></path>
                          </svg>
                          </button>
                          </Link>
                        </div> */}
                        <div className="mt-4">
                          <Link to="/contact-us" data-discover="true" data-aos="fade-left" data-aos-delay="100">
                            <button className="btn btn-fix lazyloaded">Get
                              in Touch<svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
                                <path id="Path_1487529" data-name="Path 1487529"
                                  d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                  transform="translate(-521.511 -1346.214)" fill="#fff"></path>
                              </svg>
                            </button>
                          </Link>
                        </div>
                        {/* <div>
                          <ConnectExperts />
                        </div> */}


                      </div>

                      <div className="md:w-6/12 w-full mt-[30px] md:mt-0 md:ml-auto">
                        <div
                          data-aos="fade-left"
                          className="flex justify-center items-center relative md:h-[350px] h-[150px] overflow-hidden rounded-[24px]"
                        >
                          <img
                            className="object-cover w-full h-full rounded-lg"
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
