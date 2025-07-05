import { Home, Folder, Wrench, Briefcase, Edit, MailIcon } from "lucide-react";
const Navbar = ({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: Edit, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "skills", icon: Wrench, label: "Skills" },
    { id: "collaborate", icon: MailIcon, label: "Contact" },
  ];
  return (
    <nav className="hidden lg:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-2xl p-2 border border-[#2a2a2a] backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
                }`}
                aria-label={item.label}
              >
                <Icon className="h-6 w-6" />
              </button>

              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-[#2a2a2a] text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                  {item.label}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#2a2a2a] rotate-45"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
