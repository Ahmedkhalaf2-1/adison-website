import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
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

export default function IntroSection() {
  const { intro } = homeContent;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="relative overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.03),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.025),_transparent_30%)]" />

          <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-44 rounded-full bg-white/[0.02] blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.30em] text-white/50">
                {intro.eyebrow}
              </p>

              <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {intro.title}
              </h2>
            </motion.div>

            <motion.div
              {...fadeRight}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5"
            >
              <p className="max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                {intro.description}
              </p>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm leading-7 text-white/56 sm:text-base">
                Structured thinking creates stronger execution, clearer priorities,
                and better business direction from the start.
              </div>
            </motion.div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}