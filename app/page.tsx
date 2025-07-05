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
  Home,
  Folder,
  Wrench,
  Briefcase,
  Edit,
  MailIcon,
  X,
  Download,
  Code,
  Server,
  Cloud,
  Zap,
  Award,
  Menu,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showResume, setShowResume] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: Edit, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "skills", icon: Wrench, label: "Skills" },
    { id: "collaborate", icon: MailIcon, label: "Contact" },
  ];

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

  const experiences = [
    {
      title: "MERN Full Stack Developer",
      company: "Intervue Labs Pvt. Ltd.",
      period: "Jun 2023 - Present",
      description:
        "Spearheaded the development of an AI-driven interview platform designed to eliminate the need for human intervention in the interview process.",
      achievements: [
        "Built platform from scratch using React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS",
        "Developed autonomous interview bot for seamless candidate experience",
        "Contributed to end-to-end design, development, and deployment",
        "Streamlined recruitment process, reducing manual effort and improving efficiency",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Instructional Associate",
      company: "Masai School (EdTech)",
      period: "Apr 2022 - Feb 2023",
      description:
        "Provided technical guidance and resolved doubts for students in the MERN stack, enhancing their understanding and proficiency.",
      achievements: [
        "Guided students in MongoDB, Express.js, React, Node.js",
        "Conducted and managed student evaluations",
        "Enhanced overall educational experience for students",
        "Collaborated with team to improve curriculum delivery",
      ],
      color: "from-green-500 to-teal-600",
    },
  ];

  const projects = [
    {
      title: "AI Interview Platform",
      subtitle: "Full-Stack AI Application",
      description:
        "Revolutionary AI-driven interview platform that eliminates human intervention in the recruitment process. Features autonomous interview bots, real-time candidate assessment, and comprehensive analytics dashboard.",
      longDescription:
        "Built from scratch using modern technologies, this platform streamlines the entire interview process with AI-powered conversations, automated scoring, and detailed candidate insights.",
      period: "Jun 2023 - Present",
      status: "Live Production",
      color: "from-blue-500 via-purple-500 to-indigo-600",
      tags: ["React.js", "Next.js", "Node.js", "MongoDB", "AI/ML", "WebRTC"],
      features: [
        "AI-Powered Interviews",
        "Real-time Analytics",
        "Automated Scoring",
        "Video Integration",
      ],
      metrics: { users: "500+", interviews: "2000+", accuracy: "95%" },
      links: { live: "#", github: "#" },
      icon: "🤖",
    },
    {
      title: "NextJS Music Platform",
      subtitle: "Modern Music Streaming App",
      description:
        "Sleek and responsive music streaming application with intuitive user interface, advanced search capabilities, and seamless audio playback experience.",
      longDescription:
        "A comprehensive music platform featuring playlist management, social sharing, and personalized recommendations powered by modern web technologies.",
      period: "Jan 2024 - Mar 2024",
      status: "Completed",
      color: "from-purple-500 via-pink-500 to-rose-600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Audio API"],
      features: [
        "Streaming Audio",
        "Playlist Management",
        "Social Features",
        "Responsive Design",
      ],
      metrics: { tracks: "10K+", users: "200+", uptime: "99.9%" },
      links: { live: "#", github: "#" },
      icon: "🎵",
    },
    {
      title: "DevMatch Network",
      subtitle: "Developer Networking Platform",
      description:
        "Tinder-inspired networking platform for developers featuring swipe-based matching, secure authentication, and real-time messaging capabilities.",
      longDescription:
        "Connect developers worldwide through an innovative matching system, enabling professional networking, collaboration opportunities, and skill-based connections.",
      period: "Apr 2024 - May 2024",
      status: "In Development",
      color: "from-orange-500 via-red-500 to-pink-600",
      tags: ["React.js", "Node.js", "Socket.io", "JWT", "MongoDB", "DaisyUI"],
      features: [
        "Swipe Matching",
        "Real-time Chat",
        "Profile Verification",
        "Skill Matching",
      ],
      metrics: { matches: "1K+", messages: "5K+", satisfaction: "92%" },
      links: { live: "#", github: "#" },
      icon: "💻",
    },
  ];

  const skills = {
    frontend: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Redux",
      "Redux Toolkit",
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful API", "JWT"],
    tools: [
      "Git",
      "GitHub",
      "JIRA",
      "Postman",
      "MongoDB Compass",
      "NPM",
      "Vite",
    ],
    devops: ["Firebase", "AWS", "Vercel"],
    additional: [
      "CORS",
      "API Integration",
      "Debugging",
      "Agile Methodology",
      "Performance Optimization",
      "Responsive Design",
      "UI/UX",
    ],
  };

  const education = [
    {
      institution: "Masai School, Bangalore",
      degree: "Full-Stack Web Development",
      period: "Nov 2021 - May 2022",
      type: "Bootcamp",
    },
    {
      institution: "Matoshri College Of Engineering and Research Center",
      degree: "B.E. (Mechanical Engineer)",
      period: "Aug 2015 - Jul 2019",
      type: "Bachelor's",
    },
  ];

  const certifications = [
    "MERN Full Stack Development - Masai School (Apr 2023)",
    "Basics of Web Development Certificate Course - Masai School (Dec 2021)",
  ];

  // Resume Modal Component
  const ResumeModal = () => {
    if (!showResume) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#0a0a0a] border-b border-[#2a2a2a] p-4 sm:p-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold">
              Resume - Mayur Wagh
            </h2>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-[#2a2a2a] hover:bg-purple-600 w-8 h-8 sm:w-10 sm:h-10"
                onClick={() => window.print()}
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-[#2a2a2a] hover:bg-red-600 w-8 h-8 sm:w-10 sm:h-10"
                onClick={() => setShowResume(false)}
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* Personal Information */}
            <div className="text-center border-b border-[#2a2a2a] pb-6 sm:pb-8">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                Mayur Wagh
              </h1>
              <p className="text-lg sm:text-xl text-purple-400 mb-4">
                MERN Stack Developer
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="break-all">mswagh98@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>+91 820663529</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Nashik, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <a
                    href="https://www.linkedin.com/in/mayur-wagh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">
                Professional Summary
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Passionate MERN stack developer with 2+ years of experience in
                creating innovative web solutions. Specialized in building
                scalable, user-centric applications using modern technologies.
                Proven track record of delivering high-quality projects from
                conception to deployment. Strong background in both frontend and
                backend development with expertise in React.js, Node.js, and
                MongoDB. Experienced in mentoring and guiding junior developers.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
                Work Experience
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-purple-500 pl-4 sm:pl-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold">
                        {exp.title}
                      </h3>
                      <span className="text-gray-400 text-sm sm:text-base">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple-400 mb-3 text-sm sm:text-base">
                      {exp.company}
                    </p>
                    <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
                Key Projects
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-[#2a2a2a] rounded-2xl p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">
                          {project.title}
                        </h3>
                        <p className="text-purple-400 text-sm sm:text-base">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-purple-400 text-sm sm:text-base">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <span className="text-xs sm:text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-purple-400 text-sm sm:text-base">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(
                        ([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-sm sm:text-lg font-bold text-purple-400">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.frontend.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#2a2a2a] text-gray-300 border-[#3a3a3a] hover:bg-[#3a3a3a] text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    Backend Development
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.backend.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#2a2a2a] text-gray-300 border-[#3a3a3a] hover:bg-[#3a3a3a] text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#2a2a2a] text-gray-300 border-[#3a3a3a] hover:bg-[#3a3a3a] text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    Cloud & DevOps
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.devops.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#2a2a2a] text-gray-300 border-[#3a3a3a] hover:bg-[#3a3a3a] text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-purple-500 pl-4 sm:pl-6"
                  >
                    <h3 className="text-base sm:text-lg font-bold">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 text-sm sm:text-base">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
                Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300 text-sm sm:text-base"
                  >
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    Languages
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• English (Professional)</li>
                    <li>• Hindi (Native)</li>
                    <li>• Marathi (Native)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    Interests
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• Open Source Contribution</li>
                    <li>• Mentoring Developers</li>
                    <li>• Technology Blogging</li>
                    <li>• Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Loading Screen Component
  const LoadingScreen = () => {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex items-center justify-center">
        {/* Background gradient effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Loading content */}
        <div className="relative z-10 text-center">
          {/* Profile image placeholder */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1 animate-spin">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                <span className="text-2xl font-bold">MW</span>
              </div>
            </div>
          </div>

          {/* Loading text */}
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Mayur Wagh
          </h1>
          <p className="text-gray-400 mb-8 text-lg">MERN Stack Developer</p>

          {/* Loading animation */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-200"></div>
          </div>

          {/* Loading progress bar */}
          <div className="w-64 h-1 bg-[#2a2a2a] rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
          </div>

          <p className="text-gray-500 mt-4 text-sm animate-pulse">
            Loading portfolio...
          </p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Resume Modal */}
      <ResumeModal />

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 bg-[#1a1a1a] border-b border-[#2a2a2a] p-4 z-50">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Mayur Wagh</h1>
              <p className="text-sm text-gray-400">MERN Stack Developer</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden">
            <div className="fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] border-l border-[#2a2a2a] p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold">Navigation</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 w-full p-3 rounded-xl text-left hover:bg-[#2a2a2a] transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-2xl p-2 border border-[#2a2a2a] backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                      : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="h-6 w-6" />
                </button>

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-[#2a2a2a] text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#2a2a2a] rotate-45"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="lg:flex">
        {/* Fixed Left Sidebar - Desktop Only */}
        <div className="hidden lg:block fixed left-0 top-0 h-screen w-80 xl:w-96 p-6 z-10">
          <div className="flex items-center h-full">
            <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8 rounded-3xl w-full">
              <CardContent className="p-0 text-center">
                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/mayur-profile.jpeg"
                      alt="Mayur Wagh"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2">Mayur Wagh</h2>
                <p className="text-gray-400 mb-1">MERN Stack Developer</p>
                <p className="text-gray-500 mb-4 flex items-center justify-center gap-1 text-sm">
                  <MapPin className="h-4 w-4" />
                  Nashik, Maharashtra
                </p>

                <div className="space-y-1 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Mail className="h-4 w-4" />
                    <span>mswagh98@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>+91 820663529</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-3 mb-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] w-10 h-10"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/mayur-wagh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] w-10 h-10"
                    asChild
                  >
                    <a href="mailto:mswagh98@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] w-10 h-10"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] w-10 h-10"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl py-4 text-base font-semibold"
                  onClick={() => scrollToSection("collaborate")}
                >
                  Let's Talk
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="lg:ml-80 xl:ml-96 flex-1">
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-32 pt-24 lg:pt-32"
          >
            <div className="max-w-4xl w-full">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                    Transforming Your
                    <br />
                    Ideas into{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Reality
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4 max-w-2xl">
                    Innovative web developer with expertise in designing unique
                    site layouts and cutting-edge user interfaces.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl">
                    Renowned for leveraging React, Next.js, HTML, and CSS to
                    construct customer-facing solutions that offer distinctive
                    user experiences.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                      +2
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                      YEARS OF
                      <br />
                      EXPERIENCE
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                      +3
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                      MAJOR
                      <br />
                      PROJECTS
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                      +50
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                      STUDENTS
                      <br />
                      MENTORED
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold"
                    onClick={() => scrollToSection("collaborate")}
                  >
                    Let's Talk
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-purple-400 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold"
                    onClick={() => scrollToSection("projects")}
                  >
                    My Work{" "}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                {/* Education */}
                <div>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                    Education & Certifications
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 text-gray-300"
                      >
                        <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm sm:text-base">
                            {edu.degree}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            {edu.institution} • {edu.period}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
          >
            <div className="max-w-5xl w-full">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                  About Me &
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h2>
              </div>

              <Card className="bg-gradient from-purple-600/5 via-blue-600/5 to-indigo-600/5 border-purple-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-lg"></div>

                <CardContent className="p-0 relative z-10">
                  <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      I'm Mayur Wagh, a passionate MERN stack developer with
                      over 2 years of experience in creating innovative web
                      solutions. My journey began with a mechanical engineering
                      background, but my passion for technology led me to
                      transition into web development.
                    </p>
                    <p>
                      At Masai School, I honed my skills in full-stack
                      development and discovered my love for creating
                      user-centric applications. Since then, I've been dedicated
                      to building cutting-edge solutions that not only meet
                      technical requirements but also deliver exceptional user
                      experiences.
                    </p>
                    <p>
                      Currently, I'm working at Intervue Labs, where I'm
                      spearheading the development of an AI-driven interview
                      platform. This role has allowed me to combine my technical
                      expertise with innovative AI technologies to solve
                      real-world problems in the recruitment industry.
                    </p>
                    <p>
                      When I'm not coding, I enjoy mentoring aspiring developers
                      and contributing to the tech community. I believe in
                      continuous learning and staying updated with the latest
                      technologies to deliver the best solutions for my clients
                      and users.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
          >
            <div className="max-w-5xl w-full">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Professional
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Experience
                  </span>
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-[#1a1a1a] border-[#2a2a2a] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300"
                  >
                    <CardContent className="p-0">
                      <div
                        className={`h-2 bg-gradient-to-r ${exp.color}`}
                      ></div>
                      <div className="p-4 sm:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-purple-400 mb-2">
                              <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="text-sm sm:text-base">
                                {exp.company}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 mt-2 lg:mt-0">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-sm sm:text-base">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                          {exp.description}
                        </p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-200 text-sm sm:text-base">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
          >
            <div className="max-w-7xl w-full">
              <div className="mb-12 sm:mb-16 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Featured Projects &
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Achievements
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Showcasing innovative solutions that blend cutting-edge
                  technology with exceptional user experiences
                </p>
              </div>

              <div className="space-y-8 sm:space-y-12">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`group relative ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex flex-col lg:flex gap-6 sm:gap-8 items-center`}
                  >
                    {/* Project Visual */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-none">
                      <div
                        className={`relative h-64 sm:h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${project.color} p-1 group-hover:scale-105 transition-transform duration-500`}
                      >
                        <div className="w-full h-full rounded-3xl bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                            <div className="absolute top-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                            <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                          </div>

                          {/* Project Icon */}
                          <div className="relative z-10 text-center">
                            <div className="text-6xl sm:text-8xl mb-4 animate-pulse">
                              {project.icon}
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                              {project.title}
                            </div>
                            <div className="text-purple-300 text-sm sm:text-base">
                              {project.subtitle}
                            </div>
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm text-white">
                            {project.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-2 lg:order-none">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                          <h3 className="text-2xl sm:text-3xl font-bold">
                            {project.title}
                          </h3>
                          <div className="flex gap-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#2a2a2a] hover:bg-purple-600 transition-colors"
                              asChild
                            >
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                              </a>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#2a2a2a] hover:bg-purple-600 transition-colors"
                              asChild
                            >
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                        <p className="text-gray-400 text-base sm:text-lg mb-3 sm:mb-4">
                          {project.description}
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {Object.entries(project.metrics).map(
                          ([key, value], metricIndex) => (
                            <div
                              key={metricIndex}
                              className="text-center p-3 sm:p-4 bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a]"
                            >
                              <div className="text-lg sm:text-2xl font-bold text-purple-400">
                                {value}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-400 capitalize">
                                {key}
                              </div>
                            </div>
                          )
                        )}
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-3 text-purple-400">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-xs sm:text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-3 text-purple-400">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 text-purple-300 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Timeline */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 sm:mt-20 text-center">
                <Card className="bg-gradient from-purple-600/10 via-blue-600/10 to-indigo-600/10 border-purple-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decorative elements */}
                  <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>

                  <CardContent className="p-0 relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        My Journey Ready to Build Something Amazing?
                      </span>
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
                      Let's collaborate to bring your next big idea to life with
                      cutting-edge technology and innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                        onClick={() => scrollToSection("collaborate")}
                      >
                        Start a Project
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent"
                        onClick={() => scrollToSection("about")}
                      >
                        Learn More About Me
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
          >
            <div className="max-w-7xl w-full">
              <div className="mb-12 sm:mb-16 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Technical Skills &
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Mastering modern technologies to build scalable, performant,
                  and user-centric applications
                </p>
              </div>

              {/* Skills Overview Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                    Technologies
                  </div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    2+
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                    10+
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                    Projects Built
                  </div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">
                    95%
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Main Skills Grid */}
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Frontend Development */}
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#3a3a3a] rounded-3xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Code className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">
                          Frontend Development
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Building Interactive User Experiences
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          name: "React.js",
                          level: 95,
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          name: "JavaScript (ES6+)",
                          level: 90,
                          color: "from-yellow-500 to-orange-500",
                        },
                        {
                          name: "TypeScript",
                          level: 85,
                          color: "from-blue-600 to-blue-400",
                        },
                        {
                          name: "Tailwind CSS",
                          level: 92,
                          color: "from-teal-500 to-green-500",
                        },
                        {
                          name: "HTML5 & CSS3",
                          level: 95,
                          color: "from-orange-500 to-red-500",
                        },
                      ].map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-medium text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <span className="text-purple-400 text-xs sm:text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-[#0a0a0a] rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
                      {["Redux", "Next.js", "MUI", "Responsive Design"].map(
                        (tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs"
                          >
                            {tag}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Backend Development */}
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#3a3a3a] rounded-3xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <Server className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">
                          Backend Development
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Scalable Server-Side Solutions
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          name: "Node.js",
                          level: 88,
                          color: "from-green-500 to-green-400",
                        },
                        {
                          name: "Express.js",
                          level: 85,
                          color: "from-gray-600 to-gray-400",
                        },
                        {
                          name: "MongoDB",

                          level: 85,
                          color: "from-gray-600 to-gray-400",
                        },
                        {
                          name: "MongoDB",
                          level: 82,
                          color: "from-green-600 to-green-500",
                        },
                        {
                          name: "RESTful APIs",
                          level: 90,
                          color: "from-purple-500 to-pink-500",
                        },
                        {
                          name: "JWT Authentication",
                          level: 80,
                          color: "from-indigo-500 to-purple-500",
                        },
                      ].map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-medium text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <span className="text-purple-400 text-xs sm:text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-[#0a0a0a] rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
                      {[
                        "Mongoose",
                        "CORS",
                        "Middleware",
                        "Database Design",
                      ].map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-green-600/20 text-green-300 border-green-500/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tools & Technologies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                {/* Development Tools */}
                <Card className="bg-[#1a1a1a] border-[#2a2a2a] rounded-3xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        Development Tools
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "Git & GitHub",
                        "VS Code",
                        "Postman",
                        "MongoDB Compass",
                        "NPM/Yarn",
                        "Vite",
                      ].map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-gray-200 text-sm sm:text-base">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Cloud & DevOps */}
                <Card className="bg-[#1a1a1a] border-[#2a2a2a] rounded-3xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        Cloud & DevOps
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "Vercel",
                        "AWS",
                        "Firebase",
                        "Docker",
                        "CI/CD",
                        "Netlify",
                      ].map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-200 text-sm sm:text-base">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Skills */}
                <Card className="bg-[#1a1a1a] border-[#2a2a2a] rounded-3xl p-4 sm:p-6 hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        Additional Skills
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "API Integration",
                        "Performance Optimization",
                        "Responsive Design",
                        "UI/UX Design",
                        "Agile Methodology",
                        "Code Review",
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-200 text-sm sm:text-base">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Certifications & Achievements */}
              <div className="mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                  Certifications &{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Achievements
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      title: "MERN Full Stack Development",
                      issuer: "Masai School",
                      date: "Apr 2023",
                      description:
                        "Comprehensive full-stack development program covering MongoDB, Express.js, React, and Node.js",
                      color: "from-purple-600 to-blue-600",
                      icon: "🎓",
                    },
                    {
                      title: "Web Development Fundamentals",
                      issuer: "Masai School",
                      date: "Dec 2021",
                      description:
                        "Foundation course covering HTML, CSS, JavaScript, and modern web development practices",
                      color: "from-green-600 to-teal-600",
                      icon: "📜",
                    },
                  ].map((cert, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#3a3a3a] rounded-3xl p-4 sm:p-6 hover:scale-105 transition-all duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                          >
                            <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-bold mb-2">
                              {cert.title}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3">
                              <span className="text-purple-400 font-medium text-sm sm:text-base">
                                {cert.issuer}
                              </span>
                              <span className="text-gray-500 hidden sm:inline">
                                •
                              </span>
                              <span className="text-gray-400 text-sm sm:text-base">
                                {cert.date}
                              </span>
                            </div>
                            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                              {cert.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Skills Call to Action */}
              <div className="text-center">
                <Card className="bg-gradient from-purple-600/10 via-blue-600/10 to-indigo-600/10 border-purple-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decorative elements */}
                  <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>

                  <CardContent className="p-0 relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Always Learning, Always Growing
                      </span>
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
                      Technology evolves rapidly, and so do I. I'm constantly
                      exploring new frameworks, tools, and best practices to
                      deliver cutting-edge solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                        onClick={() => scrollToSection("projects")}
                      >
                        View My Projects
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent"
                        onClick={() => scrollToSection("collaborate")}
                      >
                        Let's Work Together
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

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
