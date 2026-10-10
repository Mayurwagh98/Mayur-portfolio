"use client";

import { useState, useEffect } from "react";
import ResumeModal from "@/components/ResumeModal";
import Navbar, { navItems } from "@/components/Navbar";
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

  // Highlight the nav item for whichever section is in the middle of the viewport
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0d0f10] text-white overflow-x-clip">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-purple-700/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-20%] left-[10%] w-[480px] h-[480px] rounded-full bg-indigo-700/15 blur-[120px] animate-float-slow [animation-delay:-4s]" />
      </div>

      <ResumeModal setShowResume={setShowResume} showResume={showResume} />

      {!showResume && (
        <MobileNavbar
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
      )}

      {!showResume && (
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      )}

      <div className="relative z-10 pt-16 lg:pt-0 lg:flex">
        <LeftProfile scrollToSection={scrollToSection} setShowResume={setShowResume} />

        <main className="lg:ml-80 xl:ml-96 flex-1 min-w-0">
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Collaborate setShowResume={setShowResume} />
          <footer className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-28 pt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Mayur Wagh · Built with Next.js & Tailwind CSS
          </footer>
        </main>

        <FloatingButtons setShowResume={setShowResume} />
      </div>
    </div>
  );
}
