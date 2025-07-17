import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, TrendingUp } from "lucide-react";

export default function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 rounded-full p-3">
              <Timer className="text-red-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-700">Ograničena ponuda!</h3>
              <p className="text-red-600">0% provizija na prve transakcije ističe za:</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-center bg-red-600 text-white rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs">sati</div>
            </div>
            <div className="text-red-600 text-xl">:</div>
            <div className="text-center bg-red-600 text-white rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs">min</div>
            </div>
            <div className="text-red-600 text-xl">:</div>
            <div className="text-center bg-red-600 text-white rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs">sek</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-red-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-green-600 h-5 w-5" />
              <span className="text-sm text-gray-700">Ušteda do 2,000 RSD na prvim transakcijama</span>
            </div>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Iskoristi odmah
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}