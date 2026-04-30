export default function GlassInput({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-white/60 focus:border-white/20 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(255,255,255,0.03)] ${className}`}
      {...props}
    />
  );
}
