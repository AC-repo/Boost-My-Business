// components/CTA.tsx
'use client'

export function CTA() {
  const handleLearnMore = () => {
    setTimeout(() => {
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section className="space-y-6 py-12 text-center">
      <div className="space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Ready to Boost Your Business?</h2>
        <p className="text-lg text-muted-foreground">
          Book one of our expert boosters on your Google Business Profile in under one hour!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => window.open('https://calendly.com/boostmybusinesstoday/60min', '_blank')}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
        >
          Book Your Session
        </button>
        <button
          onClick={handleLearnMore}
          className="px-6 py-2 border border-black text-black rounded-lg hover:bg-gray-100 transition font-medium"
        >
          Learn More
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        Open calendar this month, limited spots available!
      </p>
    </section>
  )
}