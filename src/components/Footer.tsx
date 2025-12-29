import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative perspective overflow-hidden bg-gradient-to-b from-background to-background/90 border-t border-border/50 py-16">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] animate-float-3d" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Social CTA */}
        <div className="mb-12 p-6 glass-effect-dark rounded-xl hover-lift shadow-glow-md animate-slide-in-left">
          <div className="flex items-center justify-center">
            <a 
              href="https://www.instagram.com/skasc_computerapplications?igsh=MXg0aHEyYzVsdGgxaA==" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 hover-lift hover:shadow-glow-md"
            >
              <Instagram className="w-5 h-5" />
              Follow us on Instagram for updates
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4 text-glow">
              HACK<span className="text-gradient-animated">SPHERE</span>
            </h3>
            <p className="font-mono text-muted-foreground mb-6 max-w-md">
              The ultimate hackathon experience where innovation meets opportunity. 
              Join us and shape the future of technology.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/skasc_computerapplications?igsh=MXg0aHEyYzVsdGgxaA=="
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover-glow hover:text-primary transition-all duration-300 animate-glow-pulse"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/hacksphere"
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover-glow hover:text-primary transition-all duration-300 animate-glow-pulse"
                style={{ animationDelay: '0.1s' }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-orbitron font-bold text-foreground mb-4 text-glow">Quick Links</h4>
            <ul className="space-y-3 font-mono text-sm">
              {['About', 'Timeline', 'Theme', 'Resources', 'Team'].map((link, idx) => (
                <li key={link} className="hover-lift transition-all duration-300" style={{ animationDelay: `${0.05 * idx}s` }}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover-glow hover:text-primary transition-all duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="glass-effect rounded-lg p-4 animate-slide-in-right shadow-glow-sm" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-orbitron font-bold text-foreground mb-4 text-glow">Contact</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover-lift transition-all duration-300">
                <Mail className="w-4 h-4 text-primary animate-glow-pulse" />
                <a href="mailto:hacksphereskasc@gmail.com" className="hover:text-primary transition-colors">
                  hacksphereskasc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 animate-glow-pulse" style={{ animationDelay: '0.1s' }} />
                <div>
                  <div>Sri Krishna Arts and Science College</div>
                  <div>Coimbatore, Tamil Nadu</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 HackSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-sm">
            <a href="#" className="text-muted-foreground hover-glow hover:text-primary transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover-glow hover:text-primary transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
