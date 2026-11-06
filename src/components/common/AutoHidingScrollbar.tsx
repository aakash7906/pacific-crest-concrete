import React, { useState, useEffect, useRef } from 'react'

export function AutoHidingScrollbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [thumbTopPercent, setThumbTopPercent] = useState(0)
  const [thumbHeightPercent, setThumbHeightPercent] = useState(15)
  const [isDragging, setIsDragging] = useState(false)
  const hideTimeoutRef = useRef<number | null>(null)
  const dragStartRef = useRef<{ startY: number; startScrollTop: number } | null>(null)

  useEffect(() => {
    const updateScrollMetrics = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const maxScroll = docHeight - winHeight

      if (maxScroll <= 20) {
        setIsVisible(false)
        return
      }

      // Height of thumb clamped between 8% and 24% of viewport height
      const calculatedHeight = Math.max(8, Math.min(24, (winHeight / docHeight) * 100))
      setThumbHeightPercent(calculatedHeight)

      // Position of thumb clamped between 0 and (100 - thumbHeight)
      const currentPercent = (scrollY / maxScroll) * (100 - calculatedHeight)
      setThumbTopPercent(Math.max(0, Math.min(100 - calculatedHeight, currentPercent)))

      // Show scrollbar while scrolling
      setIsVisible(true)

      // Hide after 900ms of scrolling pause
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current)
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false)
      }, 900)
    }

    const handleScroll = () => {
      updateScrollMetrics()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateScrollMetrics)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateScrollMetrics)
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  // Interactive Dragging Support
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setIsVisible(true)
    dragStartRef.current = {
      startY: e.clientY,
      startScrollTop: window.scrollY,
    }

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!dragStartRef.current) return
      const deltaY = moveEvent.clientY - dragStartRef.current.startY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const maxScroll = docHeight - winHeight
      const trackHeight = winHeight - 32

      const scrollDelta = (deltaY / trackHeight) * maxScroll
      window.scrollTo({
        top: Math.max(0, Math.min(maxScroll, dragStartRef.current.startScrollTop + scrollDelta)),
        behavior: 'instant',
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      dragStartRef.current = null
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      hideTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false)
      }, 900)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <aside
      aria-label="Scroll Indicator"
      className={`fixed right-1 top-3 bottom-3 w-2 z-[9999] transition-opacity duration-300 pointer-events-none select-none ${
        isVisible || isDragging ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative w-full h-full">
        {/* Sleek rounded scrollbar thumb */}
        <div
          onMouseDown={handleMouseDown}
          role="scrollbar"
          aria-valuenow={Math.round(thumbTopPercent)}
          tabIndex={-1}
          style={{
            top: `${thumbTopPercent}%`,
            height: `${thumbHeightPercent}%`,
          }}
          className={`absolute left-0.5 right-0.5 rounded-full transition-colors cursor-pointer pointer-events-auto ${
            isDragging
              ? 'bg-brand ring-2 ring-brand/30'
              : 'bg-slate-400/70 hover:bg-brand shadow-xs'
          }`}
        />
      </div>
    </aside>
  )
}
