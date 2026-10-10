import { Cloud, Code2, Database, Server, Sparkles, Workflow } from "lucide-react";
import { skillGroups } from "@/lib/constants";
import GitHubActivitySection from "./GithubStats";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Code2, Sparkles, Server, Database, Cloud, Workflow];
const accents = [
  "from-yellow-400 to-orange-500",
  "from-sky-400 to-blue-600",
  "from-emerald-400 to-green-600",
  "from-lime-400 to-emerald-600",
  "from-orange-400 to-rose-500",
  "from-purple-400 to-violet-600",
];

const Skills = () => {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-28">
      <div className="max-w-6xl w-full">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind"
          accent="the work"
          description="What I use day-to-day to design, build and ship full-stack applications."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={group.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/40 hover:bg-white/[0.05] transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${accents[i]}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <GitHubActivitySection />
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
