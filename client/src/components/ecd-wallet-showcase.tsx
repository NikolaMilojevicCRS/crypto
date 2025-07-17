import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Star, Shield, Zap, Eye, Bell, BarChart3 } from "lucide-react";

export default function ECDWalletShowcase() {
  const features = [
    {
      icon: Zap,
      title: "Instant kupovina",
      description: "Kupi kripto u samo nekoliko klikova"
    },
    {
      icon: Shield,
      title: "Bank-level sigurnost",
      description: "2FA, biometrija i šifrovanje"
    },
    {
      icon: Eye,
      title: "Portfolio pregled",
      description: "Prati sve investicije u realnom vremenu"
    },
    {
      icon: Bell,
      title: "Cenovni aleri",
      description: "Budi obaveštavan o promenama kursa"
    }
  ];

  return (
    <section className="py-16 bg-ecd-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <Badge className="bg-ecd-orange text-white mb-4">ECD WALLET</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              U džepu nosiš svoju menjačnicu
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Napredna mobilna aplikacija za potpunu kontrolu nad vašim kripto portfolijom. 
              Dostupna 24/7, gde god da se nalazite.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-ecd-orange/20 rounded-lg p-2">
                      <IconComponent className="h-5 w-5 text-ecd-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button className="bg-ecd-orange text-white hover:bg-orange-600 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Preuzmi za Android</span>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ecd-navy flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Preuzmi za iOS</span>
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-ecd-orange fill-current" />
                ))}
                <span className="text-white/80 ml-2">4.8/5</span>
              </div>
              <span className="text-white/60">•</span>
              <span className="text-white/80">50,000+ preuzimanja</span>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] w-72 h-[600px] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-ecd-navy h-8 flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-ecd-navy mb-2">ECD Wallet</h3>
                      <p className="text-gray-600">Vaš kripto portfolio</p>
                    </div>
                    
                    {/* Balance card */}
                    <Card className="bg-gradient-to-r from-ecd-navy to-ecd-orange text-white mb-6">
                      <CardContent className="p-4">
                        <p className="text-white/80 text-sm">Ukupna vrednost</p>
                        <p className="text-2xl font-bold">1,245,680 RSD</p>
                        <p className="text-green-200 text-sm">+12.5% danas</p>
                      </CardContent>
                    </Card>
                    
                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <Button className="bg-ecd-orange text-white h-12">
                        Kupi
                      </Button>
                      <Button variant="outline" className="border-ecd-navy text-ecd-navy h-12">
                        Prodaj
                      </Button>
                    </div>
                    
                    {/* Portfolio list */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">₿</div>
                          <div>
                            <p className="font-semibold text-sm">Bitcoin</p>
                            <p className="text-xs text-gray-600">BTC</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">0.0234 BTC</p>
                          <p className="text-xs text-green-600">+5.2%</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">Ξ</div>
                          <div>
                            <p className="font-semibold text-sm">Ethereum</p>
                            <p className="text-xs text-gray-600">ETH</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">2.45 ETH</p>
                          <p className="text-xs text-red-600">-1.1%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* QR Code floating */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                <div className="w-20 h-20 bg-gradient-to-br from-ecd-navy to-ecd-orange rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-ecd-navy" />
                  </div>
                </div>
                <p className="text-xs text-center mt-2 text-gray-600">Skeniraj za preuzimanje</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}