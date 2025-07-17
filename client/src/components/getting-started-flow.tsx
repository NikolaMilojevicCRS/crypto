import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, UserPlus, Smartphone, ShieldCheck, TrendingUp } from "lucide-react";

export default function GettingStartedFlow() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Registruj se za 30 sekundi",
      description: "Samo email i lozinka - bez komplikacija",
      time: "30 sek",
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "02", 
      icon: Smartphone,
      title: "Preuzmi ECD Wallet",
      description: "Mobilna aplikacija za potpunu kontrolu",
      time: "1 min",
      color: "bg-green-100 text-green-600"
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Verifikuj identitet",
      description: "Video poziv za maksimalnu sigurnost",
      time: "5 min",
      color: "bg-purple-100 text-purple-600"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Počni sa tradingom",
      description: "0% provizija na prve 3 transakcije",
      time: "Odmah",
      color: "bg-ecd-orange/20 text-ecd-orange"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-ecd-navy text-white mb-4">KAKO DA POČNETE</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Najbrži način da kupite Bitcoin u Srbiji
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Od registracije do prve kupovine za manje od 10 minuta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-ecd-orange/30 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className="text-6xl font-bold text-gray-100 mb-2">{step.number}</div>
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto -mt-8 mb-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {step.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {step.time}
                    </Badge>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-ecd-orange h-6 w-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sticky CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-ecd-orange/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prvi put kupuješ kripto? Počni ovde!
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-ecd-orange text-white hover:bg-orange-600 text-lg px-8 py-4"
              >
                Kreiraj besplatan nalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-ecd-navy text-ecd-navy hover:bg-ecd-navy hover:text-white text-lg px-8 py-4"
              >
                Već imaš Wallet? Prijavi se
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Bez skrivenih troškova  ✓ NBS licencirani  ✓ 24/7 podrška
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}