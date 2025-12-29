import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import brochure from '../assets/brochure.pdf';
import CountdownClock from '@/components/CountdownClock';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-primary text-sm">Registration Open</span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to <span className="text-gradient">Innovate</span>?
          </h2>

          <p className="font-mono text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Join hundreds of innovators and build something extraordinary. 
            Registration closes January 12, 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScEmKyvSJ6uZq7yvNTvVPG1sUxpvb9C6iRQUeleLXS8SB3IRQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
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
              <Button variant="neon" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
          <p className="font-mono text-muted-foreground text-sm mt-2">
            For any query, press <span className="text-primary font-semibold">Contact Us</span> to email us.
          </p>

          {/* Prize Highlight */}
          <div className="mt-16 max-w-xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10">
                <p className="font-mono text-primary text-sm tracking-widest mb-2">WIN BIG</p>
                <p className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Exciting <span className="text-gradient">Cash Prizes</span>
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
