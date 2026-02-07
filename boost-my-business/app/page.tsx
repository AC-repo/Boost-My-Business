import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { PricingCard } from "@/components/PricingCard"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-20 space-y-24">
        <Hero />
        <PricingCard />
      </main>
    </>
  )
}
