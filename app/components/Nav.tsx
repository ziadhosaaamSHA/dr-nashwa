'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export type NavLabels = {
  services: string
  about: string
  programs: string
  testimonials: string
  contact: string
  book: string
}

type NavProps = {
  locale: string
  labels: NavLabels
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function buildLocalePath(pathname: string, locale: string) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return `/${locale}`
  }

  return `/${[locale, ...segments.slice(1)].join('/')}`
}

export default function Nav({ locale, labels }: NavProps) {
  const pathname = normalizePath(usePathname() || `/${locale}`)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  const homePath = `/${locale}`
  const bookPath = `/${locale}/contact#book`
  const navItems = [
    { href: `${homePath}/#services`, label: labels.services, isActive: pathname === homePath },
    { href: `${homePath}/about`, label: labels.about, isActive: pathname === `${homePath}/about` },
    { href: `${homePath}/programs`, label: labels.programs, isActive: pathname === `${homePath}/programs` },
    { href: `${homePath}/testimonials`, label: labels.testimonials, isActive: pathname === `${homePath}/testimonials` },
    { href: `${homePath}/contact`, label: labels.contact, isActive: pathname === `${homePath}/contact` },
  ]

  return (
    <>
      <nav className={`nav${isScrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link href={homePath} className="nav-logo gradient-text">
            د. نشوى
          </Link>

          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={item.isActive ? 'nav-active' : undefined}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <Link href={bookPath} className="btn-secondary nav-cta">
              {labels.book}
            </Link>

            <button
              type="button"
              className={`burger-menu${isMenuOpen ? ' active' : ''}`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

      </nav>

      <button
        type="button"
        className={`mobile-sidebar-backdrop${isMenuOpen ? ' open' : ''}`}
        aria-label="Close menu"
        onClick={() => setIsMenuOpen(false)}
      />

      <aside id="mobile-menu" className={`mobile-sidebar${isMenuOpen ? ' open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-brand">
            <span className="mobile-sidebar-kicker">
              {locale === 'ar' ? 'تصفح سريع' : 'Quick Navigation'}
            </span>
            <span className="mobile-sidebar-title">د. نشوى</span>
          </div>

          <button
            type="button"
            className="sidebar-close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="mobile-sidebar-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.isActive ? 'nav-active' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={bookPath} className="btn-secondary mobile-cta" onClick={() => setIsMenuOpen(false)}>
          {labels.book}
        </Link>
      </aside>

      <div className="lang-switch">
        <Link href={buildLocalePath(pathname, 'ar')} className={locale === 'ar' ? 'active' : ''}>
          العربية
        </Link>
        <span>|</span>
        <Link href={buildLocalePath(pathname, 'en')} className={locale === 'en' ? 'active' : ''}>
          English
        </Link>
      </div>
    </>
  )
}
