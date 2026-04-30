import GlassSurface from "./GlassSurface";

export default function GlassCard({ children, className = "" }) {
  return (
    <GlassSurface
      soft
      className={`
        relative
        rounded-[26px]
        p-5 sm:p-6 lg:p-7
        transition-all duration-300
        hover:-translate-y-[4px]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {/* subtle edge border */}
      <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10" />

      {children}
    </GlassSurface>
  );
}