import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const Hero = ({
  scrollToSection,
  education,
}: {
  scrollToSection: (sectionId: string) => void;
  education: any;
}) => {
  return (
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
              Innovative web developer with expertise in designing unique site
              layouts and cutting-edge user interfaces.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl">
              Renowned for leveraging React, Next.js, HTML, and CSS to construct
              customer-facing solutions that offer distinctive user experiences.
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
              My Work <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Education */}
          <div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Education & Certifications
            </p>
            <div className="space-y-3 sm:space-y-4">
              {education.map((edu: any, index: number) => (
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
  );
};

export default Hero;
