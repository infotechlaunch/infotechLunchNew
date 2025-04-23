import { useState, useEffect } from 'react';
import "./SocialMedia.css";


export default function PricingComparisonTable() {
  // const [activeTab, setActiveTab] = useState('monthly');
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const monthlyServices = [
    {
      service: "Social Media Specialist",
      socialbee: { lite: "$129", standard: "$199", plus: "$299" },
      itl: { small: "$199", agency: "$250", basic: true, standard: true, plus: true, enterprise: true }
    },
    {
      service: "Video First Specialist Service",
      socialbee: { lite: "$199", standard: "$299", plus: "$399" },
      itl: { small: false, agency: false, basic: true, standard: true, plus: true, enterprise: true }
    },
    {
      service: "Article Writing Services",
      socialbee: { lite: "$499", standard: "$649", plus: "$799" },
      itl: { small: "$199", agency: "$350", basic: false, standard: true, plus: true, enterprise: true }
    },
    {
      service: "IG Community Management Service",
      socialbee: { lite: "$129", standard: "$199", plus: "$299" },
      itl: { small: false, agency: false, basic: true, standard: true, plus: true, enterprise: true }
    },
    {
      service: "LinkedIn Lead Generation",
      socialbee: { lite: "$129", standard: "$199", plus: "$299" },
      itl: { small: false, agency: false, basic: true, standard: true, plus: true, enterprise: true }
    },
    {
      service: "Ads Management Specialist",
      socialbee: { lite: "$299", standard: "$449", plus: "$649" },
      itl: { small: false, agency: false, basic: false, standard: true, plus: true, enterprise: true }
    },
    {
      service: "Total",
      socialbee: { lite: "$1,384", standard: "$1,994", plus: "$2,744" },
      itl: { small: "$398", agency: "$600", basic: "$349", standard: "$449", plus: "$549", enterprise: "Contact us" }
    }
  ];

  const additionalFeatures = [
    {
      service: "Review Management",
      itl: { basic: true, standard: true, plus: true, enterprise: true }
    },
    {
      service: "Whatsup Management",
      itl: { basic: true, standard: true, plus: true, enterprise: true }
    },
    {
      service: "AI Based ChatBot creation and Integration",
      itl: { basic: false, standard: true, plus: true, enterprise: true }
    },
    {
      service: "AI Voice agent",
      itl: { basic: false, standard: false, plus: true, enterprise: true }
    }
  ];

  const onetimeServices = [
    {
      service: "Website Creation Services",
      socialbee: { lite: "$199", standard: "$299", plus: "$499" },
      itl: { basic: "$149", standard: "$199", plus: "$349" }
    },
    {
      service: "Copywriting Services",
      socialbee: { lite: "$129", standard: "$199", plus: "$299" },
      itl: { basic: "$99", standard: "$149", plus: "$199" }
    },
    {
      service: "Ads Campaign Setup",
      socialbee: { lite: "$299", standard: "$399", plus: "$499" },
      itl: { basic: "$149", standard: "$199", plus: "$399" }
    },
    {
      service: "Total",
      socialbee: { lite: "$627", standard: "$897", plus: "$1,297" },
      itl: { basic: "$397", standard: "$547", plus: "$947" }
    }
  ];

  // Custom Check/X mark rendering
  const CheckMark = () => (
    <span className="text-green-500 font-bold text-xl">✓</span>
  );

  const XMark = () => (
    <span className="text-red-500 font-bold text-xl">✗</span>
  );

  // Custom arrow icon for the button
  // const ArrowRight = () => (
  //   <span className="inline-block ml-1">→</span>
  // );

  return (
    <div className="bg-gradient-blue-red min-h-screen p-4 md:p-8">
      <div className={`max-w-10xl mx-auto transition-all duration-700 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Service Pricing Comparison
          </h1>
          
        </div>

        {/* {activeTab === 'monthly' && ( */}
          <div className="mt-4 overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full text-black">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left border-b border-gray-300">Services</th>
                  <th colSpan={3} className="px-4 py-3 text-center border-b border-gray-300 bg-blue-700">SocialBee/ConciergeBee</th>
                  <th colSpan={2} className="px-4 py-3 text-center border-b border-gray-300 bg-green-700">StoryChief</th>
                  <th colSpan={4} className="px-4 py-3 text-center border-b border-gray-300 bg-purple-700">ITL – All Packages</th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left"></th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Lite</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Standard</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Plus</th>
                  <th className="px-4 py-2 text-center">Small Business</th>
                  <th className="px-4 py-2 text-center">Agency</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Basic</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Standard</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Plus</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {monthlyServices.map((item, index) => (
                  <tr key={index} className={`hover:bg-blue-50 transition-colors ${item.service === 'Total' ? 'bg-gray-100 font-bold' : 'bg-white'}`}>
                    <td className="px-4 py-3 border-b">{item.service}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.socialbee.lite}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.socialbee.standard}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.socialbee.plus}</td>
                    <td className="px-4 py-3 border-b text-center">
                      {item.itl.small ? item.itl.small : <XMark />}
                    </td>
                    <td className="px-4 py-3 border-b text-center">
                      {item.itl.agency ? item.itl.agency : <XMark />}
                    </td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">
                      {item.itl.basic === true ? (
                        <CheckMark />
                      ) : item.itl.basic === false ? (
                        <XMark />
                      ) : (
                        item.itl.basic
                      )}
                    </td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">
                      {item.itl.standard === true ? (
                        <CheckMark />
                      ) : item.itl.standard === false ? (
                        <XMark />
                      ) : (
                        item.itl.standard
                      )}
                    </td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">
                      {item.itl.plus === true ? (
                        <CheckMark />
                      ) : item.itl.plus === false ? (
                        <XMark />
                      ) : (
                        item.itl.plus
                      )}
                    </td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">
                      {item.itl.enterprise === true ? (
                        <CheckMark />
                      ) : item.itl.enterprise === false ? (
                        <XMark />
                      ) : (
                        item.itl.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* )} */}

        {/* {activeTab === 'features' && ( */}
          <div className="mt-4 overflow-x-auto bg-white  shadow-lg">
            <table className="w-full text-black">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left border-b border-gray-300">Additional Features, Only with InfoTech Launch</th>
                  <th className="px-4 py-3 text-center border-b border-gray-300 bg-blue-700">Basic</th>
                  <th className="px-4 py-3 text-center border-b border-gray-300 bg-green-700">Standard</th>
                  <th className="px-4 py-3 text-center border-b border-gray-300 bg-purple-700">Plus</th>
                  <th className="px-4 py-3 text-center border-b border-gray-300 bg-orange">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {additionalFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-3 border-b">{item.service}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">
                      {item.itl.basic ? <CheckMark /> : <XMark />}
                    </td>
                    <td className="px-4 py-3 border-b text-center">
                      {item.itl.standard ? <CheckMark /> : <XMark />}
                    </td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">
                      {item.itl.plus ? <CheckMark /> : <XMark />}
                    </td>
                    <td className="px-4 py-3 border-b text-center">
                      {item.itl.enterprise ? <CheckMark /> : <XMark />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="p-4 text-center bg-gradient-to-r from-purple-100 to-blue-100">
              <p className="font-medium text-gray-800">
                ITL offers software development—both hybrid and from scratch. <span className="text-blue-600 font-bold">Contact us today</span> to build your AI-powered products.
              </p>
            </div> */}
          </div>
        {/* )} */}

        {/* {activeTab === 'onetime' && ( */}
          <div className="mt-4 overflow-x-auto bg-white  shadow-lg">
            <table className="w-full text-black">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left border-b border-gray-300">One Time Services</th>
                  <th colSpan={3} className="px-4 py-3 text-center border-b border-gray-300 bg-blue-700">SocialBee/ConciergeBee</th>
                  <th colSpan={2} className="px-4 py-3 text-center border-b border-gray-300 bg-green-700">StoryChief</th>
                  <th colSpan={3} className="px-4 py-3 text-center border-b border-gray-300 bg-purple-700">ITL – All Packages</th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left"></th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Lite</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Standard</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Plus</th>
                  <th className="px-4 py-2 text-center">Small Business</th>
                  <th className="px-4 py-2 text-center">Agency</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Basic</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Standard</th>
                  <th className="px-4 py-2 text-center bg-blue-fade">Plus</th>
                </tr>
              </thead>
              <tbody>
                {onetimeServices.map((item, index) => (
                  <tr key={index} className={`hover:bg-blue-50 transition-colors ${item.service === 'Total' ? 'bg-gray-100 font-bold' : 'bg-white'}`}>
                    <td className="px-4 py-3 border-b">{item.service}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.socialbee.lite}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.socialbee.standard}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.socialbee.plus}</td>
                    <td className="px-4 py-3 border-b text-center"><span className="text-red-500 font-bold text-xl">✗</span></td>
                    <td className="px-4 py-3 border-b text-center"><span className="text-red-500 font-bold text-xl">✗</span></td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.itl.basic}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.itl.standard}</td>
                    <td className="px-4 py-3 border-b text-center bg-blue-fade">{item.itl.plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* )} */}

        {/* <div className="mt-8 flex justify-center">
          <button 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all transform hover:scale-105"
            onClick={() => {}}
          >
            Compare Plans <ArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  );
}