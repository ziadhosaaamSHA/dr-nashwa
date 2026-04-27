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
        const isRTL = getComputedStyle(slider).direction === 'rtl'

        const onPrevClick = () => {
          const scrollAmount = isRTL ? 340 : -340
          slider.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
        const onNextClick = () => {
          const scrollAmount = isRTL ? -340 : 340
          
          let isAtEnd = false
          if (isRTL) {
            // In RTL, scrollLeft is typically 0 at the right (start) 
            // and becomes negative as you scroll left (end)
            isAtEnd = Math.abs(slider.scrollLeft) + slider.offsetWidth >= slider.scrollWidth - 10
          } else {
            isAtEnd = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10
          }

          if (isAtEnd) {
            slider.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' })
          }
        }

        prevBtn.addEventListener('click', onPrevClick)
        nextBtn.addEventListener('click', onNextClick)

        // Auto-scroll logic
        let intervalId: NodeJS.Timeout | null = setInterval(onNextClick, 2000)

        const startAutoScroll = () => {
          if (!intervalId) intervalId = setInterval(onNextClick, 2000)
        }
        const stopAutoScroll = () => {
          if (intervalId) {
            clearInterval(intervalId)
            intervalId = null
          }
        }

        slider.addEventListener('mouseenter', stopAutoScroll)
        slider.addEventListener('mouseleave', startAutoScroll)

        cleanups.push(() => {
          prevBtn.removeEventListener('click', onPrevClick)
          nextBtn.removeEventListener('click', onNextClick)
          stopAutoScroll()
          slider.removeEventListener('mouseenter', stopAutoScroll)
          slider.removeEventListener('mouseleave', startAutoScroll)
        })
      }
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [pathname])

  return null
}
