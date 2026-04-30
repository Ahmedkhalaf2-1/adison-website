import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import GlassButton from "../../components/glass/GlassButton";
import { homeContent } from "../../content/homeContent";
import { motion } from "framer-motion";

const fadeLeft = {
  initial: { opacity: 0, x: -24, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
};

const fadeRight = {
  initial: { opacity: 0, x: 24, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
};

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="section-pad pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <GlassSurface className="relative overflow-hidden rounded-[38px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">

          {/* neutral ambient (بدل الأصفر) */}
          <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.03),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.02),_transparent_28%)]" />

          {/* subtle haze (white only) */}
          <div className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-80 -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

            {/* LEFT SIDE */}
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.30em] text-white/50">
                {hero.eyebrow}
              </p>

              <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl xl:text-[5rem]">
                {hero.title}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg lg:max-w-xl">
                {hero.description}
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <GlassButton to={hero.primaryCta.to}>
                  {hero.primaryCta.label}
                </GlassButton>

                <GlassButton to={hero.secondaryCta.to} variant="secondary">
                  {hero.secondaryCta.label}
                </GlassButton>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              {...fadeRight}
              transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4"
            >
              <GlassCard className="min-h-[180px]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/48">
                      Global Positioning
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      Canadian-based expertise with international reach.
                    </h3>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <p className="text-sm text-white/56">
                      Structured business innovation and development
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="min-h-[150px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/46">
                    Core Focus
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-snug text-white">
                    Clarity, structure, and practical execution.
                  </p>
                </GlassCard>

                <GlassCard className="min-h-[150px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/46">
                    Strategic Direction
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-snug text-white">
                    Turning ideas into actionable business outcomes.
                  </p>
                </GlassCard>
              </div>
            </motion.div>

          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}