// components/LeftProfile.tsx
import ProfileCard from "./ProfileCard";

const LeftProfile = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-80 xl:w-96 p-6 z-10">
        <div className="flex items-center h-full">
          <ProfileCard scrollToSection={scrollToSection} />
        </div>
      </div>

      {/* Mobile / Tablet View */}
      <div className="block lg:hidden w-full p-4 mb-6">
        <ProfileCard scrollToSection={scrollToSection} />
      </div>
    </>
  );
};

export default LeftProfile;
