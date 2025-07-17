import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

export default function PriceComparison() {
  const competitors = [
    {
      name: "ECD.rs",
      price: "107,250 RSD",
      fee: "0.5%",
      verification: "Video ID",
      speed: "Instant",
      support: "24/7",
      isOurs: true
    },
    {
      name: "Konkurent A",
      price: "106,800 RSD", 
      fee: "1.2%",
      verification: "Lično",
      speed: "1-3h",
      support: "9-17h",
      isOurs: false
    },
    {
      name: "Konkurent B",
      price: "107,100 RSD",
      fee: "1.5%", 
      verification: "Lično",
      speed: "2-6h",
      support: "Email",
      isOurs: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Zašto biraju baš nas?
          </h2>
          <p className="text-xl text-muted-foreground">
            Poredite i vidite zašto smo najbolji izbor za kripto trgovinu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competitors.map((competitor, index) => (
            <Card key={index} className={`shadow-lg border-2 transition-all duration-300 ${
              competitor.isOurs 
                ? 'border-ecd-orange bg-gradient-to-br from-ecd-navy/5 to-ecd-orange/5 transform scale-105' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <h3 className={`text-xl font-bold ${competitor.isOurs ? 'ecd-navy' : 'text-gray-700'}`}>
                      {competitor.name}
                    </h3>
                    {competitor.isOurs && (
                      <Badge className="ml-2 bg-ecd-orange text-white">NAJBOLJI</Badge>
                    )}
                  </div>
                  <div className={`text-2xl font-bold ${competitor.isOurs ? 'ecd-orange' : 'text-gray-600'}`}>
                    {competitor.price}
                  </div>
                  <div className="text-sm text-muted-foreground">za 1 BTC</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Provizija:</span>
                    <span className={`font-semibold ${competitor.isOurs ? 'ecd-navy' : ''}`}>
                      {competitor.fee}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Verifikacija:</span>
                    <span className={`font-semibold ${competitor.isOurs ? 'ecd-navy' : ''}`}>
                      {competitor.verification}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Brzina:</span>
                    <div className="flex items-center">
                      {competitor.isOurs ? (
                        <CheckCircle className="text-green-600 h-4 w-4 mr-1" />
                      ) : (
                        <X className="text-red-500 h-4 w-4 mr-1" />
                      )}
                      <span className={`font-semibold ${competitor.isOurs ? 'ecd-navy' : ''}`}>
                        {competitor.speed}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Podrška:</span>
                    <div className="flex items-center">
                      {competitor.isOurs ? (
                        <CheckCircle className="text-green-600 h-4 w-4 mr-1" />
                      ) : (
                        <X className="text-red-500 h-4 w-4 mr-1" />
                      )}
                      <span className={`font-semibold ${competitor.isOurs ? 'ecd-navy' : ''}`}>
                        {competitor.support}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            * Cene se ažuriraju u realnom vremenu i mogu se razlikovati
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-600 h-5 w-5" />
              <span className="text-green-700 font-semibold">
                Registrovani korisnici dobijaju dodatno 0.2% bolji kurs!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}