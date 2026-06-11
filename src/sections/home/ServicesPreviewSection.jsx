import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";
import GlassButton from "../../components/glass/GlassButton";
import { useContent } from "../../hooks/useContent";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

export default function ServicesPreviewSection() {
  const { servicesPreview, tNumber } = useContent("home");

  if (!servicesPreview) return null;

  return (
    <section className="section-pad">
      <Container>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow={servicesPreview.eyebrow}
            title={servicesPreview.title}
            description={servicesPreview.description}
          />
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicesPreview.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.68,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${index === 0 ? "xl:col-span-2" : ""} h-full`}
            >
              <GlassCard className="h-full">
                {index === 0 ? (
                  /* Featured anchor card — horizontal split on large screens */
                  <div className="flex h-full flex-col xl:flex-row xl:items-stretch xl:gap-0">
                    <div className="flex flex-col xl:flex-1 xl:pe-8">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/90">
                          {tNumber(index + 1, 2)}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                      </div>

                      <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Vertical divider — visible only on xl */}
                    <div className="my-5 h-px w-full bg-gradient-to-r from-white/10 via-white/6 to-transparent xl:my-0 xl:h-auto xl:w-px xl:bg-gradient-to-b xl:from-transparent xl:via-white/12 xl:to-transparent" />

                    <div className="flex flex-col justify-center xl:flex-1 xl:ps-8">
                      <p className="max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Standard cards */
                  <div className="flex h-full flex-col">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/90">
                        {tNumber(index + 1, 2)}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>

                    <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-px w-10 bg-gradient-to-r from-white/14 to-transparent" />

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex justify-center"
        >
          <GlassButton to="/services" variant="secondary">
            {servicesPreview.cta}
          </GlassButton>
        </motion.div>
      </Container>
    </section>
  );
}
