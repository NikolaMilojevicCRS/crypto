import Header from "@/components/header";
import Hero from "@/components/hero";
import GettingStartedFlow from "@/components/getting-started-flow";
import RegistrationIncentives from "@/components/registration-incentives";
import ECDWalletShowcase from "@/components/ecd-wallet-showcase";
import PriceComparison from "@/components/price-comparison";
import Services from "@/components/services";
import UserAdvantages from "@/components/user-advantages";
import TrustEnhanced from "@/components/trust-enhanced";
import Testimonials from "@/components/testimonials";
import MediaMentions from "@/components/media-mentions";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import StickyCTA from "@/components/sticky-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <GettingStartedFlow />
      <RegistrationIncentives />
      <ECDWalletShowcase />
      <PriceComparison />
      <Services />
      <UserAdvantages />
      <TrustEnhanced />
      <Testimonials />
      <MediaMentions />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
}
