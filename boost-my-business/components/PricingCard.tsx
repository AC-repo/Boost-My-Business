import { Card, CardContent } from "@/components/ui/card"
import { CTAButton } from "@/components/CTAButton"

export function PricingCard() {
  return (
    <Card className="max-w-md">
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-2xl font-semibold">$100 · 1 Hour</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          <li>Live Zoom session</li>
          <li>Google Business Profile setup or cleanup</li>
          <li>Verification guidance</li>
          <li>Local SEO best practices</li>
        </ul>
        <CTAButton />
      </CardContent>
    </Card>
  )
}
