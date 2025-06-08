import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { GamesSection } from "@/components/sections/games-section"
import { TutorialsSection } from "@/components/sections/tutorials-section"
import { InternshipSection } from "@/components/sections/internship-section"
import { TeamSection } from "@/components/sections/team-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />
      <HeroSection />
      <GamesSection />
      <TutorialsSection />
      <InternshipSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
