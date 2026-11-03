import React, { useState } from 'react'
import { X, CheckCircle, Send, PhoneCall } from 'lucide-react'
import { Button } from '../common/Button'
import { Input, Textarea, Select } from '../common/FormControls'
import { COMPANY_INFO, SERVICES_LIST } from '../../constants/data'

interface QuickEstimateModalProps {
  isOpen: boolean
  onClose: () => void
  defaultService?: string
}

export function QuickEstimateModal({
  isOpen,
  onClose,
  defaultService = '',
}: QuickEstimateModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'commercial',
    service: defaultService || SERVICES_LIST[0],
    city: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'commercial',
      service: SERVICES_LIST[0],
      city: '',
      notes: '',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dark/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-xl bg-card border border-border shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-success/10 text-success flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Quote Request Received
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Thank you, {formData.name}. Our project management team will
              review your details and follow up with you promptly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" onClick={handleReset}>
                Done
              </Button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-md border border-border bg-background text-foreground hover:bg-secondary"
              >
                <PhoneCall className="w-4 h-4 text-brand" />
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Free Consultation & Bid
              </span>
              <h2 className="text-2xl font-bold text-foreground tracking-tight mt-1">
                Request a Project Estimate
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Commercial or residential concrete work across Southern
                California.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="modal-name"
                  label="Your Name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  id="modal-phone"
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
                  id="modal-email"
                  label="Email Address"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Input
                  id="modal-city"
                  label="Project City / Area"
                  placeholder="e.g. Menifee, San Diego, LA"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  id="modal-projectType"
                  label="Project Scope"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  options={[
                    { label: 'Commercial Project', value: 'commercial' },
                    { label: 'Residential Project', value: 'residential' },
                    { label: 'Industrial / Tenant Improvement', value: 'industrial' },
                  ]}
                />
                <Select
                  id="modal-service"
                  label="Primary Service Needed"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  options={SERVICES_LIST.map((s) => ({ label: s, value: s }))}
                />
              </div>

              <Textarea
                id="modal-notes"
                label="Project Details or Scope"
                rows={3}
                placeholder="Square footage, timeline, site access, or specific requirements..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="brand"
                  disabled={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
