import { getTranslations } from 'next-intl/server'
import '@/app/globals.css'
import Image from 'next/image'
import Nav from '@/app/components/Nav'

export default async function ContactPage({
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

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="hero-badge">{t('contact.badge')}</span>
          <h1 className="contact-title">
            {locale === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
            <br />
            <span className="gradient-text">
              {locale === 'ar' ? 'نحن هنا لمساعدتك' : "We're Here to Help"}
            </span>
          </h1>
          <p className="contact-subtitle">
            {locale === 'ar'
              ? 'احجز استشارتك الأولى أو اسأل أي سؤال - نحن هنا لخدمتك'
              : 'Book your first consultation or ask any question - we\'re here to serve you'}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="contact-info-title">
              {locale === 'ar' ? 'الهاتف' : 'Phone'}
            </h3>
            <p className="contact-info-text">+20 123 456 7890</p>
            <p className="contact-info-subtext">
              {locale === 'ar' ? 'متاح من 9 صباحاً - 9 مساءً' : 'Available 9AM - 9PM'}
            </p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="contact-info-title">
              {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            </h3>
            <p className="contact-info-text">info@nashwa-clinic.com</p>
            <p className="contact-info-subtext">
              {locale === 'ar' ? 'نرد خلال 24 ساعة' : 'Response within 24 hours'}
            </p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="contact-info-title">
              {locale === 'ar' ? 'الموقع' : 'Location'}
            </h3>
            <p className="contact-info-text">Cairo, Egypt</p>
            <p className="contact-info-subtext">
              {locale === 'ar' ? 'عيادة في القاهرة' : 'Clinic in Cairo'}
            </p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="contact-info-title">
              {locale === 'ar' ? 'ساعات العمل' : 'Working Hours'}
            </h3>
            <p className="contact-info-text">
              {locale === 'ar' ? 'السبت - الخميس' : 'Sat - Thu'}
            </p>
            <p className="contact-info-subtext">9:00 AM - 9:00 PM</p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-section" id="book">
        <div className="container booking-container">
          <div className="booking-content">
            <h2 className="booking-title">
              {locale === 'ar' ? 'احجز استشارتك' : 'Book Your Consultation'}
            </h2>
            <p className="booking-subtitle">
              {locale === 'ar'
                ? 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة'
                : 'Fill out the form below and we\'ll contact you within 24 hours'}
            </p>
            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    {locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input type="text" id="name" name="name" required
                    placeholder={locale === 'ar' ? 'أدخل اسمك' : 'Enter your name'} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    {locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input type="tel" id="phone" name="phone" required
                    placeholder={locale === 'ar' ? '01xxxxxxxxx' : '01xxxxxxxxx'} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input type="email" id="email" name="email"
                    placeholder={locale === 'ar' ? 'example@email.com' : 'example@email.com'} />
                </div>
                <div className="form-group">
                  <label htmlFor="program">
                    {locale === 'ar' ? 'البرنامج المطلوب' : 'Desired Program'}
                  </label>
                  <select id="program" name="program">
                    <option value="">
                      {locale === 'ar' ? 'اختر برنامجاً' : 'Select a program'}
                    </option>
                    <option value="weight">
                      {locale === 'ar' ? 'إدارة الوزن' : 'Weight Management'}
                    </option>
                    <option value="diabetes">
                      {locale === 'ar' ? 'إدارة السكري' : 'Diabetes Management'}
                    </option>
                    <option value="pregnancy">
                      {locale === 'ar' ? 'تغذية الحوامل' : 'Prenatal Nutrition'}
                    </option>
                    <option value="family">
                      {locale === 'ar' ? 'تغذية الأسرة' : 'Family Nutrition'}
                    </option>
                    <option value="sports">
                      {locale === 'ar' ? 'التغذية الرياضية' : 'Sports Nutrition'}
                    </option>
                    <option value="detox">
                      {locale === 'ar' ? 'Detox & Cleanse' : 'Detox & Cleanse'}
                    </option>
                    <option value="other">
                      {locale === 'ar' ? 'أخرى' : 'Other'}
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">
                  {locale === 'ar' ? 'رسالتك (اختياري)' : 'Your Message (Optional)'}
                </label>
                <textarea id="message" name="message" rows={4}
                  placeholder={locale === 'ar'
                    ? 'اكتب أي معلومات إضافية أو أسئلة...'
                    : 'Write any additional information or questions...'} />
              </div>
              <button type="submit" className="btn-primary booking-submit">
                {locale === 'ar' ? 'إرسال طلب الحجز' : 'Submit Booking Request'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <div className="map-content">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4A1C8F" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>
                {locale === 'ar'
                  ? 'القاهرة، مصر - العيادة تقع في حي المعادي'
                  : 'Cairo, Egypt - Clinic located in Maadi district'}
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                {locale === 'ar' ? 'افتح في خرائط Google' : 'Open in Google Maps'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-section">
        <div className="container social-container">
          <h3 className="social-title">
            {locale === 'ar' ? 'تابعنا على' : 'Follow Us On'}
          </h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#4A1C8F">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A1C8F" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#4A1C8F">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#4A1C8F">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
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
