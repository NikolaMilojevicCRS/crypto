import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-ecd-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Spreman za kripto trgovinu?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Pridruži se hiljadama zadovoljnih korisnika koji veruju ECD.rs-u za svoje kripto potrebe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-ecd-orange text-white hover:bg-orange-600 px-8 py-4 text-lg"
          >
            Registruj se besplatno
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-ecd-navy px-8 py-4 text-lg"
          >
            Počni trgovinu
          </Button>
        </div>
      </div>
    </section>
  );
}
