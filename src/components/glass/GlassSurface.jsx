export default function GlassSurface({
  as: Tag = "div",
  children,
  className = "",
  variant = "primary", // primary, secondary, or subtle
}) {
  const variantStyles = {
    primary: "bg-white/[0.04] border-white/10",
    secondary: "bg-white/[0.02] border-white/5",
    subtle: "bg-white/[0.01] border-white/5",
  };

  return (
    <Tag
      className={`
        relative
        rounded-[32px]
        border
        backdrop-blur-xl
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