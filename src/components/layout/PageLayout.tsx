import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CookieBanner } from '../common/CookieBanner'
import { AutoHidingScrollbar } from '../common/AutoHidingScrollbar'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-brand selection:text-brand-foreground">
      <Navbar />
      <main className="flex-1 w-full pt-14 sm:pt-16">{children}</main>
      <Footer />
      <CookieBanner />
      <AutoHidingScrollbar />
    </div>
  )
}
