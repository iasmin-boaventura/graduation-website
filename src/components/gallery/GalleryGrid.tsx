import type { GalleryItem, GalleryItemSize } from './galleryData'
import { GalleryCard } from './GalleryCard'

type GalleryGridProps = {
  items: GalleryItem[]
  onSelect: (item: GalleryItem) => void
}

const sizeClasses: Record<GalleryItemSize, string> = {
  default: 'md:col-span-1 md:row-span-1',
  tall: 'md:col-span-1 md:row-span-2',
  wide: 'md:col-span-2 md:row-span-1',
}

export function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={`min-h-72 ${sizeClasses[item.size]}`}
        >
          <GalleryCard item={item} onSelect={onSelect} />
        </div>
      ))}
    </div>
  )
}