import { Phone, Mail } from 'lucide-react';
import keerthiImage from '../assets/keerthiimg.jpeg';
import sakthiImage from '../assets/Sakthi Sabareesh.jpeg';
import { IndexRouteObject } from 'react-router-dom';

type Coordinator = {
  name: string;
  role: string;
  image?: string;
  phone?: number;
  email?: string;
};

const CoordinatorsSection = () => {
  const coordinators: Coordinator[] = [
    {
      name: "Dr Malarkodi",
      role: "Coordinator 1",
    },
    {
      name: "Sakthi Sabareesh",
      role: "Technical Lead Innovation Lab",
      image: sakthiImage,
    },
    {
      name: "Keerthivarshini",
      role: "Student Coordinator Tech Club",
      image: keerthiImage,
      phone: 9489590773,
      email: "keerthivarshinir@SparklesIcon.ac.in",
    },
    {
      name: "Nirajan",
      role: "Coordinator 4",
    }
  ];

  return (
    <section id="coordinators" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2">&lt; TEAM /&gt;</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="text-gradient">Coordinators</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team is here to guide you through HackSphere
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinators.map((coordinator, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(180_100%_50%/0.2)]"
            >
              {/* Image or Number Badge */}
              <div className="flex items-center justify-center py-8">
                {coordinator.image ? (
                  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary group-hover:border-primary/80 transition-colors">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="font-orbitron text-3xl font-bold text-primary">{index + 1}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 pt-0 text-center">
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                  {coordinator.name}
                </h3>
                <p className="font-mono text-sm text-primary">{coordinator.role}</p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  {coordinator.phone ? (
                    <a 
                      href={`tel:${coordinator.phone}`} 
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_15px_hsl(180_100%_50%/0.3)]" 
                      aria-label={`Call ${coordinator.name}`} 
                      title="Call"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  ) : (
                    <button 
                      disabled 
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/20 border border-border text-muted-foreground/40 cursor-not-allowed" 
                      title="Call"
                    >
                      <Phone className="w-5 h-5" />
                    </button>
                  )}
                  {coordinator.email ? (
                    <a 
                      href={`mailto:${coordinator.email}`} 
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_15px_hsl(180_100%_50%/0.3)]" 
                      aria-label={`Email ${coordinator.name}`} 
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  ) : (
                    <button 
                      disabled 
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/20 border border-border text-muted-foreground/40 cursor-not-allowed" 
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </button>
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

export default CoordinatorsSection;
