import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Zap, CheckCircle } from "lucide-react";

export default function UserAdvantages() {
  const userAccountAdvantages = [
    "Najjednostavniji način kupovine kripto.",
    "Nije potreban kripto novčanik, samo nalog.",
    "Trgovina po najpovoljnijem kursu.",
    "Praćenje vrednosti portfolija kroz vreme."
  ];

  const directTransactionAdvantages = [
    "Nije potrebno kreiranje naloga. Tvoji ključevi, tvoji novčići.",
    "Sredstva se šalju direktno u kripto novčanik ili na bankovni račun.",
    "Kurs je fiksiran pre slanja sredstava.",
    "Bez verifikacije identiteta za iznose do 1000 EUR u 30 dana."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Prednosti
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Account */}
          <Card className="bg-ecd-navy/5 border-2 border-ecd-navy/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-ecd-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Korisnički nalog
                </h3>
              </div>
              <ul className="space-y-4">
                {userAccountAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-ecd-navy flex-shrink-0 mt-1 h-5 w-5" />
                    <span className="text-muted-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-ecd-navy text-white hover:bg-ecd-navy/90">
                Registruj se
              </Button>
            </CardContent>
          </Card>
          
          {/* Direct Transaction */}
          <Card className="bg-ecd-orange/5 border-2 border-ecd-orange/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-ecd-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Direktna transakcija
                </h3>
              </div>
              <ul className="space-y-4">
                {directTransactionAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-ecd-orange flex-shrink-0 mt-1 h-5 w-5" />
                    <span className="text-muted-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-ecd-orange text-white hover:bg-orange-600">
                Razmeni odmah
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
