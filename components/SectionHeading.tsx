import Reveal from "./Reveal";

const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) => (
  <Reveal className="mb-10 sm:mb-14">
    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-3">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      {title}{" "}
      <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
        {accent}
      </span>
    </h2>
    {description && (
      <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">{description}</p>
    )}
  </Reveal>
);

export default SectionHeading;
