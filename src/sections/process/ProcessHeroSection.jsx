import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import { processContent } from "../../content/processContent";
import { motion } from "framer-motion";

export default function ProcessHeroSection() {
  const { hero, intro } = processContent;

  return (
    <section className="section-pad pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <GlassSurface className="relative rounded-[34px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_left,_rgba(137,114,255,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(82,220,199,0.10),_transparent_26%)]" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mb-5 text-xs font-semibold uppercase tracking-[0.30em] text-white/58"
              >
                {hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl"
              >
                {hero.title}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-7"
            >
              <p className="text-sm leading-7 text-white/66 sm:text-base">
                {hero.description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

              <p className="mt-6 text-sm leading-7 text-white/58 sm:text-base">
                {intro.description}
              </p>
            </motion.div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}