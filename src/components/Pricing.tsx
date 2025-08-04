import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Image,
  Globe,
  Video,
  Shield,
  Package,
  Phone,
} from "lucide-react";

const Pricing = () => {
  const services = [
    {
      icon: Image,
      title: "🖼️ GRAPHIC DESIGN",
      description: "Visual branding and marketing materials",
      items: [
        "Social Media Posts",
        "Posters & Flyers",
        "Logo Design",
        "Full Brand Kits (logo, fonts, colors)",
        "Business Cards",
        "Brochures"
      ]
    },
    {
      icon: Globe,
      title: "🌐 WEBSITE DESIGN & DEVELOPMENT",
      description: "Professional websites that drive results",
      items: [
        "Landing Pages",
        "Multi-Page Websites",
        "E-commerce Sites",
        "Contact Forms & Map Integration",
        "Animations & Scroll Effects",
        "Mobile-Responsive Design"
      ]
    },
    {
      icon: Video,
      title: "🎬 VIDEO CREATION & EDITING",
      description: "Engaging video content for all platforms",
      items: [
        "Social Media Reels",
        "Video Editing (music + cuts)",
        "Text & Transitions",
        "Logo Animations",
        "Promotional Videos",
        "Event Coverage"
      ]
    },
    {
      icon: Shield,
      title: "🌍 DOMAIN, HOSTING & MAINTENANCE",
      description: "Keep your digital presence running smoothly",
      items: [
        "Domain Registration & Management",
        "Website Hosting",
        "Regular Updates & Bug Fixes",
        "Uptime Monitoring",
        "Monthly Support",
        "Security Maintenance"
      ]
    },
    {
      icon: Package,
      title: "📦 COMBO PACKAGES",
      description: "Complete solutions for maximum value",
      items: [
        "Starter Brand Kit (Logo + Landing Page)",
        "Complete Website + Branding",
        "Social Media Package (Logo + Posts + Video)",
        "Business Launch Package",
        "Marketing Campaign Bundle",
        "Custom Package Solutions"
      ]
    }
  ];

  const ServiceCard = ({ icon: Icon, title, description, items }) => (
    <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl bg-gradient-card">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-2xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pricing is discussed based on what services you would want. Here are the services I offer to help grow your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              variant="glow"
              size="lg"
              className="group text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get Your Quote Today
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">
              Contact me to discuss pricing based on your specific needs • Fast turnaround • Custom solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
