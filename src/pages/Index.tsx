import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BirthChartForm } from "@/components/BirthChartForm";
import { AstrologyReadings } from "@/components/AstrologyReadings";
import { HoroscopeSection } from "@/components/HoroscopeSection";
import { AstroChatbot } from "@/components/AstroChatbot";
import { Stars, Sparkles, Moon } from "lucide-react";
import cosmicHero from "@/assets/cosmic-hero.jpg";

interface BirthData {
  name: string;
  date: string;
  time: string;
  location: string;
}

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'readings' | 'horoscope' | 'chat'>('home');
  const [birthData, setBirthData] = useState<BirthData | null>(null);

  const handleBirthChartSubmit = (data: BirthData) => {
    setBirthData(data);
    setCurrentView('readings');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setCurrentView('home')}
            >
              <Stars className="text-primary h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AstroMystic
              </span>
            </div>
            <div className="flex gap-4">
              <Button 
                variant={currentView === 'home' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('home')}
                className="text-foreground hover:text-primary"
              >
                Birth Chart
              </Button>
              <Button 
                variant={currentView === 'horoscope' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('horoscope')}
                className="text-foreground hover:text-primary"
              >
                Horoscope
              </Button>
              <Button 
                variant={currentView === 'chat' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('chat')}
                className="text-foreground hover:text-primary"
              >
                Cosmic Chat
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Home View */}
      {currentView === 'home' && (
        <section className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cosmicHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Discover Your Cosmic Destiny
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Unlock the mysteries of the universe with personalized astrology readings, birth chart analysis, and cosmic guidance
              </p>
              <div className="flex items-center justify-center gap-4 text-cosmic-silver">
                <Sparkles className="animate-pulse" />
                <span className="text-lg">✨ Guided by the Stars ✨</span>
                <Moon className="animate-pulse" />
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <BirthChartForm onSubmit={handleBirthChartSubmit} />
            </div>
          </div>
        </section>
      )}

      {/* Readings View */}
      {currentView === 'readings' && birthData && (
        <main className="container mx-auto px-4 py-16">
          <AstrologyReadings birthData={birthData} />
        </main>
      )}

      {/* Horoscope View */}
      {currentView === 'horoscope' && (
        <main className="container mx-auto px-4 py-16">
          <HoroscopeSection />
        </main>
      )}

      {/* Chat View */}
      {currentView === 'chat' && (
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Cosmic Guidance Chat
            </h1>
            <p className="text-muted-foreground">
              Connect with the mystical energies and receive personalized astrological insights
            </p>
          </div>
          <AstroChatbot />
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Stars className="text-primary h-6 w-6" />
              <span className="text-xl font-bold text-foreground">AstroMystic</span>
            </div>
            <p className="text-muted-foreground">
              Your gateway to cosmic wisdom and celestial guidance
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>🌟 Personalized Readings</span>
              <span>🔮 Birth Chart Analysis</span>
              <span>💫 Daily Horoscopes</span>
              <span>✨ Cosmic Chat</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
