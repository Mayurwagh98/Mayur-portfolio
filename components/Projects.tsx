import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "@/lib/constants";
import ProjectPreview from "./ProjectPreview";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-28">
      <div className="max-w-6xl w-full">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've"
          accent="built recently"
          description="Live, deployed and open source — click through to try them or read the code."
        />

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article
                className={`group grid xl:grid-cols-2 gap-8 xl:gap-12 items-center ${
                  index % 2 === 1 ? "xl:[&>*:first-child]:order-2" : ""
                }`}
              >
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="block"
                >
                  <ProjectPreview project={project} />
                </a>

                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <span className="font-mono text-purple-400">0{index + 1}</span>
                    <span className="h-px w-8 bg-white/20" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-1">{project.title}</h3>
                  <p className={`font-medium mb-4 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-5">{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Live demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      <Github className="h-4 w-4" /> Source code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div>
              <p className="font-display text-xl font-bold">More on GitHub</p>
              <p className="text-gray-400 text-sm">Experiments, side projects and everything in between.</p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Github className="h-4 w-4" /> @{profile.githubUser}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
