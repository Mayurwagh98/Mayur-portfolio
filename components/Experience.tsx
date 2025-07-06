import { Building, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { experiences } from "@/lib/constants";

const Experience = () => {
  return (
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
          {experiences.map((exp: any, index: number) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border-[#2a2a2a] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <div className="p-4 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
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
                      <span className="text-sm sm:text-base">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    {exp.achievements.map(
                      (achievement: string, achIndex: number) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-200 text-sm sm:text-base">
                            {achievement}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
