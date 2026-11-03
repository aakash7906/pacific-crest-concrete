import { useState } from 'react'
import {
  MapPin,
  ZoomIn,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import {
  FEATURED_PROJECTS,
  GALLERY_ITEMS,
  COMPANY_INFO,
} from '../constants/data'
import { Button } from '../components/common/Button'
import { Card, CardContent } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Lightbox } from '../components/common/Lightbox'
import { QuickEstimateModal } from '../components/common/QuickEstimateModal'

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true
    return item.category === filter
  })

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Section - Light Shade Luxury */}
      <section className="bg-hero-light py-20 sm:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <Badge variant="brand" className="uppercase tracking-[0.25em] text-[11px] font-bold">
            Project Portfolio & Case Studies
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-foreground tracking-tight">
            Featured Projects & Our Work
          </h1>

          <div className="w-16 h-0.5 bg-brand mx-auto" />

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Explore authentic documentation of our commercial and residential
            concrete installations throughout Southern California.
          </p>
        </div>
      </section>

      {/* SECTION 1: Featured Projects (Preserving all 3 case studies with original high-res photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
            Contract Highlights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-brand mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between overflow-hidden border-border hover:border-brand/50 hover:shadow-lg transition-all rounded-lg bg-card"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-card/90 backdrop-blur-xs text-[10px] tracking-wider uppercase font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-7 space-y-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                </CardContent>
              </div>

              <div className="p-7 pt-0 border-t border-border flex items-center justify-between text-xs text-brand font-medium">
                <span className="truncate pr-2">{project.highlight}</span>
                <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Study Feature: Bel-Air Country Club progression */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-10 sm:p-14 rounded-xl bg-secondary/60 border border-brand/20 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
              Engineering Progression
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-medium text-foreground">
              Bel-Air Country Club: Form to Finish
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
              Placing a heavy-traffic cart path on a steep slope requires
              rigorous rebar grid reinforcement, precision hillside formwork,
              and a custom broomed texture to provide long-lasting traction for
              club members and maintenance fleet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1: Formed & Ready */}
            <div
              onClick={() => setLightboxIndex(0)}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border bg-card space-y-4 p-5 hover:border-brand/50 transition-all shadow-xs"
            >
              <div className="relative h-72 rounded-sm overflow-hidden bg-muted">
                <img
                  src={GALLERY_ITEMS[0].image}
                  alt={GALLERY_ITEMS[0].caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-card/90 text-foreground shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand">
                  Phase 1: Formed & Ready to Pour
                </span>
                <p className="font-serif text-base font-semibold text-foreground mt-1">
                  {GALLERY_ITEMS[0].caption}
                </p>
              </div>
            </div>

            {/* Step 2: Poured & Finished */}
            <div
              onClick={() => setLightboxIndex(1)}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border bg-card space-y-4 p-5 hover:border-brand/50 transition-all shadow-xs"
            >
              <div className="relative h-72 rounded-sm overflow-hidden bg-muted">
                <img
                  src={GALLERY_ITEMS[1].image}
                  alt={GALLERY_ITEMS[1].caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-card/90 text-foreground shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand">
                  Phase 2: Specialty Traction Slope Finish
                </span>
                <p className="font-serif text-base font-semibold text-foreground mt-1">
                  {GALLERY_ITEMS[1].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Work (Preserving all gallery items and captions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
              Authentic Job Site Documentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              Our Work
            </h2>
            <div className="w-12 h-0.5 bg-brand mt-2" />
            <p className="text-sm text-muted-foreground mt-1">
              Click any image to inspect high-resolution craftsmanship.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-foreground text-background font-bold shadow-xs'
                  : 'bg-card border border-border text-foreground hover:bg-secondary'
              }`}
            >
              All Works ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'commercial'
                  ? 'bg-foreground text-background font-bold shadow-xs'
                  : 'bg-card border border-border text-foreground hover:bg-secondary'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === 'residential'
                  ? 'bg-foreground text-background font-bold shadow-xs'
                  : 'bg-card border border-border text-foreground hover:bg-secondary'
              }`}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const originalIndex = GALLERY_ITEMS.findIndex(
              (g) => g.id === item.id
            )
            return (
              <Card
                key={item.id}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group cursor-pointer overflow-hidden flex flex-col justify-between border-border hover:border-brand/60 hover:shadow-lg transition-all rounded-lg bg-card"
              >
                <div>
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors" />

                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className="bg-card/90 backdrop-blur-xs text-[10px] tracking-wider uppercase font-semibold">
                        {item.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-card/90 text-foreground opacity-80 group-hover:opacity-100 transition-opacity shadow-xs">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-2.5">
                    <h4 className="font-serif text-lg font-semibold text-foreground group-hover:text-brand transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground font-medium">
                      {item.caption}
                    </p>
                    {item.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed pt-1 font-light">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </div>

                <div className="p-6 pt-0 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="tracking-wide">Expand 4K view</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-10 sm:p-14 rounded-xl bg-secondary/50 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
              Have a similar concrete project in mind?
            </h3>
            <p className="text-sm text-muted-foreground">
              We provide free estimates and project feasibility consultations
              across California.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="brand"
              onClick={() => setIsQuoteOpen(true)}
              className="text-xs tracking-wider uppercase"
            >
              Request Free Estimate
            </Button>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
              <Button variant="outline" className="text-xs tracking-wider uppercase border-border">
                Call (951) 852-0490
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Quote Modal */}
      <QuickEstimateModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  )
}
