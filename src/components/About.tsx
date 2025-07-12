import { Card, CardContent } from '@/components/ui/card';
import { Brain, Lightbulb, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
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
                I'm a passionate full-stack developer with 6+ years of experience crafting 
                digital solutions that blend cutting-edge technology with intuitive design. 
                My journey began with curiosity about how things work and evolved into a 
                love for building them.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I specialize in React, TypeScript, and Node.js, but I'm always exploring 
                new technologies. When I'm not coding, you'll find me contributing to open 
                source projects, mentoring junior developers, or experimenting with AI and 
                machine learning.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-2xl border border-border">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Coffee Cups</div>
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
                        Problem Solver
                      </h4>
                      <p className="text-muted-foreground">
                        I love breaking down complex problems into elegant, scalable solutions.
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
                        Creative Thinker
                      </h4>
                      <p className="text-muted-foreground">
                        Bringing fresh perspectives and innovative approaches to every project.
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
                        Fast Learner
                      </h4>
                      <p className="text-muted-foreground">
                        Constantly evolving with the latest technologies and best practices.
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
                        Team Player
                      </h4>
                      <p className="text-muted-foreground">
                        Collaborating effectively with designers, developers, and stakeholders.
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