import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";
import { useContent } from "../../hooks/useContent";
import { motion } from "framer-motion";

const icons = [
  /* New Businesses — rocket */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M4.5 16.5c-1.5 1.5-1.5 4 0 5.5M12 3s-4 3-4 9l4 4 4-4c0-6-4-9-4-9z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M7.5 16.5l-3 3M16.5 16.5l3 3" />
    </svg>
  ),
  /* Growing Businesses — trend up */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  /* BI Development — chart bars */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
];

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

export default function WhoWeServeSection() {
  const { whoWeServe, tNumber } = useContent("home");

  if (!whoWeServe) return null;

  return (
    <section className="section-pad">
      <Container>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow={whoWeServe.eyebrow}
            title={whoWeServe.title}
          />
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whoWeServe.clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.68,
                delay: index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <GlassCard className="h-full">
                <div className="flex h-full flex-col">
                  {/* Icon + number row */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80">
                      {icons[index]}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    <span className="text-xs font-semibold text-white/40">
                      {tNumber(index + 1, 2)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {client.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-4 h-px w-10 bg-gradient-to-r from-white/14 to-transparent" />

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">
                    {client.description}
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
