import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ceoPhoto from "../../assets/image.png";

export default function CEOMessageSection() {
  const content = useContent("about");
  const { ceoMessage } = content;
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  if (!ceoMessage) return null;

  return (
    <section className="relative py-20 lg:py-24 bg-transparent">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <GlassSurface className="p-8 sm:p-12 lg:p-16 rounded-[30px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16"
          >
            {/* Left: CEO Photo (Circular crop, 280-320px wide with glass border/shadow) */}
            <div className="flex justify-center flex-shrink-0 lg:sticky lg:top-24">
              <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] overflow-hidden rounded-full border border-white/[0.1] shadow-2xl shadow-black/60 bg-[#0D0D0D]">
                <img
                  src={ceoPhoto}
                  alt={ceoMessage.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className={`flex-1 text-white/90 ${isAr ? "text-right" : "text-left"}`}>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.36em] text-white/60">
                {ceoMessage.eyebrow}
              </p>

              <div className="space-y-6 text-base leading-8 sm:text-lg sm:leading-9 text-white/90 font-serif">
                <p>{ceoMessage.p1}</p>
                <p>{ceoMessage.p2}</p>
                <p>{ceoMessage.p3}</p>
              </div>

              {/* Signature & Credentials Block */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                {/* Signature Block */}
                <div>
                  <p className="text-xl font-bold text-white">
                    {ceoMessage.name}
                  </p>
                  <p className="text-sm font-semibold text-white/70 mt-1">
                    {ceoMessage.title}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">
                    {ceoMessage.company} | {ceoMessage.location}
                  </p>
                </div>

                {/* Credentials Panel */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 max-w-md w-full">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/85 mb-3">
                    {isAr ? "المؤهلات والخبرات" : "Credentials & Experience"}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-medium">
                    {ceoMessage.credentials && ceoMessage.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40 flex-shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </GlassSurface>
      </div>
    </section>
  );
}
