import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isActive: true,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Registration period: Jan 2 to Jan 12
      const now = new Date();
      const year = now.getFullYear();
      
      // Jan 12, 2026 at 11:59 PM
      const registrationEnd = new Date(year, 0, 12, 23, 59, 59);
      
      // If we're past the registration end date, set to next year
      if (now > registrationEnd) {
        registrationEnd.setFullYear(year + 1);
      }
      
      const difference = registrationEnd.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isActive: true,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/50" />
        <div className="relative z-10 text-center">
          <p className="font-orbitron text-2xl md:text-4xl font-bold text-primary neon-glow">
            {String(value).padStart(2, '0')}
          </p>
        </div>
      </div>
      <p className="font-mono text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );

  return (
    <div className="w-full bg-card/30 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-primary" />
        <p className="font-mono text-primary text-sm md:text-base tracking-widest">
          {timeLeft.isActive ? 'REGISTRATION CLOSES IN' : 'REGISTRATION CLOSED'}
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-4 md:gap-6">
        <TimeUnit label="Days" value={timeLeft.days} />
        <div className="text-2xl md:text-4xl font-bold text-primary/50 pb-8">:</div>
        <TimeUnit label="Hours" value={timeLeft.hours} />
        <div className="text-2xl md:text-4xl font-bold text-primary/50 pb-8">:</div>
        <TimeUnit label="Minutes" value={timeLeft.minutes} />
        <div className="text-2xl md:text-4xl font-bold text-primary/50 pb-8">:</div>
        <TimeUnit label="Seconds" value={timeLeft.seconds} />
      </div>

      <div className="mt-6 text-center">
        <p className="font-mono text-xs md:text-sm text-muted-foreground">
          Registration Period: January 2 - January 12, 2026
        </p>
      </div>
    </div>
  );
};

export default CountdownClock;
