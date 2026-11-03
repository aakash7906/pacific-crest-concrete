import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { COMPANY_INFO, SERVICES_LIST, IMAGES } from '../../constants/data'
import { FacebookIcon, InstagramIcon } from '../common/SocialIcons'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border-t border-footer-border">
      {/* Top Banner Strip - Light Shade Luxury Tone */}
      <div className="border-b border-footer-border py-10 px-4 sm:px-8 bg-footer-strip/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand">
              Southern California Concrete Contracting
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-footer-foreground">
              Ready to build your next concrete project?
            </h4>
            <p className="text-footer-muted text-sm">
              Supporting commercial and residential builders with precision,
              integrity, and craftsmanship.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-sm bg-brand text-brand-foreground font-semibold text-xs tracking-wider uppercase hover:bg-brand/90 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-sm border border-footer-border bg-card text-footer-foreground font-semibold text-xs tracking-wider uppercase hover:bg-secondary transition-colors"
            >
              Request Consultation
              <ArrowRight className="w-3.5 h-3.5 text-brand" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Overview */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={IMAGES.logo}
                alt={COMPANY_INFO.name}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-footer-muted leading-relaxed font-normal">
              With over a decade of industry experience, Pacific Crest Concrete
              delivers premier commercial and residential concrete contracting
              throughout California with ongoing operations from San Diego to Los
              Angeles.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand">
              <ShieldCheck className="w-4 h-4" />
              <span>{COMPANY_INFO.license}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-serif text-base font-semibold tracking-wide text-footer-foreground">
              Navigation
            </h5>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-medium text-footer-muted">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                  Portfolio & Featured Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services Offered */}
          <div className="space-y-4">
            <h5 className="font-serif text-base font-semibold tracking-wide text-footer-foreground">
              Scope of Work
            </h5>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-footer-muted font-normal">
              {SERVICES_LIST.slice(0, 10).map((service) => (
                <li key={service} className="flex items-center gap-1.5 truncate">
                  <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
                  <span className="truncate">{service}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline pt-1"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Contact Details & Office */}
          <div className="space-y-4">
            <h5 className="font-serif text-base font-semibold tracking-wide text-footer-foreground">
              Office & Direct Contact
            </h5>
            <ul className="space-y-3.5 text-sm text-footer-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-brand transition-colors font-medium text-footer-foreground"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-brand transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs">
                  Monday – Friday: 7:00 AM – 5:00 PM
                </span>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-card border border-footer-border text-footer-foreground hover:border-brand hover:text-brand transition-all shadow-2xs"
                aria-label="Pacific Crest Concrete on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-card border border-footer-border text-footer-foreground hover:border-brand hover:text-brand transition-all shadow-2xs"
                aria-label="Pacific Crest Concrete on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar - Light Tone */}
      <div className="border-t border-footer-border py-6 px-4 sm:px-8 text-xs text-footer-muted bg-footer-strip/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            Copyright &copy; {currentYear} {COMPANY_INFO.name} - All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4 text-footer-muted font-medium">
            <span>California C-8 License #{COMPANY_INFO.licenseNumber}</span>
            <span>•</span>
            <span>Fully Licensed, Bonded & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
