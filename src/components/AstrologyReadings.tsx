import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Moon, ArrowUp, Star, Heart, Briefcase } from "lucide-react";

interface BirthData {
  name: string;
  date: string;
  time: string;
  location: string;
}

interface AstrologyReadingsProps {
  birthData: BirthData;
}

// Mock function to calculate zodiac sign from birth date
const getZodiacSign = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { sign: "Aries", symbol: "♈", element: "Fire" };
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { sign: "Taurus", symbol: "♉", element: "Earth" };
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return { sign: "Gemini", symbol: "♊", element: "Air" };
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return { sign: "Cancer", symbol: "♋", element: "Water" };
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: "Leo", symbol: "♌", element: "Fire" };
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: "Virgo", symbol: "♍", element: "Earth" };
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return { sign: "Libra", symbol: "♎", element: "Air" };
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return { sign: "Scorpio", symbol: "♏", element: "Water" };
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { sign: "Sagittarius", symbol: "♐", element: "Fire" };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { sign: "Capricorn", symbol: "♑", element: "Earth" };
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { sign: "Aquarius", symbol: "♒", element: "Air" };
  return { sign: "Pisces", symbol: "♓", element: "Water" };
};

// Mock readings based on signs
const getPersonalizedReading = (sign: string) => {
  const readings = {
    "Aries": {
      personality: "Bold, energetic, and a natural leader. You approach life with passion and aren't afraid to take risks.",
      love: "In relationships, you're passionate and direct. You value honesty and need a partner who can match your energy.",
      career: "You excel in leadership roles and competitive environments. Your initiative makes you a valuable team member.",
      lucky: { numbers: [3, 9, 21], colors: ["Red", "Orange"], stone: "Diamond" }
    },
    "Taurus": {
      personality: "Reliable, patient, and practical. You appreciate beauty and comfort, with a strong connection to nature.",
      love: "You're loyal and devoted in love, preferring stability and long-term commitment over casual flings.",
      career: "Your persistence and reliability make you excellent in finance, art, or any field requiring patience.",
      lucky: { numbers: [6, 15, 24], colors: ["Green", "Pink"], stone: "Emerald" }
    },
    // Add more signs as needed...
  };
  
  return readings[sign as keyof typeof readings] || readings["Aries"];
};

export const AstrologyReadings = ({ birthData }: AstrologyReadingsProps) => {
  const sunSign = getZodiacSign(birthData.date);
  const moonSign = getZodiacSign(birthData.date); // Simplified - would need complex calculation
  const risingSign = getZodiacSign(birthData.date); // Simplified - would need birth time and location
  
  const personalReading = getPersonalizedReading(sunSign.sign);
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Your Personal Birth Chart
        </h2>
        <p className="text-muted-foreground">
          Welcome, {birthData.name}! Here's your cosmic blueprint based on {new Date(birthData.date).toLocaleDateString()}
        </p>
      </div>

      {/* Big Three */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-cosmic">
          <CardHeader className="text-center">
            <Sun className="w-12 h-12 text-secondary mx-auto mb-2" />
            <CardTitle className="text-secondary">Sun Sign</CardTitle>
            <p className="text-sm text-muted-foreground">Your Core Identity</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl mb-2">{sunSign.symbol}</div>
            <h3 className="text-xl font-bold text-foreground">{sunSign.sign}</h3>
            <Badge variant="outline" className="mt-2 border-secondary text-secondary">
              {sunSign.element}
            </Badge>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-cosmic">
          <CardHeader className="text-center">
            <Moon className="w-12 h-12 text-primary mx-auto mb-2" />
            <CardTitle className="text-primary">Moon Sign</CardTitle>
            <p className="text-sm text-muted-foreground">Your Emotional Nature</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl mb-2">{moonSign.symbol}</div>
            <h3 className="text-xl font-bold text-foreground">{moonSign.sign}</h3>
            <Badge variant="outline" className="mt-2 border-primary text-primary">
              {moonSign.element}
            </Badge>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-cosmic">
          <CardHeader className="text-center">
            <ArrowUp className="w-12 h-12 text-accent mx-auto mb-2" />
            <CardTitle className="text-accent">Rising Sign</CardTitle>
            <p className="text-sm text-muted-foreground">How Others See You</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl mb-2">{risingSign.symbol}</div>
            <h3 className="text-xl font-bold text-foreground">{risingSign.sign}</h3>
            <Badge variant="outline" className="mt-2 border-accent text-accent">
              {risingSign.element}
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Readings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-mystical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Star className="text-secondary" />
              Personality Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{personalReading.personality}</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-mystical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Heart className="text-secondary" />
              Love & Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{personalReading.love}</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-mystical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Briefcase className="text-secondary" />
              Career & Life Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{personalReading.career}</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-mystical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Star className="text-secondary" />
              Lucky Elements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="font-medium text-foreground">Lucky Numbers: </span>
              <span className="text-muted-foreground">{personalReading.lucky.numbers.join(", ")}</span>
            </div>
            <div>
              <span className="font-medium text-foreground">Lucky Colors: </span>
              <span className="text-muted-foreground">{personalReading.lucky.colors.join(", ")}</span>
            </div>
            <div>
              <span className="font-medium text-foreground">Lucky Stone: </span>
              <span className="text-muted-foreground">{personalReading.lucky.stone}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};