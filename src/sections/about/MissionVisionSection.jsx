import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassCard from "../../components/glass/GlassCard";
import GlassSurface from "../../components/glass/GlassSurface";

export default function MissionVisionSection() {
  const content = useContent("about");
  const { identity, mission, vision } = content;

  if (!identity) return null;

  return (
    <section className="section-pad">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <GlassSurface className="rounded-[30px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <SectionHeader
              eyebrow={identity.eyebrow}
              title={identity.title}
              description={identity.description}
              align="left"
            />
          </GlassSurface>

          <div className="grid gap-6">
            <GlassCard className="rounded-[28px]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                {mission.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {mission.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base">
                {mission.description}
              </p>
            </GlassCard>

            <GlassCard className="rounded-[28px]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                {vision.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {vision.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base">
                {vision.description}
              </p>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
