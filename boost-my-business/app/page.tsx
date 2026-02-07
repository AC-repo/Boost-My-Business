import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ValueProp } from "@/components/ValueProp"
import { Features } from "@/components/Features"
import { PricingCard } from "@/components/PricingCard"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-20 space-y-24">
        <Hero />
        <ValueProp />
        <Features />
        <PricingCard />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
