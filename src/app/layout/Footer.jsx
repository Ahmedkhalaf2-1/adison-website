import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";

export default function Footer() {
  const footer = useContent("footer");

  if (!footer) return null;

  return (
    <footer className="relative z-10 pb-6 pt-20 sm:pt-24">
      <Container>
        <GlassSurface className="px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-lg font-semibold text-white sm:text-xl">
                {footer.companyName}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                {footer.description}
              </p>
            </div>

            <div className="grid gap-3 text-sm text-white/80 sm:text-right">
              <p>{footer.location}</p>
              <p>{footer.email}</p>
              <p>{footer.phone}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/38 sm:text-sm">
            {footer.copyright}
          </div>
        </GlassSurface>
      </Container>
    </footer>
  );
}
