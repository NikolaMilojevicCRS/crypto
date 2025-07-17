import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function TrustEnhanced() {
  const trustMetrics = [
    {
      icon: Users,
      number: "65,000+",
      label: "Aktivnih korisnika",
      subtext: "Verifikovanih naloga",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      number: "€2.5M+", 
      label: "Dnevni volumen",
      subtext: "Prosečno trgovanje",
      color: "text-green-600"
    },
    {
      icon: Clock,
      number: "13",
      label: "Godina iskustva",
      subtext: "Od 2012. godine",
      color: "text-ecd-navy"
    },
    {
      icon: Award,
      number: "4.8/5",
      label: "Korisničke ocene",
      subtext: "Preko 2,500 recenzija",
      color: "text-ecd-orange"
    }
  ];

  const certifications = [
    {
      name: "Narodna banka Srbije",
      description: "Licencirani pružalac usluga digitalnih mena",
      badge: "NBS LICENCA",
      verified: true
    },
    {
      name: "ISO 27001",
      description: "Međunarodni standard za bezbednost informacija",
      badge: "SERTIFIKAT",
      verified: true
    },
    {
      name: "PCI DSS",
      description: "Standard bezbednosti za kartične transakcije",
      badge: "COMPLIANCE",
      verified: true
    }
  ];

  const securityFeatures = [
    "Dvostruka autentifikacija (2FA)",
    "Cold storage za 95% sredstava",
    "24/7 monitoring transakcija",
    "Osiguranje korisničkih sredstava",
    "SSL šifrovanje svih podataka",
    "Biometrijska autentifikacija"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-green-600 text-white mb-4">POUZDANOST I SIGURNOST</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Prepoznati od strane 65,000+ korisnika
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jedina licencirana kripto menjačnica u Srbiji sa 13 godina nepreksidnog rada
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${metric.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${metric.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.subtext}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Službeno regulisani i sertifikovani
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-600 h-8 w-8" />
                </div>
                <Badge className="bg-green-600 text-white mb-3">{cert.badge}</Badge>
                <h4 className="font-bold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                {cert.verified && (
                  <div className="flex items-center justify-center mt-2">
                    <CheckCircle className="text-green-600 h-4 w-4 mr-1" />
                    <span className="text-xs text-green-600 font-medium">Verifikovano</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <Card className="bg-ecd-navy text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Bank-level sigurnost</h3>
              <p className="text-white/80">
                Vaša sredstva su zaštićena najnaprednijim sigurnosnim protokolima
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-ecd-orange h-5 w-5 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Badge className="bg-ecd-orange text-white px-6 py-2">
                0% Hakovanja od osnivanja
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}