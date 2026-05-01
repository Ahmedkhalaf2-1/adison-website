import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassButton from "../../components/glass/GlassButton";

export default function ServicesCTASection() {
  const content = useContent("services");
  const { cta } = content;

  if (!cta) return null;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.30em] text-white/80">
              {cta.eyebrow}
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {cta.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlassButton to="/contact">
                {cta.primaryCta}
              </GlassButton>

              <GlassButton to="/how-we-work" variant="secondary">
                {cta.secondaryCta}
              </GlassButton>
            </div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}
