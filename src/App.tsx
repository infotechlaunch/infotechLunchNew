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
import AISocialMedia from "./pages/AISocialMedia";
function App() {

  return (
    <>
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
          <Route path="/BlogDeatils" element={<BlogDeatils/>} />
          <Route path="/Career-at-infotechlaunch" element={<CareerPage/>} />
          <Route path="/life-at-infotechlaunch" element={<LifeInInfoTechLaunch/>} />
          <Route path="/client-testimonial" element={<ClientTestimonials/>} />
          <Route path="/hire-mobile-app-developer" element={<HireMobileAppDeveloper/>} />
          <Route path="/talent-solutions" element={<TalentSolutions/>} />
          <Route path="/food-beverageeos/" element={<FoodBeverageeos/>} />
          <Route path="/ai-social-media/" element={<AISocialMedia/>} />
          

          {/* Fallback for invalid routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


