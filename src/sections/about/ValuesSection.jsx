import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";

export default function ValuesSection() {
  const { values, tNumber } = useContent("about");

  if (!values) return null;

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow={values.eyebrow}
          title={values.title}
          description={values.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item, index) => (
            <GlassCard key={item.title} className="rounded-[28px] h-full">
              <div className="flex h-full flex-col">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-sm font-semibold text-white/90">
                    {tNumber(index + 1, 2)}
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>

                <h3 className="subheading text-white">
                  {item.title}
                </h3>

                <p className="mt-4 card-text text-white/70">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
