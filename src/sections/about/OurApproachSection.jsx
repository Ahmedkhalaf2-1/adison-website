import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassSurface from "../../components/glass/GlassSurface";
import { motion } from "framer-motion";

export default function OurApproachSection() {
  const content = useContent("about");
  const { approach } = content;

  if (!approach) return null;

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <GlassSurface className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 rounded-[30px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">
            {/* Left Column: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70 mb-4">
                {approach.eyebrow}
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {approach.title}
              </h2>
              <div className="mt-8 h-1 w-20 bg-white/20 rounded-full" />
            </motion.div>

            {/* Right Column: Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 text-white/90 text-base sm:text-lg leading-relaxed border-l border-white/10 pl-6 sm:pl-8 lg:pl-10"
            >
              <p className="font-medium text-white">
                {approach.p1}
              </p>
              <p className="text-white/80">
                {approach.p2}
              </p>
            </motion.div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
