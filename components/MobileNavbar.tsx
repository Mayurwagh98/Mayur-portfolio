import { navItems } from "./Navbar";
import { X, Menu } from "lucide-react";

const MobileNavbar = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  scrollToSection,
  activeSection,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}) => {
  return (
    <div className="lg:hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d0f10]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={() => scrollToSection("home")} className="text-left">
            <span className="font-display block text-lg font-bold bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
              Mayur Wagh
            </span>
            <span className="block text-xs text-gray-400">MERN Full Stack Developer</span>
          </button>
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="grid place-items-center h-10 w-10 rounded-full bg-white/5 border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav
            className="absolute top-16 left-0 right-0 border-b border-white/10 bg-[#121517] p-4 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-colors ${
                    isActive ? "bg-purple-600/20 text-white" : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-purple-400" : ""}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
