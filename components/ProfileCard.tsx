// components/ProfileCard.tsx
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ProfileCard = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6 rounded-3xl w-full max-w-md mx-auto">
      <CardContent className="p-0 text-center">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 p-1 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
            <Image
              src="/mayur-profile.jpeg"
              alt="Mayur Wagh"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Mayur Wagh
          </span>
        </h2>
        <p className="text-gray-400 mb-1">MERN Stack Developer</p>
        <p className="text-gray-500 mb-4 flex items-center justify-center gap-1 text-sm">
          <MapPin className="h-4 w-4" />
          Nashik, Maharashtra
        </p>

        <div className="space-y-1 mb-6 text-sm">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Mail className="h-4 w-4" />
            <span>mswagh98@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Phone className="h-4 w-4" />
            <span>+91 8208663529</span>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#2a2a2a] hover:scale-110 hover:bg-[#0077b5]/80 transition transform duration-200 w-11 h-11"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/mayur--wagh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-[#0A66C2]" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#2a2a2a] hover:scale-110 hover:bg-[#EA4335]/80 transition transform duration-200 w-11 h-11"
            asChild
          >
            <a href="mailto:mswagh98@gmail.com">
              <Mail className="h-5 w-5 text-[#EA4335]" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#2a2a2a] hover:scale-110 hover:bg-[#00B5D8]/80 transition transform duration-200 w-11 h-11"
          >
            <a
              href="https://github.com/Mayurwagh98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5 text-[#00B5D8]" />
            </a>
          </Button>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl py-4 text-base font-semibold"
          onClick={() => scrollToSection("collaborate")}
        >
          Let's Talk
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
