import Container from "../../components/shared/Container";

export default function Footer() {
  return (
    <footer className="relative z-10 pb-6 pt-20 sm:pt-24">
      <Container>
        <div className="glass-surface glass-highlight ambient-border rounded-[30px] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-lg font-semibold text-white sm:text-xl">
                ADISON Corp.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                A Canadian-based firm with global reach, delivering structured,
                practical, and scalable business innovation and development
                solutions.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-white/56 sm:text-right">
              <p>Toronto, Ontario, Canada</p>
              <p>info@adison.ca</p>
              <p>+1 647 847 0111</p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/38 sm:text-sm">
            © 2026 ADISON Corp. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}