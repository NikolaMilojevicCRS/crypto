import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, TrendingUp, Shield, Clock, Users } from "lucide-react";

export default function RegistrationIncentives() {
  const incentives = [
    {
      icon: Gift,
      title: "Besplatni trading",
      description: "0% provizija na prve 3 transakcije",
      badge: "NOVO",
      color: "text-ecd-orange bg-ecd-orange/10"
    },
    {
      icon: TrendingUp,
      title: "Bolji kursevi",
      description: "Do 2% povoljniji kurs za registrovane",
      badge: "UŠTEDA",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Shield,
      title: "Maksimalna sigurnost",
      description: "Dvojna autentifikacija i osiguranje",
      badge: "SIGURNOST",
      color: "text-blue-600 bg-blue-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-ecd-navy/5 to-ecd-orange/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Zašto se registrovati danas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pristupite ekskluzivnim pogodnostima i bolje kontroli nad vašim kripto portfolijom
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {incentives.map((incentive, index) => {
            const IconComponent = incentive.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-ecd-orange/30">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 ${incentive.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="absolute -top-2 -right-8 bg-ecd-orange text-white">
                      {incentive.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {incentive.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {incentive.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Users className="text-ecd-navy h-8 w-8" />
              <div>
                <div className="text-2xl font-bold ecd-navy">65,000+</div>
                <p className="text-sm text-muted-foreground">Aktivnih korisnika</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="text-ecd-orange h-8 w-8" />
              <div>
                <div className="text-2xl font-bold ecd-orange">4.8/5</div>
                <p className="text-sm text-muted-foreground">Google Play ocena</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="text-ecd-navy h-8 w-8" />
              <div>
                <div className="text-2xl font-bold ecd-navy">13</div>
                <p className="text-sm text-muted-foreground">Godina iskustva</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strong CTA */}
        <div className="text-center">
          <div className="bg-ecd-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Registruj se za 30 sekundi i počni odmah!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Samo email adresa i lozinka - bez komplikacija
            </p>
            <Button 
              size="lg"
              className="bg-ecd-orange text-white hover:bg-orange-600 text-lg px-12 py-4 mb-4"
            >
              Kreiraj besplatan nalog
            </Button>
            <p className="text-sm opacity-75">
              ✓ Verifikacija kasnije  ✓ Bez skrivenih troškova  ✓ Instant pristup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}