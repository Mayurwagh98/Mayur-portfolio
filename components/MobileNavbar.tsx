import { navItems } from "./Navbar";
import { Button } from "./ui/button";
import { X, Menu } from "lucide-react";

const MobileNavbar = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  scrollToSection,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-[#1a1a1a] border-b border-[#2a2a2a] p-3 z-50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Mayur Wagh
              </span>
            </h1>
            <p className="text-sm text-gray-400">MERN Stack Developer</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden">
          <div className="fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] border-l border-[#2a2a2a] p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold">Navigation</h2>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 w-full p-3 rounded-xl text-left hover:bg-[#2a2a2a] transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
