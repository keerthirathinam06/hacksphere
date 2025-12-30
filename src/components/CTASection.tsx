import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import brochure from '../assets/brochure.pdf';
import CountdownClock from '@/components/CountdownClock';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden perspective">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[100px] animate-float-3d" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 animate-slide-in-left shadow-glow-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-primary text-sm text-glow">Registration Open</span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-foreground mb-6 text-gradient-animated animate-bounce-in">
            Ready to <span>Innovate</span>?
          </h2>

          <p className="font-mono text-muted-foreground text-lg mb-12 max-w-2xl mx-auto animate-slide-in-right">
            Join hundreds of innovators and build something extraordinary. 
            Registration closes January 18, 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSevYcxirDfzMj_hmP8Aqq9_kU4Li02TTCLDxdRZevrBossJ5A/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group hover-lift hover:shadow-glow-lg transition-all duration-300">
                Register Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href={brochure} download>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
            </a>

            <a href="mailto:hacksphereskasc@gmail.com">
              <Button variant="neon" size="lg" className="hover-lift hover:shadow-glow-lg transition-all duration-300">
                Contact Us
              </Button>
            </a>
          </div>
          <p className="font-mono text-muted-foreground text-sm mt-2">
            For any query, press <span className="text-primary font-semibold">Contact Us</span> to email us.
          </p>

          {/* Prize Highlight */}
          <div className="mt-16 max-w-xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="glass-effect-dark border-t-2 border-t-primary rounded-2xl p-8 relative overflow-hidden hover-lift shadow-glow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10">
                <p className="font-mono text-primary text-sm tracking-widest mb-2 text-glow">WIN BIG</p>
                <p className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient-animated">
                  Exciting <span>Cash Prizes</span>
                </p>
                <p className="font-mono text-muted-foreground">
                  Showcase your innovation and compete for amazing rewards!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
