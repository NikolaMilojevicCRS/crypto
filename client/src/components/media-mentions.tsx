export default function MediaMentions() {
  const mediaLogos = [
    "Blic", "Ekapija", "Beta", "Tanjug", "N1", "RTS"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Viđeni u medijima
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <div className="bg-muted rounded px-6 py-3">
                <span className="text-sm font-semibold text-muted-foreground">
                  {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
