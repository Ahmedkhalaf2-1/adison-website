import { useContent } from "../../hooks/useContent";
import GlassSurface from "../../components/glass/GlassSurface";
import { motion } from "framer-motion";
import ceoPhoto from "../../assets/image.png";

export default function FounderQuoteSection() {
  const { founderQuote } = useContent("home");

  if (!founderQuote) return null;

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassSurface className="overflow-hidden rounded-[30px] px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 relative">
            {/* Top reflection line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">

              {/* LEFT — CEO Photo */}
              <div className="flex-shrink-0">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border border-white/[0.1] shadow-2xl shadow-black/40 bg-[#0D0D0D] sm:h-[120px] sm:w-[120px]">
                  <img
                    src={ceoPhoto}
                    alt="Dr. Ibrahim Abdalla"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT — Quote + Attribution */}
              <div className="flex-1 text-center lg:text-start">
                {/* Eyebrow */}
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.36em] text-white/40">
                  {founderQuote.eyebrow}
                </p>

                {/* Quote */}
                <blockquote
                  className="text-lg leading-8 text-white/90 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10 font-serif italic"
                >
                  "{founderQuote.quote}"
                </blockquote>

                {/* Divider */}
                <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-white/20 to-transparent lg:mx-0" />

                {/* Attribution */}
                <p
                  className="mt-5 text-sm font-bold uppercase tracking-wide text-white/70 font-sans"
                >
                  {founderQuote.attribution}
                </p>
              </div>

            </div>
          </GlassSurface>
        </motion.div>
      </div>
    </section>
  );
}
