import { CTAButton } from "@/components/CTAButton"

export function Hero() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold leading-tight">
        Book a 1-hour Google Business Profile setup session
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl">
        Live Zoom coaching where we set up or optimize your Google Business
        Profile together, step by step.
      </p>

      <CTAButton />
    </section>
  )
}
