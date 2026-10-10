import Image from "next/image";
import type { Project } from "@/lib/constants";

/** Real screenshot of the live app inside a browser-window frame. */
const ProjectPreview = ({ project }: { project: Project }) => {
  const url = project.links.live.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="relative">
      <div
        className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-br ${project.accent} opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500`}
      />
      <div className="relative rounded-2xl border border-white/10 bg-[#0b0d0e] overflow-hidden shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-gray-400">
            {url}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} — screenshot of the live app`}
            fill
            sizes="(min-width: 1280px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
