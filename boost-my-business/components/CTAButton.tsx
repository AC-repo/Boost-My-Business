'use client'

import { Button } from "@/components/ui/button"

export function CTAButton() {
  const handleClick = () => {
    // Scroll to pricing section
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <Button size="lg" onClick={handleClick}>
      Schedule your session
    </Button>
  )
}
