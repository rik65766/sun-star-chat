import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses = [
  "The stars suggest that you're entering a period of transformation. ✨",
  "Your celestial energy is quite strong today. What specific area of your life would you like guidance on? 🌟",
  "The planets are aligning in your favor. Trust your intuition and take that leap of faith! 🚀",
  "I sense strong cosmic vibrations around you. Your birth chart indicates powerful potential. 🔮",
  "The moon's current phase is perfect for manifesting your desires. What are you hoping to achieve? 🌙",
  "Your astrological profile suggests you have natural psychic abilities. Have you been experiencing any vivid dreams lately? 💫",
  "The universe is sending you signs. Pay attention to synchronicities around you! ⭐"
];

export const AstroChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to your personal astrology guide! ✨ I'm here to help you navigate the cosmic energies. Ask me anything about astrology, your zodiac sign, or what the stars have in store for you!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-celestial h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <MessageCircle className="text-secondary" />
          Cosmic Guidance Chat
        </CardTitle>
        <p className="text-muted-foreground text-sm">Ask your astrology questions and receive mystical guidance</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-primary/20 border border-primary/30 text-foreground'
                      : 'bg-gradient-to-r from-secondary to-accent text-background'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center gap-1 mb-1">
                      <Sparkles className="h-3 w-3" />
                      <span className="text-xs font-medium">Cosmic Guide</span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-primary/20 border border-primary/30 p-3 rounded-lg">
                  <div className="flex items-center gap-1 mb-1">
                    <Sparkles className="h-3 w-3" />
                    <span className="text-xs font-medium">Cosmic Guide</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="p-6 pt-4 border-t border-primary/20">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about your future, zodiac signs, compatibility..."
              className="bg-input/50 border-primary/30 focus:border-primary"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};