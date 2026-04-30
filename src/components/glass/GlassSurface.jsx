export default function GlassSurface({
  as: Tag = "div",
  children,
  className = "",
  variant = "primary", // primary, secondary, or subtle
}) {
  const variantStyles = {
    primary: "bg-black/60 border-white/10 backdrop-blur-2xl",
    secondary: "bg-black/50 border-white/8 backdrop-blur-xl",
    subtle: "bg-black/40 border-white/5 backdrop-blur-xl",
  };

  return (
    <Tag
      className={`
        relative
        rounded-[32px]
        border
        transition-all duration-500
        ${variantStyles[variant] || variantStyles.primary}
        ${className}
      `}
    >
      {/* Internal subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_40%)]" />

      {children}
    </Tag>
  );
}
