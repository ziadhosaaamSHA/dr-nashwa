import { getTranslations } from 'next-intl/server'
import '@/app/globals.css'
import Image from 'next/image'
import Nav from '@/app/components/Nav'

export default async function AboutPage({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>
}) {
  const resolvedParams = (params instanceof Promise) ? await params : params
  const { locale } = resolvedParams
  const t = await getTranslations()
  const isRTL = locale === 'ar'
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

      {/* About Hero */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="hero-badge">{t('about.badge')}</span>
            <h1 className="about-hero-title">
              {t('about.title')}
            </h1>
            <p className="about-hero-text">
              {t('about.description')}
            </p>
          </div>
          <div className="about-hero-image">
            <div className="about-hero-image-placeholder">
              <Image
                src="/nashwa.png"
                alt="Dr. Nashwa"
                fill
                priority
                style={{ objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
            <div className="hero-decoration" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('journey.title')}
            </h2>
            <p className="section-subtitle">
              {t('journey.subtitle')}
            </p>
          </div>
          <div className="journey-grid">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="journey-card">
                <div className="journey-year">{t(`journey.timeline.${index}.year`)}</div>
                <h3 className="journey-title">{t(`journey.timeline.${index}.title`)}</h3>
                <p className="journey-text">{t(`journey.timeline.${index}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container credentials-container">
          <div className="credentials-content">
            <h2 className="credentials-title">
              {locale === 'ar' ? 'الشهادات والاعتمادات' : 'Certifications & Credentials'}
            </h2>
            <div className={`credentials-grid ${isRTL ? 'rtl' : 'ltr'}`}>
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="credential-item">
                  <div className="credential-icon-wrapper">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="credential-name">
                      {t(`about.credential${num}`)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2 className="cta-title">
            {t('cta.title')}
          </h2>
          <p className="cta-text">
            {t('cta.subtitle')}
          </p>
          <a href={`/${locale}/contact#book`} className="btn-primary cta-button">
            {t('cta.button_text')}
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
