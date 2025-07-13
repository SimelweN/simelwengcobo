import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Image,
  Globe,
  Video,
  Shield,
  Package,
  CreditCard,
  Check,
  Star,
  Zap,
  Clock,
  Phone,
  AlertCircle,
} from "lucide-react";

const Pricing = () => {
  const graphicDesignServices = [
    { service: "Social Media Post", price: "R70 – R150" },
    { service: "Poster / Flyer", price: "R100 – R200" },
    { service: "Logo Design (Basic)", price: "R200 – R400" },
    { service: "Full Brand Kit (logo, fonts, colors)", price: "R500 – R900" },
  ];

  const websiteServices = [
    { service: "1-Page Site (Landing Page)", price: "R600 – R1000" },
    { service: "Basic Website (3 Pages)", price: "R1200 – R2000" },
    { service: "Extra Pages", price: "+R300 – R500 each" },
    { service: "Contact Form / Map Integration", price: "+R200 – R400" },
    { service: "Animations / Scroll Effects", price: "+R200 – R400" },
  ];

  const videoServices = [
    { service: "Social Media Reel (15–60 sec)", price: "R100 – R250" },
    { service: "Basic Edit (music + cuts)", price: "R150 – R350" },
    { service: "With Text & Transitions", price: "R250 – R500" },
    { service: "Logo Animation", price: "R250 – R500" },
  ];

  const maintenanceServices = [
    { service: "🔒 Domain + Website Maintenance (Full)", price: "R150/month" },
    { service: "🌐 Domain Only (No website updates)", price: "R100/month" },
  ];

  const comboBundles = [
    { package: "Logo + 2 Social Posts + 1 Video", price: "R500 – R700" },
    { package: "3-Page Website + Basic Branding Kit", price: "R2000 – R3000" },
    {
      package: "Starter Brand Kit (Logo + 1-Page Site)",
      price: "R1000 – R1500",
    },
  ];

  const maintenanceIncludes = [
    "Domain renewal management",
    "Hosting (site live & working)",
    "Bug fixes, small text/image updates",
    "Uptime checks",
    "Monthly support on WhatsApp",
  ];

  const maintenanceRules = [
    "Up to 2 small changes/month",
    "No full redesigns or new features (those are quoted separately)",
    "Late payment = site paused after 7 days",
    "Cancel anytime with 7 days' notice",
  ];

  const paymentTerms = [
    "💸 50% deposit to begin",
    "✅ Final payment before final delivery",
    "📱 Support via WhatsApp during your project",
    "🎁 First 3 clients = special discounts 🔥",
  ];

  const PricingCard = ({
    icon: Icon,
    title,
    subtitle,
    children,
    featured = false,
  }) => (
    <Card
      className={`relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl ${
        featured
          ? "bg-gradient-primary border-2 border-primary/20 scale-105"
          : "bg-gradient-card"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <Badge
            variant="default"
            className="bg-primary text-primary-foreground"
          >
            <Star className="h-3 w-3 mr-1" />
            Best Value
          </Badge>
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-4">
          <div
            className={`p-3 rounded-2xl ${featured ? "bg-white/20" : "bg-primary/10"}`}
          >
            <Icon
              className={`h-6 w-6 ${featured ? "text-white" : "text-primary"}`}
            />
          </div>
          <div>
            <h3
              className={`text-xl font-bold ${featured ? "text-white" : "text-foreground"}`}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className={`text-sm ${featured ? "text-white/80" : "text-muted-foreground"}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  );

  const ServiceRow = ({ service, price, featured = false }) => (
    <div className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
      <span className={`${featured ? "text-white/90" : "text-foreground"}`}>
        {service}
      </span>
      <span
        className={`font-bold ${featured ? "text-white" : "text-primary"} text-right text-sm`}
      >
        {price}
      </span>
    </div>
  );

  const FeatureList = ({ items, featured = false }) => (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-start space-x-2">
          <Check
            className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
              featured ? "text-white" : "text-primary"
            }`}
          />
          <span
            className={`text-sm ${featured ? "text-white/90" : "text-muted-foreground"}`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent, affordable pricing for South African youth
              businesses. Quality digital solutions that won't break the bank.
            </p>
          </div>

          {/* Main Pricing Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Graphic Design */}
            <PricingCard
              icon={Image}
              title="🖼️ GRAPHIC DESIGN"
              subtitle="Per Page / Post"
            >
              <div className="space-y-1">
                {graphicDesignServices.map((item, index) => (
                  <ServiceRow
                    key={index}
                    service={item.service}
                    price={item.price}
                  />
                ))}
              </div>
            </PricingCard>

            {/* Website Design */}
            <PricingCard
              icon={Globe}
              title="🌐 WEBSITE DESIGN & DEVELOPMENT"
              subtitle="Price depends on pages & features"
            >
              <div className="space-y-1 mb-6">
                {websiteServices.map((item, index) => (
                  <ServiceRow
                    key={index}
                    service={item.service}
                    price={item.price}
                  />
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t border-border/50">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Hosted using free platforms (Vercel, Supabase) to save costs
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Built mobile-friendly & responsive
                  </span>
                </div>
              </div>
            </PricingCard>

            {/* Video Creation */}
            <PricingCard
              icon={Video}
              title="🎬 VIDEO CREATION / EDITING"
              subtitle="Type"
            >
              <div className="space-y-1">
                {videoServices.map((item, index) => (
                  <ServiceRow
                    key={index}
                    service={item.service}
                    price={item.price}
                  />
                ))}
              </div>
            </PricingCard>

            {/* Domain & Hosting */}
            <PricingCard
              icon={Shield}
              title="🌍 DOMAIN, HOSTING & MAINTENANCE"
              subtitle="Service"
            >
              <div className="space-y-1 mb-6">
                {maintenanceServices.map((item, index) => (
                  <ServiceRow
                    key={index}
                    service={item.service}
                    price={item.price}
                  />
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-4 mb-4">
                <h4 className="font-bold text-foreground mb-3 flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  What's included in Full Maintenance (R150/month):
                </h4>
                <FeatureList items={maintenanceIncludes} />
              </div>

              <div className="bg-orange-500/5 rounded-2xl p-4">
                <h4 className="font-bold text-foreground mb-3 flex items-center">
                  <AlertCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Maintenance Rules:
                </h4>
                <FeatureList items={maintenanceRules} />
              </div>
            </PricingCard>
          </div>

          {/* Combo Bundles */}
          <div className="mb-12">
            <PricingCard
              icon={Package}
              title="📦 COMBO BUNDLES"
              subtitle="Best Value"
              featured={true}
            >
              <div className="space-y-1">
                {comboBundles.map((item, index) => (
                  <ServiceRow
                    key={index}
                    service={item.package}
                    price={item.price}
                    featured={true}
                  />
                ))}
              </div>
            </PricingCard>
          </div>

          {/* Payment Terms */}
          <Card className="bg-gradient-card border-0 shadow-card rounded-3xl">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  📝 PAYMENT TERMS
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {paymentTerms.map((term, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-secondary/30 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-foreground">{term}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
              WhatsApp me for a personalized quote • Fast turnaround •
              Youth-friendly pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
