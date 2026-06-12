import { useState, useRef } from "react";
import GlassSurface from "./GlassSurface";

export default function GlassCard({ children, className = "", variant = "primary" }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <GlassSurface
      ref={cardRef}
      variant={variant}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      {/* Interactive Spotlight Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.055), transparent 80%)`,
        }}
      />

      {/* Subtle top light effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </GlassSurface>
  );
}
