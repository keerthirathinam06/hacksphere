import { Code2, Cpu, Lightbulb, Users } from 'lucide-react';
import chipGraphic from '@/assets/chip-graphic.png';

const AboutSection = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Open Innovation",
      description: "Unleash your creativity with no boundaries on themes or technologies"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Code & Create",
      description: "Transform your ideas into working prototypes"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborate",
      description: "Network with like-minded innovators and industry experts"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Tech-Driven",
      description: "Leverage cutting-edge technologies to solve real problems"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10">
        <img src={chipGraphic} alt="" className="w-full h-full object-contain animate-float" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2">&lt; ABOUT /&gt;</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
            Enter the <span className="text-gradient">Sphere</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-3xl mx-auto text-lg">
            HackSphere is not just a hackathon—it's a launchpad for the next generation of innovators. 
            Join us in a 48-hour journey where creativity meets technology, and ideas become reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(180_100%_50%/0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-primary mb-4 group-hover:neon-glow transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-orbitron text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
