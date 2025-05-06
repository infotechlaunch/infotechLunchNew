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
                                   Terms and Conditions
                                    </h1>
                                    <h4 className="text-xl mb-4 mt-4"><i>Effective Date: May 3, 2025</i></h4>
                                    <hr />
                                    <h4 className="text-xl mb-4 mt-8">1. Introduction</h4>
                                    <p className="text-base mb-3"> Welcome to InfoTech Launch. By accessing or using our website and services-including AI Voice Agents, Digital Marketing, Reputation Management, Talent Automation, and AI Development-you agree to comply with and be bound by these Terms and Conditions (“Terms”). Please read them carefully before using our site or services.
                                    </p>
                                    <h4 className="text-xl mb-4 mt-4">2. Acceptance of Terms</h4>
                                    <ul className="list-point-1">
                                        <li>By accessing, browsing, or using this website or our services, you acknowledge that you have read, understood, and agree to these Terms.
                                        </li>
                                        <li>If you do not agree, you must not use our website or services.</li>
                                        <li> We may update these Terms at any time; changes will be posted on this page and, where appropriate, notified to you by email. Continued use after changes constitutes acceptance.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">3. Permitted Use</h4>
                                    <ul className="list-point-1">
                                        <li>You may use our website and services only for lawful purposes and in accordance with these Terms.</li>
                                        <li>Prohibited activities include, but are not limited to:
                                            <ul className="list-point-1">
                                                <li>Copying, distributing, or reverse engineering any part of our website or services.</li>
                                                <li>Using the website for fraudulent, abusive, or illegal activity.</li>
                                                <li>Attempting to gain unauthorized access to our systems, data, or accounts.</li>
                                                <li>Submitting false, misleading, or defamatory information.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">4. Account Registration and Security</h4>
                                    <ul className="list-point-1">
                                        <li> You must provide accurate and complete information when creating an account.</li>
                                        <li>  You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
                                        </li>
                                        <li>  Notify us immediately of any unauthorized use or security breach.</li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 5. Intellectual Property</h4>
                                    <ul className="list-point-1">
                                        <li> All content, software, data, trademarks, and intellectual property on this website are the exclusive property of InfoTech Launch.
                                        </li>
                                        <li>Unauthorized use, reproduction, or distribution is strictly prohibited.
                                        </li>
                                        <li>Employees, contractors, interns, and affiliates assign all work product, inventions, and developments created during their engagement to InfoTech Launch.
                                        </li>
                                        <li>Users must ensure that any content they submit does not infringe on third-party intellectual property rights.
                                        </li>
                                    </ul>

                                    <h4 className="text-xl mb-4 mt-4"> 6. User-Generated Content
                                    </h4>
                                    <ul className="list-point-1">
                                        <li> By submitting content, you grant InfoTech Launch a perpetual, worldwide, royalty-free license to use, modify, and distribute such content for business purposes.
                                        </li>
                                        <li> You represent and warrant that you have all necessary rights to any content you submit and agree to indemnify InfoTech Launch from any related claims.
                                        </li>
                                    </ul>

                                    <h4 className="text-xl mb-4 mt-4"> 7. Data Protection and Privacy </h4>
                                    <ul className="list-point-1">
                                        <li>  We collect only necessary data and process it in accordance with applicable laws and our Privacy Policy.
                                        </li>
                                        <li>  Data is protected by industry-standard security measures, including encryption, access controls, and regular audits.
                                        </li>
                                        <li>In the event of a data breach, affected users will be notified as required by law.
                                        </li>
                                        <li>Third-party vendors must comply with our data protection standards.
                                        </li>
                                        <li>Users, employees, contractors, and interns must report any suspected data breach immediately.
                                        </li>
                                        <li> Users have the right to access, correct, or request deletion of their data by contacting privacy@infotechlaunch.com.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 8. AI-Specific Terms
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>Bias & Fairness: Our AI systems are regularly audited for bias and compliance with anti-discrimination laws (e.g., Title VII, ADA, GDPR).
                                        </li>
                                        <li>Transparency: Users will be notified when AI is used in decision-making processes (e.g., hiring, content moderation) and may request human review where applicable.
                                        </li>
                                        <li>Consent: Explicit consent is obtained for all automated communications and data processing as required by law.
                                        </li>
                                        <li>Marketing Compliance: All AI-driven marketing communications comply with TCPA, CAN-SPAM, and FTC guidelines.
                                        </li>
                                        <li> Human Oversight: Critical decisions are subject to human review to ensure accountability.</li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 9. Employment, Contractor, and Intern Terms</h4>
                                    <ul className="list-point-1">
                                        <li>Employees (W-2):
                                            <ul className="list-point-1">
                                                <li> At-will unless otherwise stated in writing.</li>
                                                <li>Must comply with all company policies, including confidentiality, IP assignment, and code of conduct.
                                                </li>
                                                <li>Entitled to benefits as outlined in the Employee Handbook.</li>
                                            </ul>
                                        </li>
                                        <li>Contractors/1099:
                                            <ul className="list-point-1">
                                                <li>Engaged as independent contractors, not employees.</li>
                                                <li>Responsible for their own taxes, insurance, and expenses. </li>
                                                <li>Not eligible for employee benefits.</li>
                                                <li>Must maintain confidentiality and assign all IP to InfoTech Launch. </li>
                                                <li>Must not represent themselves as employees or agents of the company.</li>
                                            </ul>
                                        </li>
                                        <li>Interns:
                                            <ul className="list-point-1">
                                                <li>Paid/unpaid as specified in the Internship Agreement. </li>
                                                <li>Not entitled to employee benefits. </li>
                                                <li>Must comply with confidentiality and IP assignment.</li>
                                                <li>Internship does not guarantee future employment.  </li>

                                            </ul></li>
                                        <li>All personnel must return or destroy company materials upon termination. </li>
                                        <li>Whistleblower protections apply for reporting ethical or legal concerns.</li>

                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">  10. Indemnification
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>You agree to indemnify, defend, and hold harmless InfoTech Launch, its subsidiaries, employees, contractors, and affiliates from any claims, damages, or losses arising from your use of the website, violation of these Terms, or infringement of any rights or laws.
                                        </li>
                                        <li>Contractors and interns agree to indemnify InfoTech Launch for any losses resulting from their actions or omissions.
                                        </li>
                                        <li>The indemnified party must promptly notify the indemnifying party of any claim, and the indemnifying party will control the defense and settlement, subject to reasonable approval.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 11. Limitation of Liability
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>InfoTech Launch is not liable for indirect, incidental, or consequential damages, including lost profits or data, arising from your use of the website or services.
                                        </li>
                                        <li>Our aggregate liability is limited to the amount paid by you for services in the twelve months preceding the claim.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 12. Service Availability and Disruption
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>InfoTech Launch strives to maintain continuous website and service availability but does not guarantee uninterrupted access.
                                        </li>
                                        <li>We reserve the right to modify, suspend, or discontinue any part of the website or services at any time, with or without notice.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 13. Termination
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>We reserve the right to suspend or terminate your account or access to the website at our sole discretion, without notice, for any violation of these Terms or applicable laws.
                                        </li>
                                        <li>Upon termination, all licenses and rights granted to you will immediately cease.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 14. Governing Law and Dispute Resolution
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>These Terms are governed by the laws of the State of North Carolina.
                                        </li>
                                        <li>Any disputes will first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in our principal place of business.
                                        </li>
                                        <li>Injunctive relief may be sought in a court of competent jurisdiction for breaches involving confidential information or intellectual property.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4"> 15. Amendments
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>InfoTech Launch reserves the right to update these Terms at any time. Notice will be provided via website or email. Continued use constitutes acceptance of changes.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">16. Miscellaneous</h4>
                                    <ul className="list-point-1">
                                        <li>
                                            If any provision is found unenforceable, the remainder will remain in effect.
                                        </li>
                                        <li>These Terms constitute the entire agreement between you and InfoTech Launch regarding website and service use.
                                        </li>
                                        <li>You may not assign your rights or obligations without our prior written consent.
                                        </li>
                                        <li>Force Majeure: We are not liable for delays or failures due to events beyond our reasonable control.
                                        </li>
                                        <li>Language: The English version of these Terms is legally binding.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">17. Accessibility and User Consent
                                    </h4>
                                    <ul className="list-point-1">
                                        <li>These Terms are accessible via a prominent link in the website footer and during account registration.
                                        </li>
                                        <li>By clicking “I agree” or using our services, you provide express consent to these Terms.
                                        </li>
                                    </ul>
                                    <h4 className="text-xl mb-4 mt-4">18. Contact
                                    </h4>
                                    <ul className="list-point-1">
                                        <li> For questions, concerns, or to exercise your rights, contact: <br/>
                                            Email: <a href="mailto:legal@infotechlaunch.com">legal@infotechlaunch.com</a></li>
                                    </ul>
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
