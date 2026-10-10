"use client";

import { useEffect } from "react";
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/lib/constants";
import { Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";

const ResumeModal = ({
  setShowResume,
  showResume,
}: {
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
  showResume: boolean;
}) => {
  useEffect(() => {
    if (!showResume) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowResume(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [showResume, setShowResume]);

  if (!showResume) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
      onClick={() => setShowResume(false)}
    >
      <div
        className="w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0f10]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/10 bg-[#0d0f10]/95 backdrop-blur px-4 sm:px-6 py-4">
          <h2 className="font-display text-lg sm:text-xl font-bold">Resume</h2>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" /> Open PDF
            </a>
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-3 sm:px-4 py-2 text-sm font-semibold"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
            <button
              aria-label="Close resume"
              onClick={() => setShowResume(false)}
              className="grid place-items-center h-9 w-9 rounded-full bg-white/5 hover:bg-red-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-8 space-y-8 text-sm sm:text-base">
          <header className="text-center border-b border-white/10 pb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-1">{profile.name}</h1>
            <p className="text-purple-300 mb-4">{profile.role} · {profile.tagline}</p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-gray-300 text-sm">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{profile.location}</span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-purple-300"><Mail className="h-4 w-4" />{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-purple-300"><Phone className="h-4 w-4" />{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-purple-300"><Linkedin className="h-4 w-4" />LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-purple-300"><Github className="h-4 w-4" />GitHub</a>
            </div>
          </header>

          <section>
            <h3 className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-3">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">{profile.summary}</p>
          </section>

          <section>
            <h3 className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-4">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.company} className="border-l-2 border-purple-500/70 pl-4 sm:pl-5">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="font-bold">{exp.company} <span className="font-normal text-gray-400">· {exp.location}</span></p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <p className="text-purple-300 text-sm mb-2">{exp.title}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    {exp.achievements.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-4">Projects</h3>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.slug} className="rounded-2xl border border-white/10 p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-1">
                    <p className="font-bold">{p.title} <span className="font-normal text-gray-400">· {p.subtitle} ({p.year})</span></p>
                    <div className="flex gap-3 text-sm">
                      <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">Live</a>
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">GitHub</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{p.description}</p>
                  <p className="text-gray-400 text-xs">{p.tags.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-4">Core Skills</h3>
            <dl className="space-y-2 text-sm">
              {skillGroups.map((g) => (
                <div key={g.title} className="sm:flex gap-2">
                  <dt className="font-semibold text-white sm:w-32 shrink-0">{g.title}</dt>
                  <dd className="text-gray-300">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-3">Education</h3>
              <ul className="space-y-3 text-sm">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-semibold">{e.degree}</p>
                    <p className="text-gray-400">{e.institution} · {e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-3">Certifications</h3>
              <ul className="space-y-3 text-sm">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-gray-400">{c.issuer} · {c.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
