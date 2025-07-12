import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      image: "photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with modern web technologies.",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/taskmanager",
      image: "photo-1611224923853-80b023f02d71"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and offline capability.",
      tech: ["React", "Weather API", "Chart.js", "PWA", "Service Workers"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/weather",
      image: "photo-1504608524841-42fe6f032b4b"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with real-time data visualization, automated reporting, and multi-platform integration.",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/dashboard",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Learning Platform",
      description: "An online learning management system with video streaming, progress tracking, interactive quizzes, and course management for educators and students.",
      tech: ["React", "AWS", "Video.js", "Firebase", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/learning",
      image: "photo-1522202176988-66273c2fd55f"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations, contact forms, and content management system integration.",
      tech: ["Gatsby", "GraphQL", "Contentful", "GSAP", "Netlify"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
      image: "photo-1467232004584-a241de8bcf5d"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <div 
                    className="h-48 bg-gradient-to-br from-primary/20 to-primary-glow/20 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(https://images.unsplash.com/${project.image}?w=400&h=300&fit=crop)` 
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                    >
                      <Github className="h-4 w-4 text-foreground" />
                    </a>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      variant="hero" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="professional" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="professional" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;