import React from "react";
import { Link } from 'react-router-dom';
import mail from "../../assets/Images/mail-form-icon.svg";
import site from "../../assets/Images/site-form-icon.svg";
import call from "../../assets/Images/call-form-icon.svg";

import facebook from "../../assets/Images/facebook-form-icon.svg";
import insta from "../../assets/Images/insta-form-icon.svg";
import twitt from "../../assets/Images/x-form-icon-img.svg";
import linkedin from "../../assets/Images/linkedin-form-icon-img.svg";
import india from "../../assets/Images/india-icon-img.svg";
import location from "../../assets/Images/location-icon-icon.svg";
import usa from "../../assets/Images/canada-location-img.svg";

const ContactForm: React.FC = () => {

    return (
        <>

            <section className="bg-white">
                <div className="bg-[#081e3d] relative bg-fixed">
                    <div className=" lg:py-16 py-10 relative z-40 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                        <div className="grid lg:grid-cols-3 lg:gap-16 gap-8 items-start">
                            <div className="" data-aos="fade-right" data-aos-delay="100">
                                <h2 className="lg:text-4xl text-3xl text-[#fff] text-start font-semibold" data-aos="fade-up" data-aos-delay="100">Contact us
                                    anytime for quick assitence</h2>
                                <div className="space-y-5 mt-8">
                                    <Link to="tel:8109731880" className="flex items-center gap-3 cursor-pointer">
                                        <img alt="" loading="lazy" width="55" height="56" src={call} />
                                        <div>
                                            <span className="text-white text-base">Phone Number</span>
                                            <p className="text-white text-lg font-semibold">+91 81097 31880</p>
                                        </div>
                                    </Link>
                                    <Link to="#" className="flex items-center gap-3 cursor-pointer">
                                        <img alt="" loading="lazy" width="55" height="56" src={mail} />
                                        <div>
                                            <span className="text-white text-base">Email Address</span>
                                            <p className="text-white text-lg font-semibold">support@infotechlaunch.com</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="flex items-center gap-3 cursor-pointer">
                                        <img alt="" loading="lazy" width="55" height="56" src={site} />
                                        <div><span className="text-white text-base">Site Address</span>
                                            <p className="text-white text-lg font-semibold">https://infotechlaunch.com</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-white font-semibold lg:text-xl md:text-lg text-base">
                                        Social Links</h2>
                                    <div className=" flex justify-start gap-4 mt-2">

                                        <Link to="#" target="_blank" className="flex items-center gap-3 cursor-pointer">
                                            <img alt="" loading="lazy" width="50" height="51" src={facebook} />
                                        </Link>
                                        <Link to="#" target="_blank" className="flex items-center gap-3 cursor-pointer">
                                            <img alt="" loading="lazy" width="50" height="51" src={insta} />
                                        </Link>
                                        <Link to="#" target="_blank" className="flex items-center gap-3 cursor-pointer">
                                            <img alt="" loading="lazy" width="50" height="51" src={twitt} />
                                        </Link>
                                        <Link to="#" target="_blank" className="flex items-center gap-3 cursor-pointer">
                                            <img alt="" loading="lazy" width="50" height="51" src={linkedin} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                           
                                <div className="col-span-2">
                                    {/* <form
                                        className="bg-white rounded-xl  lg:px-8 md:px-6 md:pb-10 py-6 px-4  space-y-8 text-left   w-full">
                                        <div className=" ">
                                            <div className="space-y-2">
                                                <h2 className="xl:text-4xl text-xl text-black text-start font-semibold">
                                                    Get In Touch</h2>
                                                <h1 className="text-base ">with Infotech for Support and Queries</h1>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  ">
                                            <div className="space-y-2">
                                                <label htmlFor="fullName" className="text-base">Full Name</label>
                                                <input id="fullName" type="text" className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="fullEmail" className="text-base">Enter Email</label>
                                                <input id="fullEmail" type="text" className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="fullNumber" className="text-base">Enter Number</label>
                                                <input id="fullNumber" type="text" placeholder="Enter Whatsapp number" className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="Subject" className="text-base">Subject</label>
                                                <input id="Subject" type="text" placeholder="Subject" className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light" />
                                            </div>
                                            <div className="md:col-span-2 space-y-2">
                                                <label htmlFor="Message" className="text-base">Message</label>
                                                <textarea id="message" name="msg" cols="16" rows="4"
                                                    placeholder="Enter Message" className="focus:outline-none bg-[#F7F7F7] border p-3 w-full focus:ring-1 ring-[#5556D1] 
               focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"  aria-label="Enter your message"
                                                ></textarea></div>
                                            <div className="flex justify-start pt-2">
                                                <button type="button"
                                                    className=" text-white bg-[#f13c3c] px-8 py-2.5 text-lg gap-2  rounded-full justify-center items-center space-x-1  overflow-hidden relative inline-flex group cursor-pointer font-semibold">Send
                                                    Message <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.707 13.707l8.293-8.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.404-0.244-0.769-0.617-0.924-0.124-0.051-0.254-0.076-0.383-0.076v-0.001h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-8.293 8.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.39 0.391 1.024 0.391 1.414 0z"></path></svg></button>
                                            </div>
                                        </div>

                                    </form> */}
                                    <iframe src="https://meetings.hubspot.com/infotechlaunch?embed=true&amp;parentHubspotUtk=d7b980825eaa6075825079eaa8512259&amp;parentPageUrl=https://infotechlaunch.com/contact/" width="100%" height="100vh" data-hs-ignore="true"></iframe>
                                </div>
                           
                        </div>
                        <div className="grid lg:grid-cols-2 lg:gap-14 gap-8 items-start mt-6">
                            <div
                                className="bg-[#FFFFFF]/20 py-6 px-6 h-full rounded-xl xl:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1 items-center ">
                                <div><img alt="" loading="lazy" width="270" height="236" src={india} /></div>
                                <div className="space-y-5 col-span-2">

                                    <Link to="tel:8109731880"
                                        className="flex items-start gap-2">
                                        <img alt="" loading="lazy" width="36" height="37" src={call} />
                                        <div>
                                            <span className="text-white lg:text-base text-sm">Phone Number</span>
                                            <p className="text-white lg:text-lg text-base font-semibold"> +91 81097 31880</p>
                                        </div>
                                    </Link>


                                    {/* <Link target="_blank" to="#" className="flex items-start gap-2">
                                        <img alt="" loading="lazy" width="36" height="37" src={location} />
                                        <div>
                                            <span className="text-white lg:text-base text-sm">
                                                Office  Location</span>
                                            <p className="text-white lg:text-lg text-base font-semibold"> A-20
                                                Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar, Jaipur,
                                                Rajasthan 302006</p>
                                        </div>
                                    </Link> */}
                                    <Link target="_blank" to="#" className="flex items-start gap-2">
                                        <img alt="" loading="lazy" width="36" height="37" src={location} />
                                        <div>
                                            <span className="text-white lg:text-base text-sm">
                                                Office  Location</span>
                                            <p className="text-white lg:text-lg text-base font-semibold">
                                            174 A/1, Regent Colony, Tollygunge, Kolkata, West Bengal, 700040, India</p>
                                        </div>
                                    </Link> 
                                </div>
                            </div>
                            <div
                                className="bg-[#FFFFFF]/20 py-6 px-6 h-full rounded-xl xl:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1 items-center ">
                                <div><img alt="" loading="lazy" width="270" height="236" src={usa} /></div>
                                <div className="space-y-5 col-span-2">

                                    <Link to="tel:(704)966-9077"
                                        className="flex items-start gap-2">
                                        <img alt="" loading="lazy" width="36" height="37" src={call} />
                                        <div>
                                            <span className="text-white lg:text-base text-sm">Phone Number</span>
                                            <p className="text-white lg:text-lg text-base font-semibold"> (704) 966-9077</p>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="#" className="flex items-start gap-2">
                                        <img alt="" loading="lazy" width="36" height="37" src={location} />
                                        <div>
                                            <span className="text-white lg:text-base text-sm">
                                                Office  Location</span>
                                            <p className="text-white lg:text-lg text-base font-semibold"> 
                                                100 Waxhaw Pkwy, Waxhaw, NC, 28173 USA</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>

    );
};

export default ContactForm;
