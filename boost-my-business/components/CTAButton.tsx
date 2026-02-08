'use client'

import { Button } from "@/components/ui/button"

export function CTAButton() {
  return (
    <Button 
      size="lg" 
      onClick={() => window.open('https://calendly.com/boostmybusinesstoday/60min', '_blank')}
    >
      Schedule your session
    </Button>
  )
}