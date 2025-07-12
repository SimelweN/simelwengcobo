import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. 
            Passionate about creating beautiful, functional, and user-centered solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              variant="professional" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant"
            >
              <Github className="h-6 w-6 text-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant"
            >
              <Linkedin className="h-6 w-6 text-foreground" />
            </a>
            <a 
              href="mailto:john@example.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant"
            >
              <Mail className="h-6 w-6 text-foreground" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};

export default Hero;