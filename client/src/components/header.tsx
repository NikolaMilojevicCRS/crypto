import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Početna", href: "#" },
    { label: "Kupi/Prodaj", href: "#kupi-prodaj" },
    { label: "Usluge", href: "#usluge" },
    { label: "O nama", href: "#o-nama" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-ecd-navy border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold ecd-navy dark:text-white">ECD.rs</div>
            </div>
          </div>
          
          {!isMobile && (
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground dark:text-white hover:text-primary dark:hover:ecd-orange px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="outline" className="border-ecd-navy text-ecd-navy hover:bg-ecd-navy hover:text-white">
                Prijavi se
              </Button>
              <Button className="bg-ecd-orange text-white hover:bg-orange-600">
                Registruj se odmah
              </Button>
            </div>
          </div>
          
          {isMobile && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Registruj se
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
