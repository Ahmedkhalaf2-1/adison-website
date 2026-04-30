import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";
import { aboutContent } from "../../content/aboutContent";

export default function ValuesSection() {
  const { values } = aboutContent;

  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          eyebrow={values.eyebrow}
          title={values.title}
          description={values.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.items.map((item, index) => (
            <GlassCard key={item.title} className="rounded-[28px] h-full">
              <div className="flex h-full flex-col">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-sm font-semibold text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
