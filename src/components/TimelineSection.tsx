import { Calendar, CheckCircle2 } from 'lucide-react';

const TimelineSection = () => {
  const events = [
    {
      date: "JAN 2, 2026",
      title: "Registration Opens",
      description: "Start your journey by registering your team",
      status: "active",
      color: "primary"
    },
    {
      date: "JAN 12, 2026",
      title: "Registration Closes",
      description: "Last day to submit your registration",
      status: "upcoming",
      color: "secondary"
    },
    {
      date: "JAN 20, 2026",
      title: "Finalist Announcement",
      description: "Shortlisted teams will be announced",
      status: "upcoming",
      color: "accent"
    },
    {
      date: "FEB 11, 2026",
      title: "Grand Finale",
      description: "Final presentations and awards ceremony",
      status: "upcoming",
      color: "primary"
    }
  ];

  return (
    <section id="timeline" className="py-24 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2">&lt; TIMELINE /&gt;</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
            Event <span className="text-gradient">Schedule</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars for these important dates
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {events.map((event, index) => (
            <div 
              key={index}
              className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full bg-${event.color} shadow-[0_0_20px_hsl(var(--${event.color})/0.8)] ${event.status === 'active' ? 'animate-glow-pulse' : ''}`} />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group hover:shadow-[0_0_30px_hsl(180_100%_50%/0.15)]">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-mono text-primary text-sm font-bold">{event.date}</span>
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  {event.status === 'active' && (
                    <div className={`flex items-center gap-2 mt-3 text-secondary ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-mono text-xs uppercase tracking-wider">Open Now</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
