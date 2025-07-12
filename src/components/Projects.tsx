import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SaaS Dashboard",
      description: "A modern analytics dashboard with real-time data visualization, dark/light themes, and responsive design. Built with React, TypeScript, and D3.js.",
      tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexchen/saas-dashboard",
      accent: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, message encryption, and file sharing capabilities. Features modern UI with smooth animations.",
      tech: ["Next.js", "WebSocket", "OpenAI", "Prisma", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexchen/ai-chat",
      accent: "from-green-500 to-teal-600"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard. Scalable architecture with microservices.",
      tech: ["React", "Express", "Stripe", "MongoDB", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexchen/ecommerce",
      accent: "from-orange-500 to-red-600"
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for creative portfolios with drag-and-drop editor, image optimization, and SEO tools. Clean, intuitive interface.",
      tech: ["Gatsby", "GraphQL", "Contentful", "Netlify", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexchen/portfolio-cms",
      accent: "from-purple-500 to-pink-600"
    },
    {
      title: "Task Management",
      description: "Collaborative project management tool with kanban boards, time tracking, and team analytics. Built for remote teams.",
      tech: ["Vue.js", "Firebase", "Chart.js", "PWA", "Vuetify"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexchen/taskmanager",
      accent: "from-cyan-500 to-blue-600"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and offline support. Focus on UX and performance.",
      tech: ["React Native", "Weather API", "Redux", "Maps", "SQLite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexchen/weather-app",
      accent: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              project showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sample projects demonstrating various skills and technologies I work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-3xl"
              >
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-br ${project.accent} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Project Number */}
                    <div className="absolute top-6 left-6 text-white/80 font-mono text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Hover Actions */}
                    <div className="absolute top-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Eye className="h-4 w-4 text-white" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4 text-white" />
                      </a>
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
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full font-medium hover:bg-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      variant="glow" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        live demo
                      </a>
                    </Button>
                    <Button 
                      variant="minimal" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="minimal" size="lg" className="group">
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              more projects on github
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;