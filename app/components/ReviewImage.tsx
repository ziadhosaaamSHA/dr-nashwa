'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import Image from 'next/image'

interface ReviewImageProps {
  src: string
  alt: string
  className?: string
  isSlider?: boolean
}

export default function ReviewImage({ src, alt, className = '', isSlider = false }: ReviewImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  const modalContent = isOpen && (
    <div className="image-preview-modal" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-preview" onClick={() => setIsOpen(false)} aria-label="Close preview">
          &times;
        </button>
        <div className="full-preview-image-wrapper">
          <Image 
            src={src} 
            alt={alt} 
            fill
            className="full-preview-image" 
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div 
        className={`review-image-clickable ${className}`} 
        onClick={() => setIsOpen(true)}
        style={{ position: 'relative' }}
      >
        <Image
          src={src}
          alt={alt}
          fill={isSlider}
          width={isSlider ? undefined : 800}
          height={isSlider ? undefined : 1200}
          style={{ 
            width: isSlider ? '100%' : '100%', 
            height: isSlider ? '100%' : 'auto', 
            objectFit: isSlider ? 'contain' : 'cover',
            display: 'block' 
          }}
        />
        <div className="preview-overlay">
          <span>🔍</span>
        </div>
      </div>

      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  )
}
