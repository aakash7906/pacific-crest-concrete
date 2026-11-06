import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
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
  const [activeScene, setActiveScene] = useState(0)

  const scenes = [
    {
      name: 'Bel-Air Cart Path',
      image: IMAGES.commercial,
      caption: 'Specialty traction finish placed on steep hillside',
    },
    {
      name: 'Continuous Pour',
      image: IMAGES.pour,
      caption: 'Continuous pump line and finish operations',
    },
    {
      name: 'Hillside Formwork',
      image: IMAGES.workFormed,
      caption: 'Precision formwork carpentry & rebar grid',
    },
    {
      name: 'Project Panorama',
      image: IMAGES.contactBg,
      caption: 'Commercial & civil infrastructure in Southern California',
    },
  ]

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Full-Screen Hero Section (Architectural Reference Layout with Equal Left & Right Image Visibility) */}
      <section className="relative min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] flex flex-col justify-between overflow-hidden text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 border-b border-border">
        {/* Full-Screen Background Image Showcase */}
        <div className="absolute inset-0 z-0">
          {scenes.map((scene, idx) => (
            <img
              key={scene.name}
              src={scene.image}
              alt={scene.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeScene === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          ))}
          {/* Uniform dark overlays - equal, crystal-clear image visibility on both left and right sides */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        {/* Top Subtle Meta Bar (Architectural Reference Header) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs text-slate-300 font-mono tracking-wider pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest font-sans font-medium text-slate-200">
              {COMPANY_INFO.license}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black/40 backdrop-blur-md border border-white/15 text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-slate-200">
            <span>PACIFIC CREST</span>
            <span className="text-slate-400">•</span>
            <span>EST. SOUTHERN CA</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest font-sans font-medium text-slate-200">
              {COMPANY_INFO.city}, CALIFORNIA
            </span>
          </div>
        </div>

        {/* Main Centered Content (Balanced Left & Right Image Exposure) */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center my-auto py-8 sm:py-14 space-y-6 sm:space-y-7">
          {/* Eyebrow Tag */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-[0.18em] uppercase text-slate-200">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>California C-8 Licensed & Bonded Concrete Contractor</span>
          </div> */}

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.12] drop-shadow-md">
            Commercial & Residential <br className="hidden sm:inline" />
            <span className="font-light italic text-slate-200">Concrete Contracting.</span>
          </h1>

          {/* Action Buttons - Reference Style Solid & Glass Combination */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center gap-2.5 h-11 px-6 rounded-sm bg-brand text-brand-foreground font-semibold text-xs tracking-wider uppercase hover:bg-brand/90 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
            >
              <span>Request a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-sm border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/50 transition-all text-xs font-semibold tracking-wider uppercase cursor-pointer"
            >
              <span>Explore Services</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-sm border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white/10 transition-colors text-xs font-semibold tracking-wider uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Row: Key Credentials & Scene Switcher */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            {/* 4 Stats Items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-white drop-shadow-sm">
                  10+ Years
                </p>
                <p className="text-xs text-slate-300 mt-0.5 tracking-wide">
                  Industry Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-white drop-shadow-sm">
                  C-8 #1090874
                </p>
                <p className="text-xs text-slate-300 mt-0.5 tracking-wide">
                  CSLB Licensed & Bonded
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-white drop-shadow-sm">
                  SD to LA
                </p>
                <p className="text-xs text-slate-300 mt-0.5 tracking-wide">
                  Daily California Operations
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-white drop-shadow-sm">
                  13+ Acres
                </p>
                <p className="text-xs text-slate-300 mt-0.5 tracking-wide">
                  Patios to Distribution Lots
                </p>
              </div>
            </div>

            {/* Scene / Project View Switcher */}
            <div className="flex items-center gap-2 self-start lg:self-end">
              <span className="text-xs text-slate-300 tracking-wider uppercase font-medium mr-1 hidden sm:inline drop-shadow-xs">
                Project View:
              </span>
              <div className="inline-flex items-center gap-1.5 p-1 rounded-sm bg-black/40 backdrop-blur-md border border-white/20">
                {scenes.map((scene, idx) => (
                  <button
                    key={scene.name}
                    type="button"
                    onClick={() => setActiveScene(idx)}
                    className={`px-3 py-1.5 rounded-xs text-xs font-medium transition-all cursor-pointer ${
                      activeScene === idx
                        ? 'bg-white/25 text-white border border-white/40 font-semibold shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {scene.name}
                  </button>
                ))}
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
