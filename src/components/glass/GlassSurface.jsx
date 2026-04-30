export default function GlassSurface({
  as: Tag = "div",
  children,
  className = "",
  soft = false,
}) {
  return (
    <Tag
      className={`
        relative
        rounded-[28px]
        bg-white/[0.04]
        border border-white/10
        backdrop-blur-xl
        transition-all duration-300
        hover:bg-white/[0.06]
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}