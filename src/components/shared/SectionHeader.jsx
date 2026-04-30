export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignClasses =
    align === "left"
      ? "mx-0 text-left"
      : "mx-auto text-center";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
