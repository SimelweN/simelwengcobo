import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              let's work together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available for freelance projects! Video ads, flyers, websites -
              let's make your business look clean, professional, and
              digital-ready.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  get in touch
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">email</h4>
                          <p className="text-muted-foreground font-mono text-sm">
                            simelwengcobo@icloud.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">
                            whatsapp
                          </h4>
                          <p className="text-muted-foreground font-mono text-sm">
                            0634636268
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 rounded-3xl">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">
                            location
                          </h4>
                          <p className="text-muted-foreground">south africa</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Availability Status */}
              <Card className="p-6 bg-gradient-card border-0 shadow-card rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">
                      available for work
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    currently accepting new projects and collaborations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      video ads
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      flyers
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      websites
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
