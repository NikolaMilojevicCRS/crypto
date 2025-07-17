import Header from "@/components/header";
import Hero from "@/components/hero";
import RegistrationIncentives from "@/components/registration-incentives";
import PriceComparison from "@/components/price-comparison";
import Services from "@/components/services";
import UserAdvantages from "@/components/user-advantages";
import TrustIndicators from "@/components/trust-indicators";
import Testimonials from "@/components/testimonials";
import MediaMentions from "@/components/media-mentions";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RegistrationIncentives />
      <PriceComparison />
      <Services />
      <UserAdvantages />
      <TrustIndicators />
      <Testimonials />
      <MediaMentions />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
