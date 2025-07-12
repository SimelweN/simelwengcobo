import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "development",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-600" },
        { name: "Supabase", level: 90, color: "from-green-400 to-green-600" },
        { name: "Firebase", level: 82, color: "from-orange-400 to-yellow-600" },
      ]
    },
    {
      title: "design",
      skills: [
        { name: "Canva", level: 95, color: "from-purple-500 to-pink-600" },
        { name: "Figma", level: 85, color: "from-blue-500 to-purple-600" },
        { name: "CapCut", level: 90, color: "from-green-500 to-blue-600" },
        { name: "VN Editor", level: 88, color: "from-pink-500 to-red-600" },
        { name: "Brand Design", level: 85, color: "from-indigo-500 to-purple-600" },
      ]
    },
    {
      title: "business",
      skills: [
        { name: "MVP Building", level: 90, color: "from-green-500 to-teal-600" },
        { name: "Marketing", level: 92, color: "from-pink-500 to-rose-600" },
        { name: "Entrepreneurship", level: 88, color: "from-yellow-500 to-orange-600" },
        { name: "Paystack", level: 85, color: "from-blue-500 to-cyan-600" },
        { name: "Customer Support", level: 90, color: "from-purple-500 to-indigo-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              tech stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to craft exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 rounded-3xl group"
              >
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-8 text-foreground text-center group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between mb-3">
                          <span className="text-foreground font-medium group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground text-sm font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-accent rounded-full h-2 overflow-hidden">
                            <div 
                              className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out relative`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                              }}
                            >
                              {/* Animated glow effect */}
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-glow" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              currently exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Mobile Apps', color: 'from-purple-500 to-pink-600' },
                { name: 'AI Content', color: 'from-blue-500 to-cyan-600' },
                { name: 'E-commerce', color: 'from-orange-500 to-red-600' },
                { name: 'SaaS Platforms', color: 'from-cyan-500 to-blue-600' },
                { name: 'EdTech', color: 'from-green-500 to-teal-600' },
                { name: 'Video Production', color: 'from-yellow-500 to-orange-600' },
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className={`group relative px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full font-medium text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-card hover:shadow-glow overflow-hidden`}
                >
                  <span className="relative z-10">{tech.name}</span>
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;