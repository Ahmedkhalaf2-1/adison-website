import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassCard from "../../components/glass/GlassCard";
import GlassButton from "../../components/glass/GlassButton";
import { homeContent } from "../../content/homeContent";
import { motion } from "framer-motion";

const fadeLeft = {
  initial: { opacity: 0, x: -24, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

const fadeRight = {
  initial: { opacity: 0, x: 24, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

export default function ProcessPreviewSection() {
  const { processPreview } = homeContent;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          
          {/* CLEAN BACKGROUND */}
          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.035),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.02),_transparent_28%)]" />

          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-52 rounded-full bg-white/[0.02] blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            
            {/* LEFT */}
            <motion.div
              {...fadeLeft}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:sticky lg:top-28 lg:text-left"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.30em] text-white/80">
                {processPreview.eyebrow}
              </p>

              <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {processPreview.title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/90 sm:text-lg">
                {processPreview.description}
              </p>

              <div className="mt-8 hidden lg:flex">
                <GlassButton to={processPreview.cta.to} variant="secondary">
                  {processPreview.cta.label}
                </GlassButton>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="relative grid gap-4">
              
              {/* LINE (clean) */}
              <div className="absolute left-[23px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-white/10 via-white/6 to-transparent sm:block" />

              {processPreview.steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  {...fadeRight}
                  transition={{
                    duration: 0.68,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-0 sm:pl-14"
                >
                  
                  {/* NODE */}
                  <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/90 sm:inline-flex">
                    {step.number}
                  </div>

                  <GlassCard
                    variant="secondary"
                    className="p-6 lg:p-8"
                  >
                    {/* MOBILE NUMBER */}
                    <p className="relative z-10 mb-3 text-xs font-semibold tracking-[0.24em] text-white/90 sm:hidden">
                      {step.number}
                    </p>

                    <h3 className="relative z-10 text-lg font-semibold text-white sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="relative z-10 mt-3 max-w-2xl text-sm leading-7 text-white/90">
                      {step.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MOBILE CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-10 flex justify-center lg:hidden"
          >
            <GlassButton to={processPreview.cta.to} variant="secondary">
              {processPreview.cta.label}
            </GlassButton>
          </motion.div>
        </GlassSurface>
      </Container>
    </section>
  );
}
