import { getTranslations } from 'next-intl/server'
import '@/app/globals.css'
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
              {locale === 'ar' ? 'شغف بتحويل' : 'Passionate About Transforming'}
              <br />
              <span className="gradient-text">
                {locale === 'ar' ? 'حياتك الغذائية' : 'Lives Through Nutrition'}
              </span>
            </h1>
            <p className="about-hero-text">
              {locale === 'ar'
                ? 'د. نشوى أخصائية تغذية علاجية معتمدة تمتلك أكثر من 8 سنوات من الخبرة في مساعدة العملاء على تحقيق أهدافهم الصحية من خلال خطط غذائية مخصصة ومستدامة.'
                : 'Dr. Nashwa is a certified clinical nutritionist with over 8 years of experience helping clients achieve their health goals through personalized and sustainable nutrition plans.'}
            </p>
          </div>
          <div className="about-hero-image">
            <div className="about-hero-image-placeholder">
              <span>د. نشوى</span>
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
              {locale === 'ar' ? 'رحلتي المهنية' : 'My Professional Journey'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar'
                ? 'من التعليم الأكاديمي إلى الممارسة اليومية'
                : 'From Academic Excellence to Daily Practice'}
            </p>
          </div>
          <div className="journey-grid">
            <div className="journey-card">
              <div className="journey-year">2016</div>
              <h3 className="journey-title">
                {locale === 'ar' ? 'البكالوريوس' : 'Bachelor\'s Degree'}
              </h3>
              <p className="journey-text">
                {locale === 'ar'
                  ? 'تخرجت من كلية الطب جامعة القاهرة بتخصص تغذية علاجية مع مرتبة الشرف.'
                  : 'Graduated from Cairo University Faculty of Medicine with a degree in Clinical Nutrition, graduating with honors.'}
              </p>
            </div>
            <div className="journey-card">
              <div className="journey-year">2018</div>
              <h3 className="journey-title">
                {locale === 'ar' ? 'الماجستير' : 'Master\'s Degree'}
              </h3>
              <p className="journey-text">
                {locale === 'ar'
                  ? 'حصلت على الماجستير في التغذية العلاجية مع بحث متخصص في تغذية مرضى السكري.'
                  : 'Earned my MSc in Clinical Nutrition with research focus on diabetes management nutrition.'}
              </p>
            </div>
            <div className="journey-card">
              <div className="journey-year">2020</div>
              <h3 className="journey-title">
                {locale === 'ar' ? 'العيادة الخاصة' : 'Private Practice'}
              </h3>
              <p className="journey-text">
                {locale === 'ar'
                  ? 'افتتحت عيادتي الخاصة لخدمة العملاء في القاهرة والمنصورة.'
                  : 'Opened my private clinic to serve clients across Cairo and Mansoura.'}
              </p>
            </div>
            <div className="journey-card">
              <div className="journey-year">2026</div>
              <h3 className="journey-title">
                {locale === 'ar' ? 'أكثر من 500 عميل' : '500+ Clients Served'}
              </h3>
              <p className="journey-text">
                {locale === 'ar'
                  ? 'أساعد يومياً المزيد من العملاء على تحقيق أهدافهم الصحية.'
                  : 'Helping more clients daily achieve their health and wellness goals.'}
              </p>
            </div>
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
            <div className="credentials-grid">
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="credential-name">
                    {locale === 'ar' ? 'أخصائية تغذية علاجية مرخصة' : 'Licensed Clinical Nutritionist'}
                  </h4>
                  <p className="credential-org">
                    {locale === 'ar' ? 'الجهة المركزية للتعيينات الصحية' : 'Central Health Appointments Authority'}
                  </p>
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="credential-name">
                    {locale === 'ar' ? 'ماجستير التغذية العلاجية' : 'MSc in Clinical Nutrition'}
                  </h4>
                  <p className="credential-org">University of Cairo</p>
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="credential-name">
                    {locale === 'ar' ? 'عضو الجمعية المصرية للتغذية' : 'Egyptian Nutrition Society Member'}
                  </h4>
                  <p className="credential-org">
                    {locale === 'ar' ? 'الجمعية المصرية للتغذية' : 'Egyptian Nutrition Society'}
                  </p>
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="credential-name">
                    {locale === 'ar' ? 'شهادة تغذية السكري' : 'Diabetes Nutrition Certificate'}
                  </h4>
                  <p className="credential-org">
                    {locale === 'ar' ? 'الجمعية الأمريكية للسكري' : 'American Diabetes Association'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="credentials-image">
            <div className="credentials-image-placeholder">
              <span>د. نشوى</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container philosophy-container">
          <div className="philosophy-content">
            <h2 className="philosophy-title">
              {locale === 'ar' ? 'فلسفتي في التغذية' : 'My Nutrition Philosophy'}
            </h2>
            <p className="philosophy-text">
              {locale === 'ar'
                ? 'أؤمن بأن كل شخص فريد، وكل خطة غذائية يجب أن تكون مصممة لتناسب这个人 الفرد. لا يوجد نظام غذائي واحد يناسب الجميع. أسعى لفهم نمط حياتك، ثقافتك الغذائية، وتفضيلاتك لإنشاء خطة تعمل معك وليس ضدك.'
                : 'I believe every person is unique, and every nutrition plan should be tailored to fit that individual. There is no one-size-fits-all diet. I strive to understand your lifestyle, your food culture, and your preferences to create a plan that works with you, not against you.'}
            </p>
            <p className="philosophy-text">
              {locale === 'ar'
                ? 'هدفي هو مساعدتك على تحقيق أهدافك الصحية مع الاستمتاع بالطعام الذي تحبه. التغذية الصحية ليست حرماناً، بل هي اختيار ذكي ومستدام.'
                : 'My goal is to help you reach your health goals while enjoying the foods you love. Healthy eating is not about deprivation, it\'s about making smart, sustainable choices.'}
            </p>
            <div className="philosophy-values">
              <div className="value-item">
                <span className="value-icon">✓</span>
                <span>{locale === 'ar' ? 'مخصص لك' : 'Personalized For You'}</span>
              </div>
              <div className="value-item">
                <span className="value-icon">✓</span>
                <span>{locale === 'ar' ? 'مستدام' : 'Sustainable'}</span>
              </div>
              <div className="value-item">
                <span className="value-icon">✓</span>
                <span>{locale === 'ar' ? 'مبني على العلم' : 'Science-Based'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2 className="cta-title">
            {locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="cta-text">
            {locale === 'ar'
              ? 'احجز استشارتك الأولى اليوم وابدأ رحلتك نحو حياة أكثر صحة.'
              : 'Book your first consultation today and start your journey towards a healthier life.'}
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
