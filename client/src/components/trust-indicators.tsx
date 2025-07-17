import { Card, CardContent } from "@/components/ui/card";

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl lg:text-5xl font-bold ecd-navy mb-2">
              2012
            </div>
            <p className="text-muted-foreground text-lg">
              Online svaki dan od 2012. godine.
            </p>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold ecd-orange mb-2">
              24/7
            </div>
            <p className="text-muted-foreground text-lg">
              Naš tim za podršku je uvek budan.
            </p>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold ecd-navy mb-2">
              1 min
            </div>
            <p className="text-muted-foreground text-lg">
              Prosečno vreme odgovora u chatu.
            </p>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <Card className="bg-white shadow-lg border">
              <CardContent className="p-6">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center mb-2">
                  <span className="text-sm font-bold text-muted-foreground">NBS</span>
                </div>
                <p className="text-sm text-muted-foreground">Regulisano od strane</p>
                <p className="text-sm font-semibold text-foreground">Narodne banke Srbije</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border">
              <CardContent className="p-6">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center mb-2">
                  <span className="text-sm font-bold text-muted-foreground">APR</span>
                </div>
                <p className="text-sm text-muted-foreground">Registrovano u</p>
                <p className="text-sm font-semibold text-foreground">APR Srbije</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-muted-foreground max-w-4xl mx-auto">
            ECD.rs je prva licencirana kripto menjačnica u Srbiji, regulisana od strane Narodne banke Srbije i 
            registrovana u Agenciji za privredne registre, pružajući sigurne i usaglašene usluge za kupovinu, 
            prodaju i čuvanje kriptovaluta u skladu sa srpskim zakonima i EU regulativama.
          </p>
        </div>
      </div>
    </section>
  );
}
