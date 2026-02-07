// components/Features.tsx
import { Zap, Target, Users, TrendingUp, Shield, Clock } from 'lucide-react'

const features = [
  {
    title: 'Quick Turnaround',
    description: 'Get results in just one 60-minute session',
    icon: Clock,
  },
  {
    title: 'Boost Visibility',
    description: 'Appear higher in local Google search results',
    icon: Zap,
  },
  {
    title: 'Attract Customers',
    description: 'Get more calls, messages, and website visits',
    icon: Target,
  },
  {
    title: 'Build Trust',
    description: 'Professional profile increases customer confidence',
    icon: Shield,
  },
  {
    title: 'Grow Faster',
    description: 'Leverage Google Business Profile for sustainable growth',
    icon: TrendingUp,
  },
  {
    title: 'Personal Support',
    description: 'Dedicated coaching tailored to your business needs',
    icon: Users,
  },
]

export function Features() {
  return (
    <section className="space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">What You'll Get</h2>
        <p className="text-lg text-muted-foreground">
          Complete support to optimize your business online
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg border bg-card hover:border-accent/50 transition-colors"
          >
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <feature.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
