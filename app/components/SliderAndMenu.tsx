'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function SliderAndMenu() {
  const pathname = usePathname()

  useEffect(() => {
    const sliders = [
      { container: '.services-slider', btnPrev: '.services .slider-btn.prev', btnNext: '.services .slider-btn.next' },
      { container: '.reviews-slider', btnPrev: '.before-after .slider-btn.prev', btnNext: '.before-after .slider-btn.next' },
      { container: '.testimonials-slider', btnPrev: '.testimonials .slider-btn.prev', btnNext: '.testimonials .slider-btn.next' },
      { container: '.programs-slider', btnPrev: '.programs-section .slider-btn.prev', btnNext: '.programs-section .slider-btn.next' },
    ]
    const cleanups: Array<() => void> = []

    sliders.forEach(({ container, btnPrev, btnNext }) => {
      const slider = document.querySelector(container) as HTMLElement
      const prevBtn = document.querySelector(btnPrev) as HTMLButtonElement
      const nextBtn = document.querySelector(btnNext) as HTMLButtonElement

      if (slider && prevBtn && nextBtn) {
        const onPrevClick = () => {
          slider.scrollBy({ left: -340, behavior: 'smooth' })
        }
        const onNextClick = () => {
          slider.scrollBy({ left: 340, behavior: 'smooth' })
        }

        prevBtn.addEventListener('click', onPrevClick)
        nextBtn.addEventListener('click', onNextClick)

        cleanups.push(() => {
          prevBtn.removeEventListener('click', onPrevClick)
          nextBtn.removeEventListener('click', onNextClick)
        })
      }
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [pathname])

  return null
}
