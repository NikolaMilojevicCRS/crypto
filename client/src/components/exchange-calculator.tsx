import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExchangeCalculator() {
  const [sendAmount, setSendAmount] = useState("1000");
  const [sendCurrency, setSendCurrency] = useState("RSD");
  const [receiveCurrency, setReceiveCurrency] = useState("BTC");
  
  // Mock exchange rate calculation
  const exchangeRate = 107000; // 1 BTC = 107,000 RSD
  const calculatedAmount = sendCurrency === "RSD" 
    ? (parseFloat(sendAmount) / exchangeRate).toFixed(8)
    : (parseFloat(sendAmount) * exchangeRate).toFixed(2);

  const handleSwapCurrencies = () => {
    const tempCurrency = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(tempCurrency);
    setSendAmount(calculatedAmount);
  };

  return (
    <Card className="bg-white rounded-2xl shadow-xl border">
      <CardContent className="p-6 space-y-6">
        {/* You Send Section */}
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">
            Šalješ
          </Label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="text-lg font-semibold p-4"
                placeholder="1000"
              />
            </div>
            <div className="flex items-center space-x-2 bg-muted px-4 py-4 rounded-lg min-w-[120px]">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">
                  {sendCurrency === "RSD" ? "₹" : "₿"}
                </span>
              </div>
              <span className="font-semibold text-foreground">{sendCurrency}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Način plaćanja: {sendCurrency === "RSD" ? "Bankarski transfer (RSD)" : "Bitcoin"}
          </p>
        </div>
        
        {/* Exchange Button */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSwapCurrencies}
            className="bg-muted hover:bg-muted/80 p-3 rounded-full"
          >
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        
        {/* You Receive Section */}
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">
            Primaš
          </Label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="w-full p-4 border border-input rounded-lg text-lg font-semibold bg-muted">
                {calculatedAmount}
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-muted px-4 py-4 rounded-lg min-w-[120px]">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">
                  {receiveCurrency === "RSD" ? "₹" : "₿"}
                </span>
              </div>
              <span className="font-semibold text-foreground">{receiveCurrency}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            1 BTC = {exchangeRate.toLocaleString()} RSD
          </p>
        </div>
        
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-4">
          Razmeni
        </Button>
      </CardContent>
    </Card>
  );
}
