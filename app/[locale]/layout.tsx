import type { Metadata } from 'next'
import '@/app/globals.css'
import SliderAndMenu from '@/app/components/SliderAndMenu'


export const metadata: Metadata = {
  title: 'د. نشوى | أخصائية التغذية',
  description: 'أخصائية التغذية الموثوقة في القاهرة. خطط غذائية مخصصة مبنية على العلم.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string } | Promise<{ locale: string }>
}) {
  // Next's LayoutProps for dynamic routes may provide params as a Promise
  const resolvedParams = (params instanceof Promise) ? await params : params
  const { locale } = resolvedParams

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        {children}
        <SliderAndMenu />
      </body>
    </html>
  )
}
