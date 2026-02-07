// components/CTA.tsx
'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  const handleBookNow = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="space-y-6 py-12 text-center">
      <div className="space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Ready to Boost Your Business?</h2>
        <p className="text-lg text-muted-foreground">
          Get expert guidance on your Google Business Profile in just one hour.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="gap-2" onClick={handleBookNow}>
          Book Your Session
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" onClick={handleLearnMore}>
          Learn More
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Limited spots available. First session consultation is complimentary.
      </p>
    </section>
  )
}
