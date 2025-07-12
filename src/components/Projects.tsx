import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Palette, Globe, Target, Brush, PenTool } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Basic Video Ads Production",
      description:
        "Short promo videos (30 sec to 1 min) for social media with simple editing and text overlays using tools like Canva, InShot, or basic Premiere Pro skills.",
      icon: Play,
      features: [
        "30 sec to 1 min videos",
        "Social media focused",
        "Text overlays",
        "Simple editing",
      ],
      accent: "from-red-500 to-orange-600",
    },
    {
      title: "Social Media Graphics & Content",
      description:
        "Design social media posts and banners with consistent branding using Canva or Figma for clean, professional-looking graphics and basic animated posts.",
      icon: Palette,
      features: [
        "Social media posts",
        "Consistent branding",
        "Canva/Figma design",
        "Basic animations",
      ],
      accent: "from-purple-500 to-pink-600",
    },
    {
      title: "Website Updates & Basic Website Builds",
      description:
        "Build simple, single-page websites or landing pages. Maintain and update existing sites with basic functionality like contact forms or product listings.",
      icon: Globe,
      features: [
        "Single-page websites",
        "Landing pages",
        "Site maintenance",
        "Contact forms",
      ],
      accent: "from-blue-500 to-cyan-600",
    },
    {
      title: "Digital Ads Setup & Management (Basic)",
      description:
        "Set up Facebook or Instagram ad campaigns with targeted audiences, monitor ad spend and basic performance metrics for small businesses.",
      icon: Target,
      features: [
        "Facebook/Instagram ads",
        "Targeted audiences",
        "Performance monitoring",
        "Small business focus",
      ],
      accent: "from-green-500 to-teal-600",
    },
    {
      title: "Branding Support (Simple)",
      description:
        "Logo tweaks or simple brand kit creation with colors and fonts, ensuring consistent visuals for online platforms.",
      icon: Brush,
      features: [
        "Logo adjustments",
        "Brand kit creation",
        "Color schemes",
        "Font selection",
      ],
      accent: "from-yellow-500 to-orange-600",
    },
    {
      title: "Basic Copywriting for Ads & Websites",
      description:
        "Write clear, persuasive text for ads, social media, and websites that engages your audience and drives action.",
      icon: PenTool,
      features: [
        "Ad copywriting",
        "Social media content",
        "Website text",
        "Persuasive writing",
      ],
      accent: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Realistic services you can get started with today. Quality work
              that delivers results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-3xl"
              >
                <div className="relative">
                  <div
                    className={`h-48 bg-gradient-to-br ${service.accent} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Service Number */}
                    <div className="absolute top-6 left-6 text-white/80 font-mono text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Service Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="h-16 w-16 text-white/80 group-hover:text-white transition-colors group-hover:scale-110 transform duration-300" />
                    </div>

                    {/* Animated Grid */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="grid grid-cols-8 h-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className="border border-white/20 animate-pulse"
                            style={{ animationDelay: `${i * 0.01}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="minimal" size="lg" className="group">
              <Target className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              discuss your project needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
