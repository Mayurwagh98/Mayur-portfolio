import { Button } from "./ui/button";

const FloatingButtons = ({
  setShowResume,
}: {
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex flex-col gap-3 sm:gap-4 z-20">
      <Button
        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
        asChild
      >
        <a href="mailto:mswagh98@gmail.com">Hire Me</a>
      </Button>
      <Button
        variant="outline"
        className="bg-white text-black hover:bg-gray-100 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
        onClick={() => setShowResume(true)}
      >
        View Resume
      </Button>
    </div>
  );
};

export default FloatingButtons;
