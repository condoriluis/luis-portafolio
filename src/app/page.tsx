"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ScrollAnimations = dynamic(() => import("./components/ScrollAnimations"), { ssr: false });
const GlobalColorSettings = dynamic(() => import("./components/GlobalColorSettings"), { ssr: false });
const ResponsiveSidebarMenu = dynamic(() => import("./components/ResponsiveSidebarMenu"), { ssr: false });
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const LeftSidebar = dynamic(() => import("./components/LeftSidebar"), { ssr: false });
const HeroSection = dynamic(() => import("./components/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("./components/AboutSection"), { ssr: false });
const ResumeSection = dynamic(() => import("./components/ResumeSection"), { ssr: false });
const AbilitySection = dynamic(() => import("./components/AbilitySection"), { ssr: false });
const SkillsSection = dynamic(() => import("./components/SkillsSection"), { ssr: false });
const PortfolioSection = dynamic(() => import("./components/PortfolioSection"), { ssr: false });
const ServicesSection = dynamic(() => import("./components/ServicesSection"), { ssr: false });
const ContactSection = dynamic(() => import("./components/ContactSection"), { ssr: false });

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {

      const lightbox = require('lightbox2');
      lightbox.option({
        resizeDuration: 500,
        wrapAround: true,
      });

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isClient) return null;

  return (
    <>
      {isClient && (
        <video className="body-overlay" muted autoPlay loop>
          <source src="/assets/video/video.mp4" type="video/mp4" />
        </video>
      )}

      {isLoading && (
        <div className="page-loader">
          <div className="bounceball"></div>
        </div>
      )}

      <GlobalColorSettings />
      <ResponsiveSidebarMenu />
      <Navbar />
      <LeftSidebar />

      <ScrollAnimations />
      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <LeftSidebar />
            <HeroSection />
            <AboutSection />
            <ResumeSection />
            <AbilitySection />
            <SkillsSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
          </div>
        </div>
    
      </main>
      
    </>
  );
}
