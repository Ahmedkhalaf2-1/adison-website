import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassButton from "../../components/glass/GlassButton";
import { aboutContent } from "../../content/aboutContent";

export default function AboutClosingSection() {
  const { closing } = aboutContent;

  return (
    <section className="section-pad">
      <Container>
        <GlassSurface className="overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.30em] text-white/80">
              {closing.eyebrow}
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {closing.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {closing.description}
            </p>

            <div className="mt-10 flex justify-center">
              <GlassButton to="/contact">Contact ADISON</GlassButton>
            </div>
          </div>
        </GlassSurface>
      </Container>
    </section>
  );
}
