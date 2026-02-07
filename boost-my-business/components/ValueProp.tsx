// components/ValueProp.tsx
import { Check } from 'lucide-react'

const valueProps = [
  {
    title: 'Expert Setup',
    description: 'Professional guidance through every step of your Google Business Profile optimization',
    icon: Check,
  },
  {
    title: 'Live Coaching',
    description: 'Real-time support via Zoom with screen sharing for hands-on assistance',
    icon: Check,
  },
  {
    title: 'Actionable Results',
    description: 'Walk away with a fully optimized profile ready to attract customers',
    icon: Check,
  },
]

export function ValueProp() {
  return (
    <section className="space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Why Choose Our Coaching</h2>
        <p className="text-lg text-muted-foreground">
          Get expert help to maximize your online visibility
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valueProps.map((prop) => (
          <div key={prop.title} className="space-y-3 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <prop.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">{prop.title}</h3>
            <p className="text-sm text-muted-foreground">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
