import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryItem } from '../../types'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length)
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, items.length, onClose, onNavigate])

  if (currentIndex === null) return null

  const currentItem = items[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-surface-dark border border-surface-dark-border text-surface-dark-foreground hover:bg-surface-dark-border transition-colors cursor-pointer"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          onNavigate((currentIndex - 1 + items.length) % items.length)
        }
        className="absolute left-4 z-50 p-3 rounded-full bg-surface-dark/80 border border-surface-dark-border text-surface-dark-foreground hover:bg-surface-dark transition-colors cursor-pointer hidden md:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 z-50 p-3 rounded-full bg-surface-dark/80 border border-surface-dark-border text-surface-dark-foreground hover:bg-surface-dark transition-colors cursor-pointer hidden md:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal */}
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-center bg-surface-dark rounded-lg overflow-hidden border border-surface-dark-border">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="w-full mt-4 p-4 rounded-lg bg-surface-dark border border-surface-dark-border text-surface-dark-foreground flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-brand">
                {currentItem.category} Project
              </span>
              <span className="text-surface-dark-muted">•</span>
              <span className="text-xs text-surface-dark-muted">
                {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h4 className="text-lg font-bold">{currentItem.title}</h4>
            <p className="text-sm text-surface-dark-muted mt-0.5">
              {currentItem.caption}
            </p>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() =>
                onNavigate((currentIndex - 1 + items.length) % items.length)
              }
              className="flex-1 py-2 px-3 text-sm rounded bg-surface-dark-border text-surface-dark-foreground text-center"
            >
              Previous
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % items.length)}
              className="flex-1 py-2 px-3 text-sm rounded bg-surface-dark-border text-surface-dark-foreground text-center"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
