import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, TrendingUp, Users } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      category: "High School Excellence",
      icon: GraduationCap,
      items: [
        "Top 10% Academic Performance",
        "Computer Science Award Winner",
        "Mathematics Excellence Certificate",
        "Leadership Recognition",
        "Digital Innovation Project Lead",
        '        "Junior and Senior Prefect',
        "Aqua Chief Captain & Ambassador",
        "Major Production Captain",
        "SABS Peer Promoter & MC",
        'Excellent Leadership Award Winner"',
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      category: "Technical Skills",
      icon: TrendingUp,
      items: [
        "Self-taught React & JavaScript",
        "Supabase Backend Development",
        "Paystack Payment Integration",
        "Cloud Architecture & Deployment",
        "Mobile-first Design Principles",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      category: "Creative Abilities",
      icon: Award,
      items: [
        "Video Editing & Production",
        "Graphic Design (Canva, Figma)",
        "Brand Identity Development",
        "Social Media Content Creation",
        "UI/UX Design Principles",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      category: "Business Impact",
      icon: Users,
      items: [
        "Founded ReBooked Solutions at 19",
        "Built Complete SaaS Platform",
        "Successful Freelance Business",
        "Youth Entrepreneurship Leader",
        "Digital Marketing Strategist",
      ],
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              my journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From high school achievements to building successful businesses -
              a story of continuous learning and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.category}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-3xl"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${achievement.color} mr-4`}
                    >
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ReBooked Solutions Highlight */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                Featured Project
              </Badge>
              <h3 className="text-4xl font-bold mb-6 text-foreground">
                ReBooked Solutions
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                A comprehensive platform helping South African students buy and
                sell secondhand textbooks. Built from the ground up with React,
                Supabase, and Paystack integration - demonstrating full-stack
                development capabilities and business acumen.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  "React & TypeScript",
                  "Supabase Backend",
                  "Paystack Payments",
                  "Email Automation",
                  "Admin Dashboard",
                  "Mobile Responsive",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href="https://rebookedsolutions.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-lg"
              >
                Visit ReBooked Solutions →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
