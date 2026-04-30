export default function GlassSelect({ className = "", children, ...props }) {
  return (
    <select
      className={`w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition duration-300 focus:border-white/20 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(255,255,255,0.03)] ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
