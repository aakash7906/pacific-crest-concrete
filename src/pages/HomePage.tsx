import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Building2,
  Home as HomeIcon,
  MapPin,
  Layers,
  Award,
} from 'lucide-react'
import {
  COMPANY_INFO,
  FEATURED_PROJECTS,
  SERVICE_AREAS,
  IMAGES,
} from '../constants/data'
import { Button } from '../components/common/Button'
import { Card, CardContent } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { QuickEstimateModal } from '../components/common/QuickEstimateModal'

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Hero Section - Light Shade Architectural Luxury */}
      <section className="relative overflow-hidden bg-hero-light border-b border-border py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card border border-brand/30 shadow-2xs text-xs font-semibold text-brand tracking-wide">
                <ShieldCheck className="w-4 h-4 text-brand" />
                <span>{COMPANY_INFO.license}</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground font-normal">
                  Southern California
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.12]">
                Architectural & Commercial Concrete Contracting
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                With over a decade of industry experience on projects ranging
                from residential patios to thirteen acre distribution center
                parking lots, our on and offsite management team is here to
                support you through any of your project needs.
              </p>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="brand"
                  size="lg"
                  onClick={() => setIsQuoteOpen(true)}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto tracking-wider uppercase text-xs"
                >
                  Request a Free Estimate
                </Button>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-border hover:border-brand/50 hover:bg-secondary tracking-wider uppercase text-xs"
                  >
                    View All Services
                  </Button>
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-4 text-xs font-bold tracking-wider text-muted-foreground hover:text-brand transition-colors uppercase"
                >
                  <Phone className="w-3.5 h-3.5 text-brand" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.18em]">
                    Industry Expertise
                  </p>
                  <p className="font-serif text-2xl font-semibold text-foreground mt-1">
                    10+ Years
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Field-proven leadership
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.18em]">
                    Contractor License
                  </p>
                  <p className="font-serif text-2xl font-semibold text-foreground mt-1">
                    C-8 #1090874
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    CSLB licensed & bonded
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.18em]">
                    Daily Operations
                  </p>
                  <p className="font-serif text-2xl font-semibold text-foreground mt-1">
                    SD to LA
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    California statewide
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase (Original High-Res 4K Image) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src={IMAGES.commercial}
                  alt="Pacific Crest Concrete Cart Path Project"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-md bg-card/95 backdrop-blur-md border border-border shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                      Featured Project
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      Bel-Air Country Club
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Specialty traction finish placed on steep hillside cart path
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Let Us Serve You (Preserving original heading and text) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
                Quality & Dedication
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-foreground tracking-tight">
                Let Us Serve You
              </h2>
              <div className="w-16 h-0.5 bg-brand mt-3" />
            </div>

            {/* How We Can Help */}
            <div className="space-y-4 p-8 rounded-lg bg-secondary/60 border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-sm bg-card border border-border text-brand">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  How We Can Help
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-normal">
                With over a decade of industry experience on projects ranging
                from residential patios to thirteen acre distribution center
                parking lots our on and offsite management team is here to support
                you through any of your project needs.
              </p>
              <ul className="pt-2 space-y-2.5 text-xs tracking-wide uppercase font-medium text-foreground">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>On-site & off-site dedicated project managers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Low impact placement strategies for active facilities</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Strict adherence to schedule and budget requirements</span>
                </li>
              </ul>
            </div>

            {/* Areas That We Service */}
            <div className="space-y-4 p-8 rounded-lg bg-secondary/60 border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-sm bg-card border border-border text-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Areas That We Service
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-normal">
                Pacific Crest Concrete is a Southern California based company
                that serves clients throughout California with ongoing daily
                operations from San Diego, CA to Los Angeles, CA.
              </p>

              {/* Service Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-card border border-border text-xs font-medium text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Original 4K Pour Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-border shadow-lg bg-card">
              <img
                src={IMAGES.pour}
                alt="Pacific Crest Concrete Continuous Pump Pour"
                className="w-full h-[520px] object-cover"
              />
              <div className="p-6 bg-card border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground">
                    Precision Concrete Placement
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Continuous pump hose placement and expert finish work.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsQuoteOpen(true)}
                  className="text-xs tracking-wider uppercase font-semibold"
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: At A Glance (Preserving Commercial and Residential descriptions) */}
      <section className="bg-secondary/40 py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
              Core Divisions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-foreground tracking-tight">
              At A Glance
            </h2>
            <div className="w-12 h-0.5 bg-brand mx-auto" />
            <p className="text-sm text-muted-foreground pt-1 leading-relaxed">
              Serving premier commercial developers, institutional properties,
              and discerning residential homeowners across Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Commercial Card */}
            <Card className="overflow-hidden flex flex-col justify-between border-border hover:border-brand/60 hover:shadow-lg transition-all rounded-lg">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-muted">
                <img
                  src={IMAGES.commercial}
                  alt="Commercial Concrete Projects"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="gap-1.5 py-1 px-3 tracking-widest text-[11px] uppercase bg-card text-foreground border-border shadow-xs">
                    <Building2 className="w-3.5 h-3.5 text-brand" />
                    Commercial
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 space-y-5 flex-1 flex flex-col justify-between bg-card">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                    Commercial
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pacific Crest Concrete takes great pride in offering low
                    impact solutions and quality work to keep your project on
                    budget and on schedule.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-border">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Scope Highlights
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-foreground font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Building slabs & footings
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Cart paths & trails
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Parking bays & distribution
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      ADA ramps & curbs
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Link to="/services">
                    <Button variant="outline" fullWidth rightIcon={<ArrowRight className="w-4 h-4 text-brand" />} className="text-xs tracking-wider uppercase font-semibold">
                      Explore Commercial Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Residential Card */}
            <Card className="overflow-hidden flex flex-col justify-between border-border hover:border-brand/60 hover:shadow-lg transition-all rounded-lg">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-muted">
                <img
                  src={IMAGES.residential}
                  alt="Residential Concrete Projects"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="gap-1.5 py-1 px-3 tracking-widest text-[11px] uppercase bg-card text-foreground border-border shadow-xs">
                    <HomeIcon className="w-3.5 h-3.5 text-brand" />
                    Residential
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 space-y-5 flex-1 flex flex-col justify-between bg-card">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                    Residential
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pacific Crest Concrete will assist you from start to finish
                    with driveway extensions, sidewalks, landscape curbs and
                    patios.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-border">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Scope Highlights
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-foreground font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Driveway extensions
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Custom backyard patios
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Side entry sidewalks
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      Landscape borders & curbs
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Link to="/services">
                    <Button variant="outline" fullWidth rightIcon={<ArrowRight className="w-4 h-4 text-brand" />} className="text-xs tracking-wider uppercase font-semibold">
                      Explore Residential Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-muted-foreground">
              Documented case studies from our California operations.
            </p>
          </div>
          <Link to="/gallery">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4 text-brand" />} className="text-xs tracking-wider uppercase font-semibold">
              View Complete Gallery
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between overflow-hidden border-border hover:border-brand/50 hover:shadow-md transition-all rounded-lg"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-card/90 backdrop-blur-xs text-[10px] tracking-wider uppercase">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </div>

              <div className="p-6 pt-0 border-t border-border flex items-center justify-between text-xs text-brand font-medium">
                <span className="truncate pr-2">{project.highlight}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Luxury Call to Action Banner - Light Tone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-xl bg-secondary/70 border border-brand/20 p-10 sm:p-16 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-card border border-brand/30 text-brand text-xs font-bold uppercase tracking-widest">
            <Award className="w-4 h-4 text-brand" />
            Licensed California C-8 Contractor
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium max-w-3xl mx-auto leading-tight text-foreground">
            Plan Your Commercial or Residential Concrete Project
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From pre-construction to after project closeouts, we maintain an open
            line of communication to deliver low impact, on-schedule excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="brand"
              size="lg"
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto tracking-wider uppercase text-xs"
            >
              Get a Free Estimate
            </Button>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border hover:border-brand/50 hover:bg-card tracking-wider uppercase text-xs"
                leftIcon={<Phone className="w-3.5 h-3.5 text-brand" />}
              >
                Call (951) 852-0490
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuickEstimateModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  )
}
