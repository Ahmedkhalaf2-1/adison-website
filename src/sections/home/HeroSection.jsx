import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import GlassButton from "../../components/glass/GlassButton";
import { useContent } from "../../hooks/useContent";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import adison2Logo from "../../assets/adison2.png";

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
  const { i18n } = useTranslation();
  const content = useContent("home");
  const { hero } = content;

  if (!hero) return null;

  return (
    <section className="section-pad pt-6 sm:pt-8 lg:pt-10">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <GlassSurface className="overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          {/* subtle haze (white only) */}

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

            {/* LEFT SIDE */}
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-start"
            >
              <p className="mb-3 label-tag text-white/50">
                {hero.eyebrow}
              </p>

              <h1 className="max-w-5xl text-balance hero-headline text-white tracking-tight">
                {i18n.language === 'en' && hero.title.includes('ON') ? (
                  hero.title.split('ON').map((part, i, arr) => (
                    <span key={i}>
                      {part.trimEnd()}
                      {i < arr.length - 1 && (
                        <span className="inline-flex items-center gap-[0.05em] align-middle ml-[0.15em]">
                          <img
                            src={adison2Logo}
                            alt="O"
                            className="h-[0.92em] w-auto object-contain"
                          />
                          <span className="font-bold leading-none">N</span>
                        </span>
                      )}
                    </span>
                  ))
                ) : (
                  hero.title
                )}
              </h1>

              <p className="mt-4 max-w-2xl body-text text-white/70 lg:max-w-xl">
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

            {/* RIGHT SIDE — Vertical Asymmetric Bento */}
            <motion.div
              {...fadeRight}
              transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[1.1fr_0.9fr] gap-4"
            >
              {/* Tall card — spans full height */}
              <GlassCard className="row-span-2 min-h-[340px]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="label-tag text-white/50">
                      {hero.cards.global.eyebrow}
                    </p>
                    <h3 className="mt-4 subheading text-white">
                      {hero.cards.global.title}
                    </h3>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-white/12 to-transparent" />
                    <p className="mt-4 card-text text-white/70">
                      {hero.cards.global.description}
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Right column — 2 stacked square-ish cards */}
              <GlassCard>
                <p className="label-tag text-white/50">
                  {hero.cards.focus.eyebrow}
                </p>
                <p className="mt-4 text-base font-bold leading-[1.3] text-white sm:text-lg">
                  {hero.cards.focus.title}
                </p>
              </GlassCard>

              <GlassCard>
                <p className="label-tag text-white/50">
                  {hero.cards.direction.eyebrow}
                </p>
                <p className="mt-4 text-base font-bold leading-[1.3] text-white sm:text-lg">
                  {hero.cards.direction.title}
                </p>
              </GlassCard>
            </motion.div>

          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
