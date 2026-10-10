import { Home, Folder, Wrench, Briefcase, User, Mail } from "lucide-react";

export const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Folder, label: "Projects" },
  { id: "skills", icon: Wrench, label: "Skills" },
  { id: "collaborate", icon: Mail, label: "Contact" },
];

const Navbar = ({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <nav
      aria-label="Sections"
      className="hidden lg:block fixed top-6 left-[calc(50%+10rem)] xl:left-[calc(50%+12rem)] -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 bg-[#15181a]/70 backdrop-blur-xl rounded-full p-1.5 border border-white/10 shadow-lg shadow-black/30">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-md shadow-purple-900/40"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                  isActive ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
