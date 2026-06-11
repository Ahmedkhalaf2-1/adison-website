import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";
import { motion } from "framer-motion";

export default function WhyChooseSection() {
  const content = useContent("about");
  const { whyChoose } = content;

  if (!whyChoose) return null;

  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          eyebrow={whyChoose.eyebrow}
          title={whyChoose.title}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.items && whyChoose.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <GlassCard className="rounded-[28px] h-full flex flex-col p-8 sm:p-10 justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-sm font-bold text-white/90">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
