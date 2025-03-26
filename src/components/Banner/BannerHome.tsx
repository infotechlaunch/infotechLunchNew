import React, { useState, useEffect } from "react";
import user from "../../assets/Images/ic01.png";
import user01 from "../../assets/Images/ic02.png";
import user02 from "../../assets/Images/ic03.png";
import user03 from "../../assets/Images/ic04.png";
import user04 from "../../assets/Images/launch2.png";
import "./BnanerHome.scss";

const avatars = [
  { image: user, title: "Strategist" },
  { image: user, title: "Strategist" },
  { image: user01, title: "Strategist" },
  { image: user02, title: "Strategist" },
  { image: user03, title: "Strategist" },
  { image: user04, title: "Strategist" },
];

const BannerHome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 3000); // 3-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="HommerBanner">
      <div className="container grid-bg">
        <div className="banner-top">
          <div className="main-title">
            <h1>InfoTech Launch</h1>
          </div>
          <div className="row">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`col-4 col-sm-2 ${index === currentIndex ? "highlight" : ""}`}
              >
                <div className="avatar-meta">
                  <div className="avatar bounce">
                    <img className="img-fluid" src={avatar.image} alt={`Avatar of ${avatar.title}`} loading="lazy" />
                  </div>
                  <div className="avatar-position">{avatar.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="banner-btm">
          <div className="row">
            <div className="col-12 col-sm-6">
              <h1>
                <span className="text-to-change">
                  AI-Driven Digital</span>
                <br /> <span>Transformation</span>
                <br /> <span>Company</span>
              </h1>
            </div>
            <div className="col-12 col-sm-6">
              <h4>We empower businesses to <b>Innovate, Optimize, and Scale.</b></h4>
              <div className="banner-list">
                <div className="banner-list__item">
                  <div className="icn">
                    <svg width="30px" height="30px" viewBox="0 0 30 30">
                      <g id="final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Software-Development-SEO" transform="translate(-177.000000, -549.000000)" fill-rule="nonzero">
                          <g id="Group-54" transform="translate(178.000000, 550.000000)">
                            <path d="M14,28 C19.0017185,28 23.6234964,25.3316145 26.1243563,21 C28.6252146,16.6683855 28.6252146,11.3316153 26.1243563,7 C23.6234964,2.66838551 19.0017185,0 14,0 C8.99828214,0 4.3765034,2.66838551 1.87564431,7 C-0.625214771,11.3316153 -0.625214771,16.6683855 1.87564431,21 C4.3765034,25.3316145 8.99828214,28 14,28 Z" id="Shape-Copy-2" fill="transparent" stroke="#000">
                            </path>
                            <path d="M20.1796877,11.4296875 L13.1796878,18.4296875 C12.6656257,18.9437497 11.834375,18.9437497 11.325782,18.4296875 L7.82578203,14.9296875 C7.31171988,14.4156253 7.31171988,13.5843747 7.82578203,13.0757816 C8.33984419,12.5671885 9.17109484,12.5617194 9.67968791,13.0757816 L12.2500004,15.6460941 L18.3203127,9.5703125 C18.8343749,9.05625033 19.6656255,9.05625033 20.1742186,9.5703125 C20.6828117,10.0843747 20.6882807,10.9156253 20.1742186,11.4242184 L20.1796877,11.4296875 Z" id="Path" fill="#000">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Custom app development with <span>advanced AI capabilities</span></p>
                </div>
                <div className="banner-list__item">
                  <div className="icn">
                    <svg width="30px" height="30px" viewBox="0 0 30 30">
                      <g id="final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Software-Development-SEO" transform="translate(-177.000000, -549.000000)" fill-rule="nonzero">
                          <g id="Group-54" transform="translate(178.000000, 550.000000)">
                            <path d="M14,28 C19.0017185,28 23.6234964,25.3316145 26.1243563,21 C28.6252146,16.6683855 28.6252146,11.3316153 26.1243563,7 C23.6234964,2.66838551 19.0017185,0 14,0 C8.99828214,0 4.3765034,2.66838551 1.87564431,7 C-0.625214771,11.3316153 -0.625214771,16.6683855 1.87564431,21 C4.3765034,25.3316145 8.99828214,28 14,28 Z" id="Shape-Copy-2" fill="transparent" stroke="#000">
                            </path>
                            <path d="M20.1796877,11.4296875 L13.1796878,18.4296875 C12.6656257,18.9437497 11.834375,18.9437497 11.325782,18.4296875 L7.82578203,14.9296875 C7.31171988,14.4156253 7.31171988,13.5843747 7.82578203,13.0757816 C8.33984419,12.5671885 9.17109484,12.5617194 9.67968791,13.0757816 L12.2500004,15.6460941 L18.3203127,9.5703125 C18.8343749,9.05625033 19.6656255,9.05625033 20.1742186,9.5703125 C20.6828117,10.0843747 20.6882807,10.9156253 20.1742186,11.4242184 L20.1796877,11.4296875 Z" id="Path" fill="#000">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Custom app development with <span>advanced AI capabilities</span></p>
                </div>
                <div className="banner-list__item">
                  <div className="icn">
                    <svg width="30px" height="30px" viewBox="0 0 30 30">
                      <g id="final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Software-Development-SEO" transform="translate(-177.000000, -549.000000)" fill-rule="nonzero">
                          <g id="Group-54" transform="translate(178.000000, 550.000000)">
                            <path d="M14,28 C19.0017185,28 23.6234964,25.3316145 26.1243563,21 C28.6252146,16.6683855 28.6252146,11.3316153 26.1243563,7 C23.6234964,2.66838551 19.0017185,0 14,0 C8.99828214,0 4.3765034,2.66838551 1.87564431,7 C-0.625214771,11.3316153 -0.625214771,16.6683855 1.87564431,21 C4.3765034,25.3316145 8.99828214,28 14,28 Z" id="Shape-Copy-2" fill="transparent" stroke="#000">
                            </path>
                            <path d="M20.1796877,11.4296875 L13.1796878,18.4296875 C12.6656257,18.9437497 11.834375,18.9437497 11.325782,18.4296875 L7.82578203,14.9296875 C7.31171988,14.4156253 7.31171988,13.5843747 7.82578203,13.0757816 C8.33984419,12.5671885 9.17109484,12.5617194 9.67968791,13.0757816 L12.2500004,15.6460941 L18.3203127,9.5703125 C18.8343749,9.05625033 19.6656255,9.05625033 20.1742186,9.5703125 C20.6828117,10.0843747 20.6882807,10.9156253 20.1742186,11.4242184 L20.1796877,11.4296875 Z" id="Path" fill="#000">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Custom app development with <span>advanced AI capabilities</span></p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
