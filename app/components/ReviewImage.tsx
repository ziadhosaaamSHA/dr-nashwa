'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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
        <img src={src} alt={alt} className="full-preview-image" />
      </div>
    </div>
  )

  return (
    <>
      <div 
        className={`review-image-clickable ${className}`} 
        onClick={() => {
          console.log('Opening preview for', src);
          setIsOpen(true);
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ 
            width: '100%', 
            height: isSlider ? '100%' : 'auto', 
            objectFit: isSlider ? 'contain' : 'initial',
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
