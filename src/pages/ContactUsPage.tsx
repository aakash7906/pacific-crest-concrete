import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Clock,
} from 'lucide-react'
import { COMPANY_INFO, SERVICES_LIST, IMAGES } from '../constants/data'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'
import { Input, Textarea, Select } from '../components/common/FormControls'
import { Badge } from '../components/common/Badge'
import { FacebookIcon, InstagramIcon } from '../components/common/SocialIcons'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'commercial',
    service: SERVICES_LIST[0],
    city: '',
    message: '',
  })

  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Hero Banner with Original High-Res Background & Central Overlay Card */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center p-4 sm:p-8 bg-secondary/30 overflow-hidden border-b border-border">
        {/* Original High-Res Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.contactBg}
            alt="Pacific Crest Concrete Project Panoramic View"
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-2xs" />
        </div>

        {/* Central Overlay Card (Preserving all original text with Luxury presentation) */}
        <div className="relative z-10 w-full max-w-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl rounded-xl p-8 sm:p-12 text-center space-y-6 animate-in fade-in duration-300">
          <div className="space-y-2">
            <Badge variant="brand" className="uppercase tracking-[0.25em] text-[10px] font-bold">
              Private Consultation & Bids
            </Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-foreground tracking-tight">
              Contact Us
            </h1>
            <div className="w-12 h-0.5 bg-brand mx-auto mt-2" />
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-2.5 text-base sm:text-lg">
            <p className="flex items-center justify-center gap-2 text-foreground font-medium">
              <span className="text-muted-foreground text-sm">Email:</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-brand hover:underline font-semibold"
              >
                {COMPANY_INFO.email}
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-foreground font-medium">
              <span className="text-muted-foreground text-sm">Phone:</span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-brand hover:underline font-semibold"
              >
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {COMPANY_INFO.name}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              {COMPANY_INFO.fullAddress}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-foreground">
              <span className="font-semibold text-brand tracking-wide">
                {COMPANY_INFO.license}
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="text-muted-foreground">
                {COMPANY_INFO.website}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact & Estimate Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Credibility */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand">
                Direct Inquiries
              </span>
              <h2 className="font-serif text-3xl font-medium text-foreground tracking-tight">
                Connect With Estimating
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you need a complete commercial blueprint takeoff or a
                tailored residential design consultation, our project management
                team responds promptly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-lg border border-border bg-card shadow-2xs flex items-center justify-between gap-4 hover:border-brand/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-secondary text-brand shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      Direct Telephone
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-semibold text-foreground hover:text-brand transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                  className="p-2 text-muted-foreground hover:text-brand rounded-md hover:bg-secondary transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-brand" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-lg border border-border bg-card shadow-2xs flex items-center justify-between gap-4 hover:border-brand/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-secondary text-brand shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      Estimating Desk
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-semibold text-foreground hover:text-brand transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                  className="p-2 text-muted-foreground hover:text-brand rounded-md hover:bg-secondary transition-colors"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-brand" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Office Address Card */}
              <div className="p-5 rounded-lg border border-border bg-card shadow-2xs flex items-center justify-between gap-4 hover:border-brand/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-secondary text-brand shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      Office Location
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {COMPANY_INFO.fullAddress}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    COMPANY_INFO.fullAddress
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-muted-foreground hover:text-brand rounded-md hover:bg-secondary transition-colors"
                  title="Open in Google Maps"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Operating Hours Card */}
              <div className="p-5 rounded-lg border border-border bg-card shadow-2xs flex items-center gap-4">
                <div className="p-3 rounded-md bg-secondary text-brand shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                    Operating Schedule
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Monday – Friday: 7:00 AM – 5:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Job site early morning pours dispatched by project schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* License Credibility Note */}
            <div className="p-6 rounded-lg bg-secondary/60 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-serif font-semibold text-base">
                <ShieldCheck className="w-5 h-5 text-brand" />
                <span>State of California C-8 Concrete Contractor</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Licensed under California Contractors State License Board (CSLB)
                License #1090874. Fully bonded and carrying comprehensive
                commercial liability insurance for major infrastructure and
                residential work.
              </p>
            </div>
          </div>

          {/* Right Column: Send Message / Estimate Request Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 shadow-sm border-border bg-card rounded-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-muted text-brand border border-brand/30 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-foreground">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your project inquiry has
                    been delivered directly to our estimating team. We will
                    review your project requirements and follow up promptly.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          projectType: 'commercial',
                          service: SERVICES_LIST[0],
                          city: '',
                          message: '',
                        })
                      }}
                      className="text-xs tracking-wider uppercase font-semibold"
                    >
                      Send Another Request
                    </Button>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
                      <Button variant="brand" className="text-xs tracking-wider uppercase font-semibold">
                        Call (951) 852-0490
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                      Request a Project Bid
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Submit project parameters, drawings, or schedule
                      requirements below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="contact-name"
                      label="Full Name"
                      required
                      placeholder="Jane Smith"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    <Input
                      id="contact-phone"
                      label="Phone Number"
                      type="tel"
                      required
                      placeholder="(951) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="contact-email"
                      label="Email Address"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <Input
                      id="contact-city"
                      label="Project City / Area"
                      placeholder="e.g. Menifee, San Diego, Los Angeles"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      id="contact-projectType"
                      label="Project Classification"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      options={[
                        { label: 'Commercial Contract', value: 'commercial' },
                        { label: 'Residential Work', value: 'residential' },
                        { label: 'Industrial / Tenant Improvement', value: 'industrial' },
                      ]}
                    />
                    <Select
                      id="contact-service"
                      label="Scope / Service Needed"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      options={SERVICES_LIST.map((s) => ({
                        label: s,
                        value: s,
                      }))}
                    />
                  </div>

                  <Textarea
                    id="contact-message"
                    label="Project Scope & Notes"
                    required
                    rows={4}
                    placeholder="Provide details on square footage, site access, scheduling, or engineering specifications..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />

                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="text-xs tracking-wider uppercase font-semibold py-4"
                  >
                    {isSubmitting ? 'Submitting Bid Request...' : 'Send Message & Bid Request'}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 2: Social (Preserving original Social heading and links) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-medium text-foreground tracking-tight">
            Social
          </h2>
          <div className="w-12 h-0.5 bg-brand mx-auto mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Follow Pacific Crest Concrete on social channels for job site
            progress, live pour footage, and finished projects.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pt-2">
          <a
            href={COMPANY_INFO.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 px-7 py-3.5 rounded-lg border border-border bg-card hover:border-brand hover:shadow-md transition-all text-foreground font-semibold text-sm group"
          >
            <div className="p-2 rounded-full bg-secondary text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <span className="tracking-wide">Facebook</span>
          </a>

          <a
            href={COMPANY_INFO.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 px-7 py-3.5 rounded-lg border border-border bg-card hover:border-brand hover:shadow-md transition-all text-foreground font-semibold text-sm group"
          >
            <div className="p-2 rounded-full bg-secondary text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <span className="tracking-wide">Instagram</span>
          </a>
        </div>
      </section>
    </div>
  )
}
