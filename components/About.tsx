import { Award, GraduationCap, Layers, Rocket, ShieldCheck, Gauge } from "lucide-react";
import { certifications, education } from "@/lib/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const strengths = [
  {
    icon: Layers,
    title: "End-to-end ownership",
    text: "Schema design, APIs, frontend and deployment — I take features from ticket to production.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    text: "JWT auth, role-based access control and careful handling of user data.",
  },
  {
    icon: Gauge,
    title: "Performance-minded",
    text: "SSR for faster first loads and SEO, indexed queries and lean API responses.",
  },
  {
    icon: Rocket,
    title: "Shipping in teams",
    text: "Agile delivery with product, design and QA, code reviews and reliable releases.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-28">
      <div className="max-w-5xl w-full">
        <SectionHeading eyebrow="About" title="From mechanical engineering" accent="to full-stack engineering" />

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Mayur Wagh</span>, a MERN Full Stack
                Developer from Nashik with 3+ years of experience building production-grade web
                applications across React.js, Next.js, Node.js, Express.js and MongoDB.
              </p>
              <p>
                I started out with a B.E. in Mechanical Engineering, then moved into software through
                Masai School&apos;s full-stack program — and stayed on as an Instructional Associate,
                mentoring 100+ developers.
              </p>
              <p>
                At <span className="text-white">Intervue Labs</span> I led development of an AI-driven
                interview platform that conducts hundreds of interviews a month without human
                intervention. Most recently at <span className="text-white">InCruiter</span> I owned
                feature modules end-to-end and secured recruiter and candidate flows with JWT and RBAC.
              </p>
              <p>
                I care about clean schemas, fast pages and APIs that are easy to reason about — and I
                like owning features from schema design through deployment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 mb-5">
                <GraduationCap className="h-4 w-4 text-purple-400" /> Education
              </h3>
              <ul className="space-y-5 mb-8">
                {education.map((edu) => (
                  <li key={edu.degree} className="border-l-2 border-purple-500/60 pl-4">
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.period}</p>
                  </li>
                ))}
              </ul>
              <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 mb-4">
                <Award className="h-4 w-4 text-purple-400" /> Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.title} className="text-sm">
                    <p className="text-gray-200">{c.title}</p>
                    <p className="text-xs text-gray-500">
                      {c.issuer} · {c.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {strengths.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-purple-500/40 transition-colors">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-purple-500/15 text-purple-300 mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
