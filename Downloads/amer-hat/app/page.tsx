import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MangoList from "@/components/mango-list"
import FAQSection from "@/components/faq-section"
import ReviewSection from "@/components/review-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="overflow-x-hidden" >
      <HeroSection />
      <AboutSection />
      <MangoList />
      <ReviewSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
