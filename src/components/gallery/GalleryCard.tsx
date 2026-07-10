import { motion } from 'motion/react'
import type { GalleryItem } from './galleryData'

type GalleryCardProps = {
  item: GalleryItem
  onSelect: (item: GalleryItem) => void
}

export function GalleryCard({ item, onSelect }: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      className="group relative h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#F4B6CF] focus-visible:ring-offset-4"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      aria-label={`Abrir foto: ${item.caption}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full min-h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        style={{
          objectPosition: item.objectPosition ?? 'center',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-5 pb-5 pt-16">
        <p className="text-sm font-medium leading-6 text-white">
          {item.caption}
        </p>
      </div>
    </motion.button>
  )
}