'use client'

import Link from 'next/link'

type PackagesSectionProps = {
  locale: string
}

export default function PackagesSection({ locale }: PackagesSectionProps) {
  const isArabic = locale === 'ar'

  const packages = [
    {
      id: 'consultant',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: isArabic ? 'استشارة' : 'Consultant',
      desc: isArabic ? 'جلسة استشارية شاملة' : 'Comprehensive consultation session',
    },
    {
      id: 'online',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: isArabic ? 'برنامج تغذية أونلاين' : 'Online Nutrition Program',
      desc: isArabic ? 'برنامج متكامل عن بعد' : 'Complete online program',
    },
  ]

  return (
    <section className="packages-section">
      <div className="container">
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-icon">{pkg.icon}</div>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <Link href={`/${locale}/contact#book`} className="btn-primary package-cta">
                {isArabic ? 'احجز الآن' : 'Book Now'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}