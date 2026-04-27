import { getTranslations } from 'next-intl/server'
import '@/app/globals.css'
import Nav from '@/app/components/Nav'
import ProgramCard from '@/app/components/ProgramCard'
import { getPrograms } from '@/app/lib/programs'

export default async function ProgramsPage({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>
}) {
  const resolvedParams = (params instanceof Promise) ? await params : params
  const { locale } = resolvedParams
  const t = await getTranslations()
  const isRTL = locale === 'ar'
  const programs = getPrograms(locale)
  const navLabels = {
    services: t('nav.services'),
    about: t('nav.about'),
    programs: t('nav.programs'),
    testimonials: t('nav.testimonials'),
    contact: t('nav.contact'),
    book: t('nav.book'),
  }

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} className="main">
      <Nav locale={locale} labels={navLabels} />

      {/* Programs Hero */}
      <section className="programs-hero">
        <div className="container">
          <span className="hero-badge">{t('programs.badge')}</span>
          <h1 className="programs-title">
            {locale === 'ar' ? 'برامج تغذية' : 'Nutrition Programs'}
            <br />
            <span className="gradient-text">
              {locale === 'ar' ? 'مصممة لك' : 'Designed For You'}
            </span>
          </h1>
          <p className="programs-subtitle">
            {locale === 'ar'
              ? 'برامج متخصصة ومخصصة تناسب احتياجاتك وأهدافك الصحية'
              : 'Specialized and personalized programs to fit your needs and health goals'}
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="package-title">{locale === 'ar' ? 'استشارة' : 'Consultant'}</h3>
              <p className="package-desc">{locale === 'ar' ? 'جلسة استشارية شاملة' : 'Comprehensive consultation session'}</p>
              <a href={`/${locale}/contact#book`} className="btn-primary package-cta">
                {locale === 'ar' ? 'احجز الآن' : 'Book Now'}
              </a>
            </div>
            <div className="package-card">
              <div className="package-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="package-title">{locale === 'ar' ? 'برنامج تغذية أونلاين' : 'Online Nutrition Program'}</h3>
              <p className="package-desc">{locale === 'ar' ? 'برنامج متكامل عن بعد' : 'Complete online program'}</p>
              <a href={`/${locale}/contact#book`} className="btn-primary package-cta">
                {locale === 'ar' ? 'احجز الآن' : 'Book Now'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'كيف تعمل' : 'How It Works'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar'
                ? 'خطوات بسيطة للبدء في رحلتك الصحية'
                : 'Simple steps to start your health journey'}
            </p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">
                {locale === 'ar' ? 'الحجز' : 'Book'}
              </h3>
              <p className="step-desc">
                {locale === 'ar'
                  ? 'احجز استشارتك الأولى عبر الهاتف أو النموذج'
                  : 'Book your first consultation via phone or form'}
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">
                {locale === 'ar' ? 'التقييم' : 'Assessment'}
              </h3>
              <p className="step-desc">
                {locale === 'ar'
                  ? 'تحليل شامل لحالتك الصحية وأهدافك'
                  : 'Comprehensive analysis of your health and goals'}
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">
                {locale === 'ar' ? 'الخطة' : 'Plan'}
              </h3>
              <p className="step-desc">
                {locale === 'ar'
                  ? 'خطة غذائية مخصصة تناسبك تماماً'
                  : 'Personalized nutrition plan tailored just for you'}
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">
                {locale === 'ar' ? 'المتابعة' : 'Follow-up'}
              </h3>
              <p className="step-desc">
                {locale === 'ar'
                  ? 'متابعة منتظمة لضمان تحقيق أهدافك'
                  : 'Regular follow-up to ensure you achieve your goals'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2 className="cta-title">
            {locale === 'ar' ? 'جاهز لاختيار برنامجك؟' : 'Ready to Choose Your Program?'}
          </h2>
          <p className="cta-text">
            {locale === 'ar'
              ? 'تواصل معنا اليوم واحجز استشارتك الأولى'
              : 'Contact us today and book your first consultation'}
          </p>
          <a href={`/${locale}/contact#book`} className="btn-primary cta-button">
            {t('nav.book')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo gradient-text">د. نشوى</span>
              <p className="footer-tagline">{t('footer.tagline')}</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>{t('footer.quickLinks')}</h4>
                <a href={`/${locale}/#services`}>{t('nav.services')}</a>
                <a href={`/${locale}/about`}>{t('nav.about')}</a>
                <a href={`/${locale}/programs`}>{t('nav.programs')}</a>
                <a href={`/${locale}/testimonials`}>{t('nav.testimonials')}</a>
              </div>
              <div className="footer-column">
                <h4>{t('footer.contactTitle')}</h4>
                <a href="tel:+201234567890">+20 123 456 7890</a>
                <a href="mailto:info@nashwa-clinic.com">info@nashwa-clinic.com</a>
                <a href="#">Cairo, Egypt</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Dr. Nashwa Clinic. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
