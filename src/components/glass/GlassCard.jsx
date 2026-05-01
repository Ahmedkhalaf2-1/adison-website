import GlassSurface from "./GlassSurface";

export default function GlassCard({ children, className = "", variant = "primary" }) {
  return (
    <GlassSurface
      variant={variant}
      className={`
        group
        overflow-hidden
        p-6 sm:p-8 lg:p-10
        hover:-translate-y-1.5
        hover:bg-black/50
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
        ${className}
      `}
    >
      {/* Subtle top light effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {children}
    </GlassSurface>
  );
}
