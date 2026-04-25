import ProgramIcon from '@/app/components/ProgramIcon'
import type { LocalizedProgram } from '@/app/lib/programs'

type ProgramCardProps = {
  locale: string
  order: number
  program: LocalizedProgram
  variant?: 'compact' | 'full'
}

export default function ProgramCard({
  locale,
  order,
  program,
  variant = 'full',
}: ProgramCardProps) {
  const featureLimit = variant === 'compact' ? 3 : 5
  const label = locale === 'ar' ? 'احجز الآن' : 'Book Now'

  return (
    <article className={`program-card${variant === 'compact' ? ' program-card-compact' : ''}`}>
      <div className="program-visual">
        {variant === 'full' && <span className="program-badge">{program.badge}</span>}
        {variant === 'full' && (
          <div className="program-icon-wrapper">
            <ProgramIcon type={program.icon} />
          </div>
        )}
        <div className="program-graphic">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="program-card-header">
        <span className="program-number">{order.toString().padStart(2, '0')}</span>
        <div className="program-duration">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>{program.duration}</span>
        </div>
      </div>

      <p className="program-summary">{program.summary}</p>
      <h3 className="program-title">{program.title}</h3>
      <p className="program-desc">{program.desc}</p>

      <div className="program-highlights">
        {program.highlights.map((highlight) => (
          <span key={highlight} className="program-chip">
            {highlight}
          </span>
        ))}
      </div>

      <div className="program-features">
        <ul>
          {program.features.slice(0, featureLimit).map((feature) => (
            <li key={feature}>
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a href={`/${locale}/contact#book`} className="btn-primary program-cta">
        {label}
      </a>
    </article>
  )
}
