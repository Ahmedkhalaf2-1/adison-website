import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import GlassButton from "../../components/glass/GlassButton";
import { useContent } from "../../hooks/useContent";
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
  const content = useContent("home");
  const { hero } = content;

  if (!hero) return null;

  return (
    <section className="section-pad pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          {/* subtle haze (white only) */}

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

            {/* LEFT SIDE */}
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-start"
            >
              <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.32em] text-white/90">
                {hero.eyebrow}
              </p>

              <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl xl:text-[5rem]">
                {hero.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/90 sm:text-lg lg:max-w-xl">
                {hero.description}
              </p>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row">
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
                    <p className="text-[13px] font-semibold uppercase tracking-[0.30em] text-white/90">
                      {hero.cards.global.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {hero.cards.global.title}
                    </h3>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <p className="text-sm text-white/80">
                      {hero.cards.global.description}
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="min-h-[150px]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white/90">
                    {hero.cards.focus.eyebrow}
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-snug text-white">
                    {hero.cards.focus.title}
                  </p>
                </GlassCard>

                <GlassCard className="min-h-[150px]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white/90">
                    {hero.cards.direction.eyebrow}
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-snug text-white">
                    {hero.cards.direction.title}
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
