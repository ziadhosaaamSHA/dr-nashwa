import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import '@/app/globals.css'
import Nav from '@/app/components/Nav'
import { getReviewImages } from '@/app/lib/reviews'

export default async function TestimonialsPage({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>
}) {
  const resolvedParams = (params instanceof Promise) ? await params : params
  const { locale } = resolvedParams
  const t = await getTranslations()
  const isRTL = locale === 'ar'
  const reviews = await getReviewImages()
  const navLabels = {
    services: t('nav.services'),
    about: t('nav.about'),
    programs: t('nav.programs'),
    testimonials: t('nav.testimonials'),
    contact: t('nav.contact'),
    book: t('nav.book'),
  }

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} className="testimonials-page">
      <Nav locale={locale} labels={navLabels} />

      {/* Hero */}
      <section className="testimonials-hero">
        <div className="container">
          <h1 className="testimonials-title">{t('testimonials.page.title')}</h1>
          <p className="testimonials-subtitle">{t('testimonials.page.subtitle')}</p>
          <div className="testimonials-count">
            <span className="count-number">{reviews.length}</span>
            <span className="count-label">{locale === 'ar' ? ' رأيي' : ' Reviews'}</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-image-wrapper">
                  <Image
                    src={`/reviews/${review}`}
                    alt={`Review ${index + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-text">{t('cta.text')}</p>
          <a href={`/${locale}/#book`} className="btn-primary cta-button">{t('cta.button')}</a>
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
                <a href={`/${locale}/#about`}>{t('nav.about')}</a>
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
