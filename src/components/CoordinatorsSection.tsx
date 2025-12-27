const CoordinatorsSection = () => {
  const coordinators = [
    {
      name: "Dr Malarkodi",
      role: "Coordinator 1",
    },
    {
      name: "Sakthi Sabareesh",
      role: "Coordinator 2",
    },
    {
      name: "Keerthivarshini",
      role: "Coordinator 3",
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
              {/* Number Badge */}
              <div className="flex items-center justify-center py-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="font-orbitron text-3xl font-bold text-primary">{index + 1}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 pt-0 text-center">
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                  {coordinator.name}
                </h3>
                <p className="font-mono text-sm text-primary">{coordinator.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
