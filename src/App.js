import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* -----------------------------------------
   HOME PAGE COMPONENTS
----------------------------------------- */
import HeroSection from "./Homepage/HeroSection";
import CompanyAndServices from "./Homepage/CompanyAndServices";
import OurServices from "./Homepage/OurServices";
import ServicesSection from "./Homepage/ServicesSection";
import FlagshipProduct from "./Homepage/FlagshipProduct";
import IndustriesEmpower from "./Homepage/IndustriesSection";
import Foodtech from "./Homepage/Foodtech";
import AcademyAndCaseStudies from "./Homepage/AcademyAndCaseStudies";
import ProvenProcess from "./Homepage/ProvenProcess";
import PartnersAndGlobal from "./Homepage/PartnersAndGlobal";
import NextAtNim from "./Homepage/NextAtNim";

/* -----------------------------------------
   ABOUT PAGE COMPONENTS
----------------------------------------- */
import AboutUs from "./components/AboutUs";
import AboutWhoWeAre from "./components/AboutWhoWeAre";
import CeoSection from "./components/CeoSection";
import TeamSection from "./components/TeamSection";
import TeamVisionSection from "./components/TeamVisionSection";

/* -----------------------------------------
   SERVICES PAGE COMPONENTS
----------------------------------------- */
import ServicesHero from "./Service/ServicesHero";
import WhatWeOffer from "./Service/WhatWeOffer";
import AIDigitalSection from "./Service/AIDigitalSection";
import ExpertiseAndAdvantage from "./Service/ExpertiseAndAdvantage";
import IndustriesEmpowerCombined from "./Service/IndustriesEmpowerCombined";
import OurValuesInAction from "./Service/OurValuesInAction";

/* -----------------------------------------
   LEARN MORE – AI / CLOUD / WEB / DM
----------------------------------------- */
import AIBox from "./Servicelearnmoepage/serairound";
import AnalyticsCards from "./Servicelearnmoepage/seraitopics";
import HowItWorks from "./Servicelearnmoepage/seraitimeline";
import DataQuoteCard from "./Servicelearnmoepage/seraiquote";

import CloudBox from "./Servicelearnmoepage/sercloudround";
import SerCloudTopics from "./Servicelearnmoepage/sercloudtopics";
import SerCloudTimeline from "./Servicelearnmoepage/sercloudtimeline";
import SerCloudQuote from "./Servicelearnmoepage/sercloudquote";

import SerWebRound from "./Servicelearnmoepage/serwebround";
import SerWebTopics from "./Servicelearnmoepage/serwebtopics";
import SerWebTimeline from "./Servicelearnmoepage/serwebtimeline";
import SerWebQuote from "./Servicelearnmoepage/serwebquote";

import SerDmRound from "./Servicelearnmoepage/serdmround";
import SerDmTopics from "./Servicelearnmoepage/serdmtopics";
import SerDmTimeline from "./Servicelearnmoepage/serdmtimeline";
import SerDmQuote from "./Servicelearnmoepage/serdmquote";

/* -----------------------------------------
   CAREERS SECTION
----------------------------------------- */
import Careers from "./Careers/careers";
import CareersCard from "./Careers/careerscard";
import OpenRoles from "./Careers/careersrole";
import TalentCommunity from "./Careers/careertalent";
import CroPage from "./Careers/careerscro";
import RegisterForm from "./Careers/careernextregister";

/* -----------------------------------------
   OTHER MAIN PAGES
----------------------------------------- */
import Nimbook from "./Nimbook/Nimbook";
import ContactPage from "./contactpage/Contact";
import HeroSectionn from "./contactpage/contactushero"
import Enroll from "./components/Enroll";


/* -----------------------------------------
   COMMON COMPONENTS
----------------------------------------- */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


/* ===========================================================
   MAIN APP ROUTES
=========================================================== */
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* =======================
            HOME PAGE
        ========================== */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CompanyAndServices />
              <OurServices />
              <ServicesSection />
              <FlagshipProduct />
              <IndustriesEmpower />
              <Foodtech />
              <AcademyAndCaseStudies />
              <ProvenProcess />
              <PartnersAndGlobal />
              <NextAtNim />
              <Footer />
            </>
          }
        />

        {/* =======================
            SERVICES PAGE
        ========================== */}
        <Route
          path="/service"
          element={
            <>
              <ServicesHero />
              <WhatWeOffer />
              <AIDigitalSection />
              <ExpertiseAndAdvantage />
              <IndustriesEmpowerCombined />
              <OurValuesInAction />
              <Footer />
            </>
          }
        />

        {/* =======================
            ABOUT PAGE
        ========================== */}
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <AboutWhoWeAre />
              <CeoSection />
              <TeamSection />
              <TeamVisionSection />
              <Footer />
            </>
          }
        />

        {/* =======================
            NIMBOOK
        ========================== */}
        <Route
          path="/nimbook"
          element={
            <>
              <Nimbook />
              <Footer />
            </>
          }
        />

        {/* =======================
            CAREERS PAGE
        ========================== */}
        <Route
          path="/careers"
          element={
            <>
              <Careers />
              <CareersCard />
              <OpenRoles />
              <TalentCommunity />
              <Footer />
            </>
          }
        />

        <Route
          path="/apply"
          element={
            <>
              <CroPage />
              <RegisterForm />
              <TalentCommunity />
              <Footer />
            </>
          }
        />

        {/* =======================
            CONTACT PAGE
        ========================== */}
        <Route
          path="/contact"
          element={
            <>
              < HeroSectionn />
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* =======================
            ENROLL PAGE
        ========================== */}
        <Route
          path="/enroll"
          element={
            <>
              <Enroll />
            </>
          }
        />

        {/* =======================
            AI LEARN MORE
        ========================== */}
        <Route
          path="/Ailearnmore"
          element={
            <>
              <ServicesHero />
              <AIBox />
              <AnalyticsCards />
              <HowItWorks />
              <DataQuoteCard />
              <Footer />
            </>
          }
        />

        {/* =======================
            CLOUD LEARN MORE
        ========================== */}
        <Route
          path="/Cloudlearn"
          element={
            <>
              <ServicesHero />
              <CloudBox />
              <SerCloudTopics />
              <SerCloudTimeline />
              <SerCloudQuote />
              <Footer />
            </>
          }
        />

        {/* =======================
            WEB DEVELOPMENT LEARN MORE
        ========================== */}
        <Route
          path="/web"
          element={
            <>
              <ServicesHero />
              <SerWebRound />
              <SerWebTopics />
              <SerWebTimeline />
              <SerWebQuote />
              <Footer />
            </>
          }
        />

        {/* =======================
            DIGITAL MARKETING LEARN MORE
        ========================== */}
        <Route
          path="/dmlearn"
          element={
            <>
              <ServicesHero />
              <SerDmRound />
              <SerDmTopics />
              <SerDmTimeline />
              <SerDmQuote />
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
