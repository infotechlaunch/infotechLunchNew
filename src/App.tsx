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
import AIAgentDevelopmentNew from "./pages/AIAgentDevelopmentNew";
import AdaptiveAiDevelopment from "./pages/AdaptiveAiDevelopment";
import AiChatbotDevelopment from "./pages/AiChatbotDevelopment";
import Healthcare from "./pages/Healthcare";
import ECommerce from "./pages/ECommerce";
import CaseStudy from "./pages/CaseStudy";
import GrowthMarketing from "./pages/GrowthMarketing";
import UiUxDesign from "./pages/UiUxDesign";
import SocialMedia from "./pages/SocialMedia";
import AiVoiceAgent from "./pages/AiVoiceAgent";
// import VoiceSelector from "./pages/VoiceSelector";
import AiDemoCall from "./pages/AiDemoCall";
import AiContactUs from "./pages/AiContactUs";
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
          <Route path="/hire-mobile-app-developer" element={<HireMobileAppDeveloper/>} />
          <Route path="/talent-solutions" element={<TalentSolutions/>} />
          <Route path="/food-beverageeos/" element={<FoodBeverageeos/>} />
          {/* <Route path="/ai-social-media/" element={<AISocialMedia/>} /> */}
          <Route path="/ai-consulting" element={<AIConsulting/>} />
          <Route path="/ai-agent-development-new" element={<AIAgentDevelopmentNew/>} />
          <Route path="/adaptive-ai-development" element={<AdaptiveAiDevelopment/>} />
          <Route path="/ai-chatbot-development" element={<AiChatbotDevelopment/>} />
          <Route path="/health-care" element={<Healthcare/>} />
          <Route path="/e-commerce" element={<ECommerce/>} />
          <Route path="/case-study" element={<CaseStudy/>} />
          <Route path="/growth-and-marketing" element={<GrowthMarketing/>} />
          <Route path="/ui-ux-design" element={<UiUxDesign/>} />
          <Route path="/ai-social-media" element={<SocialMedia/>} />
          <Route path="/ai-voice-agent" element={<AiVoiceAgent/>} />
          {/* <Route path="/ai-voice-selector" element={<VoiceSelector/>} /> */}
          <Route path="/ai-demo-call" element={<AiDemoCall/>} />
          <Route path="/ai-contact-us" element={<AiContactUs/>} />
          <Route path="/play-audio" element={<PlayAudio/>} />
          
          
          


          {/* Fallback for invalid routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


