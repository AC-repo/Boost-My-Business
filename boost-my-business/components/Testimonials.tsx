// components/Testimonials.tsx
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Anderson',
    role: 'Lash Technician Business Owner',
    content:
      'My 1x1 coaching session really transformed how I present my business online. Within weeks, I saw a surge in customer inquiries.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Plumbing + Electrical Business Owner',
    content:
      'The guidance was clear and easy to follow. Our Google Business Profile now stands out against the other plumbers in my area, and we are getting more customers than ever before!',
    rating: 5,
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Party Planning Business Owner',
    content:
      "The coaching was worth every penny. I learned optimization tricks I didn't know about, and my profile is finally a lead-generating machine.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <p className="text-lg text-muted-foreground">
          Real results from real business owners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="p-6 flex flex-col gap-4">
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-black text-black" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
              "{testimonial.content}"
            </p>
            <div className="space-y-1 pt-4 border-t">
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}