import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Phone,
  Menu,
  X,
  FileText,
} from 'lucide-react'
import { COMPANY_INFO, IMAGES } from '../../constants/data'
import { Button } from '../common/Button'
import { QuickEstimateModal } from '../common/QuickEstimateModal'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation()

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT US', path: '/contact' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Smart pull-off / pull-on on scroll with responsive delta accumulation
  useEffect(() => {
    let prevScrollY = window.scrollY
    let accumulatedDelta = 0

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)

      // Keep navbar visible if mobile menu is open
      if (isMobileMenuOpen) {
        setIsVisible(true)
        prevScrollY = currentScrollY
        accumulatedDelta = 0
        return
      }

      // Always visible when near top of the page
      if (currentScrollY <= 30) {
        setIsVisible(true)
        prevScrollY = currentScrollY
        accumulatedDelta = 0
        return
      }

      const delta = currentScrollY - prevScrollY

      // Reset accumulated delta when reversing direction
      if ((delta > 0 && accumulatedDelta < 0) || (delta < 0 && accumulatedDelta > 0)) {
        accumulatedDelta = 0
      }

      accumulatedDelta += delta

      // Scroll Down -> pull off (hide)
      if (accumulatedDelta > 10 && currentScrollY > 40) {
        setIsVisible(false)
        accumulatedDelta = 0
      }
      // Scroll Up -> pull on (show)
      else if (accumulatedDelta < -10) {
        setIsVisible(true)
        accumulatedDelta = 0
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])



  return (
    <>
      {/* Dynamic Smart Header - Luxury Glassmorphic Nav (Pulls off on scroll down, pulls on on scroll up) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] supports-[backdrop-filter]:bg-white/75`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Brand Logo (Original High-Res Logo from Live Site) */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-0.5"
          >
            <img
              src={IMAGES.logo}
              alt="Pacific Crest Concrete Logo"
              className="h-8 sm:h-9.5 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] transition-all rounded-sm ${
                    isActive
                      ? 'text-brand font-bold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-brand'
                      : 'text-foreground hover:text-brand hover:bg-secondary/50'
                  }`}
                >
                  {link.name}
                </NavLink>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsQuoteModalOpen(true)}
              leftIcon={<FileText className="w-3.5 h-3.5 text-brand" />}
              className="font-semibold text-xs tracking-[0.12em] uppercase border-border hover:border-brand/50 hover:bg-secondary"
            >
              Request Estimate
            </Button>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
              <Button
                variant="brand"
                size="sm"
                leftIcon={<Phone className="w-3.5 h-3.5" />}
                className="font-semibold text-xs tracking-[0.12em] uppercase"
              >
                Call (951) 852-0490
              </Button>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="p-2 text-brand hover:bg-secondary rounded-md"
              aria-label="Request Quote"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-md">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 rounded-md text-xs font-bold tracking-[0.18em] transition-colors ${
                      isActive
                        ? 'bg-secondary text-brand font-extrabold'
                        : 'text-foreground hover:bg-secondary/70'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-2">
              <Button
                variant="brand"
                fullWidth
                onClick={() => {
                  closeMobileMenu()
                  setIsQuoteModalOpen(true)
                }}
                leftIcon={<FileText className="w-4 h-4" />}
                className="tracking-wider uppercase text-xs"
              >
                Request a Free Estimate
              </Button>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="w-full">
                <Button
                  variant="outline"
                  fullWidth
                  leftIcon={<Phone className="w-4 h-4 text-brand" />}
                  className="tracking-wider uppercase text-xs"
                >
                  Call {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Quote Modal */}
      <QuickEstimateModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  )
}
