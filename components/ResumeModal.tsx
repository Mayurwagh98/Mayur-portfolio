import {
  certifications,
  education,
  experiences,
  projects,
  skills,
} from "@/lib/constants";
import { Button } from "./ui/button";
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  GraduationCap,
  X,
  Download,
} from "lucide-react";
import { Badge } from "./ui/badge";

const ResumeModal = ({
  setShowResume,
  showResume,
}: {
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
  showResume: boolean;
}) => {
  if (!showResume) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0a0a0a] border-b border-[#2a2a2a] p-4 sm:p-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">Resume - Mayur Wagh</h2>
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
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Mayur Wagh</h1>
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
                          <span className="text-xs sm:text-sm">{feature}</span>
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

export default ResumeModal;
