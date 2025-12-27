import { Sparkles, Brain, Rocket, Target } from 'lucide-react';

const TopicSection = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Creative Mindset",
      description: "Think outside the box and approach problems with fresh perspectives"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation First",
      description: "Focus on novel solutions that can make real-world impact"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Identify challenges and create meaningful solutions"
    }
  ];

  return (
    <section id="topic" className="py-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2">&lt; THEME /&gt;</p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
              Open <span className="text-gradient">Innovation</span>
            </h2>
            
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
              <span className="font-orbitron text-lg text-primary">Unleash Your Creativity</span>
            </div>

            <p className="font-mono text-muted-foreground mb-8 leading-relaxed">
              Open Innovation means no limits on your creativity! Whether you want to build 
              an AI-powered solution, a sustainable tech product, a gaming experience, or 
              a social impact platform—the choice is yours. We believe the best ideas come 
              from unbounded imagination combined with technical excellence.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card/30 border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-primary mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-orbitron text-foreground font-bold mb-1">{item.title}</h4>
                    <p className="font-mono text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple" />
              
              <div className="text-center mb-8">
                <p className="font-mono text-primary text-sm mb-2">WHAT WE'RE LOOKING FOR</p>
                <h3 className="font-orbitron text-2xl font-bold text-foreground">
                  Innovation Criteria
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Creativity & Originality", value: 25 },
                  { label: "Technical Implementation", value: 25 },
                  { label: "Problem-Solution Fit", value: 20 },
                  { label: "Presentation Quality", value: 15 },
                  { label: "Scalability & Impact", value: 15 }
                ].map((criteria, index) => (
                  <div key={index}>
                    <div className="flex justify-between font-mono text-sm mb-2">
                      <span className="text-foreground">{criteria.label}</span>
                      <span className="text-primary">{criteria.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-green rounded-full transition-all duration-1000"
                        style={{ width: `${criteria.value * 4}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
