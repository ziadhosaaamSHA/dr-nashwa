import { getTranslations } from 'next-intl/server'
import '@/app/globals.css'
import Image from 'next/image'
import Nav from '@/app/components/Nav'
import ProgramCard from '@/app/components/ProgramCard'
import { getReviewImages } from '@/app/lib/reviews'
import { getPrograms } from '@/app/lib/programs'

export default async function HomePage({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>
}) {
  const resolvedParams = (params instanceof Promise) ? await params : params
  const { locale } = resolvedParams
  const t = await getTranslations()
  const isRTL = locale === 'ar'
  const reviews = await getReviewImages()
  const programs = getPrograms(locale)
  const navLabels = {
    services: t('nav.services'),
    about: t('nav.about'),
    programs: t('nav.programs'),
    testimonials: t('nav.testimonials'),
    contact: t('nav.contact'),
    book: t('nav.book'),
  }

  const services = [
    { icon: 'layers', title: locale === 'ar' ? 'إدارة الوزن' : 'Weight Management', desc: locale === 'ar' ? 'برامج إنقاص أو زيادة الوزن المستدامة' : 'Sustainable weight loss or gain programs' },
    { icon: 'activity', title: locale === 'ar' ? 'إدارة الأمراض' : 'Disease Management', desc: locale === 'ar' ? 'خطط غذائية للسكري وارتفاع ضغط الدم' : 'Nutrition plans for diabetes & hypertension' },
    { icon: 'heart', title: locale === 'ar' ? 'تغذية الحوامل' : 'Prenatal Nutrition', desc: locale === 'ar' ? 'رعاية تغذية متخصصة للأمهات' : 'Specialized nutrition for mothers' },
    { icon: 'users', title: locale === 'ar' ? 'تغذية الأسرة' : 'Family Nutrition', desc: locale === 'ar' ? 'إرشادات تغذية للعائلة بأكملها' : 'Nutrition guidance for the whole family' },
    { icon: 'calendar', title: locale === 'ar' ? 'تخطيط الوجبات' : 'Meal Planning', desc: locale === 'ar' ? 'خطط وجبات مخصصة مع وصفات' : 'Custom meal plans with recipes' },
    { icon: 'bar-chart', title: locale === 'ar' ? 'تحليل الصحة' : 'Health Analysis', desc: locale === 'ar' ? 'تحليل معمق لتكوين الجسم' : 'In-depth body composition analysis' },
  ]

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} className="main">
      <Nav locale={locale} labels={navLabels} />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">{t('hero.badge')}</span>
            <h1 className="hero-title">
              {t('hero.title1')}<br />
              <span className="gradient-text">{t('hero.title2')}</span><br />
              {t('hero.title3')}
            </h1>
            <p className="hero-description">
              {t('hero.description')}
            </p>
            <div className="hero-buttons">
              <a href={`/${locale}/contact#book`} className="btn-primary">{t('hero.cta')}</a>
              <a href={`/${locale}/programs`} className="btn-secondary">{t('hero.explore')}</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <Image
                  src="/nashwa.png"
                  alt="Dr. Nashwa"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="hero-decoration" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <p className="stats-tagline">أخصائية تغذية علاجية - مدرب صحي معتمد ساعدت أكثر من ١٠٠٠ سيدة للوصول لأهدافهم 🍀</p>
          <div className="stats-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="stats-social-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span className="stats-count">+280K</span>
              <span className="stats-label">followers</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="stats-social-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span className="stats-count">+100K</span>
              <span className="stats-label">followers</span>
            </a>
          </div>
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

      {/* Services Slider */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </div>
          <div className="slider-container">
            <div className="services-slider">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-btn prev" aria-label="Previous">‹</button>
              <div className="slider-dots" />
              <button className="slider-btn next" aria-label="Next">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Slider */}
      <section className="before-after" id="results">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'نتائج ملموسة' : 'Real Results'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar' ? 'تحولات حقيقية من عملائنا' : 'Real transformations from our clients'}
            </p>
          </div>
          <div className="slider-container">
            <div className="reviews-slider">
              {reviews.map((review, index) => (
                <div key={index} className="review-slide">
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
            <div className="slider-controls">
              <button className="slider-btn prev" aria-label="Previous">‹</button>
              <div className="slider-dots" />
              <button className="slider-btn next" aria-label="Next">›</button>
            </div>
          </div>
          <div className="section-cta">
            <a href={`/${locale}/testimonials`} className="btn-secondary">{t('testimonials.viewAll')}</a>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('testimonials.title')}</h2>
            <p className="section-subtitle">{t('testimonials.subtitle')}</p>
          </div>
          <div className="slider-container">
            <div className="testimonials-slider">
              {[
                { name: locale === 'ar' ? 'سارة أحمد' : 'Sarah Ahmed', text: locale === 'ar' ? 'د. نشوى ساعدتني على فقدان 15 كجم في 6 أشهر دون التخلي عن أطباقي المصرية المفضلة.' : 'Dr. Nashwa helped me lose 15kg in 6 months without giving up my favorite Egyptian dishes.' },
                { name: locale === 'ar' ? 'مريم حسن' : 'Mariam Hassan', text: locale === 'ar' ? 'خلال حملي، أنشأت د. نشوى خطة وجبات Keeping me healthy and energized.' : 'During my pregnancy, Dr. Nashwa created a meal plan that kept me healthy and energized.' },
                { name: locale === 'ar' ? 'عمر فاروق' : 'Omar Farouk', text: locale === 'ar' ? 'بعد تشخيصي بالسكري، صممت د. نشوى خطة ساعدتني على إدارة نسبة السكر.' : 'After being diagnosed with diabetes, Dr. Nashwa designed a plan that helped me manage my blood sugar.' },
                { name: locale === 'ar' ? 'ليلى عبدالله' : 'Layla Abdullah', text: locale === 'ar' ? 'برنامنج الأسرة ساعدني أرتب تغذية لأولادي بطريقة صحية وممتعة.' : 'The family program helped me organize my kids\' nutrition in a healthy and enjoyable way.' },
                { name: locale === 'ar' ? 'أحمد محمود' : 'Ahmed Mahmoud', text: locale === 'ar' ? 'ك رياضي، خطتي الغذائية الجديدة حسنت أداءي بشكل ملحوظ.' : 'As an athlete, my new nutrition plan noticeably improved my performance.' },
              ].map((item, i) => (
                <div key={i} className="testimonial-card">
                  <div className="quote-mark">"</div>
                  <div className="stars">★★★★★</div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="testimonial-author">
                    <span className="author-name">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-btn prev" aria-label="Previous">‹</button>
              <div className="slider-dots" />
              <button className="slider-btn next" aria-label="Next">›</button>
            </div>
          </div>
          <div className="section-cta">
            <a href={`/${locale}/testimonials`} className="btn-secondary">{t('testimonials.viewAll')}</a>
          </div>
        </div>
      </section>

      {/* Programs Slider */}
      <section className="programs-section" id="programs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'برامجنا' : 'Our Programs'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar' ? 'برامج متخصصة تناسب احتياجاتك' : 'Specialized programs for your needs'}
            </p>
          </div>
          <div className="slider-container">
            <div className="programs-slider">
              {programs.map((program, index) => (
                <ProgramCard
                  key={program.id}
                  locale={locale}
                  order={index + 1}
                  program={program}
                  variant="compact"
                />
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-btn prev" aria-label="Previous">‹</button>
              <div className="slider-dots" />
              <button className="slider-btn next" aria-label="Next">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="book">
        <div className="container cta-container">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-text">{t('cta.text')}</p>
          <a href={`/${locale}/contact#book`} className="btn-primary cta-button">{t('cta.button')}</a>
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

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    layers: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    activity: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    heart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
    users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    calendar: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    'bar-chart': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  }
  return icons[type] || icons.layers
}
