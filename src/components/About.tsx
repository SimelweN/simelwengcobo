import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with a love for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege 
                of working with diverse teams and clients to bring innovative ideas to life. 
                My journey started with a curiosity for how things work, which evolved into 
                a passion for building them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences 
                that are not just functional, but delightful. When I'm not coding, you'll 
                find me exploring new technologies, contributing to open source, or enjoying 
                a good cup of coffee.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Clean Code
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Writing maintainable, scalable, and efficient code that stands the test of time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Design Thinking
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Bridging the gap between design and development with user-centered solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Innovation
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Always exploring new technologies and methodologies to deliver cutting-edge solutions.
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