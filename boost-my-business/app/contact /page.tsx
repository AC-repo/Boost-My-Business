import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-12">
          <div className="space-y-3 text-center">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? Send us a message.
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}