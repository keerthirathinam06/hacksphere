import React from 'react';
import guestImage from '../assets/guest.jpeg';

const ChiefGuest = () => {
  return (
    <section id="chief-guest" className="py-24 relative perspective overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px] animate-float-3d" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/10 rounded-full blur-[150px] animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-in-left">
          <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2 text-glow">&lt; GUEST /&gt;</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient-animated">
            Chief Guest
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Introducing our distinguished chief guest for the event
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative glass-effect-dark rounded-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover-lift shadow-glow-lg animate-bounce-in">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary flex-shrink-0 hover-glow shadow-glow-md group-hover:animate-glow-pulse">
              <img src={guestImage} alt="Arunkumar Gowrishankar" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="flex-1 text-left">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-1 text-glow">Arunkumar Gowrishankar</h3>
              <p className="font-mono text-sm text-primary mb-1 text-glow">SAP Consultant cum Trainer</p>
              <p className="font-mono text-sm text-muted-foreground mb-4">Mini University, Coimbatore</p>

              <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                An accomplished SAP Consultant and
                Trainer with extensive experience in
                enterprise solutions, professional
                training, and leadership development.
                Possesses expertise in SAP FICO, SD, and
                MM modules, and has contributed
                significantly to ERP implementation,
                industry-oriented learning, and
                innovation mentoring. Actively engaged
                in fostering technological excellence,
                entrepreneurship, and community
                development.
              </p>

              {/* contact buttons removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;
