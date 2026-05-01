import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  const content = useContent("about");
  const { hero, identity } = content;

  if (!hero) return null;

  return (
    <section className="section-pad pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 xl:items-end">
            {/* LEFT SIDE: Identity Title */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.04 }}
                className="mb-6 text-[14px] font-semibold uppercase tracking-[0.32em] text-white/90"
              >
                {hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-[4rem]"
              >
                {hero.title}
              </motion.h1>
            </div>

            {/* RIGHT SIDE: Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              <GlassCard variant="secondary" className="p-6 sm:p-8 lg:p-10">
                <p className="text-sm leading-7 text-white/90 sm:text-base">
                  {hero.description}
                </p>

                <div className="my-8 h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

                <p className="text-sm leading-7 text-white/80 sm:text-base">
                  {identity.note}
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}
