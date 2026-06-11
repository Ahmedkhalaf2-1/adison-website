import { useContent } from "../../hooks/useContent";
import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const footer = useContent("footer");

  if (!footer) return null;

  return (
    <footer className="relative z-10 pb-6 pt-20 sm:pt-24">
      <Container>
        <GlassSurface className="px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.8fr] lg:items-start">
            {/* Brand Column */}
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                {footer.companyName}
              </p>
              <p className="mt-4 max-w-md text-sm leading-8 text-white/80 sm:text-base">
                {footer.description}
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-4 text-sm text-white/80 md:ps-8 lg:ps-12">
              <p className="font-semibold text-white uppercase tracking-[0.2em] text-xs">
                {i18n.language === 'ar' ? 'روابط سريعة' : i18n.language === 'fr' ? 'Liens Rapides' : 'Quick Links'}
              </p>
              <nav className="flex flex-col gap-3 font-medium">
                <Link to="/" className="hover:text-white transition-colors duration-200">{i18n.language === 'ar' ? 'الرئيسية' : i18n.language === 'fr' ? 'Accueil' : 'Home'}</Link>
                <Link to="/about" className="hover:text-white transition-colors duration-200">{i18n.language === 'ar' ? 'من نحن' : i18n.language === 'fr' ? 'À Propos' : 'About'}</Link>
                <Link to="/services" className="hover:text-white transition-colors duration-200">{i18n.language === 'ar' ? 'خدماتنا' : i18n.language === 'fr' ? 'Services' : 'Services'}</Link>
                <Link to="/how-we-work" className="hover:text-white transition-colors duration-200">{i18n.language === 'ar' ? 'كيف نعمل' : i18n.language === 'fr' ? 'Comment nous travaillons' : 'How We Work'}</Link>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">{i18n.language === 'ar' ? 'تواصل معنا' : i18n.language === 'fr' ? 'Contact' : 'Contact'}</Link>
              </nav>
            </div>

            {/* Contact Details Column */}
            <div className="grid gap-3 text-sm text-white/80 md:ps-8 lg:text-right">
              <p className="font-semibold text-white uppercase tracking-[0.2em] text-xs lg:hidden">
                {i18n.language === 'ar' ? 'بيانات الاتصال' : i18n.language === 'fr' ? 'Contact' : 'Contact Info'}
              </p>
              <p className="leading-relaxed">{footer.location}</p>
              <p className="hover:text-white transition-colors duration-200">
                <a href={`mailto:${footer.email}`}>{footer.email}</a>
              </p>
              <p className="hover:text-white transition-colors duration-200">
                <a href={`tel:${footer.phone}`}>{footer.phone}</a>
              </p>
              {footer.website && (
                <p className="hover:text-white transition-colors duration-200">
                  <a href={`https://${footer.website}`} target="_blank" rel="noopener noreferrer">
                    {footer.website}
                  </a>
                </p>
              )}
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
