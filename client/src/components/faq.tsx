import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);

  const faqItems = [
    {
      id: "faq-1",
      question: "Kako da kupim Bitcoin?",
      answer: "Ako nemate svoj kripto novčanik, najjednostavniji način kupovine Bitcoina je kreiranje ECD.rs korisničkog naloga. Zatim, napravite depozit slanjem dinara putem bankovnog transfera. Sada imate sredstva u okviru vašeg korisničkog naloga, koja možete koristiti za kupovinu Bitcoina."
    },
    {
      id: "faq-2",
      question: "Kako da prodam Bitcoin za dinare?",
      answer: "Ako želite da primate dinare na vaš bankovni račun, najjednostavniji način je prodaja Bitcoina kroz direktnu transakciju. Vi šaljete Bitcoin transakciju na našu Bitcoin adresu, dok mi vama šaljemo dinare na vašu adresu bankovnog računa."
    },
    {
      id: "faq-3",
      question: "Kako da menjam jednu kriptovalutu za drugu?",
      answer: "Možete koristiti direktnu transakciju ili kreirati korisnički nalog. Za direktnu transakciju, šaljete nam jednu kriptovalutu na našu adresu, dok mi vama šaljemo drugu kriptovalutu na vašu adresu."
    },
    {
      id: "faq-4",
      question: "Kako da kupim Bitcoin bez verifikacije identiteta?",
      answer: "Možete koristiti menjačnicu kroz direktnu transakciju (bankovni ili kripto prenos) bez verifikacije identiteta za iznose manje od 1000 EUR u toku 30 dana."
    },
    {
      id: "faq-5",
      question: "Kako da kupim Bitcoin kreditnom karticom?",
      answer: "Možete kupiti Bitcoin direktno preko našeg sajta, birajući \"Plaćanje karticom\" kao način plaćanja. Podržavamo sve popularne kreditne i debitne kartice."
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Često postavljana pitanja
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <Card key={item.id} className="bg-white shadow-sm border">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-semibold text-foreground">
                      {item.question}
                    </span>
                    {activeFAQ === item.id ? (
                      <ChevronUp className="text-muted-foreground h-5 w-5" />
                    ) : (
                      <ChevronDown className="text-muted-foreground h-5 w-5" />
                    )}
                  </button>
                  {activeFAQ === item.id && (
                    <div className="px-6 pb-4 text-muted-foreground">
                      {item.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="link" className="text-primary hover:text-primary/80">
              Pročitaj više u FAQ sekciji <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
