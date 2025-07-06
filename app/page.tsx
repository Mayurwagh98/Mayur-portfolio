"use client";

import { useState, useEffect } from "react";
import ResumeModal from "@/components/ResumeModal";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import MobileNavbar from "@/components/MobileNavbar";
import LeftProfile from "@/components/LeftProfile";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Collaborate from "@/components/Collaborate";
import FloatingButtons from "@/components/FloatingButtons";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showResume, setShowResume] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "collaborate",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Loading Screen Component
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Resume Modal */}
      <ResumeModal setShowResume={setShowResume} showResume={showResume} />
      {/* Mobile Navigation */}
      {!showResume && (
        <MobileNavbar
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          scrollToSection={scrollToSection}
        />
      )}

      {/* Desktop Navigation */}
      {!showResume && (
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
      {/* Main Content Layout */}
      <div className="lg:flex">
        {/* Fixed Left Sidebar - Desktop Only */}
        <LeftProfile scrollToSection={scrollToSection} />

        {/* Scrollable Content */}
        <div className="lg:ml-80 xl:ml-96 flex-1">
          {/* Hero Section */}
          <Hero scrollToSection={scrollToSection} />
          {/* About Section */}
          <About />
          {/* Experience Section */}
          <Experience />
          {/* Projects Section */}
          <Projects scrollToSection={scrollToSection} />
          {/* Skills Section */}
          <Skills scrollToSection={scrollToSection} />
          {/* Collaborate Section */}
          <Collaborate />
          {/* Floating Buttons */}
          <FloatingButtons setShowResume={setShowResume} />
        </div>
      </div>
    </div>
  );
}
