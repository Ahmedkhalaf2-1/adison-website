import { useContent } from "../../hooks/useContent";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassSurface from "../../components/glass/GlassSurface";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactInfoSection() {
  const { info, tNumber } = useContent("contact");
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  if (!info) return null;

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow={info.eyebrow}
          title={info.title}
          description={info.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <GlassSurface className="relative overflow-hidden rounded-[32px] p-8 sm:p-12 lg:p-16" soft>
            {/* Elegant top reflection rule */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div
              className={`grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ${isAr ? "text-right" : "text-left"
                }`}
            >
              {info.items.map((item, index) => (
                <div key={item.title} className="flex flex-col space-y-3">
                  {/* Category label with step number */}
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                    <span>{tNumber(index + 1, 2)}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span>{item.title}</span>
                  </div>

                  {/* Value */}
                  <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-white tracking-tight leading-snug">
                    {item.value}
                  </h3>

                  {/* Description note */}
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </GlassSurface>
        </motion.div>
      </div>
    </section>
  );
}
