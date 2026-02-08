'use client'

import { Card } from '@/components/ui/card'

export function PricingCard() {
  const handleSchedule = () => {
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section id="pricing" className="space-y-12 py-12">
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
              <span className="text-black font-bold mt-0.5">✓</span>
              <span className="text-sm">Live Zoom session with expert coach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black font-bold mt-0.5">✓</span>
              <span className="text-sm">Google Business Profile setup + cleanup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black font-bold mt-0.5">✓</span>
              <span className="text-sm">Verification guidance & best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black font-bold mt-0.5">✓</span>
              <span className="text-sm">Local SEO optimization tips</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black font-bold mt-0.5">✓</span>
              <span className="text-sm">Screen sharing & hands-on help</span>
            </li>
          </ul>

          <button
  onClick={() => window.open('https://calendly.com/boostmybusinesstoday/60min', '_blank')}
  className="w-full px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
>
  Schedule your session
</button>

          <p className="text-xs text-center text-muted-foreground">
          </p>
        </Card>
      </div>
    </section>
  )
}