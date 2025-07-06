import { projects } from "@/lib/constants";
import { Button } from "./ui/button";
import { ArrowUpRight, Calendar, Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Projects = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
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
            Showcasing innovative solutions that blend cutting-edge technology
            with exceptional user experiences
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
                        <span className="text-xs sm:text-sm">{feature}</span>
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
                        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 text-xs text-black"
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
  );
};

export default Projects;
