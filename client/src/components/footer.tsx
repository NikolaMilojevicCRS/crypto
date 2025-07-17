import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Usluge",
      links: [
        { label: "Menjačnica", href: "#" },
        { label: "ECD Wallet", href: "#" },
        { label: "Kriptomati", href: "#" },
        { label: "Verifikacija", href: "#" },
        { label: "Plaćanje računa", href: "#" }
      ]
    },
    {
      title: "Kompanija",
      links: [
        { label: "O nama", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Presa", href: "#" },
        { label: "Karijera", href: "#" },
        { label: "Kontakt", href: "#" }
      ]
    },
    {
      title: "Podrška",
      links: [
        { label: "FAQ", href: "#" },
        { label: "24/7 Chat", href: "#" },
        { label: "Email podrška", href: "#" },
        { label: "Bezbednost", href: "#" },
        { label: "Pravni okvir", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">ECD.rs</div>
            <p className="text-gray-400 mb-6">
              Prva licencirana kripto menjačnica u Srbiji. Jednostavne kriptovalute od 2012. godine.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ECD.rs. Sva prava zadržana.</p>
          <p className="mt-2 text-sm">
            ECD.rs je regulisano od strane Narodne banke Srbije i registrovano u Agenciji za privredne registre Republike Srbije.
          </p>
        </div>
      </div>
    </footer>
  );
}
