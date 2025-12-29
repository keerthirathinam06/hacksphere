import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import skLogo from '@/assets/sk.png';
import iciLogo from '@/assets/ici.png';
import { useState, useEffect } from 'react';
import CountdownClock from '@/components/CountdownClock';

const HeroSection = () => {
  const [isRegistrationActive, setIsRegistrationActive] = useState(true);

  useEffect(() => {
    const checkRegistrationStatus = () => {
      const now = new Date();
      const year = now.getFullYear();
      
      // Jan 12, 2026 at 11:59 PM
      const registrationEnd = new Date(year, 0, 12, 23, 59, 59);
      
      // If we're past the registration end date, set to next year
      if (now > registrationEnd) {
        registrationEnd.setFullYear(year + 1);
      }
      
      const difference = registrationEnd.getTime() - now.getTime();
      setIsRegistrationActive(difference > 0);
    };

    checkRegistrationStatus();
    const timer = setInterval(checkRegistrationStatus, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-float">
          <div className="flex items-center justify-center gap-6 mb-4 flex-wrap">
            <img src={iciLogo} alt="ICI" className="w-20 md:w-24 h-20 md:h-24 object-contain bg-transparent mr-4" />
            <p className="font-orbitron text-primary text-xl md:text-3xl lg:text-4xl font-bold tracking-wide neon-glow">
              SRI KRISHNA ARTS AND SCIENCE COLLEGE
            </p>
            <img src={skLogo} alt="SK" className="w-48 md:w-56 h-48 md:h-56 lg:w-72 lg:h-72 object-contain ml-4" />
          </div>
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-[0.3em] uppercase">
            &lt; Presents /&gt;
          </p>
          
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gradient animate-gradient">
            HACKSPHERE
          </h1>
          
          <p className="font-mono text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Build your prototype, present your PPT, and showcase your demo
          </p>
          
          <div className="flex items-center justify-center gap-4 font-mono text-primary mb-8">
            <span className="w-12 h-px bg-primary" />
            <span className="text-sm tracking-widest">OPEN INNOVATION 2026</span>
            <span className="w-12 h-px bg-primary" />
          </div>

          <p className="text-sm text-muted-foreground mb-8 font-mono">Organized by Department of Computer Applications</p>

          {isRegistrationActive && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScEmKyvSJ6uZq7yvNTvVPG1sUxpvb9C6iRQUeleLXS8SB3IRQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          )}

          {/* Countdown Clock */}
          <div className="mb-8 max-w-3xl mx-auto">
            <CountdownClock />
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 font-mono text-sm">
            <div className="text-center">
              <p className="text-primary text-2xl font-bold neon-glow">JAN 2</p>
              <p className="text-muted-foreground">Registration Opens</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-secondary text-2xl font-bold">FEB 11</p>
              <p className="text-muted-foreground">Grand Finale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
