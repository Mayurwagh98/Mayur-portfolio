import Image from "next/image";
import { FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/constants";

const socials = [
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin, hover: "hover:bg-[#0A66C2]" },
  { href: profile.github, label: "GitHub", icon: Github, hover: "hover:bg-white hover:text-black" },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, hover: "hover:bg-[#EA4335]" },
];

const ProfileCard = ({
  scrollToSection,
  setShowResume,
}: {
  scrollToSection: (sectionId: string) => void;
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-purple-500/30">
      <div className="rounded-3xl bg-[#131617]/95 backdrop-blur-xl p-6 text-center">
        <div className="relative mx-auto mb-5 w-36 h-36 sm:w-44 sm:h-44 xl:w-48 xl:h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 blur-xl opacity-40" />
          <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-purple-400 to-indigo-600">
            <Image
              src="/mayur-profile.jpeg"
              alt="Mayur Wagh"
              width={384}
              height={384}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold mb-1">{profile.name}</h2>
        <p className="text-purple-300 font-medium mb-3">{profile.role}</p>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 mb-5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to new opportunities
        </div>

        <ul className="space-y-1.5 mb-5 text-sm text-gray-400">
          <li className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            {profile.location}
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="flex items-center justify-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-gray-500" />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-gray-500" />
              {profile.phone}
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-3 mb-6">
          {socials.map(({ href, label, icon: Icon, hover }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`grid place-items-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:-translate-y-0.5 transition-all duration-200 ${hover}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => scrollToSection("collaborate")}
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 py-3 text-sm font-semibold shadow-lg shadow-purple-900/40 transition-colors"
          >
            Let&apos;s Talk
          </button>
          <button
            onClick={() => setShowResume(true)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 py-3 text-sm font-semibold transition-colors"
          >
            <FileText className="h-4 w-4" />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
