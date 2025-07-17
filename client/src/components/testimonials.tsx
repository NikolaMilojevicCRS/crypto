import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marko Petrović",
      location: "Beograd",
      rating: 5,
      text: "Koristim ECD već 3 godine. Najbrža verifikacija u Srbiji, odličan kurs i podrška uvek dostupna.",
      crypto: "BTC trader"
    },
    {
      name: "Ana Nikolić",
      location: "Novi Sad", 
      rating: 5,
      text: "Konačno menjačnica koja je stvarno licencirana! Osećam se sigurno sa mojim investicijama.",
      crypto: "ETH investor"
    },
    {
      name: "Stefan Jovanović",
      location: "Niš",
      rating: 5,
      text: "ECD Wallet aplikacija je fantastična. Sve na jednom mestu - kupovina, prodaja, čuvanje.",
      crypto: "Crypto beginner"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Šta kažu naši korisnici
          </h2>
          <p className="text-xl text-muted-foreground">
            Pridruži se hiljadama zadovoljnih korisnika
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="text-ecd-orange h-6 w-6 mr-2" />
                  <div className="flex text-ecd-orange">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-ecd-navy font-medium mt-1">{testimonial.crypto}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <Star className="text-ecd-orange h-5 w-5 fill-current mr-2" />
            <span className="font-semibold text-foreground">4.8/5 ocena</span>
            <span className="text-muted-foreground mx-2">•</span>
            <span className="text-muted-foreground">Preko 2,500+ recenzija</span>
          </div>
        </div>
      </div>
    </section>
  );
}