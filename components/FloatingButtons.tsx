"use client";

import { useEffect, useState } from "react";
import { ArrowUp, FileText } from "lucide-react";

const FloatingButtons = ({
  setShowResume,
}: {
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2">
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`grid place-items-center h-11 w-11 rounded-full border border-white/15 bg-[#15181a]/80 backdrop-blur-xl text-gray-300 hover:text-white transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <button
        onClick={() => setShowResume(true)}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-5 h-11 text-sm font-semibold shadow-lg shadow-purple-900/50 transition-colors"
      >
        <FileText className="h-4 w-4" />
        Resume
      </button>
    </div>
  );
};

export default FloatingButtons;
