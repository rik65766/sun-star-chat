import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";

interface BirthData {
  name: string;
  date: string;
  time: string;
  location: string;
}

interface BirthChartFormProps {
  onSubmit: (data: BirthData) => void;
}

export const BirthChartForm = ({ onSubmit }: BirthChartFormProps) => {
  const [formData, setFormData] = useState<BirthData>({
    name: "",
    date: "",
    time: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="backdrop-blur-md bg-card/50 border-primary/20 shadow-cosmic">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center justify-center gap-2">
          <Calendar className="text-primary" />
          Birth Chart Calculator
        </CardTitle>
        <p className="text-muted-foreground">Enter your birth details for personalized astrology readings</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your name"
              className="bg-input/50 border-primary/30 focus:border-primary"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground">Birth Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="bg-input/50 border-primary/30 focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground">Birth Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="bg-input/50 border-primary/30 focus:border-primary"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground">Birth Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="City, Country"
              className="bg-input/50 border-primary/30 focus:border-primary"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground shadow-cosmic"
          >
            Generate My Birth Chart ✨
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};