import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GalleryGrid } from './GalleryGrid'
import { GalleryModal } from './GalleryModal'
import { galleryItems, type GalleryItem } from './galleryData'

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  function handleSelect(item: GalleryItem) {
    triggerRef.current = document.activeElement as HTMLElement
    setSelectedItem(item)
  }

  const handleClose = useCallback(() => {
    setSelectedItem(null)

    requestAnimationFrame(() => {
      triggerRef.current?.focus()
    })
  }, [])

  return (
    <section
      id="galeria"
      className="scroll-mt-20 bg-[#F9FAFB] px-6 py-24 sm:py-32"
      aria-labelledby="gallery-title"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="mb-12 max-w-2xl sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="mb-3 font-mono text-sm text-[#9CA3AF]">
            {'// memories.log'}
          </p>

          <h2
            id="gallery-title"
            className="font-serif text-4xl font-semibold tracking-tight text-[#222222]"
          >
            Galeria
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#6B7280]">
            Alguns registros de momentos, lugares e pessoas que fizeram parte dessa jornada!
          </p>
        </motion.div>

        <GalleryGrid items={galleryItems} onSelect={handleSelect} />
      </div>

      <AnimatePresence>
        {selectedItem && (
          <GalleryModal item={selectedItem} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  )
}