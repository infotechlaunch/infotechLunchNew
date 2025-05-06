import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderNew from "../components/Header/HeaderNew";
import AOSProvider from "../components/AOSProvider";



const ECommerce: React.FC = () => {

    return (
        <>
            <AOSProvider>
                <HeaderNew />
                <div className="lg:bg-center relative bg-gradient-blue-red" >
                    <div
                        className="relative z-[3] lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                        <div className="w-full 2xl:py-40 xl:py-16 py-10" data-aos="fade-right">
                            <div className="space-y-8 text-white">
                                <div>
                                    <h1 data-aos="fade-right" className="text-white mb-4 xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]">
                                        Copyright Notice and Intellectual Property Policy
                                    </h1>
                                    <h4 className="text-xl mb-4 mt-4"><i>Effective Date: May 3, 2025</i></h4>
                                    <hr />
                                    <h4 className="text-xl mb-4 mt-8">1. Copyright and Intellectual Property Ownership</h4>
                                    <p className="text-base mb-3"> All content, software, source code, designs, text, images, graphics, videos, audio, logos, trademarks, and all other intellectual property (“Content”) on this website and in InfoTech Launch’s products and services are the exclusive property of InfoTech Launch, except where otherwise expressly stated. This includes all AI-generated and AI-assisted works to the fullest extent permitted by law.
                                    </p>
                                    <ul className="list-point-1">
                                        <li><b>Human Authorship and AI : </b>In accordance with U.S. Copyright Office guidance, copyright protection applies to human-created works and AI-assisted works where human creativity is a significant component. Purely autonomous AI outputs may not be eligible for copyright, but InfoTech Launch asserts all rights in any human-authored or human-directed content.
                                        </li>
                                        <li><b>Third-Party Content : </b>Any third-party content, trademarks, or intellectual property used by InfoTech Launch are the property of their respective owners and are used with permission or under applicable law.</li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">2. Scope of Protection</h4>
                                    <ul className="list-point-1">
                                        <li><b>All Rights Reserved : </b> No part of the Content may be copied, reproduced, republished, uploaded, posted, transmitted, distributed, reverse engineered, or used in any way without the prior written consent of InfoTech Launch.
                                        </li>
                                        <li><b>Limited License : </b> Users are granted a limited, non-exclusive, non-transferable license to access and use the website for personal, non-commercial purposes only, provided all copyright and proprietary notices are retained.

                                        </li>
                                        <li><b>No Implied Rights : </b> Nothing herein or on this website shall be construed as granting any license or right to use any Content, trademarks, or proprietary materials without the express written permission of InfoTech Launch.</li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">3. Intellectual Property Registration and Enforcement</h4>
                                    <ul className="list-point-1">
                                        <li><b>Copyright Registration : </b> InfoTech Launch registers its original works with the U.S. Copyright Office and other relevant authorities to strengthen enforcement rights.
                                        </li>
                                        <li><b>Trademark and Patent Protection : </b> Company names, logos, and select product/service names are protected by trademark law. Innovative technologies and processes may be protected by patents where applicable.
                                        </li> <li><b>Digital Rights Management : </b> InfoTech Launch employs digital rights management and watermarking to monitor and prevent unauthorized use or distribution of its digital content.
                                        </li> <li><b>Active Monitoring : </b> The company proactively monitors the internet and partner channels for potential IP infringements and pursues all available legal remedies, including DMCA takedowns, cease-and-desist letters, and litigation if necessary.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 4. Confidentiality and Non-Disclosure</h4>
                                    <ul className="list-point-1">
                                        <li><b>NDAs and Confidentiality Agreements : </b> All employees, contractors, interns, and third parties with access to proprietary or confidential information are required to sign robust non-disclosure agreements (NDAs) to preserve InfoTech Launch’s trade secrets and confidential materials.
                                        </li>
                                        <li><b>Work-for-Hire and Assignment : </b> All work products, inventions, and developments created by employees, contractors, or interns during their engagement are considered “work-for-hire” and are automatically assigned to InfoTech Launch.
                                        </li>
                                    </ul>

                                    <h4 className="text-xl mb-4 mt-4"> 5. Use of Open Source and Third-Party Components
                                    </h4>
                                    <ul className="list-point-1">
                                        <li><b>Compliance with Licenses : </b> InfoTech Launch respects open-source and third-party licenses and ensures that all use complies with the applicable terms. Any third-party content is clearly attributed and used in accordance with license requirements. </li>
                                    </ul>

                                    <h4 className="text-xl mb-4 mt-4"> 6.  Reporting Copyright Infringement</h4>
                                    <p className="mt-4 text-base">If you believe any material on this website infringes your copyright, please notify us at copyright@infotechlaunch.comwith:</p>
                                    <ul className="list-point-1">
                                        <li> Your name and contact information</li>
                                        <li>A description of the copyrighted work you claim has been infringed</li>
                                        <li>The URL or location of the allegedly infringing material</li>
                                        <li>A statement that you have a good faith belief the use is unauthorized</li>
                                        <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act for the copyright owner</li>
                                    </ul>
                                    <p className="mt-4 text-base">Upon receipt of a valid notice, InfoTech Launch will promptly investigate and, if appropriate, remove or disable access to the infringing material.</p>
                                    <h4 className="text-xl mb-4 mt-4"> 7. Asset and Risk Protection </h4>
                                    <ul className="list-point-1">
                                        <li>Insurance: InfoTech Launch maintains comprehensive insurance coverage, including general liability, cyber liability, technology errors & omissions, and IP infringement insurance, to protect its digital and physical assets.
                                        </li>
                                        <li>Cybersecurity: The company implements robust cybersecurity protocols, including encryption, firewalls, regular audits, and vulnerability assessments, to prevent unauthorized access or theft of intellectual property.
                                        </li>
                                        <li> Operational Protocols: Employees and contractors are trained in best practices for IP and data protection, and operational protocols are regularly reviewed and updated. 
                                        </li>
                                        <li>Transparency: Users will be notified when AI is used in decision-making processes (e.g., hiring, content moderation) and may request human review where applicable.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 8.  Compliance and Legal Framework</h4>
                                    <ul className="list-point-1">
                                        <li>Regulatory Compliance: InfoTech Launch complies with all applicable intellectual property, data protection, and cybersecurity laws and regulations, including GDPR, CCPA, and DMCA.
                                         </li>
                                        <li>Jurisdiction and Dispute Resolution: Any disputes related to copyright or intellectual property will be governed by the laws of the State of North Carolina. Disputes shall be resolved through binding arbitration, with injunctive relief available for breaches involving IP or confidential information.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">  9. Policy Updates
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>InfoTech Launch may update this Copyright Notice and Policy at any time. The latest version will always be available on this website. Continued use of our website and services constitutes acceptance of any changes.
</li>
                                   </ul>
                                   <h4 className="text-xl mb-4 mt-4">10. Contact
                                    </h4>
                                    <ul className="list-point-1">
                                        <li> For copyright questions or to report infringement, contact: <br />
                                            Email: <a href="mailto:legal@infotechlaunch.com">legal@infotechlaunch.com</a></li>
                                    </ul>
                                    <p className="mt-4"><b>By accessing or using InfoTech Launch’s website or services, you acknowledge and agree to this Copyright Notice and Policy.</b></p>
                                </div>
                            </div >
                        </div >

                    </div >
                </div >
                <Footer />
            </AOSProvider >
        </>

    );
};

export default ECommerce;
