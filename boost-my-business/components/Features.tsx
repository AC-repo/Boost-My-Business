// components/Features.tsx
import { Zap, Target, Users, TrendingUp, Shield, Clock } from 'lucide-react'

const features = [
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
    description: 'A complete, verified profile helps customers feel confident',
    icon: Shield,
  },
  {
    title: 'Quick Turnaround',
    description: 'A focused 60-minute session to get things set up correctly',
    icon: Clock,
  },
  {
    title: 'Grow Sustainably',
    description: 'Use your Google profile as your business continues to grow',
    icon: TrendingUp,
  },
  {
    title: 'Profile Coaching',
    description: 'Learn how to confidently update your profile over time',
    icon: Users,
  },
]

export function Features() {
  return (
    <section id="features" className="space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">What You’ll Get</h2>
        <p className="text-lg text-muted-foreground">
          Clear guidance to help your business show up correctly on Google
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg border bg-card hover:border-black/50 transition-colors"
          >
            <div className="h-10 w-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
              <feature.icon className="h-5 w-5 text-black" />
            </div>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
