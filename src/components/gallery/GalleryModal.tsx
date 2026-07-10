import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { motion } from 'motion/react'
import type { GalleryItem } from './galleryData'

type GalleryModalProps = {
  item: GalleryItem
  onClose: () => void
}

export function GalleryModal({ item, onClose }: GalleryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ampliada: ${item.caption}`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-md"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#222222] shadow-sm backdrop-blur-sm transition duration-200 hover:scale-[1.02] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B6CF] focus-visible:ring-offset-2"
          aria-label="Fechar foto ampliada"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        <div className="flex min-h-0 flex-1 items-center justify-center bg-[#F9FAFB]">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>

        <div className="border-t border-[#E5E7EB] px-6 py-5">
          <p className="text-sm leading-6 text-[#6B7280] sm:text-base">
            {item.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}