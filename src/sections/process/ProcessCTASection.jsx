import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassButton from "../../components/glass/GlassButton";
import { processContent } from "../../content/processContent";

export default function ProcessCTASection() {
  const { closing } = processContent;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="relative rounded-[34px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(136,114,255,0.13),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(82,219,198,0.10),_transparent_26%)]" />

          <div className="relative z-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.30em] text-white/54">
              {closing.eyebrow}
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {closing.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/66 sm:text-lg">
              {closing.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlassButton to={closing.primaryCta.to}>
                {closing.primaryCta.label}
              </GlassButton>

              <GlassButton to={closing.secondaryCta.to} variant="secondary">
                {closing.secondaryCta.label}
              </GlassButton>
            </div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}