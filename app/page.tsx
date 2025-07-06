"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Globe,
  Twitter,
  ArrowUpRight,
  Linkedin,
  Phone,
  MapPin,
  Calendar,
  Building,
  GraduationCap,
  Wrench,
  X,
  Code,
  Server,
  Cloud,
  Zap,
  Award,
  Menu,
} from "lucide-react";
import { experiences, projects, education } from "@/lib/constants";
import ResumeModal from "@/components/ResumeModal";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import GitHubActivitySection from "@/components/GithubStats";
import MobileNavbar from "@/components/MobileNavbar";
import LeftProfile from "@/components/LeftProfile";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

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

  // Resume Modal Component

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
          <section
            id="collaborate"
            className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
          >
            <div className="max-w-5xl w-full">
              <Card className="bg-gradient from-purple-600/10 via-blue-600/10 to-indigo-600/10 border-purple-500/20 rounded-3xl p-8 sm:p-12 lg:p-20 relative overflow-hidden backdrop-blur-sm">
                {/* Background decorative elements */}
                <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>

                <CardContent className="p-0 relative z-10">
                  <div className="max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white">
                      Let's
                      <br />
                      <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        collaborate
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                      Ready to bring your ideas to life with cutting-edge web
                      development? Let's collaborate to create innovative
                      solutions that deliver exceptional user experiences and
                      drive business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                        asChild
                      >
                        <a href="mailto:mswagh98@gmail.com">
                          <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Email Me
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/mayur-wagh"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>

                  <Button
                    size="icon"
                    className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-full w-12 h-12 sm:w-16 sm:h-16"
                    asChild
                  >
                    <a href="mailto:mswagh98@gmail.com">
                      <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
          {/* Floating Buttons */}
          <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex flex-col gap-3 sm:gap-4 z-20">
            <Button
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
              asChild
            >
              <a href="mailto:mswagh98@gmail.com">Hire Me</a>
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
              onClick={() => setShowResume(true)}
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
