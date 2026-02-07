import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTAButton() {
  return (
    <Button asChild size="lg">
      <Link href="/schedule">Schedule your session</Link>
    </Button>
  )
}
