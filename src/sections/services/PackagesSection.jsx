import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";

export default function PackagesSection() {
  const content = useContent("services");
  const { packages } = content;

  if (!packages) return null;

  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          eyebrow={packages.eyebrow}
          title={packages.title}
          description={packages.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.items.map((item, index) => (
            <GlassCard key={item.title} className="rounded-[28px] h-full">
              <div className="flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-sm font-semibold text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-white/0" />
                </div>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">
                  {item.summary}
                </p>

                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
