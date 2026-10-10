import ProfileCard from "./ProfileCard";

const LeftProfile = ({
  scrollToSection,
  setShowResume,
}: {
  scrollToSection: (sectionId: string) => void;
  setShowResume: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {/* Desktop: fixed sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 xl:w-96 p-6 z-10 items-center">
        <ProfileCard scrollToSection={scrollToSection} setShowResume={setShowResume} />
      </aside>

      {/* Mobile / tablet: card at top of the page */}
      <div className="lg:hidden w-full px-4 pt-6">
        <ProfileCard scrollToSection={scrollToSection} setShowResume={setShowResume} />
      </div>
    </>
  );
};

export default LeftProfile;
