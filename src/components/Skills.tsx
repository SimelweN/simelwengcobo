import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-foreground text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
                'MongoDB', 'AWS', 'Docker', 'Git', 'Figma'
              ].map((tech) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-accent rounded-full text-accent-foreground font-medium hover:scale-105 transition-transform duration-200"
                >
                  {tech}
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