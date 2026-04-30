import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";
import { contactContent } from "../../content/contactContent";
import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.66, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
});

export default function ContactInfoSection() {
  const { info } = contactContent;

  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          eyebrow={info.eyebrow}
          title={info.title}
          description={info.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {info.items.map((item, index) => (
            <motion.div key={item.title} {...fadeUp(index)} className="h-full">
              <GlassCard className="group relative h-full overflow-hidden rounded-[28px] transition-all duration-500 hover:bg-white/[0.07]">

                {/* inner corner glow on hover */}

                {/* top rule */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="relative flex h-full flex-col">

                  {/* index row */}
                  <div className="mb-7 flex items-center gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05]">
                      <span className="text-[11px] font-semibold tabular-nums text-white/90">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {/* animated corner tick */}
                      <span className="absolute -right-px -top-px h-2 w-2 rounded-full border-r border-t border-white/20" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/[0.1] to-transparent" />
                  </div>

                  {/* label */}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90">
                    {item.title}
                  </p>

                  {/* value */}
                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.012em] text-white sm:text-[1.35rem]">
                    {item.value}
                  </h3>

                  {/* divider */}
                  <div className="my-5 h-px w-10 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 group-hover:w-16 group-hover:from-white/30" />

                  {/* note */}
                  <p className="mt-auto text-sm leading-[1.75] text-white/80 sm:text-[0.9375rem]">
                    {item.note}
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
