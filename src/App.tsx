import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AIDevelopment from "./pages/AIDevelopment";
import AIAgentDevelopment from "./pages/AIAgentDevelopment";
import BlogPage from "./pages/BlogPage";
import BlogDeatils from "./components/BlogDetails/BlogDeatils";
import CareerPage from "./pages/CareerPage";
import LifeInInfoTechLaunch from "./pages/LifeInInfoTechLaunch";
import ClientTestimonials from "./pages/ClientTestimonials";
import ScrollToTop from "./pages/ScrollToTop";
import HireMobileAppDeveloper from "./pages/HireMobileAppDeveloper";
import TalentSolutions from "./pages/TalentSolutions";
import FoodBeverageeos from "./pages/FoodBeverageeos";
// import AISocialMedia from "./pages/AISocialMedia";
import AIConsulting from "./pages/AIConsulting";
import AIGen from "./pages/AIGen";
import AIAgentDevelopmentNew from "./pages/AIAgentDevelopmentNew";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import AdaptiveAiDevelopment from "./pages/AdaptiveAiDevelopment";
import AiChatbotDevelopment from "./pages/AiChatbotDevelopment";
import Healthcare from "./pages/Healthcare";
import PickupDelivery from "./pages/PickupDelivery";
import DatingApp from "./pages/DatingApp";
import Education from "./pages/Education";
import Fitness from "./pages/Fitness";
import HomeServices from "./pages/HomeServices";
import RealState from "./pages/RealState";
import TaxiApp from "./pages/TaxiApp";
import ECommerce from "./pages/ECommerce";
import CaseStudy from "./pages/CaseStudy";
import GrowthMarketing from "./pages/GrowthMarketing";
import MobileDevelopment from "./pages/MobileDevelopment";
import SocialMedia from "./pages/SocialMedia";
import AiVoiceAgent from "./pages/AiVoiceAgent";
// import VoiceSelector from "./pages/VoiceSelector";
import AiDemoCall from "./pages/AiDemoCall";
import AiContactUs from "./pages/AiContactUs";
import TermsandConditions from "./pages/TermsandConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Copyright from "./pages/Copyright";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PlayAudio from "./pages/PlayAudio";











function App() {

  return (
    <>
      {/* <Router basename="/infotech"> */}
      <Router>
      <ScrollToTop />
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ai-development" element={<AIDevelopment/>} />
          <Route path="/ai-agent-development" element={<AIAgentDevelopment/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/BlogDeatils/:id" element={<BlogDeatils/>} />
          <Route path="/Career-at-infotechlaunch" element={<CareerPage/>} />
          <Route path="/life-at-infotechlaunch" element={<LifeInInfoTechLaunch/>} />
          <Route path="/client-testimonial" element={<ClientTestimonials/>} />
          <Route path="/hire-a-developer" element={<HireMobileAppDeveloper/>} />
          <Route path="/talent-solutions" element={<TalentSolutions/>} />
          <Route path="/food-beverageeos/" element={<FoodBeverageeos/>} />
          <Route path="/software-development/" element={<SoftwareDevelopment/>} />
          {/* <Route path="/ai-social-media/" element={<AISocialMedia/>} /> */}
          <Route path="/ai-consulting" element={<AIConsulting/>} />
          <Route path="/ai-gen" element={<AIGen/>} />
          <Route path="/ai-agent-development-new" element={<AIAgentDevelopmentNew/>} />
          <Route path="/adaptive-ai-development" element={<AdaptiveAiDevelopment/>} />
          <Route path="/ai-chatbot-development" element={<AiChatbotDevelopment/>} />
          <Route path="/health-care" element={<Healthcare/>} />
          <Route path="/pickup-delivery" element={<PickupDelivery/>} />
          <Route path="/dating-app" element={<DatingApp/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/fitness" element={<Fitness/>} />
          <Route path="/home-services" element={<HomeServices/>} />
          <Route path="/real-state" element={<RealState/>} />
          <Route path="/taxi-app" element={<TaxiApp/>} />
          <Route path="/e-commerce" element={<ECommerce/>} />
          <Route path="/case-study" element={<CaseStudy/>} />
          <Route path="/growth-and-marketing" element={<GrowthMarketing/>} />
          <Route path="/mobile-development" element={<MobileDevelopment/>} />
          <Route path="/ai-social-media" element={<SocialMedia/>} />
          <Route path="/ai-voice-agent" element={<AiVoiceAgent/>} />
          {/* <Route path="/ai-voice-selector" element={<VoiceSelector/>} /> */}
          <Route path="/ai-demo-call" element={<AiDemoCall/>} />
          <Route path="/ai-contact-us" element={<AiContactUs/>} />
          <Route path="/play-audio" element={<PlayAudio/>} />
          <Route path="/terms-and-conditions" element={<TermsandConditions/>} />
          <Route path="/cookie-policy" element={<CookiePolicy/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/copyright" element={<Copyright/>} />
          
          
          


          {/* Fallback for invalid routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


