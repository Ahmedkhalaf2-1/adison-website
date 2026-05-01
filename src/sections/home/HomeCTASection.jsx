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

export default function HomeCTASection() {
  const content = useContent("home");
  const { cta } = content;

  if (!cta) return null;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-start"
            >
              <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.32em] text-white/90">
                {cta.eyebrow}
              </p>

              <h2 className="mt-3 max-w-4xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {cta.title}
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-8 text-white/90 sm:text-lg lg:max-w-xl">
                {cta.description}
              </p>
            </motion.div>

            <motion.div
              {...fadeRight}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4"
            >
              <GlassCard className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                  {cta.card.eyebrow}
                </p>

                <p className="mt-4 text-lg font-semibold leading-snug text-white">
                  {cta.card.title}
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <GlassButton to="/contact">
                    {cta.primaryCta}
                  </GlassButton>

                  <GlassButton to="/services" variant="secondary">
                    {cta.secondaryCta}
                  </GlassButton>
                </div>
              </GlassCard>

            </motion.div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}
