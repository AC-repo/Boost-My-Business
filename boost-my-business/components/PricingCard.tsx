// components/PricingCard.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export function PricingCard() {
  const handleSchedule = () => {
    // Option 1: Scroll to contact form
    const contactForm = document.querySelector('textarea')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
    // Option 2: Navigate to contact page
    // window.location.href = '/contact'
  }

  return (
    <section id="pricing" className="space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-lg text-muted-foreground">
          One straightforward price for complete Google Business Profile guidance
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">$100</h3>
            <p className="text-muted-foreground">1 Hour Session</p>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-sm">Live Zoom session with expert coach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-sm">Google Business Profile setup or cleanup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-sm">Verification guidance & best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-sm">Local SEO optimization tips</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-sm">Screen sharing & hands-on help</span>
            </li>
          </ul>

          <Button size="lg" className="w-full" onClick={handleSchedule}>
            Schedule your session
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            First consultation is complimentary • Cancel anytime
          </p>
        </Card>
      </div>
    </section>
  )
}
