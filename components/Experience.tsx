import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-28">
      <div className="max-w-5xl w-full">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          accent="shipped"
          description="Three teams, one constant: owning features from the database to the deploy."
        />

        <ol className="relative border-l border-white/10 ml-2 sm:ml-3 space-y-10">
          {experiences.map((exp, index) => (
            <li key={exp.company} className="relative pl-6 sm:pl-10">
              <span
                aria-hidden
                className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full ring-4 ring-[#0d0f10] ${
                  index === 0 ? "bg-purple-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]" : "bg-gray-600"
                }`}
              />
              <Reveal>
                <article className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 hover:border-purple-500/40 hover:bg-white/[0.05] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold">{exp.company}</h3>
                      <p className="text-purple-300 font-medium">{exp.title}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-400 shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-5">{exp.description}</p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((a) => {
                      const [lead, ...rest] = a.split(": ");
                      const hasLead = rest.length > 0 && lead.length < 30;
                      return (
                        <li key={a} className="flex gap-3 text-sm sm:text-[15px] text-gray-300 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                          <span>
                            {hasLead ? (
                              <>
                                <span className="text-white font-medium">{lead}:</span> {rest.join(": ")}
                              </>
                            ) : (
                              a
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
