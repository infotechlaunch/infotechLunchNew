import React from "react";
import Footer from "../components/Footer/Footer";
import StepJourney from "../components/Step/StepJourney";
import Services from "../components/Services/Services";
import Solutions from "../components/Solutions/Solutions";
import Cloud from "../components/Cloud/Cloud";
import HeaderNew from "../components/Header/HeaderNew";
import Banner from "../components/BannerHome/Banner";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import WorkingProcess from "../components/WorkingProcess/WorkingProcess";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Partners from "../components/Partners/Partners";
import OurPortfolioHome from "../components/OurPortfolioHome/OurPortfolioHome";
import IndustriesHome from "../components/IndustriesHome/IndustriesHome";
import Blog from "../components/Blog/Blog";
import TawkChat from "./TawkChat";
import GetStarted from "../components/GetStarted/GetStarted";
import FAQ from "../components/Faq/Faq";
import AOSProvider from "../components/AOSProvider";

const Home: React.FC = () => {

    return (
        <>  
        <AOSProvider>
        <HeaderNew/>
        <Banner/>
        <StepJourney/>
        <Services/>
        <Cloud/>
        <Solutions/>
        <CaseStudy/>
        <WorkingProcess/>
        <WhyChoose/>
        <Partners/>
        <OurPortfolioHome/>
        <IndustriesHome/>
        <Blog/>
        <GetStarted/>
        <FAQ/>
        <Footer/>
        <TawkChat/>
        </AOSProvider> 
        </>

    );
};

export default Home;
