import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Zap } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosable, setIsClosable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldShow = scrollTop > 300; // Show after scrolling 300px
      setIsVisible(shouldShow);
      
      // Make it closable after user scrolls more
      if (scrollTop > 1000) {
        setIsClosable(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-ecd-orange text-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4 max-w-sm">
        <Zap className="h-5 w-5" />
        <div className="flex-1">
          <p className="font-semibold text-sm">0% provizija ističe uskoro!</p>
        </div>
        <Button 
          size="sm"
          className="bg-white text-ecd-orange hover:bg-gray-100 text-xs px-3 py-1 h-auto"
        >
          Počni odmah
        </Button>
        {isClosable && (
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}