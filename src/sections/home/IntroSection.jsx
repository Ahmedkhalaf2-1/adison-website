import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
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

export default function IntroSection() {
  const content = useContent("home");
  const { intro } = content;

  if (!intro) return null;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
            {/* LEFT SIDE: Identity */}
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-start"
            >
              <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.32em] text-white/90">
                {intro.eyebrow}
              </p>

              <h2 className="text-balance text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-[4rem]">
                {intro.title}
              </h2>
            </motion.div>

            {/* RIGHT SIDE: Description & Card */}
            <motion.div
              {...fadeRight}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3"
            >
              <p className="max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                {intro.description}
              </p>

              <div className="mt-4 flex justify-center lg:justify-start">
                <GlassCard
                  variant="secondary"
                  className="w-full max-w-2xl px-8 py-8 text-center text-sm leading-relaxed text-white/80 sm:text-base"
                >
                  {intro.card}
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}
