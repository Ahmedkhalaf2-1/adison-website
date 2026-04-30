import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import { servicesContent } from "../../content/servicesContent";
import { motion } from "framer-motion";

export default function ServicesHeroSection() {
  const { hero } = servicesContent;

  return (
    <section className="section-pad pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.30em] text-white/80"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-3xl text-base leading-8 text-white/90 sm:text-lg"
            >
              {hero.description}
            </motion.p>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}
