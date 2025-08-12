import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              about me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that matter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Building the future, one line at a time
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm Simelwe Ngcobo, a young entrepreneur and digital creative from South Africa. Founder & CEO of ReBooked Solutions and freelance designer helping youth businesses go digital.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Self-taught developer with BSc IT background. Building platforms and creating content that works.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">
                    Company Founded
                  </div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">🚀</div>
                  <div className="text-sm text-muted-foreground">Young Founder</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">
                    Creative Projects
                  </div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">🇿🇦</div>
                  <div className="text-sm text-muted-foreground">
                    South Africa
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        ReBooked Solutions
                      </h4>
                      <p className="text-muted-foreground">
                        Student textbook marketplace platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        Creative Services
                      </h4>
                      <p className="text-muted-foreground">
                        Video ads, designs & websites for young businesses.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        Gen Z Marketing
                      </h4>
                      <p className="text-muted-foreground">
                        Gen Z marketing with fast turnaround.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        Self-Taught & Adaptable
                      </h4>
                      <p className="text-muted-foreground">
                        Self-taught and adaptable problem solver.
                      </p>
                    </div>
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

export default About;
