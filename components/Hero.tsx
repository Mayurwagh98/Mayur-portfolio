import { ArrowRight, Download } from "lucide-react";
import { profile, stats } from "@/lib/constants";
import Reveal from "./Reveal";

const stack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Redis",
  "Socket.io",
  "Tailwind CSS",
  "AWS",
];

const Hero = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-28"
    >
      <div className="max-w-4xl w-full">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs sm:text-sm text-purple-200 mb-6">
            👋 Hi, I&apos;m Mayur — {profile.role}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
            I build production web apps,{" "}
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              end&#8209;to&#8209;end.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-3">
            3+ years shipping across the MERN stack — from MongoDB schema design and
            REST APIs to server-rendered Next.js frontends and production deployments.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-10">
            Most recently at <span className="text-white">InCruiter</span>, and before that I led
            development of an <span className="text-white">AI interview platform</span> at Intervue
            Labs that runs hundreds of interviews a month with no human in the loop.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-10 max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.value + s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 whitespace-pre-line leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-7 py-4 font-semibold shadow-lg shadow-purple-900/40 transition-colors"
            >
              View my work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-7 py-4 font-semibold transition-colors"
            >
              <Download className="h-5 w-5" />
              Download resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Tech I work with</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-3 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
              {[...stack, ...stack].map((t, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
