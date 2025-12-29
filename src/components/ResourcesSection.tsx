import { Button } from '@/components/ui/button';
import { FileText, Presentation, Download, ExternalLink, BookOpen } from 'lucide-react';
import eventBrochure from '@/assets/eventbrochure.pdf';

const ResourcesSection = () => {
  const resources = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Event Brochure",
      description: "Complete event details and information brochure",
      buttonText: "Download Brochure",
      type: "download",
      downloadUrl: eventBrochure
    },
    {
      icon: <Presentation className="w-12 h-12" />,
      title: "PPT Template",
      description: "Professional presentation template for your pitch deck",
      buttonText: "Download Template",
      type: "download",
      downloadUrl: "/files/hacksphere-ppt-template.pptx"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Rules & Guidelines",
      description: "Complete hackathon rules and participation guidelines",
      buttonText: "Download Rules PDF",
      type: "download",
      downloadUrl: "/files/hacksphere-rules.pdf"
    }
  ];

  return (
    <section id="resources" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2">&lt; RESOURCES /&gt;</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get <span className="text-gradient">Prepared</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Download the resources you need to make your submission stand out
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(180_100%_50%/0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-3">
                {resource.title}
              </h3>
              
              <p className="font-mono text-muted-foreground mb-6">
                {resource.description}
              </p>
              
              <a href={resource.downloadUrl} download target="_blank" rel="noopener noreferrer">
                <Button variant="neon" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  {resource.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card/30 border border-border rounded-xl p-6">
            <h4 className="font-orbitron text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">⚡</span> Quick Submission Tips
            </h4>
            <div className="grid md:grid-cols-3 gap-4 font-mono text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="text-primary">01.</span>
                <span>Keep your pitch under 10 minutes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">02.</span>
                <span>Include a working demo or prototype</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">03.</span>
                <span>Highlight the problem and solution clearly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
