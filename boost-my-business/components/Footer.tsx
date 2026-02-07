// components/Footer.tsx
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-semibold">Boost My Business</h3>
            <p className="text-sm text-muted-foreground">
              Expert Google Business Profile coaching for small business owners.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Boost My Business. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="hover:text-foreground transition">
              Twitter
            </Link>
            <Link href="https://instagram.com" className="hover:text-foreground transition">
              Instagram
            </Link>
            <Link href="https://linkedin.com" className="hover:text-foreground transition">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
