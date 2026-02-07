// components/Hero.tsx
'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  const handleSchedule = () => {
    // Just scroll to the pricing section
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section id="hero" className="space-y-6 py-12">
      <h1 className="text-4xl font-bold leading-tight">
        Book a 1-hour Google Business Profile setup session
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl">
        Live Zoom coaching where we set up or optimize your Google Business
        Profile together, step by step.
      </p>

      <button 
        onClick={handleSchedule}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
      >
        Schedule your session
      </button>
    </section>
  )
}
