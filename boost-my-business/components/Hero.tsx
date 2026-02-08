// components/Hero.tsx
'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="hero" className="space-y-6 py-8">
      <h1 className="text-5xl font-bold leading-tight">
        Book a 1-hour Google Business Profile setup session
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl">
        Live Zoom coaching where we set up + optimize your Google Business
        Profile together, step by step.
      </p>

      <button 
        onClick={() => window.open('https://calendly.com/boostmybusinesstoday/60min', '_blank')}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition font-medium text-base"
      >
        Schedule your session
      </button>
    </section>
  )
}