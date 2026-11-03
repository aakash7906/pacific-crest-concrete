import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Phone,
  Mail,
  ShieldCheck,
  Menu,
  X,
  FileText,
  MapPin,
} from 'lucide-react'
import { COMPANY_INFO, IMAGES } from '../../constants/data'
import { Button } from '../common/Button'
import { QuickEstimateModal } from '../common/QuickEstimateModal'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT US', path: '/contact' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Top Utility Bar - Light Shade Luxury Tone */}
      <div className="bg-secondary/80 text-header-foreground text-xs border-b border-header-border py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-header-muted">
            <span className="flex items-center gap-1.5 font-medium text-foreground tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-brand" />
              <span>{COMPANY_INFO.license}</span>
            </span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline items-center gap-1">
              <MapPin className="inline w-3 h-3 text-brand mr-1" />
              Daily Operations: {COMPANY_INFO.serviceCoverage}
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto font-medium text-xs">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-header-muted hover:text-brand transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-brand hover:text-foreground transition-colors font-semibold tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Light Shade Luxury Architectural Nav */}
      <header className="sticky top-0 z-40 bg-header/95 backdrop-blur-md border-b border-header-border shadow-[0_2px_15px_-4px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand Logo (Original High-Res Logo from Live Site) */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-1"
          >
            <img
              src={IMAGES.logo}
              alt="Pacific Crest Concrete Logo"
              className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
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
                  className={`relative px-4 py-2 text-xs font-semibold tracking-[0.18em] transition-all rounded-sm ${
                    isActive
                      ? 'text-brand font-bold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-brand'
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
          <div className="md:hidden border-b border-header-border bg-header px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-md">
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

            <div className="pt-3 border-t border-header-border flex flex-col gap-2">
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
