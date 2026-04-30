import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassSurface from "../../components/glass/GlassSurface";
import { servicesContent } from "../../content/servicesContent";

export default function ServiceCategoriesSection() {
  const { categories } = servicesContent;

  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          eyebrow={categories.eyebrow}
          title={categories.title}
          description={categories.description}
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {categories.items.map((item, index) => (
            <GlassSurface
              key={item.title}
              className={`rounded-[28px] px-6 py-7 sm:px-8 sm:py-8 ${
                index === categories.items.length - 1 ? "xl:col-span-2" : ""
              }`}
              soft
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                <div className="lg:w-[110px]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] text-sm font-semibold text-white/90">
                    {item.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/90"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-[11px] font-semibold text-white/90">
                            {bulletIndex + 1}
                          </span>
                          <span className="h-px flex-1 bg-white/8" />
                        </div>
                        <p className="leading-7">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </Container>
    </section>
  );
}
