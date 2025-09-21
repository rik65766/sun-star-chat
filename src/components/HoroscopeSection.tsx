import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Sun, Moon, Sparkles } from "lucide-react";

const zodiacSigns = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water" }
];

const dailyHoroscope = {
  general: "The cosmic energies are aligning in your favor today. Trust your intuition and embrace new opportunities.",
  love: "Venus is shining brightly in your romantic sector. Express your feelings openly.",
  career: "Professional matters require careful attention. Your leadership skills will be recognized.",
  health: "Focus on balance and harmony in all aspects of your well-being."
};

export const HoroscopeSection = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Daily Horoscope & Zodiac Guide
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover what the stars have in store for you today and explore the mysteries of the zodiac
        </p>
      </div>

      {/* Daily Reading */}
      <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-mystical">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Star className="text-secondary" />
            Today's Cosmic Guidance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="text-primary h-4 w-4" />
                <span className="font-medium text-primary">General</span>
              </div>
              <p className="text-sm text-muted-foreground">{dailyHoroscope.general}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sun className="text-secondary h-4 w-4" />
                <span className="font-medium text-secondary">Love</span>
              </div>
              <p className="text-sm text-muted-foreground">{dailyHoroscope.love}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Moon className="text-accent h-4 w-4" />
                <span className="font-medium text-accent">Career</span>
              </div>
              <p className="text-sm text-muted-foreground">{dailyHoroscope.career}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="text-cosmic-pink h-4 w-4" />
                <span className="font-medium text-cosmic-pink">Health</span>
              </div>
              <p className="text-sm text-muted-foreground">{dailyHoroscope.health}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Zodiac Signs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {zodiacSigns.map((sign) => (
          <Card 
            key={sign.name} 
            className="backdrop-blur-md bg-card/30 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-celestial cursor-pointer group"
          >
            <CardContent className="p-4 text-center space-y-2">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {sign.symbol}
              </div>
              <h3 className="font-bold text-foreground">{sign.name}</h3>
              <p className="text-xs text-muted-foreground">{sign.dates}</p>
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  sign.element === 'Fire' ? 'border-red-400 text-red-300' :
                  sign.element === 'Earth' ? 'border-green-400 text-green-300' :
                  sign.element === 'Air' ? 'border-blue-400 text-blue-300' :
                  'border-purple-400 text-purple-300'
                }`}
              >
                {sign.element}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};