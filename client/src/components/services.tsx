import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRightLeft, 
  Wallet, 
  MapPin, 
  UserCheck, 
  FileText, 
  Handshake,
  ArrowRight 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ArrowRightLeft,
      title: "KRIPTO MENJAČNICA",
      description: "Kupuj, prodaj ili menjaj kriptovalute za samo nekoliko klikova.",
      link: "Počni trgovinu",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Wallet,
      title: "ECD WALLET",
      description: "Mobilna aplikacija sa podrškom za 16+ kriptovaluta. Preko 65.000 preuzimanja.",
      link: "Preuzmi aplikaciju",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: MapPin,
      title: "KRIPTOMATI",
      description: "Kupuj i prodaj kripto za gotovinu na našim partnerskim lokacijama.",
      link: "Nađi lokaciju",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: UserCheck,
      title: "VERIFIKACIJA",
      description: "Video identifikacija ili lična verifikacija na više lokacija u Srbiji.",
      link: "Verifikuj nalog",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: FileText,
      title: "PLAĆANJE RAČUNA",
      description: "Koristi kripto za plaćanje bilo kog računa koji zahteva bankovno plaćanje.",
      link: "Plati račun",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Handshake,
      title: "PERSONALIZOVANA TRGOVINA",
      description: "Personalizovana pomoć za velike kripto transakcije.",
      link: "Kontaktiraj nas",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Naše usluge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompletno rešenje za trgovinu kriptovalutama u Srbiji
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`${service.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                  >
                    {service.link} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
