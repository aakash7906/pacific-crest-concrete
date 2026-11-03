import { useState } from 'react'
import {
  CheckCircle2,
  Phone,
  FileText,
  Search,
  Building,
  Home,
  Shield,
  ArrowRight,
  HardHat,
} from 'lucide-react'
import {
  SERVICES_LIST,
  DETAILED_SERVICES,
  COMPANY_INFO,
} from '../constants/data'
import { Button } from '../components/common/Button'
import { Card, CardContent } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { QuickEstimateModal } from '../components/common/QuickEstimateModal'

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'structural' | 'civil' | 'residential' | 'commercial'
  >('all')
  const [quoteService, setQuoteService] = useState<string>('')
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  // Filtered services list
  const filteredServices = SERVICES_LIST.filter((service) =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredDetailedServices = DETAILED_SERVICES.filter((group) => {
    if (selectedCategory === 'all') return true
    return group.category === selectedCategory
  })

  const openQuoteForService = (serviceName: string) => {
    setQuoteService(serviceName)
    setIsQuoteOpen(true)
  }

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Section (Preserving original headline & text with Light Luxury Tone) */}
      <section className="bg-hero-light py-20 sm:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <Badge variant="brand" className="uppercase tracking-[0.25em] text-[11px] font-bold">
            California C-8 Concrete Contractor
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-foreground tracking-tight">
            From Start To Finish
          </h1>

          <div className="w-16 h-0.5 bg-brand mx-auto" />

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            From pre-construction to after project closeouts we pride ourselves
            on continuing an open line of communication throughout all of our
            projects.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="brand"
              onClick={() => openQuoteForService(SERVICES_LIST[0])}
              leftIcon={<FileText className="w-4 h-4" />}
              className="text-xs tracking-wider uppercase"
            >
              Request a Free Estimate
            </Button>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
              <Button
                variant="outline"
                leftIcon={<Phone className="w-4 h-4 text-brand" />}
                className="text-xs tracking-wider uppercase border-border hover:border-brand/40"
              >
                Call {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services Scope Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
            Full Capability Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
            Services That Are Offered But Are Not Limited To:
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            From heavy infrastructure slabs to decorative residential flatwork,
            our crew delivers high-precision concrete services across Southern
            California.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by keyword (e.g. cart paths, curbs, footings)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-sm border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground shadow-2xs focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        {/* All Services Grid (Grid of all original listed items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service}
              onClick={() => openQuoteForService(service)}
              className="group p-5 rounded-lg border border-border bg-card hover:border-brand/60 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium text-sm sm:text-base text-foreground group-hover:text-brand transition-colors">
                  {service}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40 group-hover:bg-brand shrink-0 mt-2 transition-colors" />
              </div>
              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground group-hover:text-foreground">
                <span className="tracking-wide">Inquire scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground space-y-3">
              <p>No specific service matched "{searchTerm}".</p>
              <p className="text-xs">
                We accommodate custom engineered specifications beyond this
                list.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm('')}
              >
                Reset Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Structured Category Details */}
      <section className="bg-secondary/40 py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
                Operational Divisions
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
                Specialized Contracting Divisions
              </h3>
              <p className="text-sm text-muted-foreground">
                Dedicated management teams for both civil commercial contracts
                and custom residential installs.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Divisions' },
                { id: 'structural', label: 'Structural' },
                { id: 'civil', label: 'Civil & Curbs' },
                { id: 'residential', label: 'Residential' },
                { id: 'commercial', label: 'TI & ADA' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setSelectedCategory(
                      tab.id as
                        | 'all'
                        | 'structural'
                        | 'civil'
                        | 'residential'
                        | 'commercial'
                    )
                  }
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-foreground text-background shadow-xs font-bold'
                      : 'bg-card border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDetailedServices.map((group) => (
              <Card
                key={group.id}
                className="overflow-hidden flex flex-col justify-between border-border hover:border-brand/50 transition-colors bg-card rounded-lg"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <Badge variant="brand" className="uppercase text-[10px] tracking-wider font-bold">
                        {group.category}
                      </Badge>
                      <h4 className="font-serif text-2xl font-semibold text-foreground">
                        {group.name}
                      </h4>
                    </div>
                    <div className="p-3 rounded-md bg-secondary text-brand shrink-0">
                      {group.category === 'structural' && (
                        <Shield className="w-5 h-5" />
                      )}
                      {group.category === 'civil' && (
                        <HardHat className="w-5 h-5" />
                      )}
                      {group.category === 'residential' && (
                        <Home className="w-5 h-5" />
                      )}
                      {group.category === 'commercial' && (
                        <Building className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {group.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Included Capabilities
                    </p>
                    <ul className="space-y-2 text-sm text-foreground">
                      {group.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <div className="p-8 pt-0 border-t border-border/60 bg-muted/30 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Serving San Diego to Los Angeles
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openQuoteForService(group.name)}
                    className="text-xs tracking-wider uppercase font-semibold"
                  >
                    Request Bid
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Construction to Closeout Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-10 sm:p-14 rounded-xl bg-card border border-border shadow-xs space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
              Execution Excellence
            </span>
            <h3 className="font-serif text-3xl font-medium text-foreground">
              Our Project Execution Model
            </h3>
            <p className="text-sm text-muted-foreground">
              Continuing an open line of communication throughout every phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
            {[
              {
                step: '01',
                title: 'Pre-Construction & Bidding',
                desc: 'Detailed plan review, blueprint takeoffs, elevation studies, and clear scheduling.',
              },
              {
                step: '02',
                title: 'Forming & Subgrade',
                desc: 'Precision leveling, compaction, formwork carpentry, and rebar grid placement.',
              },
              {
                step: '03',
                title: 'Placement & Specialty Finish',
                desc: 'Continuous pump coordination, screeding, and specialty slope or decorative finishes.',
              },
              {
                step: '04',
                title: 'Cure & Closeout',
                desc: 'Jobsite clean-up, quality checks, expansion jointing, and closeout handover.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-md bg-secondary/40 border border-border space-y-2.5"
              >
                <span className="font-serif text-2xl font-bold text-brand">
                  {item.step}
                </span>
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Quote Modal */}
      <QuickEstimateModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={quoteService}
      />
    </div>
  )
}
