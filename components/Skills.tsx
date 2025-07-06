import { Award, Cloud, Code, Server, Wrench, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import GitHubActivitySection from "./GithubStats";

const Skills = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
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
            Mastering modern technologies to build scalable, performant, and
            user-centric applications
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
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
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
                {["Mongoose", "CORS", "Middleware", "Database Design"].map(
                  (tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-green-600/20 text-green-300 border-green-500/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  )
                )}
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
                <h3 className="text-lg sm:text-xl font-bold text-white">
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
                <h3 className="text-lg sm:text-xl font-bold text-white">
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
                <h3 className="text-lg sm:text-xl font-bold text-white">
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

        {/* Github */}
        <div className="mb-12 sm:mb-16">
          <GitHubActivitySection />
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
                      <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">
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
                exploring new frameworks, tools, and best practices to deliver
                cutting-edge solutions.
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
  );
};

export default Skills;
