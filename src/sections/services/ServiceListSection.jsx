import { useContent } from "../../hooks/useContent";
import GlassSurface from "../../components/glass/GlassSurface";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ServiceListSection() {
  const { items, tNumber } = useContent("services");
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  if (!items) return null;

  return (
    <section className="section-pad">
      {/* Wider container: max-w-[1600px] */}
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:gap-12">
          {items.map((item, index) => {
            const isRtl = isAr;

            return (
              <GlassSurface
                key={item.number}
                className="relative overflow-hidden p-8 sm:p-12 lg:p-16 rounded-[30px]"
                soft
              >
                {/* Massive faint decorative background number with higher visibility (opacity 0.08) */}
                <div
                  className={`absolute top-4 font-bold select-none pointer-events-none text-white/[0.08] text-[15rem] sm:text-[20rem] lg:text-[26rem] leading-none ${
                    isRtl ? "left-6 sm:left-12" : "right-6 sm:right-12"
                  }`}
                >
                  {tNumber(item.number)}
                </div>

                <div className="relative z-10">
                  <div
                    className={`grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Left side: Title and Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                        {item.title}
                      </h2>
                      <p className="text-base sm:text-lg leading-relaxed text-white/80">
                        {item.description}
                      </p>
                    </motion.div>

                    {/* Right side: Deliverables & Ideal For without dots */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="space-y-8"
                    >
                      {/* What We Deliver */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/50 mb-5">
                          {item.deliverablesLabel}
                        </h4>
                        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                          {item.deliverables && item.deliverables.map((deliv, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-base sm:text-lg text-white/90 leading-relaxed font-medium"
                            >
                              {deliv}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />

                      {/* Ideal For */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/50 mb-5">
                          {item.idealForLabel}
                        </h4>
                        <ul className="space-y-3">
                          {item.idealFor && item.idealFor.map((ideal, iIdx) => (
                            <li
                              key={iIdx}
                              className="text-base sm:text-lg text-white/90 leading-relaxed font-medium"
                            >
                              {ideal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </GlassSurface>
            );
          })}
        </div>
      </div>
    </section>
  );
}
