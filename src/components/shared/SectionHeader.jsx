export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignClasses =
    align === "left"
      ? "mx-0 text-start"
      : "mx-auto text-center";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow ? (
        <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.32em] text-white/90">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-lg leading-8 text-white/90 sm:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
