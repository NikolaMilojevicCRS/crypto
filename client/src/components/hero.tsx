import { Button } from "@/components/ui/button";
import ExchangeCalculator from "@/components/exchange-calculator";

export default function Hero() {
  return (
    <section className="crypto-gradient py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Jednostavne kripto<br />
              <span className="ecd-orange">od 2012. godine.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Kupujte i prodajte kriptovalute{" "}
              <span className="font-semibold">bez registracije</span> po trenutnom kursu,
              direktno sa vašeg bankovnog računa, kartice ili novčanika.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-ecd-orange text-white hover:bg-orange-600 text-lg px-8 py-4"
              >
                Kupi kripto
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-ecd-navy text-ecd-navy hover:bg-ecd-navy hover:text-white text-lg px-8 py-4"
              >
                Preuzmi Wallet
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <span className="font-medium">Registruj se</span> da otkucaš bolje cene, pratiš portfolio i čuvaš kripto na našoj platformi.
            </p>
          </div>
          
          <ExchangeCalculator />
        </div>
      </div>
    </section>
  );
}
