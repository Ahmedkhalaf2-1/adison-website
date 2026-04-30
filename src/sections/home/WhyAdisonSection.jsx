import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import { homeContent } from "../../content/homeContent";
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
  const { whyAdison } = homeContent;

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
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/46">
                    Strategic Value
                  </p>

                  <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Business clarity should feel calm, not chaotic.
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/62 sm:text-base">
                    {whyAdison.sideNote}
                  </p>
                </div>

                <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/60" />
                    <p className="text-sm font-medium text-white/74">
                      Structured outcomes
                    </p>
                  </div>

                  <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    Clear direction
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            {...fadeRight}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassSurface className="relative overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
              <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.03),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.02),_transparent_30%)]" />

              <div className="relative z-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.30em] text-white/50">
                  {whyAdison.eyebrow}
                </p>

                <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {whyAdison.title}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                  {whyAdison.description}
                </p>

                <div className="mt-10 grid gap-4">
                  {whyAdison.points.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 16, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.18 }}
                      transition={{
                        duration: 0.58,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm text-white/72 sm:text-base"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                      </div>

                      <p className="leading-7">{point}</p>
                    </motion.div>
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