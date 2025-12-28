import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-16">
      <div className="container mx-auto px-4">
        {/* Social CTA */}
        <div className="mb-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
          <div className="flex items-center justify-center">
            <a 
              href="https://www.instagram.com/skasc_computerapplications?igsh=MXg0aHEyYzVsdGgxaA==" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-6 py-3 rounded-lg font-mono text-sm transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Follow us on Instagram for updates
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-orbitron text-2xl font-bold text-primary neon-glow mb-4">
              HACKSPHERE
            </h3>
            <p className="font-mono text-muted-foreground mb-6 max-w-md">
              The ultimate hackathon experience where innovation meets opportunity. 
              Join us and shape the future of technology.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/skasc_computerapplications?igsh=MXg0aHEyYzVsdGgxaA=="
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 font-mono text-sm">
              {['About', 'Timeline', 'Theme', 'Resources', 'Team'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hacksphereskasc@gmail.com" className="hover:text-primary transition-colors">
                  hacksphereskasc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                Sri Krishna Arts and Science College<br />Coimbatore, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 HackSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
