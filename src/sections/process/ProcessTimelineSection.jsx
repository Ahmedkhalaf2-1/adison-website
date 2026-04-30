import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassSurface from "../../components/glass/GlassSurface";
import { processContent } from "../../content/processContent";

export default function ProcessTimelineSection() {
  const { intro, steps } = processContent;

  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
        />

        <div className="mt-12 space-y-5">
          {steps.map((step, index) => (
            <GlassSurface
              key={step.number}
              className="rounded-[30px] px-6 py-7 sm:px-8 sm:py-8 lg:px-10"
              soft
            >
              <div className="grid gap-6 xl:grid-cols-[140px_1fr] xl:gap-8">
                <div className="flex items-start gap-4 xl:block">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] text-sm font-semibold text-white/90">
                    {step.number}
                  </div>

                  <div className="xl:mt-5">
                    <div className="h-full w-px bg-gradient-to-b from-white/14 to-transparent xl:mx-6 xl:h-16" />
                  </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[1fr_0.82fr] xl:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {step.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/90"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-[11px] font-semibold text-white/90">
                            •
                          </span>
                          <span className="h-px flex-1 bg-white/8" />
                        </div>
                        <p className="leading-7">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index !== steps.length - 1 ? (
                <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              ) : null}
            </GlassSurface>
          ))}
        </div>
      </Container>
    </section>
  );
}
