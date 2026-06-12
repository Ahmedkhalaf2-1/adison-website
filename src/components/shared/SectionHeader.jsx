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
        <p className="mb-3 label-tag text-white/80">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-balance section-heading text-white tracking-tight">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 body-text text-white/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
