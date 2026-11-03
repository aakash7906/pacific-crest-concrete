import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'
import { Button } from './Button'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('pcc_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('pcc_cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('pcc_cookie_consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-40 bg-card border border-border shadow-lg rounded-lg p-5 animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
          <Cookie className="w-4 h-4 text-brand" />
          <span>This website uses cookies.</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-muted-foreground hover:text-foreground p-1 -mr-1 transition-colors"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        We use cookies to analyze website traffic and optimize your website
        experience. By accepting our use of cookies, your data will be
        aggregated with all other user data.
      </p>

      <div className="flex items-center gap-2 justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDecline}
          className="text-xs h-8"
        >
          Decline
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={handleAccept}
          className="text-xs h-8 font-semibold"
        >
          Accept
        </Button>
      </div>
    </div>
  )
}
