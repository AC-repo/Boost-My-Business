// components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleFeatures = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handlePricing = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <nav className="w-full border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-semibold text-lg hover:text-black transition">
            Boost My Business
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleFeatures}
              className="text-sm text-gray-600 hover:text-black transition"
            >
              Features
            </button>
            <button
              onClick={handlePricing}
              className="text-sm text-gray-600 hover:text-black transition"
            >
              Pricing
            </button>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-black transition"
            >
              Contact
            </Link>
            <button
              onClick={handleBookNow}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t pt-4">
            <button
              onClick={handleFeatures}
              className="block text-sm text-gray-600 hover:text-black transition py-2 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={handlePricing}
              className="block text-sm text-gray-600 hover:text-black transition py-2 w-full text-left"
            >
              Pricing
            </button>
            <Link
              href="/contact"
              className="block text-sm text-gray-600 hover:text-black transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={handleBookNow}
              className="w-full mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
