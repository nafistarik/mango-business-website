import AboutSection from "@/app/_components/about-section";
import ContactSection from "@/app/_components/contact-section";
import FAQSection from "@/app/_components/faq-section";
import HeroSection from "@/app/_components/hero-section";
import MangoList from "@/app/_components/mango-list";
import ReviewSection from "@/app/_components/review-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <HeroSection />
      <AboutSection />
      <MangoList />
      <ReviewSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
