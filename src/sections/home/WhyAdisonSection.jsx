import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import { useContent } from "../../hooks/useContent";
import { motion } from "framer-motion";

const fadeLeft = {
  initial: { opacity: 0, x: -24, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

const fadeRight = {
  initial: { opacity: 0, x: 24, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

export default function WhyAdisonSection() {
  const { whyAdison, tNumber } = useContent("home");

  if (!whyAdison) return null;

  return (
    <section className="section-pad">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <motion.div
            {...fadeLeft}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="xl:sticky xl:top-28"
          >
            <GlassCard className="min-h-[420px] rounded-[34px] p-6 sm:p-8 lg:p-10">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                    {whyAdison.cards.strategic.eyebrow}
                  </p>

                  <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {whyAdison.cards.strategic.title}
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/90 sm:text-base">
                    {whyAdison.sideNote}
                  </p>
                </div>

                <GlassCard variant="secondary" className="mt-10 p-5 lg:p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/60" />
                    <p className="text-sm font-medium text-white/90">
                      {whyAdison.cards.strategic.outcomes}
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    {whyAdison.cards.strategic.direction}
                  </p>
                </GlassCard>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            {...fadeRight}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassSurface className="relative overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">

              <div className="relative z-10">
                <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.32em] text-white/90">
                  {whyAdison.eyebrow}
                </p>

                <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {whyAdison.title}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                  {whyAdison.description}
                </p>

                <div className="mt-10 grid gap-4">
                  {whyAdison.points.map((point, index) => (
                    <GlassSurface
                      key={point}
                      variant="secondary"
                      className="px-5 py-5 text-sm text-white/90 sm:text-base"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-white/90">
                          {tNumber(index + 1, 2)}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                      </div>

                      <p className="leading-7">{point}</p>
                    </GlassSurface>
                  ))}
                </div>
              </div>
            </GlassSurface>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
