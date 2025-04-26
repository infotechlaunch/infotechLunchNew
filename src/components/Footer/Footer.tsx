import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faFacebookF, link: "https://www.facebook.com/people/Infotech-Launch/61571424460079/" },
  { icon: faXTwitter, link: "#" },
  { icon: faInstagram, link: "https://www.instagram.com/theinfotechlaunch/" },
  { icon: faLinkedinIn, link: "https://www.linkedin.com/company/105996476/admin/dashboard/" },
  { icon: faYoutube, link: "#" },
];

const Footer: React.FC = () => {

  return (
    <footer className="footer">

      <div className="social-items">
        <div className="top-before"></div>
        <div className="social-item-link">
          {socialLinks.map(({ icon, link }, index) => (
            <Link key={index} to={link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-xl">
              <FontAwesomeIcon icon={icon} />
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-info">
        <div className="container-fluid">
          <div className="md-footer-row">
            <div className="md-footer-links">
              <div className="f-hd-title">
                <h3>  Do you like<br />what you see?</h3>
              </div>
              <div className="md-footer_button mt-4">
                <Link to='#' className="btn-comn">
                  <div className="btn-left-sec">
                    Start New Project
                  </div>
                  <div className="btn-rund-sec">
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path fill="#fff" d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                    </svg>
                  </div>
                </Link>
              </div>

            </div>
            <div className="md-footer-links mb-5 lg:mb-0">
              <h3>Services</h3>
              <ul>
                <li> <Link to="/full-stack-development">AI Development</Link> </li>
                {/* <li> <Link to="/blockchain-development">Blockchain Development</Link> </li> */}
                {/* <li> <Link to="/hire-mobile-app-developer">Mobile App Development</Link> </li> */}
                {/* <li> <Link to="/doctor-appointment-app-development">Healthcare App Development</Link> </li> */}
                {/* <li> <Link to="/">Coin And Tokens Development</Link> </li> */}
                {/* <li> <Link to="/">Full Stack Development</Link> </li> */}
                <li> <Link to="/hire-mobile-app-developer">Hire Dedicated Developers</Link> </li>
              </ul>
            </div>
            <div className="md-footer-links mb-5 lg:mb-0">
              <h3>Industries</h3>
              <ul>
                <li> <Link to="/food-beverageeos">Food & Beverage</Link> </li>
                <li> <Link to="/health-care">Healthcare</Link> </li>
                {/* <li> <Link to="/">Pickup &amp; Delivery</Link> </li> */}
                <li> <Link to="/e-commerce">E- Commerce Delivery</Link>
                </li>
                {/* <li> <Link to="/">Taxi and Transportation</Link> </li>
                <li> <Link to="/">Fitness</Link> </li>
                <li> <Link to="/">Education</Link> </li>
                <li> <Link to="/">Real Estate</Link> </li> */}
              </ul>
            </div>
            <div className="md-footer-links">
              <h3>Resources</h3>
              <ul>
                <li> <Link to="/case-study">Case Study</Link> </li>
                {/* <li> <Link to="/">Industry Reports</Link> </li> */}
                <li> <Link to="/ui-ux-design">UI/UX Design</Link> </li>
                <li> <Link to="/growth-and-marketing">Growth & Marketing</Link>
                </li>
                {/* <li> <Link to="/">Enterprise Software Development</Link> </li>
                <li> <Link to="/">Video</Link> </li>
                <li> <Link to="/">Feature books</Link> </li> */}
              </ul>
            </div>
            <div className="md-footer-links">
              <h3>Company</h3>
              <ul>
                <li> <Link to="/about-us">About Us</Link> </li>
                <li> <Link to="/portfolio">Portfolio</Link> </li>
                <li> <Link to="/blog">Our Blog</Link> </li>
                <li> <Link to="/Career-at-infotechlaunch">Career</Link>
                </li>
                <li> <Link to='/contact-us'>Contact Us</Link>
                </li>
              </ul>
              {/* <h3>Legal</h3>
              <ul>
                <li> <Link to="/">Privacy Notice</Link> </li>
                <li> <Link to="/">Cookie Policy</Link> </li>
                <li> <Link to="/">Disclaimer</Link> </li>
              </ul> */}
            </div>


          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2025 InfoTech Launch</p>

        </div>
      </div>
    
      <div className="logo-container">
        <Marquee direction="up" speed={40} pauseOnHover>
          <div className="branches">USA</div>
          <div className="branches">UAE</div>
          <div className="branches">INDIA</div>
          <div className="branches">UK</div>
        </Marquee>
      </div>
      <div className="fixed z-40 lg:top-[350px]  bottom-4 right-0 lg:space-y-8 space-y-0 lg:space-x-0 space-x-4 lg:bg-transparent bg-slate-800 lg:p-0 p-3 rounded-lg lg:block hidden flex justify-center items-center">
        <div className="social">
          <Link to="https://wa.me/918109731880" target="_blank" className="curser-pointer">
            <div className="social-btn bg-white">
              <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#03A84E]" height="38" width="38" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z">
                  </path>
                  <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z">
                  </path>
                </svg>
              </span>
              <p className="font-semibold text-lg text-black cursor-pointer">Whatsapp</p>
            </div>
          </Link>
          {/* <Link to="/" target="_blank" className="curser-pointer">
            <div className="social-btn bg-white">
              <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#0E72CF]" height="38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z">
                </path>
                </svg>
              </span>
              <p className="font-semibold text-lg text-black cursor-pointer">Skype</p>
            </div>
          </Link> */}
          <Link to="https://t.me/infotechlaunch" target="_blank" className="curser-pointer">
            <div className="social-btn bg-white">
              <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="text-[#33A8DA]" height="38" width="38" xmlns="http://www.w3.org/2000/svg">
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z">
                  </path>
                </svg>
              </span>
              <p className="font-semibold text-lg text-black cursor-pointer">Telegram</p>
            </div>
          </Link>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
